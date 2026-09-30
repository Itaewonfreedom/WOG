// Presentation-layer regression tests: timelines shared by core / poses / trails, finisher victims
// completing their death, foot planting, IK constraints and frame-rate independence.
// Runs the real Animator + CharacterView (three.js math only, no WebGL).
import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { World } from '../src/core/world';
import { emptyInput, type Button, type InputFrame } from '../src/core/input';
import type { CombatEvent, MoveDef } from '../src/core/types';
import type { Fighter } from '../src/core/fighter';
import { T } from '../src/core/tuning';
import { getMove } from '../src/core/moves';
import { startEnemyAttack } from '../src/core/ai';
import { doIssen, startFinisher } from '../src/core/combat';
import { FINISHER_TL, ISSEN_TL, releaseTicks } from '../src/core/timeline';
import { Animator, __animTest, swingTl } from '../src/render/anim';
import { CharacterView, type CharKind } from '../src/render/character';
import { SwordTrail } from '../src/render/fx';
import { CameraRig } from '../src/render/camera';
import { applyKey, basePose, slerpDir, type Pose } from '../src/render/pose';
import { Driver, duel } from './helpers';

// ── Harness: the same per-frame path as Game.syncViews ─────────────────────
interface View {
  anim: Animator;
  char: CharacterView;
}

class Sim {
  readonly views = new Map<number, View>();
  readonly events: { frame: number; ev: CombatEvent }[] = [];
  readonly held = new Set<Button>();
  private pressed: Button[] = [];
  private released: Button[] = [];
  move = { x: 0, z: 0 };
  frameNo = 0;
  simTime = 0;
  private lastClock = 0;
  constructor(
    readonly w: World,
    readonly hz = 60,
  ) {
    this.lastClock = w.simClock;
  }

  press(b: Button): void {
    this.held.add(b);
    this.pressed.push(b);
  }
  release(b: Button): void {
    this.held.delete(b);
    this.released.push(b);
  }
  tap(b: Button): void {
    this.press(b);
    this.frame();
    this.release(b);
  }

  private input(): InputFrame {
    const f = emptyInput();
    f.move = this.move;
    for (const b of this.held) f.held[b] = true;
    for (const b of this.pressed) f.pressed[b] = true;
    for (const b of this.released) f.released[b] = true;
    this.pressed = [];
    this.released = [];
    return f;
  }

  view(f: Fighter): View {
    let v = this.views.get(f.id);
    if (!v) {
      const kind: CharKind = f.isPlayer ? 'player' : (f.arch!.id as CharKind);
      v = { anim: new Animator(kind), char: new CharacterView(kind, new THREE.Texture()) };
      this.views.set(f.id, v);
    }
    return v;
  }

  frame(after?: (f: Fighter, v: View, pose: Pose, simDt: number) => void): void {
    const dt = 1 / this.hz;
    const w = this.w;
    w.update(dt, this.input());
    for (const ev of w.drainEvents()) {
      this.events.push({ frame: this.frameNo, ev });
      if (ev.type === 'hit') {
        const tgt = w.get(ev.target);
        const att = w.get(ev.attacker);
        if (tgt && att) {
          const dx = tgt.pos.x - att.pos.x;
          const dz = tgt.pos.z - att.pos.z;
          const l = Math.hypot(dx, dz) || 1;
          const c = Math.cos(tgt.yaw);
          const s = Math.sin(tgt.yaw);
          this.view(tgt).anim.onHit(tgt, (dx * c - dz * s) / l, (dx * s + dz * c) / l, 0, ev.atkType, ev.heavy);
        }
      }
    }
    // Same clock as Game.frame: simulation time actually elapsed this frame.
    const clock = w.simClock;
    const simDt = Math.max(0, clock - this.lastClock);
    this.lastClock = clock;
    this.simTime += simDt;
    for (const f of w.fighters) {
      const v = this.view(f);
      const a = w.alpha;
      const x = f.prevPos.x + (f.pos.x - f.prevPos.x) * a;
      const z = f.prevPos.z + (f.pos.z - f.prevPos.z) * a;
      let dy = f.yaw - f.prevYaw;
      while (dy > Math.PI) dy -= Math.PI * 2;
      while (dy < -Math.PI) dy += Math.PI * 2;
      const yaw = f.prevYaw + dy * a;
      const pose = v.anim.update(f, w, a, simDt, new THREE.Vector3(x, 0, z), yaw);
      v.char.root.position.set(x, 0, z);
      v.char.root.rotation.y = yaw + pose.bodyYaw;
      v.char.root.scale.setScalar(f.size);
      v.char.applyPose(pose, f.speed, simDt);
      v.char.root.updateMatrixWorld(true);
      after?.(f, v, pose, simDt);
    }
    this.frameNo++;
  }

  run(n: number, after?: (f: Fighter, v: View, pose: Pose, simDt: number) => void): void {
    for (let i = 0; i < n; i++) this.frame(after);
  }
}

function soloWorld(): World {
  const w = new World(5);
  w.player.pos = { x: 0, z: 0 };
  w.player.prevPos = { x: 0, z: 0 };
  w.player.yaw = 0;
  w.player.prevYaw = 0;
  return w;
}

function duelWorld(arch: 'dummy' | 'ronin' | 'armored' | 'spear' | 'shield', dist: number): { w: World; e: Fighter } {
  const w = soloWorld();
  const e = w.spawn(arch, { x: 0, z: dist }, Math.PI);
  e.brain!.aware = false;
  e.brain!.cooldown = 1e9;
  return { w, e };
}

const footWorld = (char: CharacterView, which: 'L' | 'R', out = new THREE.Vector3()) =>
  (char as unknown as Record<string, THREE.Mesh>)[which === 'L' ? 'footLMesh' : 'footRMesh'].getWorldPosition(out);

function stanceKeyPose(kind: CharKind, key: Parameters<typeof applyKey>[1]): Pose {
  const fam = __animTest.FAMILY[kind];
  const stance = applyKey(basePose(), __animTest.STANCE[fam], basePose());
  return applyKey(stance, key, basePose());
}

// ── 1. Death of a finished victim (core) ────────────────────────────────────
describe('처치 연출: finished → 쓰러짐 → dead', () => {
  const cases: [string, (w: World, p: Fighter, e: Fighter) => void][] = [
    ['일섬', (w, p, e) => doIssen(w, p, e, false)],
    ['튕기기 일섬', (w, p, e) => doIssen(w, p, e, true)],
    ['일도양단', (w, p, e) => startFinisher(w, p, e, 'slash')],
    ['심장 관통', (w, p, e) => startFinisher(w, p, e, 'thrust')],
    ['흘려베기', (w, p, e) => startFinisher(w, p, e, 'flow')],
  ];
  for (const [name, start] of cases) {
    it(`${name}: 피해자는 연출을 끝까지 진행한 뒤 dead가 되고, 처치는 한 번만 집계된다`, () => {
      const { w, d, p, e } = duel('ronin', 2.0);
      if (name !== '일섬' && name !== '튕기기 일섬') e.set('broken', 400);
      start(w, p, e);
      const dur = e.act.dur;
      let prevT = -1;
      let maxT = -1;
      for (let i = 0; i < dur + 40; i++) {
        // Keep attacking: re-hits must be blocked while the victim is dying.
        if (i > 2 && i % 7 === 0) d.tap(i % 14 === 0 ? 'slash' : 'thrust');
        else d.tick();
        if (e.act.kind === 'finished') {
          // Always advancing (never stuck on a frame).
          expect(e.act.t).toBeGreaterThan(prevT);
          prevT = e.act.t;
          maxT = Math.max(maxT, e.act.t);
        }
      }
      expect(e.act.kind).toBe('dead');
      expect(maxT).toBeGreaterThanOrEqual(dur - 2);
      expect(w.stats.kills).toBe(1);
      expect(d.count('kill')).toBe(1);
      expect(d.events.filter((ev) => ev.type === 'hit' && ev.target === e.id).length).toBe(0);
      expect(e.hp).toBe(0);
    });
  }

  it('보스는 일섬으로 죽지 않으면 finished 후 경직으로 돌아온다 (처치 없음)', () => {
    const { w, d, p, e } = duel('ronin', 2.0);
    (e as { arch: unknown }).arch = { ...e.arch!, isBoss: true };
    doIssen(w, p, e, false);
    d.tick(80);
    expect(e.hp).toBeGreaterThan(0);
    expect(e.act.kind).not.toBe('dead');
    expect(w.stats.kills).toBe(0);
  });
});

