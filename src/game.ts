import * as THREE from 'three';
import { World } from './core/world';
import { WaveDirector } from './core/waves';
import type { Fighter } from './core/fighter';
import type { ArchetypeId, CombatEvent, Projectile } from './core/types';
import { T } from './core/tuning';
import { drawInfo } from './core/bow';
import { GALE_SEG } from './core/combat';
import { MOVES } from './core/moves';
import { emptyInput } from './core/input';
import { startEnemyAttack } from './core/ai';
import { createEnvironment, type Environment } from './render/environment';
import { CharacterView, setMetalEnvironment, type CharKind } from './render/character';
import { Animator } from './render/anim';
import { CameraRig } from './render/camera';
import { Decals, makeGlintTexture, Puffs, Rings, Sparks, SwordTrail } from './render/fx';
import { InputDevices } from './input/devices';
import { TouchControls } from './input/touch';
import { Sfx, type SfxName } from './audio/sfx';
import { Hud } from './ui/hud';
import { DEFAULT_SETTINGS, Menus, type Settings } from './ui/menus';

interface View {
  f: Fighter;
  char: CharacterView;
  anim: Animator;
  trail: SwordTrail;
  trailL: SwordTrail | null;
  flash: number;
  flashColor: number;
}

type State = 'title' | 'play' | 'pause' | 'result';