// ── 2. One timeline for damage, sound, pose and trail ───────────────────────
describe('타이밍 통일', () => {
  it('흘려베기: 코어 impact · 공유 타임라인 · 공격 키 포즈 · 피해자 반응 · 트레일이 같은 틱(12)을 쓴다', () => {
    expect(FINISHER_TL.flow.contact).toBe(T.finisherImpact.flow);
    expect(FINISHER_TL.flow.contact).toBe(12);
    const keys = __animTest.finisherKeys('flow');
    const strikeKey = keys.find((k) => k.ease === 'in')!;
    expect(strikeKey.t).toBe(12);
    expect(FINISHER_TL.flow.trail[0]).toBeLessThan(12);
    expect(FINISHER_TL.flow.trail[1]).toBeGreaterThan(12);

    const { w, d, p, e } = duel('armored', 1.6);
    e.set('overextended', 60);
    startFinisher(w, p, e, 'flow');
    let impactAt = -1;
    for (let i = 0; i < 20 && impactAt < 0; i++) {
      d.step();
      if (d.events.some((ev) => ev.type === 'finisherImpact')) impactAt = p.act.t;
    }
    expect(impactAt).toBe(12);
  });

  it('모든 피니쉬 impact 틱이 공유 타임라인의 contact와 같다', () => {
    for (const kind of ['slash', 'thrust', 'flow'] as const) {
      const { w, d, p, e } = duel('ronin', 2.0);
      e.set('broken', 400);
      startFinisher(w, p, e, kind);
      let at = -1;
      for (let i = 0; i < 80 && at < 0; i++) {
        d.step();
        if (d.events.some((ev) => ev.type === 'finisherImpact')) at = p.act.t;
      }
      expect(at).toBe(FINISHER_TL[kind].contact);
    }
  });

  it('휘두름 소리는 release 틱, 피해·히트스톱은 첫 active 틱 — 입력 반응(startup)은 그대로', () => {
    for (const id of ['r_s1', 'r_t1', 'r_hs', 'r_ht', 'r_bash']) {
      const m = getMove(id);
      const { w, d, e } = duel('dummy', 2.0);
      e.hp = 9999;
      e.maxHp = 9999;
      e.maxPosture = 9999;
      // Heavy moves come from a charge; start the attack directly through the input path.
      if (m.heavy) {
        d.press(m.type === 'thrust' ? 'thrust' : 'slash');
        d.tick(T.chargeMax + 5);
        d.release(m.type === 'thrust' ? 'thrust' : 'slash');
      } else if (id === 'r_bash') {
        d.press('guard');
        d.tick(2);
        d.tap('slash');
      } else d.tap(m.type === 'thrust' ? 'thrust' : 'slash');
      let swingT = -1;
      let hitT = -1;
      for (let i = 0; i < 40 && hitT < 0; i++) {
        const n0 = d.events.length;
        d.step();
        for (const ev of d.events.slice(n0)) {
          if (ev.type === 'swing' && swingT < 0) swingT = w.player.act.t;
          if (ev.type === 'hit' && ev.attacker === w.player.id) hitT = w.player.act.t;
        }
      }
      expect(w.player.act.move?.id).toBe(id);
      expect(hitT, id).toBe(m.startup);
      if (m.type !== 'blunt') expect(swingT, id).toBe(m.startup - releaseTicks(m));
      if (m.heavy) d.release('guard');
    }
  });

  it('첫 active 틱(피해가 들어가는 순간)의 포즈는 windup이 아니라 타격 키다', () => {
    const moves = ['r_s1', 'r_s2', 'r_s3', 'r_t1', 'r_t2', 'r_t3', 'r_st', 'r_ts', 'r_hs', 'r_ht'];
    for (const id of moves) {
      const m = getMove(id);
      const sw = __animTest.RANGER[id];
      const strike = stanceKeyPose('player', sw.strike);
      const wind = stanceKeyPose('player', sw.windup);
      const { w } = duelWorld('dummy', 6);
      const sim = new Sim(w);
      sim.frame();
      w.player.set('attack', m.startup + m.active + m.recovery, { move: m, lunge: 0 });
      // The frame that shows the contact tick (what hit-stop holds: alpha = 1).
      const anim = sim.view(w.player).anim;
      w.player.act.t = m.startup;
      const root = new THREE.Vector3();
      anim.update(w.player, w, 1, 1 / 60, root, 0);
      const pose = anim.rawPose;
      const dStrike = pose.handR.distanceTo(strike.handR);
      const dWind = pose.handR.distanceTo(wind.handR);
      expect(dStrike, id).toBeLessThan(0.02);
      expect(pose.bladeR.angleTo(strike.bladeR), id).toBeLessThan(0.05);
      if (wind.handR.distanceTo(strike.handR) > 0.1) expect(dWind, id).toBeGreaterThan(0.08);
      // One tick before contact the blade is already travelling (not parked at the windup).
      const tl = swingTl(m);
      expect(tl.release).toBeLessThan(tl.contact);
      expect(tl.contact).toBe(m.startup);
    }
  });
});

// ── 3. Feet ─────────────────────────────────────────────────────────────────
describe('발 접지', () => {
  function walk(hz: number, move: { x: number; z: number }, seconds: number) {
    const w = soloWorld();
    const sim = new Sim(w, hz);
    sim.move = move;
    let maxSlide = 0;
    let landings = 0;
    const prev = { L: new THREE.Vector3(), R: new THREE.Vector3() };
    const planted = { L: false, R: false };
    let maxAnkleStretch = 0;
    sim.run(Math.round(seconds * hz), (f, v) => {
      if (!f.isPlayer) return;
      landings += v.anim.landings.length;
      for (const [s, i] of [['L', 0], ['R', 1]] as const) {
        const now = footWorld(v.char, s);
        const isPlanted = v.anim.planter.isPlanted(i);
        if (isPlanted && planted[s]) maxSlide = Math.max(maxSlide, Math.hypot(now.x - prev[s].x, now.z - prev[s].z));
        planted[s] = isPlanted;
        prev[s].copy(now);
      }
      // A planted leg never has to be clamped: the pelvis is lowered to fit the planted feet.
      const pose = v.anim.pose;
      for (const [foot, side, i] of [[pose.footL, 1, 0], [pose.footR, -1, 1]] as const) {
        if (!v.anim.planter.isPlanted(i)) continue;
        const hip = new THREE.Vector3(pose.pelvis.x + side * 0.1, pose.pelvis.y - 0.02, pose.pelvis.z);
        const ank = foot.clone().setY(foot.y + 0.07);
        maxAnkleStretch = Math.max(maxAnkleStretch, hip.distanceTo(ank));
      }
    });
    return { maxSlide, landings, maxAnkleStretch, sim };
  }

  it('걷기·횡이동·후진: 지지발은 월드 공간에 고정(미끄러짐 < 3mm/프레임), 발은 번갈아 착지한다', () => {
    for (const mv of [{ x: 0, z: 1 }, { x: 1, z: 0 }, { x: -1, z: 0 }, { x: 0, z: -1 }]) {
      const r = walk(60, mv, 2);
      expect(r.maxSlide, JSON.stringify(mv)).toBeLessThan(0.003);
      expect(r.landings, JSON.stringify(mv)).toBeGreaterThan(4);
      expect(r.maxAnkleStretch, JSON.stringify(mv)).toBeLessThan(0.876);
    }
  });

  it('회전베기: 앞발은 제자리에서 피벗하고, 다른 발은 땅에 끌리지 않고 돌아 나간 뒤 착지한다', () => {
    const { w, e } = duelWorld('dummy', 6);
    void e;
    const sim = new Sim(w, 60);
    sim.run(3);
    const m = getMove('r_s4');
    w.player.set('attack', m.startup + m.active + m.recovery, { move: m, lunge: 0 });
    let maxGroundSlide = 0;
    let pivotSlide = 0;
    let landedAfter = false;
    const prev = { L: new THREE.Vector3(), R: new THREE.Vector3() };
    let have = false;
    let spun = 0;
    sim.run(m.startup + m.active + m.recovery + 5, (f, v, pose) => {
      if (!f.isPlayer) return;
      spun = Math.max(spun, pose.bodyYaw);
      const L = footWorld(v.char, 'L');
      const R = footWorld(v.char, 'R');
      if (have) {
        const dL = Math.hypot(L.x - prev.L.x, L.z - prev.L.z);
        const dR = Math.hypot(R.x - prev.R.x, R.z - prev.R.z);
        // Only count frames where the foot is on the ground in both frames (a low step is not a slide).
        if (L.y < 0.005 && prev.L.y < 0.005) pivotSlide = Math.max(pivotSlide, dL);
        if (R.y < 0.005 && prev.R.y < 0.005) maxGroundSlide = Math.max(maxGroundSlide, dR);
      }
      prev.L.copy(L);
      prev.R.copy(R);
      have = true;
      if (f.act.kind === 'attack' && f.act.t > 25) for (const l of v.anim.landings) if (l.foot === 1) landedAfter = true;
    });
    expect(spun).toBeGreaterThan(Math.PI * 1.9);
    expect(pivotSlide).toBeLessThan(0.003);
    expect(maxGroundSlide).toBeLessThan(0.02);
    expect(landedAfter).toBe(true);
  });

  it('연격·일섬 돌진 중에도 땅에 닿은 발은 미끄러지지 않고, 발이 한 프레임에 튀지 않는다', () => {
    for (const scenario of ['combo', 'issen'] as const) {
      const { w, e } = duelWorld(scenario === 'combo' ? 'dummy' : 'ronin', 2.4);
      if (scenario === 'combo') {
        e.hp = 9999;
        e.maxHp = 9999;
        e.maxPosture = 9999;
      }
      const sim = new Sim(w, 60);
      sim.run(3);
      if (scenario === 'issen') doIssen(w, w.player, e, false);
      const prev = { L: new THREE.Vector3(), R: new THREE.Vector3() };
      let have = false;
      let maxGroundSlide = 0;
      let maxPop = 0;
      const seq: Button[] = scenario === 'combo' ? ['slash', 'slash', 'thrust', 'slash', 'thrust', 'slash'] : [];
      const planted = { L: false, R: false };
      const step = (f: Fighter, v: View, _pose: Pose, simDt: number) => {
        if (!f.isPlayer) return;
        for (const s of ['L', 'R'] as const) {
          const now = footWorld(v.char, s);
          const isP = v.anim.planter.isPlanted(s === 'L' ? 0 : 1);
          if (have) {
            const d = Math.hypot(now.x - prev[s].x, now.z - prev[s].z);
            // Planted in both frames: must not skid.
            if (isP && planted[s]) maxGroundSlide = Math.max(maxGroundSlide, d);
            // Relative to the body, a stepping foot moves at most ~20 m/s (of simulation time) —
            // anything faster is a teleport.
            if (simDt > 0) maxPop = Math.max(maxPop, (d - Math.hypot(f.pos.x - f.prevPos.x, f.pos.z - f.prevPos.z) * Math.min(2, simDt * 60)) / simDt);
          }
          prev[s].copy(now);
          planted[s] = isP;
        }
        have = true;
      };
      if (seq.length) for (const b of seq) {
        sim.tap(b);
        sim.run(16, step);
      }
      else sim.run(90, step);
      expect(maxGroundSlide, scenario).toBeLessThan(0.006);
      expect(maxPop, scenario).toBeLessThan(20);
    }
  });

  it('30/60/120Hz에서 같은 이동의 보폭 수가 같다 (프레임 독립)', () => {
    const counts = [30, 60, 120].map((hz) => walk(hz, { x: 0, z: 1 }, 2).landings);
    expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(1);
  });

  it('공격 돌진: 앞발이 들렸다가 contact 틱에 착지한다 (fumikomi)', () => {
    const { w, e } = duelWorld('dummy', 3.0);
    e.hp = 9999;
    e.maxHp = 9999;
    e.maxPosture = 9999;
    const sim = new Sim(w, 60);
    sim.run(3);
    const landT: number[] = [];
    sim.tap('slash');
    sim.run(30, (f, v) => {
      if (f.isPlayer && f.act.kind === 'attack') for (const l of v.anim.landings) if (l.foot === 0) landT.push(f.act.t);
    });
    const m = getMove('r_s1');
    expect(landT).toContain(m.startup);
  });
});

// ── 4. IK constraints ───────────────────────────────────────────────────────
describe('IK', () => {
  it('양손 무기: 도달거리 보정 후에도 두 손이 같은 그립을 잡는다', () => {
    for (const [kind, grip] of [['ronin', -0.2], ['armored', -0.25], ['spear', 0.55]] as const) {
      const char = new CharacterView(kind, new THREE.Texture());
      const p = basePose();
      const blade = new THREE.Vector3();
      for (let i = 0; i < 40; i++) {
        // Wild targets, far out of reach, in every direction.
        p.handR.set(Math.sin(i) * 1.4, 1.2 + Math.cos(i * 1.7) * 0.9, Math.cos(i) * 1.4);
        p.handL.set(-p.handR.x, p.handR.y * 0.5, -p.handR.z);
        p.bladeR.set(Math.sin(i * 0.7), Math.cos(i * 1.3), Math.sin(i * 2.1) + 0.2).normalize();
        char.applyPose(p, 0, 1 / 60);
        blade.copy(p.bladeR);
        const expected = char.jHandR.clone().addScaledVector(blade, grip);
        expect(char.jHandL.distanceTo(expected), kind).toBeLessThan(1e-3);
      }
    }
  });

  it('팔꿈치·무릎: 손이 pole 축을 지나가도 관절이 한 프레임에 뒤집히지 않는다', () => {
    const char = new CharacterView('player', new THREE.Texture());
    const p = basePose();
    const elbow = new THREE.Vector3();
    const last = new THREE.Vector3();
    let maxJump = 0;
    for (let i = 0; i <= 120; i++) {
      // Sweep the right hand from in front, over the shoulder, to behind (through the pole axis).
      const a = (i / 120) * Math.PI * 1.6;
      p.handR.set(-0.19 - 0.35 * Math.sin(a) * 0.4, 1.37 - 0.45 * Math.cos(a), 0.45 * Math.cos(a * 0.9));
      char.applyPose(p, 0, 1 / 60);
      (char as unknown as { joints: THREE.Mesh[] }).joints[0].getWorldPosition(elbow);
      if (i > 0) maxJump = Math.max(maxJump, elbow.distanceTo(last));
      last.copy(elbow);
    }
    expect(maxJump).toBeLessThan(0.08);
  });

  it('발목이 도달거리로 끌려와도 발은 발목에서 떨어지지 않는다', () => {
    const char = new CharacterView('player', new THREE.Texture());
    const p = basePose();
    p.footL.set(0.13, 0, 1.4); // far out of reach
    char.applyPose(p, 0, 1 / 60);
    const c = char as unknown as { footLMesh: THREE.Mesh; shinL: { mesh: THREE.Mesh } };
    const foot = c.footLMesh.position;
    const shin = c.shinL.mesh;
    const ankle = new THREE.Vector3(0, 1, 0).applyQuaternion(shin.quaternion).multiplyScalar(shin.scale.y).add(shin.position);
    expect(Math.abs(ankle.x - foot.x) + Math.abs(ankle.z - foot.z)).toBeLessThan(1e-4);
    expect(Math.abs(ankle.y - 0.07 - foot.y)).toBeLessThan(1e-4);
  });

  it('반대 방향 벡터 보간이 영벡터나 NaN을 만들지 않는다', () => {
    const pairs: [THREE.Vector3, THREE.Vector3][] = [
      [new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)],
      [new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0)],
      [new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0)],
      [new THREE.Vector3(0.3, 0.2, 0.9).normalize(), new THREE.Vector3(-0.3, -0.2, -0.9).normalize()],
    ];
    const out = new THREE.Vector3();
    for (const [a, b] of pairs) {
      for (let i = 0; i <= 10; i++) {
        slerpDir(a, b, i / 10, out);
        expect(Number.isFinite(out.x + out.y + out.z)).toBe(true);
        expect(out.length()).toBeCloseTo(1, 5);
      }
      slerpDir(a, b, 0.5, out);
      expect(Math.abs(out.dot(a))).toBeLessThan(1e-6);
      slerpDir(a, b, 1, out);
      expect(out.distanceTo(b)).toBeLessThan(1e-6);
    }
  });
});