const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export class Game {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private env: Environment;
  private readonly cam: CameraRig;
  private readonly devices: InputDevices;
  private readonly sfx = new Sfx();
  private readonly hud: Hud;
  private readonly menus: Menus;
  private world: World;
  private readonly views = new Map<number, View>();
  private readonly arrowMeshes = new Map<number, THREE.Object3D>();
  private readonly sparks = new Sparks();
  private readonly embers = new Puffs(700, true);
  private readonly mist = new Puffs(900, false);
  private readonly rings = new Rings();
  private readonly decals = new Decals();
  private readonly glintTex = makeGlintTexture();
  private state: State = 'title';
  private mode: 'campaign' | 'practice' = 'campaign';
  private settings: Settings;
  private last = performance.now();
  private time = 0;
  private resultTimer = -1;
  private resultWin = false;
  private helpTimer = 30;
  /** Automation: freeze the simulation but keep animating / rendering. */
  debugHold = false;
  debugCam: { pos: THREE.Vector3; look: THREE.Vector3; fov?: number } | null = null;
  private readonly clickHint: HTMLElement;
  private readonly touch: TouchControls;

  constructor(container: HTMLElement) {
    this.settings = loadSettings();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.settings.quality === 'high' ? 1.75 : 1));
    container.appendChild(this.renderer.domElement);
    this.env = createEnvironment(this.scene, this.renderer, { arenaRadius: T.arenaRadius, quality: this.settings.quality });
    this.envQuality = this.settings.quality;
    setMetalEnvironment(makeSkyReflection(this.renderer));
    this.cam = new CameraRig(1);
    this.scene.add(this.sparks.mesh, this.embers.points, this.mist.points, this.rings.group, this.decals.mesh);
    this.devices = new InputDevices(this.renderer.domElement);
    this.touch = new TouchControls(document.body, () => {
      this.devices.lastDevice = 'touch';
      this.hud.setHelpVisible(false);
    });
    this.devices.touch = this.touch;
    this.hud = new Hud(document.body);
    this.clickHint = document.createElement('div');
    this.clickHint.className = 'click-hint';
    this.clickHint.textContent = '화면을 클릭하면 마우스로 카메라를 돌릴 수 있습니다 · H: 조작 도움말 · Esc: 일시정지';
    document.body.appendChild(this.clickHint);
    this.menus = new Menus(document.body, {
      start: (m) => this.start(m),
      resume: () => this.resume(),
      restart: () => this.start(this.mode),
      title: () => this.toTitle(),
      settingsChanged: (s) => this.applySettings(s),
      spawn: (id) => this.practiceSpawn(id),
      clearEnemies: () => this.practiceClear(),
      toggleInvincible: () => {
        this.world.settings.invincible = !this.world.settings.invincible;
        return this.world.settings.invincible;
      },
      click: () => {
        this.sfx.unlock();
        this.sfx.play('uiSelect');
      },
    }, this.settings);
    window.addEventListener('keydown', (e) => {
      this.sfx.unlock();
      if (e.code === 'KeyH' || e.code === 'F1') {
        e.preventDefault();
        this.hud.toggleHelp();
      }
    });
    window.addEventListener('pointerdown', () => this.sfx.unlock());
    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.world = this.makeTitleWorld();
    this.applySettings(this.settings);
    this.hud.setHelpVisible(false);
    requestAnimationFrame(this.loop);
    // Debug / automation hook.
    (window as unknown as { __game: Game; __wog: unknown }).__game = this;
    (window as unknown as { __wog: unknown }).__wog = { MOVES, T, emptyInput, startEnemyAttack };
  }

  // ── Lifecycle ───────────────────────────────────────────────────────────
  private makeTitleWorld(): World {
    const w = new World(99);
    w.mode = 'intermission';
    w.player.pos = { x: -2.6, z: 0 };
    w.player.yaw = Math.PI / 2;
    w.player.set('standoff', Infinity);
    const r = w.spawn('ronin', { x: 2.6, z: 0 }, -Math.PI / 2);
    r.brain!.aware = false;
    this.resetViews();
    return w;
  }

  private resetViews(): void {
    for (const v of this.views.values()) this.removeView(v);
    this.views.clear();
    for (const m of this.arrowMeshes.values()) this.scene.remove(m);
    this.arrowMeshes.clear();
    this.hud.clear();
  }

  start(mode: 'campaign' | 'practice'): void {
    this.sfx.unlock();
    this.mode = mode;
    this.resetViews();
    this.decals.clear();
    const w = new World(Math.floor(Math.random() * 1e9));
    w.player.pos = { x: 0, z: -7 };
    w.player.yaw = 0;
    this.world = w;
    this.applySettings(this.settings);
    if (mode === 'campaign') {
      w.waves = new WaveDirector();
      w.waves.start(w);
    } else {
      const d = w.spawn('dummy', { x: 0, z: -3.5 }, Math.PI);
      d.brain!.aware = false;
      this.hud.showWave('수련장', '왼쪽 버튼으로 적을 불러내 연습하라', 3);
    }
    this.cam.yaw = 0;
    this.cam.pitch = 0.2;
    this.cam.endCinematic();
    this.state = 'play';
    this.resultTimer = -1;
    this.menus.hide();
    this.menus.showPractice(mode === 'practice');
    this.hud.setHelpVisible(true);
    this.helpTimer = 30;
    this.sfx.startAmbience();
    this.hud.showTip('튕기기', '적의 칼이 닿기 직전 방패를 올려라. 파란 섬광은 튕기기로만, 빨간 섬광은 흘리기(방패+회피)나 회피로 받아낸다.', 9);
  }

  private resume(): void {
    this.state = 'play';
    this.menus.hide();
  }

  private toTitle(): void {
    this.state = 'title';
    this.world = this.makeTitleWorld();
    this.menus.showTitle();
    this.menus.showPractice(false);
    this.hud.setHelpVisible(false);
    this.devices.releasePointer();
  }

  private pause(): void {
    if (this.state !== 'play') return;
    this.state = 'pause';
    this.menus.showPause();
    this.devices.releasePointer();
  }

  private applySettings(s: Settings): void {
    this.settings = { ...s };
    saveSettings(s);
    const w = this.world;
    const scale = s.difficulty === 'easy' ? 1.6 : s.difficulty === 'hard' ? 0.75 : 1;
    w.settings.windowScale = scale;
    w.settings.enemyDamage = s.difficulty === 'easy' ? 0.6 : s.difficulty === 'hard' ? 1.35 : 1;
    document.body.classList.toggle('kurosawa', s.kurosawa);
    this.cam.sensitivity = 0.0024 * s.sensitivity;
    this.sfx.setMasterVolume(s.volume);
    this.decals.mesh.visible = s.blood;
    if (this.envQuality !== s.quality) {
      this.env.dispose();
      this.env = createEnvironment(this.scene, this.renderer, { arenaRadius: T.arenaRadius, quality: s.quality });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, s.quality === 'high' ? 1.75 : 1));
      this.resize();
    }
    this.envQuality = s.quality;
  }
  private envQuality: 'low' | 'high' = DEFAULT_SETTINGS.quality;

  private practiceSpawn(id: ArchetypeId): void {
    if (this.mode !== 'practice') return;
    const p = this.world.player;
    const a = p.yaw + (Math.random() - 0.5) * 1.2;
    const pos = { x: p.pos.x + Math.sin(a) * 7, z: p.pos.z + Math.cos(a) * 7 };
    const l = Math.hypot(pos.x, pos.z);
    if (l > T.arenaRadius - 2) {
      pos.x *= (T.arenaRadius - 2) / l;
      pos.z *= (T.arenaRadius - 2) / l;
    }
    const e = this.world.spawn(id, pos);
    if (id === 'dummy') e.brain!.aware = false;
    this.world.emit({ type: 'text', text: e.arch!.name, sub: e.arch!.tip, style: 'info', id: e.id });
  }

  private practiceClear(): void {
    for (const e of this.world.enemies()) e.hp = 0;
    this.world.removeCorpses();
  }

  private resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.cam.camera.aspect = w / h;
    this.cam.camera.updateProjectionMatrix();
    const dpr = this.renderer.getPixelRatio();
    this.embers.setViewportHeight(h * dpr);
    this.mist.setViewportHeight(h * dpr);
  }

  // ── Frame ────────────────────────────────────────────────────────────────
  private readonly loop = (now: number): void => {
    requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.time += dt;
    this.frame(dt);
  };

  /** One rendered frame (also callable from automation with a fixed dt). */
  frame(dt: number): void {
    const w = this.world;
    if (this.devices.pausePressed.v) {
      this.devices.pausePressed.v = false;
      if (this.state === 'play') this.pause();
      else if (this.state === 'pause') this.resume();
    }
    const { frame, lookDX, lookDY } = this.devices.sample(this.cam.yaw);
    if (this.hud.device !== this.devices.lastDevice) {
      this.hud.device = this.devices.lastDevice;
      this.hud.renderHelp();
    }
    const aimO = V3();
    const aimD = V3();
    this.cam.aimRay(aimO, aimD);
    frame.aimOrigin = { x: aimO.x, y: aimO.y, z: aimO.z };
    frame.aimDir = { x: aimD.x, y: aimD.y, z: aimD.z };

    if (this.state === 'play' && !this.debugHold) {
      this.cam.look2(lookDX, lookDY);
      w.update(dt, frame);
      if (this.helpTimer > 0 && (this.helpTimer -= dt) <= 0) this.hud.setHelpVisible(false);
    } else if (this.state === 'title') {
      w.update(dt, { ...frame, pressed: {}, released: {}, held: {} });
    }

    for (const ev of w.drainEvents()) this.onEvent(ev);

    if (this.resultTimer > 0 && (this.resultTimer -= dt) <= 0) {
      this.state = 'result';
      this.menus.showResult(this.resultWin, w.stats);
      this.devices.releasePointer();
    }

    const simDt = this.debugHold ? dt : this.state === 'pause' ? 0 : w.hitstop > 0 ? 0 : dt * w.timeScale;
    this.syncViews(simDt, dt);
    this.syncProjectiles();
    this.sparks.update(simDt);
    this.embers.update(simDt);
    this.mist.update(simDt);
    this.rings.update(simDt, this.cam.camera);
    this.decals.update(simDt);

    // Environment
    const pv = this.views.get(w.player.id);
    const focus = pv ? pv.char.root.position.clone() : V3();
    const benders = [...this.views.values()].slice(0, 8).map((v) => v.char.root.position);
    this.env.update(this.time, dt * Math.max(0.25, w.timeScale), focus, benders);

    // Camera
    if (this.state === 'title') this.titleCamera(dt);
    else {
      const lock = w.get(w.ps.lockTarget);
      const lockPos = lock && lock.targetable ? this.views.get(lock.id)?.char.root.position ?? null : null;
      const crowd = w.liveEnemies().filter((e) => e.distTo(w.player) < 9).length;
      const mv = frame.move.x || frame.move.z ? V3(frame.move.x, 0, frame.move.z) : null;
      if (w.mode === 'standoff') {
        const leader = w.get(w.standoff.leaderId);
        if (leader && pv) this.cam.cinematic(focus, this.views.get(leader.id)?.char.root.position ?? focus, 'standoff', 0.2);
      }
      this.cam.update(dt, focus, { aiming: w.player.is('aim'), lockTarget: lockPos, crowd, moveDir: mv, slowmo: w.timeScale < 0.9 });
    }
    if (this.debugCam) {
      const c = this.cam.camera;
      c.position.copy(this.debugCam.pos);
      c.lookAt(this.debugCam.look);
      c.fov = this.debugCam.fov ?? 45;
      c.updateProjectionMatrix();
    }
    document.body.classList.toggle('cine', this.cam.inCinematic || w.mode === 'standoff');
    document.body.classList.toggle('title', this.state === 'title');
    this.touch.setVisible(this.state === 'play');
    this.clickHint.style.display = this.state === 'play' && !this.devices.locked && this.devices.lastDevice === 'kbm' && !this.touch.active ? '' : 'none';

    // Audio state
    this.sfx.setTimeScale(w.timeScale);
    const ps = w.ps;
    this.sfx.setDrawTension(w.player.is('aim') && ps.draw > 0 ? drawInfo(ps.draw, ps.arrowType).amount : null);

    if (this.state !== 'title') this.hud.update(w, this.cam.camera, window.innerWidth, window.innerHeight, dt);
    this.renderer.render(this.scene, this.cam.camera);
  }

  private titleCamera(dt: number): void {
    const t = this.time * 0.05;
    const c = this.cam.camera;
    c.position.set(Math.sin(t) * 1.5 + 0.5, 1.25, -7.5 + Math.cos(t) * 0.5);
    c.lookAt(0, 1.2, 0);
    c.fov = 40;
    c.updateProjectionMatrix();
    void dt;
  }

  // ── Views ────────────────────────────────────────────────────────────────
  private viewFor(f: Fighter): View {
    let v = this.views.get(f.id);
    if (v) return v;
    const kind: CharKind = f.isPlayer ? 'player' : (f.arch!.id as CharKind);
    const char = new CharacterView(kind, this.glintTex);
    const trail = new SwordTrail(f.isPlayer ? 0xfff0d0 : 0xd8d8d8);
    const trailL = kind === 'duelist' ? new SwordTrail(0xd8d8d8) : null;
    this.scene.add(char.root, trail.mesh);
    if (trailL) this.scene.add(trailL.mesh);
    v = { f, char, anim: new Animator(kind), trail, trailL, flash: 0, flashColor: 0xffffff };
    this.views.set(f.id, v);
    return v;
  }

  private removeView(v: View): void {
    this.scene.remove(v.char.root, v.trail.mesh);
    v.char.dispose();
    v.trail.dispose();
    if (v.trailL) {
      this.scene.remove(v.trailL.mesh);
      v.trailL.dispose();
    }
  }

  private syncViews(simDt: number, dt: number): void {
    const w = this.world;
    const alpha = w.alpha;
    const alive = new Set<number>();
    for (const f of w.fighters) {
      alive.add(f.id);
      const v = this.viewFor(f);
      const x = f.prevPos.x + (f.pos.x - f.prevPos.x) * alpha;
      const z = f.prevPos.z + (f.pos.z - f.prevPos.z) * alpha;
      let dy = f.yaw - f.prevYaw;
      while (dy > Math.PI) dy -= Math.PI * 2;
      while (dy < -Math.PI) dy += Math.PI * 2;
      const pose = v.anim.update(f, w, alpha, simDt);
      v.char.root.position.set(x, 0, z);
      v.char.root.rotation.y = f.prevYaw + dy * alpha + pose.bodyYaw;
      v.char.root.scale.setScalar(f.size);
      v.char.applyPose(pose, f.speed, simDt);
      if (f.phase === 2) v.char.shatterArmor();
      // Hit flash
      if (f.hitFlash > 0 && v.flash < 0.3) v.flash = 1;
      v.flash = Math.max(0, v.flash - dt * 6);
      const broken = f.is('broken');
      v.char.setFlash(broken ? 0.25 + Math.sin(this.time * 14) * 0.15 : v.flash * 0.7, broken ? 0xff2200 : v.flashColor);
      v.char.setGlint(f.glint?.color ?? null, f.glint ? f.glint.t + alpha : 0);
      // Fire
      if (f.burning > 0 && simDt > 0 && Math.random() < 0.7) {
        this.embers.emit(V3(x, 0.4 + Math.random() * 1.2, z), 2, { color: Math.random() < 0.5 ? 0xff7a1a : 0xffc04a, speed: 0.6, size: 0.09, life: 0.6, gravity: -2, up: 1, jitter: 0.5 });
      }
      this.updateTrail(v, f, simDt);
    }
    for (const [id, v] of this.views) {
      if (!alive.has(id)) {
        this.removeView(v);
        this.views.delete(id);
      }
    }
  }

  private updateTrail(v: View, f: Fighter, dt: number): void {
    const a = f.act;
    let active = false;
    let color = f.isPlayer ? 0xfff0d0 : 0xcfcfcf;
    let intensity = f.isPlayer ? 1 : 0.6;
    if (a.kind === 'attack' && a.move && !a.move.feint && !a.move.projectile) {
      const m = a.move;
      active = a.t >= m.startup - 2 && a.t <= m.startup + m.active + 3;
      if (f.isPlayer) color = m.type === 'thrust' ? 0xbfeeff : m.heavy ? 0xffd27a : 0xfff0d0;
      if (m.unblockable === 'red') {
        color = 0xff4a30;
        intensity = 1.2;
      } else if (m.unblockable === 'blue') {
        color = 0x8ccaff;
        intensity = 1.1;
      }
      if (a.move.type === 'blunt') active = false;
    } else if (a.kind === 'finisher') {
      const k = a.finisher;
      active = k === 'slash' ? a.t >= 26 && a.t <= 36 : k === 'thrust' ? a.t >= 30 && a.t <= 36 : a.t >= 11 && a.t <= 18;
      color = 0xffe6c0;
      intensity = 1.4;
    } else if (a.kind === 'issen') {
      active = a.t >= 1 && a.t <= 9;
      color = 0xffffff;
      intensity = 2;
    } else if (a.kind === 'gale') {
      const local = (a.t - 1) % GALE_SEG;
      active = local >= 2 && local <= 8;
      color = 0xa8f0ff;
      intensity = 1.6;
    } else if (a.kind === 'standoff' && !f.isPlayer && a.value === 1) {
      active = a.t >= (a.travel ?? 18) - 3;
    }
    v.trail.setColor(color, intensity);
    const base = V3();
    const tip = V3();
    v.char.bladeWorld(base, tip);
    v.trail.update(base, tip, active, dt);
    if (v.trailL) {
      v.char.bladeWorld(base, tip, true);
      v.trailL.setColor(color, intensity);
      v.trailL.update(base, tip, active, dt);
    }
  }

  private syncProjectiles(): void {
    const w = this.world;
    const alive = new Set<number>();
    for (const pr of w.projectiles) {
      alive.add(pr.id);
      let m = this.arrowMeshes.get(pr.id);
      if (!m) {
        m = makeArrowMesh(pr);
        this.scene.add(m);
        this.arrowMeshes.set(pr.id, m);
      }
      if (pr.stuck && pr.stuckTo !== undefined && pr.stuckOffset) {
        const f = w.get(pr.stuckTo);
        const v = f ? this.views.get(f.id) : undefined;
        if (!f || !v) {
          m.visible = false;
          continue;
        }
        const o = pr.stuckOffset;
        const root = v.char.root;
        const yaw = root.rotation.y;
        const c = Math.cos(yaw);
        const s = Math.sin(yaw);
        // Dead bodies lie down; keep arrows near the ground.
        const y = f.alive ? o.y : Math.min(o.y, 0.35);
        m.position.set(root.position.x + o.x * c + o.z * s, y, root.position.z - o.x * s + o.z * c);
        m.rotation.set(0, yaw + o.yaw, 0);
        m.rotateX(0.25);
      } else if (!pr.stuck) {
        const a = w.alpha;
        m.position.set(pr.prevPos.x + (pr.pos.x - pr.prevPos.x) * a, pr.prevPos.y + (pr.pos.y - pr.prevPos.y) * a, pr.prevPos.z + (pr.pos.z - pr.prevPos.z) * a);
        const d = V3(pr.vel.x, pr.vel.y, pr.vel.z).normalize();
        m.quaternion.setFromUnitVectors(V3(0, 0, 1), d);
        if (pr.arrowType === 'fire' && Math.random() < 0.8) this.embers.emit(m.position, 1, { color: 0xff8a2a, speed: 0.3, size: 0.08, life: 0.35, gravity: -1 });
      } else {
        m.position.set(pr.pos.x, pr.pos.y, pr.pos.z);
      }
      m.visible = true;
    }
    for (const [id, m] of this.arrowMeshes) {
      if (!alive.has(id)) {
        this.scene.remove(m);
        this.arrowMeshes.delete(id);
      }
    }
  }

  // ── Events → FX / audio / camera / HUD ──────────────────────────────────
  private at(id: number | undefined, y = 1.2): THREE.Vector3 {
    const v = id !== undefined ? this.views.get(id) : undefined;
    return v ? v.char.root.position.clone().setY(y) : V3(0, y, 0);
  }

  private play(name: SfxName, pos?: THREE.Vector3, volume = 1, pitch = 1): void {
    if (!pos) return this.sfx.play(name, { volume, pitch });
    const cam = this.cam.camera;
    const rel = pos.clone().sub(cam.position);
    const d = rel.length();
    const right = V3(1, 0, 0).applyQuaternion(cam.quaternion);
    const pan = Math.max(-1, Math.min(1, rel.dot(right) / Math.max(1, d))) * 0.8;
    this.sfx.play(name, { volume: volume / (1 + Math.max(0, d - 4) / 9), pan, pitch });
  }

  private blood(at: THREE.Vector3, n: number, dir?: THREE.Vector3, big = false): void {
    if (!this.settings.blood) {
      this.embers.emit(at, Math.ceil(n / 2), { color: 0xfff0d0, speed: 2.5, size: 0.05, life: 0.4 });
      return;
    }
    this.mist.emit(at, n, { color: 0x7a0a08, speed: big ? 5.5 : 3.2, size: big ? 0.09 : 0.06, life: 0.7, gravity: 9, drag: 0.8, up: 0.4, dir, spread: dir ? 0.35 : 1, alpha: 0.95 });
    this.mist.emit(at, Math.ceil(n / 3), { color: 0x4a0606, speed: 0.8, size: big ? 0.45 : 0.28, life: 0.5, grow: 0.8, drag: 3, alpha: 0.45, dir, spread: 0.5 });
    if (big || Math.random() < 0.35) this.decals.add(at.x + (dir?.x ?? 0) * 0.8, at.z + (dir?.z ?? 0) * 0.8, big ? 1.5 : 0.7 + Math.random() * 0.5);
  }

  private onEvent(ev: CombatEvent): void {
    const w = this.world;
    const pid = w.player.id;
    const pos2 = (p: { x: number; z: number }, y = 1.25) => V3(p.x, y, p.z);
    switch (ev.type) {
      case 'swing': {
        const f = w.get(ev.id);
        const player = ev.id === pid;
        const m = ev.move;
        const name: SfxName = player ? (m.type === 'thrust' ? 'swingThrust' : m.heavy || m.finale ? 'swingHeavy' : m.type === 'blunt' ? 'dodge' : 'swingLight') : 'swingEnemy';
        this.play(name, f ? this.at(f.id) : undefined, player ? 0.9 : 0.8, 0.9 + Math.random() * 0.2);
        break;
      }
      case 'hit': {
        const at = pos2(ev.pos, 1.25);
        const target = w.get(ev.target);
        const dir = target ? this.at(target.id).sub(this.at(ev.attacker)).setY(0.2).normalize() : undefined;
        if (ev.target === pid) {
          this.play(ev.heavy ? 'hitHeavy' : 'hitFlesh', at, 1);
          this.hud.pulse('hurt', ev.heavy ? 0.9 : 0.6);
          this.cam.shake(ev.heavy ? 0.55 : 0.35);
          this.blood(at, 10, dir);
        } else {
          const eff = ev.result === 'effective';
          this.play(ev.lethal ? 'kill' : eff ? 'hitEffective' : ev.heavy ? 'hitHeavy' : 'hitFlesh', at, 1);
          if (ev.lethal) this.play('hitHeavy', at, 0.9);
          if (ev.result !== 'glance') this.blood(at, ev.lethal ? 26 : eff ? 16 : 10, dir, ev.lethal);
          this.cam.shake(ev.lethal ? 0.35 : eff || ev.heavy ? 0.25 : 0.14);
          if (eff) this.sparks.burst(at, 6, 0xfff2c0, 5, { life: 0.2 });
          if (ev.lethal) this.cam.fovKick = 2;
        }
        break;
      }
      case 'bounce':
        this.sparks.burst(pos2(ev.pos, 1.2), 26, 0xffc060, 7);
        this.play('bounce', pos2(ev.pos));
        this.cam.shake(0.35);
        break;
      case 'glance':
        this.sparks.burst(pos2(ev.pos, 1.2), 16, 0xffffff, 5);
        this.play('glance', pos2(ev.pos));
        break;
      case 'haft':
        this.mist.emit(pos2(ev.pos, 1.2), 10, { color: 0x6a4a2a, speed: 3, size: 0.05, life: 0.5, gravity: 8 });
        this.play('haft', pos2(ev.pos));
        this.cam.shake(0.2);
        break;
      case 'evade':
        this.embers.emit(this.at(ev.id, 0.2), 8, { color: 0xc9b894, speed: 1.2, size: 0.25, life: 0.5, grow: 0.6, alpha: 0.35 });
        this.play('dodge', this.at(ev.id));
        break;
      case 'block':
        this.sparks.burst(pos2(ev.pos, 1.3), ev.enemy ? 10 : 14, 0xffe0a0, 4);
        this.play('block', pos2(ev.pos));
        this.cam.shake(0.12);
        break;
      case 'guardBreak':
        this.sparks.burst(pos2(ev.pos, 1.3), 30, 0xffd080, 7);
        this.play('guardBreak', pos2(ev.pos));
        this.cam.shake(0.45);
        break;
      case 'deflect': {
        const at = pos2(ev.pos, 1.35);
        if (ev.arrow) {
          this.sparks.burst(at, 18, 0xfff4d0, 6);
          this.play('arrowBlock', at);
          this.play('deflect', at, 0.6, 1.3);
          break;
        }
        this.sparks.burst(at, 46, 0xfff4d0, 9, { life: 0.45 });
        this.sparks.burst(at, 20, 0xffb040, 5, { life: 0.3 });
        this.rings.spawn(at, 0xfff0c0, 0.3, 0.7, false);
        this.play('deflect', at, 1);
        this.cam.shake(0.3);
        this.cam.fovKick = 3;
        this.hud.pulse('flash', 0.18);
        break;
      }
      case 'flow': {
        const at = pos2(ev.pos, 1.3);
        this.embers.emit(at, 24, { color: 0x9fe8ff, speed: 3, size: 0.07, life: 0.5, drag: 3 });
        this.sparks.burst(at, 12, 0xbff0ff, 5);
        this.play('flow', at);
        this.cam.fovKick = 3;
        break;
      }
      case 'issen': {
        const at = pos2(ev.pos, 1.2);
        this.hud.pulse('flash', 0.85);
        this.rings.spawn(at.clone().setY(0.05), 0xffffff, 0.6, 4.5);
        this.rings.spawn(at, 0xfff6e0, 0.35, 1.2, false);
        this.play('issen', at);
        this.cam.shake(0.35);
        const a = this.at(ev.performer);
        const b = this.at(ev.victim);
        this.cam.cinematic(a, b, 'issen', 1.0);
        this.env.gust(1);
        setTimeout(() => this.blood(this.at(ev.victim, 1.2), 30, undefined, true), 380);
        break;
      }
      case 'perfectDodge':
        this.embers.emit(this.at(ev.id, 1.0), 20, { color: 0xbfe8ff, speed: 1.2, size: 0.08, life: 0.6, jitter: 0.8 });
        this.play('perfectDodge', this.at(ev.id));
        break;
      case 'postureBreak': {
        const at = pos2(ev.pos, 1.3);
        this.rings.spawn(at, 0xff6a3a, 0.45, 1.0, false);
        this.sparks.burst(at, 24, 0xffa050, 6);
        this.play('postureBreak', at);
        this.cam.shake(0.3);
        break;
      }
      case 'finisherStart': {
        const a = this.at(ev.performer);
        const b = this.at(ev.victim);
        const dur = ev.kind === 'slash' ? T.finisherSlashDur : ev.kind === 'thrust' ? T.finisherThrustDur : T.finisherFlowDur;
        this.cam.cinematic(a, b, ev.kind === 'flow' ? 'flow' : 'finisher', (dur / 60) * 1.15);
        this.play('finisher', b, 0.9);
        break;
      }
      case 'finisherImpact': {
        const at = pos2(ev.pos, 1.25);
        const dir = this.at(ev.victim).sub(this.at(ev.performer)).setY(0.3).normalize();
        this.blood(at, 44, ev.kind === 'thrust' ? dir : dir.clone().applyAxisAngle(V3(0, 1, 0), 1.2), true);
        this.play('finisherImpact', at);
        this.cam.shake(0.4);
        this.env.gust(0.8);
        this.hud.pulse('flash', 0.12);
        break;
      }
      case 'kill':
        if (w.liveEnemies().length === 0 && w.mode === 'combat' && this.mode === 'campaign' && !this.cam.inCinematic) this.cam.cinematic(this.at(ev.killer), this.at(ev.victim), 'killcam', 1.3);
        break;
      case 'glint':
        this.play(ev.color === 'blue' ? 'glintBlue' : 'glintRed', this.at(ev.id), 1);
        break;
      case 'arrowFire':
        if (ev.owner === pid) this.play(ev.perfect ? 'bowPerfect' : 'bowRelease', undefined, 1);
        else this.play('arrowWhiz', this.at(ev.owner), 0.8);
        break;
      case 'arrowHit': {
        const at = V3(ev.pos.x, ev.pos.y, ev.pos.z);
        this.play(ev.blocked ? 'arrowBlock' : ev.headshot ? 'arrowHeadshot' : 'arrowHit', at);
        if (!ev.blocked && ev.dmg > 0) this.blood(at, ev.headshot ? 18 : 8);
        else this.mist.emit(at, 6, { color: 0x6a4a2a, speed: 2, size: 0.04, life: 0.4, gravity: 8 });
        if (ev.headshot) this.cam.fovKick = 2;
        break;
      }
      case 'arrowMiss':
        this.mist.emit(V3(ev.pos.x, 0.05, ev.pos.z), 5, { color: 0x8a7a5a, speed: 1, size: 0.12, life: 0.5, grow: 0.3, alpha: 0.4 });
        break;
      case 'fear':
        this.play('fear', this.at(ev.id), 0.7);
        break;
      case 'resolve':
        if (ev.amount >= 0.5) this.play('resolve', undefined, 0.6);
        break;
      case 'heal':
        this.embers.emit(this.at(ev.id, 1), 30, { color: 0xffe08a, speed: 0.8, size: 0.07, life: 1.0, gravity: -1.5, jitter: 0.8 });
        this.play('heal');
        break;
      case 'shieldOpen':
        this.mist.emit(this.at(ev.id, 1.2), 14, { color: 0x6a3a22, speed: 3.5, size: 0.05, life: 0.6, gravity: 8 });
        this.play('shieldOpen', this.at(ev.id));
        this.cam.shake(0.25);
        break;
      case 'armorShatter': {
        const at = pos2(ev.pos, 1.3);
        this.sparks.burst(at, 70, 0xffd070, 9, { life: 0.6 });
        this.mist.emit(at, 30, { color: 0x3a1010, speed: 5, size: 0.06, life: 1.0, gravity: 9 });
        this.rings.spawn(at.clone().setY(0.05), 0xffa050, 0.7, 4);
        this.play('armorShatter', at);
        this.cam.shake(0.6);
        this.hud.showWave('二幕', '갑옷이 부서졌다 — 이제 베기가 통한다', 2.5);
        break;
      }
      case 'standoff':
        if (ev.phase === 'begin') this.play('standoffTension');
        else if (ev.phase === 'feint') {
          this.play('swingEnemy', this.at(ev.id), 0.5, 0.8);
          this.cam.shake(0.12);
        } else if (ev.phase === 'strike') this.play('glintBlue', this.at(ev.id));
        else if (ev.phase === 'win') this.play('standoffStrike');
        break;
      case 'text':
        this.hud.popup(ev, w, this.cam.camera, window.innerWidth, window.innerHeight);
        break;
      case 'wave':
        this.hud.showWave(ev.title, ev.subtitle);
        this.play('waveStart');
        break;
      case 'waveClear':
        this.play('waveClear');
        this.hud.showWave('승', '막을 넘었다 · 화살과 체력을 추슬렀다', 2.4);
        break;
      case 'victory':
        this.play('victory');
        this.resultWin = true;
        this.resultTimer = 3.2;
        break;
      case 'defeat':
        this.play('defeat');
        this.resultWin = false;
        this.resultTimer = 2.6;
        break;
      case 'gale':
        this.play('issen', undefined, 0.6, 1.3);
        this.env.gust(1);
        this.embers.emit(this.at(ev.id, 1), 40, { color: 0xa8f0ff, speed: 4, size: 0.06, life: 0.6, jitter: 1 });
        break;
      case 'burn':
        this.play('fireIgnite', this.at(ev.id));
        break;
    }
  }
}