// ── 5. Finisher contact & corpse continuity ─────────────────────────────────
describe('공격자·피해자 연출', () => {
  it('피니쉬 contact에서 칼날이 피해자 몸통에 닿는다 (적 크기·위치 반영)', () => {
    for (const arch of ['ronin', 'armored'] as const) {
      for (const kind of ['slash', 'thrust'] as const) {
        const { w, e } = duelWorld(arch, 2.2);
        const sim = new Sim(w, 60);
        sim.run(2);
        e.set('broken', 400);
        startFinisher(w, w.player, e, kind);
        let best = Infinity;
        const tl = FINISHER_TL[kind];
        sim.run(90, (f, v) => {
          if (!f.isPlayer || f.act.kind !== 'finisher' || f.act.t !== tl.contact) return;
          const base = new THREE.Vector3();
          const tip = new THREE.Vector3();
          v.char.bladeWorld(base, tip);
          // Distance from the victim's chest axis (vertical line through the torso) to the blade segment.
          const chest = new THREE.Vector3(e.pos.x, 1.2 * e.size, e.pos.z);
          const seg = new THREE.Line3(base, tip);
          const q = new THREE.Vector3();
          seg.closestPointToPoint(chest, true, q);
          // Horizontal gap to the torso axis, and the height must be on the torso too.
          const gap = Math.hypot(q.x - chest.x, q.z - chest.z) + Math.max(0, Math.abs(q.y - chest.y) - 0.3 * e.size);
          best = Math.min(best, gap);
        });
        // Within the torso radius (≈0.15–0.2 m) at torso height: the blade is in the body.
        expect(best, `${arch}/${kind}`).toBeLessThan(0.2 * e.size);
      }
    }
  });

  it('처치된 피해자는 쓰러진 자세로 dead에 들어가고 그 자세를 그대로 유지한다', () => {
    for (const kind of ['slash', 'thrust', 'flow', 'issen'] as const) {
      const { w, e } = duelWorld('ronin', 2.0);
      const sim = new Sim(w, 60);
      sim.run(2);
      if (kind === 'issen') doIssen(w, w.player, e, false);
      else {
        e.set(kind === 'flow' ? 'overextended' : 'broken', 400);
        startFinisher(w, w.player, e, kind);
      }
      let lastFinished: Pose | null = null;
      let firstDead: Pose | null = null;
      let final: Pose | null = null;
      let maxJump = 0;
      const prevHead = new THREE.Vector3();
      let havePrev = false;
      sim.run(200, (f, v, pose) => {
        if (f.id !== e.id) return;
        const head = (v.char as unknown as { head: THREE.Group }).head.getWorldPosition(new THREE.Vector3());
        if (havePrev) maxJump = Math.max(maxJump, head.distanceTo(prevHead));
        prevHead.copy(head);
        havePrev = true;
        const snap = JSON.parse(JSON.stringify(pose)) as Pose;
        if (f.act.kind === 'finished') lastFinished = snap;
        if (f.act.kind === 'dead' && !firstDead) firstDead = snap;
        final = snap;
      });
      expect(e.act.kind, kind).toBe('dead');
      const lf = lastFinished as unknown as Pose;
      const fd = firstDead as unknown as Pose;
      const fin = final as unknown as Pose;
      // The corpse continues the very same fall (no pop when 'finished' turns into 'dead')…
      expect(Math.abs(fd.bodyPitch - lf.bodyPitch) + Math.abs(fd.bodyRoll - lf.bodyRoll), kind).toBeLessThan(0.2);
      expect(Math.abs(fd.pelvis.y - lf.pelvis.y), kind).toBeLessThan(0.06);
      // …and ends lying on the ground.
      expect(Math.hypot(fin.bodyPitch, fin.bodyRoll), kind).toBeGreaterThan(1.2);
      expect(fin.pelvis.y, kind).toBeLessThan(0.3);
      // No teleporting head at any frame of the death (max ~0.25 m per 60 Hz frame).
      expect(maxJump, kind).toBeLessThan(0.25);
    }
  });

  it('피격 반응은 맞은 방향에 따라 달라진다 (앞에서 맞으면 뒤로, 뒤에서 맞으면 앞으로)', () => {
    const lean = (pushZ: number) => {
      const { w, e } = duelWorld('ronin', 2.0);
      const sim = new Sim(w, 60);
      sim.run(2);
      e.set('hitstun', T.hitstun);
      sim.view(e).anim.onHit(e, 0, pushZ, 0, 'slash', false);
      let peak = 0;
      sim.run(6, (f, _v, pose) => {
        if (f.id === e.id) peak = pose.lean;
      });
      return peak;
    };
    const fromFront = lean(-1);
    const fromBack = lean(1);
    expect(fromFront).toBeLessThan(fromBack - 0.2);
  });
});