function makeArrowMesh(pr: Projectile): THREE.Object3D {
  const g = new THREE.Group();
  if (pr.kind === 'kunai') {
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.18, 4), new THREE.MeshStandardMaterial({ color: 0x2a2a30, metalness: 0.7, roughness: 0.3 }));
    blade.rotation.x = Math.PI / 2;
    g.add(blade);
    return g;
  }
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.8, 4), new THREE.MeshStandardMaterial({ color: 0xcdbb94, roughness: 0.8 }));
  shaft.rotation.x = Math.PI / 2;
  shaft.position.z = -0.4;
  const headColor = pr.arrowType === 'heavy' ? 0x9aa3ad : pr.arrowType === 'fire' ? 0xff6a1a : 0x6a6f76;
  const head = new THREE.Mesh(new THREE.ConeGeometry(pr.arrowType === 'heavy' ? 0.022 : 0.014, 0.08, 4), new THREE.MeshStandardMaterial({ color: headColor, metalness: 0.6, roughness: 0.4, emissive: pr.arrowType === 'fire' ? 0xff4400 : 0x000000, emissiveIntensity: 1.5 }));
  head.rotation.x = Math.PI / 2;
  head.position.z = 0.02;
  const fl = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.002, 0.12), new THREE.MeshStandardMaterial({ color: pr.team === 'player' ? 0xefe6d2 : 0x333333 }));
  fl.position.z = -0.74;
  g.add(shaft, head, fl);
  g.traverse((o) => ((o as THREE.Mesh).castShadow = true));
  return g;
}

/** Small golden-hour gradient environment so blades and armor catch the light. */
function makeSkyReflection(renderer: THREE.WebGLRenderer): THREE.Texture {
  const scene = new THREE.Scene();
  const geo = new THREE.SphereGeometry(10, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP; void main(){
      float h = vP.y;
      vec3 top = vec3(0.35, 0.3, 0.55), hor = vec3(1.6, 1.05, 0.7), gnd = vec3(0.18, 0.13, 0.08);
      vec3 c = h > 0.0 ? mix(hor, top, pow(h, 0.6)) : mix(hor * 0.6, gnd, pow(-h, 0.4));
      float sun = pow(max(0.0, dot(vP, normalize(vec3(-0.6, 0.25, 0.75)))), 64.0);
      gl_FragColor = vec4(c + vec3(4.0, 2.8, 1.6) * sun, 1.0); }`,
  });
  scene.add(new THREE.Mesh(geo, mat));
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(scene, 0.02).texture;
  pmrem.dispose();
  geo.dispose();
  mat.dispose();
  return tex;
}

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem('wog.settings');
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    /* storage unavailable */
  }
  // Phones and tablets start on the lighter preset.
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
  return { ...DEFAULT_SETTINGS, quality: coarse || Math.min(window.innerWidth, window.innerHeight) < 600 ? 'low' : 'high' };
}

function saveSettings(s: Settings): void {
  try {
    localStorage.setItem('wog.settings', JSON.stringify(s));
  } catch {
    /* storage unavailable */
  }
}