// ── 6. Trails & frame independence ──────────────────────────────────────────
describe('트레일 · 프레임 독립', () => {
  function swingTrail(hz: number, freezeFrames = 0) {
    const tr = new SwordTrail(0xffffff);
    const base = new THREE.Vector3();
    const tip = new THREE.Vector3();
    const n = Math.round(0.2 * hz);
    let maxSamples = 0;
    for (let i = 0; i <= n; i++) {
      const t = i / hz;
      const a = t * 12;
      base.set(Math.sin(a) * 0.3, 1.2, Math.cos(a) * 0.3);
      tip.set(Math.sin(a) * 1.0, 1.2, Math.cos(a) * 1.0);
      tr.update(base, tip, true, i === 0 ? 0 : 1 / hz, 1);
      if (i === Math.floor(n / 2)) for (let k = 0; k < freezeFrames; k++) tr.update(base, tip, true, 0, 1);
      maxSamples = Math.max(maxSamples, tr.sampleCount);
    }
    const pos = (tr.mesh.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array;
    const alpha = (tr.mesh.geometry.getAttribute('alpha') as THREE.BufferAttribute).array as Float32Array;
    return { tr, pos: Array.from(pos), alpha: Array.from(alpha), maxSamples };
  }

  it('트레일 리본 모양이 30/60/120Hz에서 같다', () => {
    const r60 = swingTrail(60);
    const visible60 = r60.alpha.filter((a) => a > 0).length;
    expect(visible60).toBeGreaterThan(40);
    for (const hz of [30, 120]) {
      const r = swingTrail(hz);
      let maxD = 0;
      for (let v = 0; v < r.alpha.length; v++) {
        expect(r.alpha[v] > 0, `${hz}Hz vertex ${v}`).toBe(r60.alpha[v] > 0);
        if (r.alpha[v] <= 0) continue;
        const i = v * 3;
        maxD = Math.max(maxD, Math.hypot(r.pos[i] - r60.pos[i], r.pos[i + 1] - r60.pos[i + 1], r.pos[i + 2] - r60.pos[i + 2]));
      }
      expect(maxD, `${hz}Hz`).toBeLessThan(0.02);
    }
  });

  it('히트스톱·일시정지(dt=0) 동안 샘플이 쌓이지 않는다', () => {
    const a = swingTrail(60, 0);
    const b = swingTrail(60, 30);
    expect(b.maxSamples).toBe(a.maxSamples);
  });

  it('새 공격(키 변경)은 제자리에서 이어져도 이전 리본과 잇지 않는다', () => {
    const tr = new SwordTrail(0xffffff);
    const base = new THREE.Vector3(0, 1, 0);
    const tip = new THREE.Vector3(0, 1, 1);
    tr.update(base, tip, true, 1 / 60, 1);
    tr.update(base.set(0.02, 1, 0), tip.set(0.3, 1, 0.95), true, 1 / 60, 1);
    // Next strike, same place, other key: only its own (single-sample) ribbon — no quad yet.
    tr.update(base.set(0.03, 1, 0), tip.set(-0.3, 1.2, 0.9), true, 1 / 60, 2);
    const pos = (tr.mesh.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array;
    const idx = (tr.mesh.geometry.getIndex() as THREE.BufferAttribute).array as Uint16Array;
    // Any drawn quad may only join cross-sections of the first strike (tips with x >= 0).
    for (let i = 0; i < tr.drawnIndices; i++) expect(pos[idx[i] * 3], `vertex ${idx[i]}`).toBeGreaterThan(-0.01);
  });

  it('슬로모·고주사율(240Hz)에서도 트레일이 그려지고 모양이 같다', () => {
    const run = (hz: number, ts: number) => {
      const tr = new SwordTrail(0xffffff);
      const base = new THREE.Vector3();
      const tip = new THREE.Vector3();
      const simLen = 0.2;
      const n = Math.round((simLen / ts) * hz);
      let drawnFrames = 0;
      for (let i = 0; i <= n; i++) {
        const t = (i / hz) * ts;
        const a = t * 12;
        base.set(Math.sin(a) * 0.3, 1.2, Math.cos(a) * 0.3);
        tip.set(Math.sin(a), 1.2, Math.cos(a));
        tr.update(base, tip, true, i === 0 ? 0 : ts / hz, 1);
        if (tr.drawnIndices > 0) drawnFrames++;
      }
      const pos = Array.from((tr.mesh.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array);
      const alpha = Array.from((tr.mesh.geometry.getAttribute('alpha') as THREE.BufferAttribute).array as Float32Array);
      return { drawnFrames, n, pos, alpha };
    };
    const ref = run(60, 1);
    for (const [hz, ts] of [[60, 0.18], [60, 0.22], [120, 0.3], [240, 1], [360, 1]]) {
      const r = run(hz, ts);
      expect(r.drawnFrames / r.n, `${hz}Hz x${ts}`).toBeGreaterThan(0.8);
      let maxD = 0;
      for (let v = 0; v < r.alpha.length; v++) {
        if (r.alpha[v] <= 0 || ref.alpha[v] <= 0) continue;
        maxD = Math.max(maxD, Math.hypot(r.pos[v * 3] - ref.pos[v * 3], r.pos[v * 3 + 1] - ref.pos[v * 3 + 1], r.pos[v * 3 + 2] - ref.pos[v * 3 + 2]));
      }
      // Samples are ≥ 1/240 s apart, so the (arc-interpolated) ribbon differs by at most a few cm.
      expect(maxD, `${hz}Hz x${ts}`).toBeLessThan(0.03);
    }
  });

  it('돌진(고속 이동) 구간의 리본 분리가 주사율과 무관하다', () => {
    const run = (hz: number) => {
      const tr = new SwordTrail(0xffffff);
      const base = new THREE.Vector3();
      const tip = new THREE.Vector3();
      const n = Math.round(0.15 * hz);
      let bridged = 0;
      for (let i = 0; i <= n; i++) {
        const t = i / hz;
        // 0–0.05 s: 55 m/s dash; then a normal cut in place.
        const x = Math.min(t, 0.05) * 55;
        const a = Math.max(0, t - 0.05) * 14;
        base.set(x, 1.2, 0);
        tip.set(x + Math.sin(a) * 0.7, 1.2, Math.cos(a) * 0.7);
        tr.update(base, tip, true, i === 0 ? 0 : 1 / hz, 1);
        // No drawn cross-section may lie on the dash itself (base strictly between start and end).
        const pos = (tr.mesh.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array;
        const idx = (tr.mesh.geometry.getIndex() as THREE.BufferAttribute).array as Uint16Array;
        for (let k = 0; k < tr.drawnIndices; k++) {
          const v = idx[k];
          if (v % 2 === 0 && pos[v * 3] > 0.1 && pos[v * 3] < 2.65) bridged++;
        }
      }
      return { bridged, drawn: tr.drawnIndices };
    };
    for (const hz of [30, 60, 120]) {
      const r = run(hz);
      expect(r.bridged, `${hz}Hz`).toBe(0);
      expect(r.drawn, `${hz}Hz`).toBeGreaterThan(0);
    }
  });

  it('새 공격(키 변경)이나 순간이동 사이를 리본으로 잇지 않는다', () => {
    const tr = new SwordTrail(0xffffff);
    const base = new THREE.Vector3(0, 1, 0);
    const tip = new THREE.Vector3(0, 1, 1);
    tr.update(base, tip, true, 1 / 60, 1);
    tr.update(base.set(0.05, 1, 0), tip.set(0.3, 1, 1), true, 1 / 60, 1);
    const one = tr.drawnIndices;
    expect(one).toBeGreaterThan(0);
    // Next strike starts far away one frame later.
    tr.update(base.set(3, 1, 0), tip.set(3, 1, 1), true, 1 / 60, 2);
    tr.update(base.set(3.05, 1, 0), tip.set(3.3, 1, 1), true, 1 / 60, 2);
    // No drawn triangle may join the first strike (base x < 1) with the second (base x > 2).
    const pos = (tr.mesh.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array;
    const idx = (tr.mesh.geometry.getIndex() as THREE.BufferAttribute).array as Uint16Array;
    let joined = 0;
    for (let i = 0; i < tr.drawnIndices; i += 3) {
      const xs = [idx[i], idx[i + 1], idx[i + 2]].map((v) => pos[(v - (v % 2)) * 3]);
      if (Math.min(...xs) < 1 && Math.max(...xs) > 2) joined++;
    }
    expect(joined).toBe(0);
    // The second strike does draw its own ribbon.
    expect(tr.drawnIndices).toBeGreaterThan(0);
  });

  it('히트스톱이 시작되는 프레임에도 그때까지 흐른 시뮬레이션 시간이 반영돼 트레일이 접촉 지점을 담는다', () => {
    const { w, e } = duelWorld('dummy', 2.2);
    e.hp = 9999;
    e.maxHp = 9999;
    e.maxPosture = 9999;
    const sim = new Sim(w, 60);
    const trail = new SwordTrail(0xffffff);
    sim.run(2);
    sim.tap('slash');
    let checked = false;
    const base = new THREE.Vector3();
    const tip = new THREE.Vector3();
    for (let i = 0; i < 30 && !checked; i++) {
      const n0 = sim.events.length;
      sim.frame((f, v, _pose, simDt) => {
        if (!f.isPlayer) return;
        const a = f.act;
        const tr = a.kind === 'attack' && a.move ? swingTl(a.move).trail : null;
        const t = a.t + w.alpha;
        v.char.bladeWorld(base, tip);
        trail.update(base, tip, !!tr && t >= tr[0] && t < tr[1], simDt, f.serial);
        if (sim.events.slice(n0).some((x) => x.ev.type === 'hit') && w.hitstop > 0) {
          // The frame that starts the freeze still advanced to the contact tick…
          expect(simDt).toBeGreaterThan(0);
          expect(a.t).toBe(a.move!.startup);
          // …so the ribbon's newest cross-section is the blade at contact.
          const pos = (trail.mesh.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array;
          expect(new THREE.Vector3().fromArray(pos, 3).distanceTo(tip)).toBeLessThan(1e-4);
          checked = true;
        }
      });
    }
    expect(checked).toBe(true);
  });

  it('히트스톱: 화면은 접촉 틱까지 이어서 움직인 뒤 정확히 k틱 멈추고, 멈출 때·풀릴 때 포즈가 튀지 않는다', () => {
    for (const phase of [0.05, 0.3, 0.6, 0.9]) {
      const { w, e } = duelWorld('dummy', 2.0);
      e.hp = 9999;
      e.maxHp = 9999;
      e.maxPosture = 9999;
      const sim = new Sim(w, 600);
      w.update(phase / 60, emptyInput());
      sim.run(20);
      sim.tap('slash');
      let k = 0;
      let heldAt = -1;
      let hold = 0;
      let lastShown = -Infinity;
      let minStep = Infinity;
      let maxHandStep = 0;
      const last = new THREE.Vector3();
      let have = false;
      for (let i = 0; i < 900; i++) {
        let pose: Pose | null = null;
        sim.frame((f, v) => {
          if (f.isPlayer) pose = v.anim.rawPose;
        });
        const shown = w.displayTick;
        minStep = Math.min(minStep, shown - lastShown);
        lastShown = shown;
        if (w.hitstop > 0) k = Math.max(k, w.hitstop);
        if (w.hitstop > 0 && w.alpha >= 1) heldAt = shown;
        if (heldAt >= 0 && Math.abs(shown - heldAt) < 1e-9) hold++;
        const p = pose as Pose | null;
        if (p && w.player.act.kind === 'attack') {
          if (have) maxHandStep = Math.max(maxHandStep, p.handR.distanceTo(last));
          last.copy(p.handR);
          have = true;
        }
        if (heldAt >= 0 && w.hitstop === 0 && w.player.act.kind !== 'attack') break;
      }
      // The displayed moment never goes back…
      expect(minStep, `phase ${phase}`).toBeGreaterThanOrEqual(-1e-9);
      // …the impact frame is held for exactly k ticks (600 Hz frames: ±1 frame)…
      expect(Math.abs(hold / 10 - k), `phase ${phase}`).toBeLessThanOrEqual(0.11);
      // …and at 600 Hz the pose moves continuously through the freeze start and end: even the
      // whip into contact stays far below one tick of motion per 1/600 s frame (no pop).
      expect(maxHandStep, `phase ${phase}`).toBeLessThan(0.1);
    }
  });

  it('히트스톱 중 위치 보간(alpha)이 흔들리지 않는다', () => {
    const { w, e } = duelWorld('dummy', 2.0);
    e.hp = 9999;
    e.maxHp = 9999;
    e.maxPosture = 9999;
    const sim = new Sim(w, 60);
    sim.run(2);
    sim.tap('slash');
    const alphas: number[] = [];
    const xs: number[] = [];
    for (let i = 0; i < 40; i++) {
      // Irregular frame times.
      w.update([1 / 60, 1 / 144, 1 / 30, 1 / 90][i % 4], emptyInput());
      if (w.hitstop > 0) {
        alphas.push(w.alpha);
        xs.push(w.player.prevPos.z + (w.player.pos.z - w.player.prevPos.z) * w.alpha);
      }
    }
    expect(alphas.length).toBeGreaterThan(1);
    expect(Math.max(...alphas) - Math.min(...alphas)).toBe(0);
    expect(Math.max(...xs) - Math.min(...xs)).toBe(0);
  });

  it('한 공격의 포즈 진행은 30/60/120Hz에서 같은 시뮬레이션 시각에 같은 손 위치를 낸다', () => {
    const sample = (hz: number) => {
      const { w, e } = duelWorld('dummy', 6);
      void e;
      const sim = new Sim(w, hz);
      sim.run(Math.round(0.1 * hz));
      sim.tap('slash');
      const out: Record<number, number[]> = {};
      sim.run(Math.round(0.5 * hz), (f, v) => {
        const pose = v.anim.rawPose;
        if (!f.isPlayer || f.act.kind !== 'attack') return;
        const t = f.act.t + w.alpha;
        if (Math.abs(t - Math.round(t)) < 1e-6) out[Math.round(t)] = [pose.handR.x, pose.handR.y, pose.handR.z];
      });
      return out;
    };
    const a = sample(60);
    const b = sample(120);
    const c = sample(30);
    let n = 0;
    for (const k of Object.keys(a)) {
      for (const o of [b, c]) {
        if (!o[+k]) continue;
        const d = Math.hypot(a[+k][0] - o[+k][0], a[+k][1] - o[+k][1], a[+k][2] - o[+k][2]);
        expect(d, `t=${k}`).toBeLessThan(0.03);
        n++;
      }
    }
    expect(n).toBeGreaterThan(5);
  });
});

describe('피니쉬 카메라', () => {
  it('진행 중인 두 인물을 따라가고, 끝나면 위치·화각이 튀지 않고 조작 카메라로 돌아간다', () => {
    const cam = new CameraRig(16 / 9);
    const player = new THREE.Vector3(0, 0, 0);
    const victim = new THREE.Vector3(0, 0, 3);
    const opts = { aiming: false, lockTarget: null, crowd: 0, moveDir: null, slowmo: false };
    for (let i = 0; i < 30; i++) cam.update(1 / 60, player, opts);
    cam.cinematic(player, victim, 'finisher', 10);
    let maxMove = 0;
    let maxFov = 0;
    const last = new THREE.Vector3();
    let lastFov = 0;
    const mid0 = new THREE.Vector3();
    let lookErrAtDash = Infinity;
    for (let i = 0; i < 240; i++) {
      // The performer dashes in during the shot.
      if (i < 60) player.z = Math.min(1.6, player.z + 0.05);
      cam.track(player, victim, victim.clone().setY(1.2), i > 40 && i < 90 ? 1 : 0);
      if (i === 150) cam.releaseCinematic();
      cam.update(1 / 60, player, opts);
      const p = cam.camera.position;
      // (The cut *into* the shot is deliberately quick; the tracking and the return must be smooth.)
      if (i > 30) {
        maxMove = Math.max(maxMove, p.distanceTo(last));
        maxFov = Math.max(maxFov, Math.abs(cam.camera.fov - lastFov));
      }
      if (i === 20) mid0.copy(p);
      if (i === 70) {
        // Angle between the view direction and the direction to the pair's midpoint.
        const dir = new THREE.Vector3();
        cam.camera.getWorldDirection(dir);
        const mid = player.clone().add(victim).multiplyScalar(0.5).setY(1.1);
        lookErrAtDash = dir.angleTo(mid.sub(p).normalize());
      }
      last.copy(p);
      lastFov = cam.camera.fov;
    }
    expect(cam.inCinematic).toBe(false);
    // While the performer dashed in, the shot kept the pair centred (it follows live subjects).
    expect(lookErrAtDash).toBeLessThan(0.3);
    // Smooth: no cut on release (< 12 cm and < 1.5° per 60 Hz frame).
    expect(maxMove).toBeLessThan(0.12);
    expect(maxFov).toBeLessThan(1.5);
    // Back on the follow lens.
    expect(cam.camera.fov).toBeGreaterThan(56);
  });
});

// ── 8. Review findings ──────────────────────────────────────────────────────
describe('리뷰 회귀', () => {
  function frozenHands(hz: number, phase: number, id: string) {
    const { w, e } = duelWorld('dummy', 2.2);
    e.hp = 9999;
    e.maxHp = 9999;
    e.maxPosture = 9999;
    const sim = new Sim(w, hz);
    // Shift the frame phase against the 60 Hz tick.
    w.update(phase / 60, emptyInput());
    sim.run(2);
    sim.tap(getMove(id).type === 'thrust' ? 'thrust' : 'slash');
    const out: THREE.Vector3[] = [];
    sim.run(Math.round(hz * 0.6), (f, v) => {
      // The timeline pose (before the feet lower the body to fit the stance).
      // Hit-stop holds the impact frame (the display has reached the contact tick: alpha = 1).
      if (f.isPlayer && w.hitstop > 0 && w.alpha >= 1 && f.act.kind === 'attack') out.push(v.anim.rawPose.handR.clone());
    });
    return out;
  }

  it('히트스톱 동안의 포즈는 프레임 위상·주사율과 무관하게 정확히 타격 키다', () => {
    for (const id of ['r_s1', 'r_t1']) {
      const strike = stanceKeyPose('player', __animTest.RANGER[id].strike);
      for (const hz of [30, 60, 75, 144]) {
        for (const phase of [0, 0.3, 0.7]) {
          const hands = frozenHands(hz, phase, id);
          expect(hands.length, `${id} ${hz}Hz φ${phase}`).toBeGreaterThan(0);
          for (const h of hands) expect(h.distanceTo(strike.handR), `${id} ${hz}Hz φ${phase}`).toBeLessThan(0.01);
        }
      }
    }
  });

  it('일섬: 처치·히트스톱 프레임의 자세가 일섬 타격 키다', () => {
    const { w, e } = duelWorld('ronin', 2.0);
    const sim = new Sim(w, 60);
    sim.run(2);
    doIssen(w, w.player, e, false);
    const strike = stanceKeyPose('player', { hand: [-0.1, 1.1, 0.5], blade: [0.2, -0.1, 1], edge: [0, 1, 0], torso: 0.1, lean: 0.35, pelvisY: 0.8, step: 0.45 });
    let n = 0;
    sim.run(20, (f, v) => {
      if (f.isPlayer && w.hitstop > 0 && w.alpha >= 1) {
        expect(v.anim.rawPose.handR.distanceTo(strike.handR)).toBeLessThan(0.02);
        n++;
      }
    });
    expect(n).toBeGreaterThan(3);
  });

  it('쓰러진 시체는 플레이어가 주위를 돌아도, 시간이 지나도 자세가 바뀌지 않는다', () => {
    for (const mode of ['finisher', 'kill'] as const) {
      const { w, e } = duelWorld('ronin', 2.0);
      const sim = new Sim(w, 60);
      sim.run(2);
      if (mode === 'finisher') {
        e.set('broken', 400);
        startFinisher(w, w.player, e, 'thrust');
      } else {
        e.hp = 1;
        sim.tap('slash');
      }
      sim.run(200);
      expect(e.act.kind).toBe('dead');
      const ref = JSON.parse(JSON.stringify(sim.view(e).anim.pose)) as Pose;
      let maxD = 0;
      for (const [x, z] of [[2, 0], [0, 4], [-2, 2], [1, -1]]) {
        w.player.pos = { x, z };
        w.player.prevPos = { x, z };
        sim.run(40, (f, _v, pose) => {
          if (f.id === e.id) maxD = Math.max(maxD, Math.abs(pose.bodyPitch - ref.bodyPitch) + Math.abs(pose.bodyRoll - ref.bodyRoll));
        });
      }
      expect(maxD, mode).toBeLessThan(1e-6);
    }
  });

  it('반격으로 밀려난 적에게 피니쉬: 피해자는 제자리에 붙잡혀 contact 거리가 유지된다', () => {
    for (const kind of ['slash', 'thrust'] as const) {
      const { w, d, p, e } = duel('ronin', 2.0);
      e.set('broken', 400);
      e.kb = { x: 0, z: 4.5 };
      startFinisher(w, p, e, kind);
      let dist = -1;
      for (let i = 0; i < 60 && dist < 0; i++) {
        d.step();
        if (d.events.some((ev) => ev.type === 'finisherImpact')) dist = Math.hypot(e.pos.x - p.pos.x, e.pos.z - p.pos.z);
      }
      expect(dist, kind).toBeCloseTo(FINISHER_TL[kind].stand + e.radius * 0.6, 1);
    }
  });

  it('구르기가 끝나면(360° 회전 후 직립) 발이 다시 땅을 딛고 착지 이벤트가 난다', () => {
    const w = soloWorld();
    const sim = new Sim(w, 60);
    sim.move = { x: 0, z: 1 };
    sim.run(5);
    sim.tap('dodge');
    sim.run(3);
    sim.tap('dodge');
    let rolled = false;
    let landedAfterRoll = false;
    sim.run(50, (f, v, pose) => {
      if (!f.isPlayer) return;
      if (f.act.kind === 'dodge' && Math.abs(pose.bodyPitch) > 3) rolled = true;
      if (rolled && v.anim.landings.length) landedAfterRoll = true;
    });
    expect(rolled).toBe(true);
    expect(landedAfterRoll).toBe(true);
  });

  it('질풍참·허초: coil 구간이 없어도 손이 한 번에 튀지 않는다', () => {
    for (const [kind, id] of [['player', 'r_gale'], ['ronin', 'ro_feint']] as const) {
      const w = soloWorld();
      const e = w.spawn('ronin', { x: 0, z: 3 }, Math.PI);
      e.brain!.aware = false;
      const f = kind === 'player' ? w.player : e;
      const anim = new Animator(kind);
      if (id === 'r_gale') f.set('gale', 45, {});
      else f.set('attack', 40, { move: getMove(id) });
      const root = new THREE.Vector3();
      let last: THREE.Vector3 | null = null;
      let maxStep = 0;
      // Fine sampling: fast but continuous motion moves < 1 cm per 0.01 tick; a pop does not.
      for (let i = 0; i <= 3000; i++) {
        const t = i / 100;
        f.act.t = Math.floor(t);
        w.alpha = t - Math.floor(t);
        anim.update(f, w, w.alpha, 0.01 / 60, root, 0);
        const pose = anim.rawPose;
        if (last) maxStep = Math.max(maxStep, pose.handR.distanceTo(last));
        last = pose.handR.clone();
      }
      expect(maxStep, id).toBeLessThan(0.015);
    }
  });
});

describe('시네마틱 · 재타격', () => {
  it('연쇄 대치에서 다음 적으로 넘어가면 측면 구도로 다시 잡는다 (한 명이 다른 명을 가리지 않음)', () => {
    const cam = new CameraRig(16 / 9);
    const player = new THREE.Vector3(0, 0, 0);
    const opts = { aiming: false, lockTarget: null, crowd: 0, moveDir: null, slowmo: false };
    const view = (leader: THREE.Vector3) => {
      for (let i = 0; i < 90; i++) {
        cam.cinematic(player, leader, 'standoff', 0.2);
        cam.update(1 / 60, player, opts);
      }
      const dir = new THREE.Vector3();
      cam.camera.getWorldDirection(dir);
      const line = leader.clone().sub(player).normalize();
      return Math.abs(dir.setY(0).normalize().dot(line));
    };
    expect(view(new THREE.Vector3(0, 0, 6))).toBeLessThan(0.35);
    // The next enemy stands at 90° to the first: the shot must turn to profile it too.
    expect(view(new THREE.Vector3(6, 0, 0))).toBeLessThan(0.35);
  });

  it('일섬으로 쓰러지는 중인 적에게 바로 앞에서 공격해도 맞지 않고 처치도 늘지 않는다', () => {
    const { w, d, p, e } = duel('ronin', 2.0);
    doIssen(w, p, e, false);
    // Wait for the performer's pass-through to end while the victim is still 'finished'.
    while (p.act.kind === 'issen') d.tick();
    expect(e.act.kind).toBe('finished');
    // Stand right in front of the dying victim, facing it, and attack with everything.
    p.pos = { x: e.pos.x, z: e.pos.z - 1.3 };
    p.prevPos = { ...p.pos };
    p.yaw = 0;
    const hitsBefore = d.events.filter((ev) => ev.type === 'hit' && ev.target === e.id).length;
    let active = 0;
    for (let i = 0; i < 24 && e.act.kind === 'finished'; i++) {
      if (i % 8 === 0) d.tap(i % 16 === 0 ? 'slash' : 'thrust');
      else d.tick();
      if (p.act.kind === 'attack' && p.act.move && p.act.t >= p.act.move.startup && p.act.t < p.act.move.startup + p.act.move.active) active++;
    }
    expect(active).toBeGreaterThan(0); // the attacks really reached their active frames
    expect(d.events.filter((ev) => ev.type === 'hit' && ev.target === e.id).length).toBe(hitsBefore);
    expect(w.stats.kills).toBe(1);
    expect(d.count('kill')).toBe(1);
  });
});

// ── 9. Review round 2 ───────────────────────────────────────────────────────
describe('리뷰 회귀 2', () => {
  function holdFrames(setup: (w: World, sim: Sim, e: Fighter) => void, who: (w: World, e: Fighter) => Fighter, arch: 'ronin' | 'shield', hz = 60) {
    const { w, e } = duelWorld(arch, 2.2);
    const sim = new Sim(w, hz);
    sim.run(3);
    setup(w, sim, e);
    const hands: THREE.Vector3[] = [];
    sim.run(Math.round(hz * 1.2), (f, v) => {
      if (f === who(w, e) && w.hitstop > 0 && w.alpha >= 1) hands.push(v.anim.rawPose.handR.clone());
    });
    return hands;
  }

  it('튕기기·흘리기·방패에 튕김: 공격이 막혀 동작이 바뀌어도 히트스톱 동안 공격자는 타격 키다', () => {
    const ro = getMove('ro_cut2');
    const roStrike = stanceKeyPose('ronin', __animTest.swingFor('katana', ro)!.strike);
    // Deflect (buckler right before the blow) and flow (buckler + dodge).
    for (const kind of ['deflect', 'flow'] as const) {
      const hands = holdFrames(
        (w, sim, e) => {
          startEnemyAttack(w, e, ro);
          e.brain!.aware = false;
          sim.run(ro.startup - 5);
          sim.press('guard');
          if (kind === 'flow') {
            sim.frame();
            sim.tap('dodge');
          }
        },
        (_w, e) => e,
        'ronin',
      );
      expect(hands.length, kind).toBeGreaterThan(0);
      // The attacker was replaced on its contact tick (recoil / overextended) — its first held
      // frame is still the blow at contact.
      expect(hands[0].distanceTo(roStrike.handR), kind).toBeLessThan(0.02);
    }
    // The player's slash bounced off a shield.
    const s1 = getMove('r_s1');
    const strike = stanceKeyPose('player', __animTest.RANGER.r_s1.strike);
    const hands = holdFrames((_w, sim) => sim.tap('slash'), (w) => w.player, 'shield');
    expect(hands.length).toBeGreaterThan(0);
    expect(hands[0].distanceTo(strike.handR)).toBeLessThan(0.02);
    void s1;
  });

  it('피격·사운드 이벤트의 틱 = 화면이 접촉 틱을 보여주는 순간', () => {
    const { w, e } = duelWorld('dummy', 2.2);
    e.hp = 9999;
    e.maxHp = 9999;
    e.maxPosture = 9999;
    const sim = new Sim(w, 60);
    sim.run(2);
    const strike = stanceKeyPose('player', __animTest.RANGER.r_s1.strike);
    sim.tap('slash');
    let hitTick = -1;
    let checked = false;
    for (let i = 0; i < 40 && !checked; i++) {
      const n0 = sim.events.length;
      sim.frame((f, v) => {
        if (!f.isPlayer) return;
        // The frame the game would dispatch the hit (display reached the event's tick) shows the strike key.
        if (hitTick >= 0 && w.displayTick >= hitTick - 1e-6) {
          expect(v.anim.rawPose.handR.distanceTo(strike.handR)).toBeLessThan(0.02);
          checked = true;
        }
      });
      if (hitTick < 0 && sim.events.slice(n0).some((x) => x.ev.type === 'hit')) hitTick = w.tick;
    }
    expect(checked).toBe(true);
  });

  it('활: 화살이 날아가는 프레임에 시위에 걸린 화살이 동시에 보이지 않는다', () => {
    const w = soloWorld();
    const e = w.spawn('archer', { x: 0, z: 12 }, Math.PI);
    e.brain!.aware = false;
    e.brain!.cooldown = 1e9;
    const sim = new Sim(w, 144);
    sim.run(3);
    const shot = getMove('ac_shot');
    startEnemyAttack(w, e, shot);
    e.brain!.aware = false;
    let both = 0;
    sim.run(Math.round(((shot.startup + 10) / 60) * 144), (f, v) => {
      if (f.id !== e.id) return;
      if (w.projectiles.some((pr) => pr.ownerId === e.id && pr.alive && !pr.stuck) && v.anim.rawPose.bowDraw > 0.3) both++;
    });
    expect(both).toBe(0);
  });

  it('일반 사망 쓰러짐은 슬로모·고주사율에서도 매 프레임 부드럽게 진행된다', () => {
    const { w, e } = duelWorld('ronin', 2.0);
    e.hp = 1;
    const sim = new Sim(w, 144);
    sim.run(3);
    sim.tap('slash');
    w.slowmo(0.22, 5);
    let frames = 0;
    let still = 0;
    let last = -1;
    let lastSig = 0;
    sim.run(400, (f, v) => {
      if (f.id !== e.id || f.act.kind !== 'dead') return;
      const q = v.anim.rawPose;
      const p = q.pelvis.y;
      // Whole-body signature (the pelvis alone may rest a beat at the kneel while the torso tips).
      const sig = p + q.lean + q.roll + q.handR.x + q.handR.y + q.handR.z + q.headPitch;
      // The kill's hit-stop holds the whole frame on purpose; the fall must move on every other frame.
      if (last >= 0 && p > 0.25 && w.hitstop === 0) {
        frames++;
        if (Math.abs(sig - lastSig) < 1e-7) still++;
      }
      last = p;
      lastSig = sig;
    });
    expect(frames).toBeGreaterThan(20);
    expect(still).toBe(0);
  });

  it('튕기기 일섬: 멈춘 순간 일섬 주인공은 아직 제자리(돌진은 멈춤이 풀린 뒤)', () => {
    const { w, e } = duelWorld('ronin', 2.2);
    const sim = new Sim(w, 60);
    sim.run(3);
    const z0 = w.player.pos.z;
    doIssen(w, w.player, e, true);
    // Emulate the input path: the next tick's action pass runs with the issen already set.
    sim.frame();
    let moved = 0;
    sim.run(20, (f) => {
      if (f.isPlayer && w.hitstop > 0) moved = Math.max(moved, Math.abs(f.pos.z - z0));
    });
    expect(moved).toBeLessThan(1e-6);
  });

  it('카메라: 일시정지 중에는 시네마틱 안전 타이머가 흐르지 않는다', () => {
    const cam = new CameraRig(16 / 9);
    const a = new THREE.Vector3(0, 0, 0);
    const b = new THREE.Vector3(0, 0, 2);
    const opts = { aiming: false, lockTarget: null, crowd: 0, moveDir: null, slowmo: false };
    cam.cinematic(a, b, 'finisher', 1, 2);
    cam.track(a, b, null, 0, 0.2);
    for (let i = 0; i < 600; i++) cam.update(0, a, opts); // 10 s paused
    expect(cam.inCinematic).toBe(true);
    for (let i = 0; i < 200; i++) {
      cam.track(a, b, null, 0, 0.2);
      cam.update(1 / 60, a, opts);
    }
    expect(cam.inCinematic).toBe(false); // the safety net still works once time runs
  });

  it('카메라: 초점이 없을 때도 샷은 움직이는 두 인물의 중점을 따라간다', () => {
    const cam = new CameraRig(16 / 9);
    const perf = new THREE.Vector3(0, 0, 0);
    const vic = new THREE.Vector3(0, 0, 4);
    const opts = { aiming: false, lockTarget: null, crowd: 0, moveDir: null, slowmo: false };
    cam.cinematic(perf, vic, 'finisher', 5, 5);
    for (let i = 0; i < 90; i++) {
      perf.z = Math.min(3, perf.z + 0.05); // performer dashes in; no focus weight
      cam.track(perf, vic, null, 0, i / 180);
      cam.update(1 / 60, perf, opts);
    }
    const dir = new THREE.Vector3();
    cam.camera.getWorldDirection(dir);
    const p = cam.camera.position;
    const live = perf.clone().add(vic).multiplyScalar(0.5).setY(1.1).sub(p).normalize();
    const stale = new THREE.Vector3(0, 1.1, 2).sub(p).normalize();
    expect(dir.angleTo(live)).toBeLessThan(0.05);
    expect(dir.angleTo(stale)).toBeGreaterThan(0.1);
  });

  it('발: 달리다 공격하면 디딤발이 스케이트 없이 contact 무렵 디딘다', () => {
    for (const hz of [60, 144]) {
      const { w, e } = duelWorld('dummy', 8);
      e.hp = 9999;
      e.maxHp = 9999;
      e.maxPosture = 9999;
      const sim = new Sim(w, hz);
      sim.move = { x: 0, z: 1 };
      sim.run(Math.round(0.35 * hz));
      sim.move = { x: 0, z: 0 };
      sim.tap('slash');
      let skid = 0;
      const prev = new THREE.Vector3();
      let have = false;
      sim.run(Math.round(0.4 * hz), (f, v) => {
        if (!f.isPlayer) return;
        const L = footWorld(v.char, 'L');
        if (have && L.y < 0.005 && prev.y < 0.005) skid = Math.max(skid, Math.hypot(L.x - prev.x, L.z - prev.z));
        prev.copy(L);
        have = true;
      });
      expect(skid, `${hz}Hz`).toBeLessThan(0.02);
    }
  });

  it('발: 달리다 급반전해도 디딘 발이 몸과 반대로 꺾인 채 남지 않는다', () => {
    const w = soloWorld();
    const sim = new Sim(w, 60);
    sim.move = { x: 0, z: 1 };
    sim.run(40);
    sim.move = { x: 0, z: -1 };
    let worst = 0;
    sim.run(40, (f, v) => {
      if (!f.isPlayer) return;
      const p = v.anim.pose;
      for (const i of [0, 1] as const) if (v.anim.planter.isPlanted(i)) worst = Math.max(worst, Math.abs(i === 0 ? p.footYawL : p.footYawR));
    });
    expect(worst).toBeLessThan(1.75);
  });

  it('발: 첫 발은 주사율과 무관하게 같은 발이다', () => {
    const first = [30, 60, 120, 144, 240].map((hz) => {
      const w = soloWorld();
      const sim = new Sim(w, hz);
      sim.run(3);
      sim.move = { x: 0, z: 1 };
      let foot = -1;
      sim.run(hz, (f, v) => {
        if (f.isPlayer && foot < 0 && v.anim.landings.length) foot = v.anim.landings[0].foot;
      });
      return foot;
    });
    expect(new Set(first).size).toBe(1);
  });

  it('활 조준 중 옆걸음: 활 든 손 높이가 흔들리지 않는다', () => {
    const w = soloWorld();
    const sim = new Sim(w, 144);
    sim.run(3);
    sim.press('aim');
    sim.run(40);
    sim.move = { x: 1, z: 0 };
    let lo = Infinity;
    let hi = -Infinity;
    sim.run(200, (f, v) => {
      if (!f.isPlayer) return;
      const y = v.char.jHandL.y;
      lo = Math.min(lo, y);
      hi = Math.max(hi, y);
    });
    expect(hi - lo).toBeLessThan(0.02);
  });
});

// ── 7. Combo continuity ─────────────────────────────────────────────────────
describe('연격 연결', () => {
  it('베기→찌르기→베기 연격 중 손·칼끝이 순간이동하지 않고 기본 자세로 돌아가지 않는다', () => {
    const { w, e } = duelWorld('dummy', 2.4);
    e.hp = 9999;
    e.maxHp = 9999;
    e.maxPosture = 9999;
    const sim = new Sim(w, 60);
    sim.run(3);
    const stance = stanceKeyPose('player', {});
    let maxJump = 0;
    let maxTransitionJump = 0;
    const last = new THREE.Vector3();
    const hand = new THREE.Vector3();
    let lastSerial = -1;
    let have = false;
    let backToStance = 0;
    let moves: string[] = [];
    const seq: Button[] = ['slash', 'thrust', 'slash', 'thrust'];
    for (const b of seq) {
      sim.tap(b);
      sim.run(14, (f, v, pose) => {
        if (!f.isPlayer) return;
        // Sword hand in world space (the root turns / lunges too).
        hand.copy(v.char.jHandR).applyMatrix4(v.char.root.matrixWorld);
        if (have && sim.w.hitstop === 0) {
          const j = hand.distanceTo(last);
          maxJump = Math.max(maxJump, j);
          if (f.serial !== lastSerial) maxTransitionJump = Math.max(maxTransitionJump, j);
        }
        last.copy(hand);
        lastSerial = f.serial;
        have = true;
        if (f.act.kind === 'attack') {
          if (!moves.includes(f.act.move!.id)) moves = [...moves, f.act.move!.id];
          // Between chained moves the hand never parks at the neutral stance.
          if (f.act.t <= 2 && moves.length > 1 && pose.handR.distanceTo(stance.handR) < 0.03) backToStance++;
        }
      });
    }
    expect(moves.length).toBeGreaterThanOrEqual(3);
    // The next move starts exactly where the previous one was (no pop on the transition frame)…
    expect(maxTransitionJump).toBeLessThan(0.3);
    // …and the hand never teleports (a fast cut + lunge moves it well under 0.45 m per 60 Hz frame).
    expect(maxJump).toBeLessThan(0.45);
    expect(backToStance).toBe(0);
  });
});

void startEnemyAttack;
void Driver;
void ISSEN_TL;
void (null as unknown as MoveDef);
