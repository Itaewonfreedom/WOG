import { ARCHETYPES } from './archetypes';
import { Fighter } from './fighter';
import { emptyInput, InputBuffer, type Button, type InputFrame } from './input';
import { add, clamp, dist, fromYaw, len, norm, Rng, scale, sub, turnToward, type Vec2 } from './math';
import { DT, T } from './tuning';
import type { ArchetypeId, ArrowType, CombatEvent, Projectile } from './types';
import { killBookkeeping, stepAttack, stepGale, stepScripted } from './combat';
import { updatePlayer } from './player';
import { updateAI, makeBrain } from './ai';
import { stepProjectiles } from './bow';
import { WaveDirector } from './waves';
import { Standoff } from './standoff';

export interface PlayerState {
  resolve: number;
  arrows: Record<ArrowType, number>;
  arrowType: ArrowType;
  /** Tick the buckler was raised by a fresh press (-inf when raised by holding). */
  guardStartTick: number;
  prevGuardStartTick: number;
  attackPressTick: number;
  prevAttackPressTick: number;
  dodgePressTick: number;
  lastDodgeEnd: number;
  dodgeCounterUntil: number;
  riposteTarget: number;
  riposteUntil: number;
  hajikiTarget: number;
  hajikiUntil: number;
  flowTarget: number;
  flowUntil: number;
  issenChain: number;
  issenChainUntil: number;
  /** Ticks the bow string has been drawn. */
  draw: number;
  focusing: boolean;
  /** Real seconds of free slow-mo left from aiming right after a dodge. */
  dodgeAimSlowmo: number;
  lockTarget: number | null;
  /** Enemy the next attack would home in on (for the HUD). */
  softTarget: number | null;
  /** Enemy that a finisher input would execute right now (for the prompt). */
  finisherTarget: number | null;
  finisherKindHint: 'finisher' | 'flow' | 'hajiki' | null;
  galeTargets: number[];
  combo: number;
  comboTimer: number;
  /** Id of the dodge instance that already produced a perfect dodge. */
  perfectDodgeTick: number;
  lastPerfectDodgeTick: number;
  /** Tick of the last successful deflect (chain deflects are exempt from the spam penalty). */
  lastDeflectTick: number;
}

export interface WorldSettings {
  /** Multiplies the deflect / flow / issen timing windows (1.5 = easy, 0.75 = hard). */
  windowScale: number;
  invincible: boolean;
  /** Enemy damage multiplier. */
  enemyDamage: number;
}

export interface Stats {
  deflects: number;
  flows: number;
  issens: number;
  maxIssenChain: number;
  finishers: number;
  headshots: number;
  kills: number;
  perfectDodges: number;
  effectiveHits: number;
  badHits: number;
  standoffKills: number;
  damageTaken: number;
  time: number;
}

export type WorldMode = 'combat' | 'standoff' | 'intermission' | 'victory' | 'defeat';

interface Slowmo {
  scale: number;
  left: number;
}

export class World {
  tick = 0;
  readonly fighters: Fighter[] = [];
  readonly projectiles: Projectile[] = [];
  readonly player: Fighter;
  readonly ps: PlayerState;
  readonly buffer = new InputBuffer();
  readonly rng: Rng;
  readonly settings: WorldSettings = { windowScale: 1, invincible: false, enemyDamage: 1 };
  readonly stats: Stats = { deflects: 0, flows: 0, issens: 0, maxIssenChain: 0, finishers: 0, headshots: 0, kills: 0, perfectDodges: 0, effectiveHits: 0, badHits: 0, standoffKills: 0, damageTaken: 0, time: 0 };
  mode: WorldMode = 'combat';
  waves: WaveDirector | null = null;
  readonly standoff: Standoff;
  /** Remaining frozen ticks (hit-stop). */
  hitstop = 0;
  /** Fraction between the last two ticks, for render interpolation. */
  alpha = 0;
  timeScale = 1;
  input: InputFrame = emptyInput();
  private events: CombatEvent[] = [];
  private slowmos: Slowmo[] = [];
  private acc = 0;
  private pending: { pressed: Partial<Record<Button, boolean>>; released: Partial<Record<Button, boolean>> } = { pressed: {}, released: {} };
  private nextId = 1;
  private nextProjectileId = 1;
  /** Seen archetypes (first-appearance tips). */
  readonly seen = new Set<ArchetypeId>();

  constructor(seed = 20260929) {
    this.rng = new Rng(seed);
    this.player = new Fighter(this.nextId++, 'player', null, { x: 0, z: 0 }, 0, 100, T.playerMaxPosture, 0.4);
    this.fighters.push(this.player);
    this.ps = {
      resolve: 1,
      arrows: { ...T.maxArrows },
      arrowType: 'standard',
      guardStartTick: -9999,
      prevGuardStartTick: -9999,
      attackPressTick: -9999,
      prevAttackPressTick: -9999,
      dodgePressTick: -9999,
      lastDodgeEnd: -9999,
      dodgeCounterUntil: -1,
      riposteTarget: -1,
      riposteUntil: -1,
      hajikiTarget: -1,
      hajikiUntil: -1,
      flowTarget: -1,
      flowUntil: -1,
      issenChain: 0,
      issenChainUntil: -1,
      draw: 0,
      focusing: false,
      dodgeAimSlowmo: 0,
      lockTarget: null,
      softTarget: null,
      finisherTarget: null,
      finisherKindHint: null,
      galeTargets: [],
      combo: 0,
      comboTimer: 0,
      perfectDodgeTick: -1,
      lastPerfectDodgeTick: -9999,
      lastDeflectTick: -9999,
    };
    this.standoff = new Standoff();
  }

  // ── Entities ────────────────────────────────────────────────────────────
  spawn(archId: ArchetypeId, pos: Vec2, yaw?: number): Fighter {
    const a = ARCHETYPES[archId];
    const f = new Fighter(this.nextId++, 'enemy', a, pos, yaw ?? this.player.yawTo(pos) + Math.PI, a.hp, a.posture, a.radius);
    f.yaw = yaw ?? Math.atan2(this.player.pos.x - pos.x, this.player.pos.z - pos.z);
    f.prevYaw = f.yaw;
    f.size = archId === 'armored' ? 1.1 : archId === 'boss' ? 1.12 : archId === 'duelist' ? 0.96 : 1;
    f.brain = makeBrain(this, f);
    this.fighters.push(f);
    return f;
  }

  get(id: number | null | undefined): Fighter | undefined {
    if (id === null || id === undefined || id < 0) return undefined;
    return this.fighters.find((f) => f.id === id);
  }

  enemies(): Fighter[] {
    return this.fighters.filter((f) => f.team === 'enemy');
  }

  liveEnemies(): Fighter[] {
    return this.fighters.filter((f) => f.team === 'enemy' && f.alive);
  }

  removeCorpses(): void {
    for (let i = this.fighters.length - 1; i >= 0; i--) {
      const f = this.fighters[i];
      if (f.team === 'enemy' && !f.alive) this.fighters.splice(i, 1);
    }
    for (let i = this.projectiles.length - 1; i >= 0; i--) if (this.projectiles[i].stuckTo !== undefined) this.projectiles.splice(i, 1);
  }

  newProjectileId(): number {
    return this.nextProjectileId++;
  }

  // ── Events & time ───────────────────────────────────────────────────────
  emit(e: CombatEvent): void {
    this.events.push(e);
  }

  drainEvents(): CombatEvent[] {
    const e = this.events;
    this.events = [];
    return e;
  }

  /** Request slow motion for `seconds` of real time. The strongest active request wins. */
  slowmo(scale: number, seconds: number): void {
    this.slowmos.push({ scale, left: seconds });
  }

  freeze(ticks: number): void {
    this.hitstop = Math.max(this.hitstop, ticks);
  }

  /** Scale a timing window by the difficulty setting. */
  win(ticks: number): number {
    return Math.round(ticks * this.settings.windowScale);
  }

  // ── Main loop ───────────────────────────────────────────────────────────
  /** Advance by real seconds. Returns number of simulation ticks executed. */
  update(realDt: number, input: InputFrame): number {
    realDt = Math.min(realDt, 0.1);
    // Merge edge-triggered input so presses are never lost when no tick runs this frame.
    for (const k in input.pressed) if (input.pressed[k as Button]) this.pending.pressed[k as Button] = true;
    for (const k in input.released) if (input.released[k as Button]) this.pending.released[k as Button] = true;

    // Time control
    let ts = 1;
    for (const s of this.slowmos) {
      s.left -= realDt;
      ts = Math.min(ts, s.scale);
    }
    this.slowmos = this.slowmos.filter((s) => s.left > 0);
    if (this.ps.focusing) {
      ts = Math.min(ts, T.focusScale);
      this.ps.resolve = Math.max(0, this.ps.resolve - T.focusDrainPerSec * realDt);
      if (this.ps.resolve <= 0) this.ps.focusing = false;
    }
    if (this.ps.dodgeAimSlowmo > 0 && this.player.act.kind === 'aim') {
      ts = Math.min(ts, 0.4);
      this.ps.dodgeAimSlowmo -= realDt;
    }
    this.timeScale = ts;
    this.stats.time += realDt;

    this.acc += realDt * ts;
    let n = 0;
    while (this.acc >= DT && n < 8) {
      this.acc -= DT;
      const frame: InputFrame = { ...input, pressed: n === 0 ? this.pending.pressed : {}, released: n === 0 ? this.pending.released : {} };
      this.step(frame);
      if (n === 0) this.pending = { pressed: {}, released: {} };
      n++;
    }
    if (n === 8) this.acc = 0;
    this.alpha = this.acc / DT;
    return n;
  }

  /** One fixed simulation tick. */
  step(input: InputFrame): void {
    this.input = input;
    this.buffer.record(input, this.tick);

    if (this.hitstop > 0) {
      this.hitstop--;
      return;
    }
    this.tick++;

    for (const f of this.fighters) {
      f.prevPos = { ...f.pos };
      f.prevYaw = f.yaw;
    }

    if (this.mode === 'standoff') this.standoff.update(this, input);
    else updatePlayer(this, input);
    updateAI(this);

    // Pass 1: advance actions & move.
    for (const f of this.fighters) this.stepFighter(f);
    // Pass 2: active hit windows (player first → player wins trades).
    for (const f of this.fighters) {
      if (!f.alive) continue;
      if (f.act.kind === 'attack') stepAttack(this, f);
      else if (f.act.kind === 'gale') stepGale(this, f);
    }
    stepProjectiles(this);
    this.separate();
    this.waves?.update(this);

    if (this.ps.comboTimer > 0 && --this.ps.comboTimer === 0) this.ps.combo = 0;
  }

  private stepFighter(f: Fighter): void {
    f.age++;
    if (f.hitFlash > 0) f.hitFlash--;
    if (f.glint && ++f.glint.t > 36) f.glint = null;
    if (f.shieldOpen > 0) f.shieldOpen--;
    if (!f.alive) {
      f.deadTicks++;
      f.kb = scale(f.kb, 0.85);
      f.pos = add(f.pos, scale(f.kb, DT));
      return;
    }
    if (f.burning > 0 && !f.is('finished')) {
      f.burning--;
      if (f.burning % 20 === 0) {
        f.hp -= T.burnDps / 3;
        f.hitFlash = 4;
        if (f.hp <= 0) {
          f.hp = 0;
          f.set('dead', Infinity);
          f.deathKind = 'burn';
          killBookkeeping(this, f, 'burn');
          return;
        }
      }
    }
    f.regenPosture();

    const a = f.act;
    a.t++;
    let move: Vec2 = { x: 0, z: 0 };

    switch (a.kind) {
      case 'free':
      case 'guard':
      case 'aim':
      case 'heal':
        move = scale(f.vel, DT);
        break;
      case 'fear':
        move = scale(f.vel, DT);
        break;
      default:
        move = stepScripted(this, f);
    }

    const kbStep = scale(f.kb, DT);
    f.kb = scale(f.kb, 0.84);
    if (len(f.kb) < 0.05) f.kb = { x: 0, z: 0 };
    const total = add(move, kbStep);
    f.pos = add(f.pos, total);
    f.speed = len(total) / DT;

    if (a.t >= a.dur) this.endAction(f);
  }

  private endAction(f: Fighter): void {
    const k = f.act.kind;
    if (k === 'broken') {
      f.posture = f.maxPosture * 0.4;
    }
    if (k === 'dodge') this.ps.lastDodgeEnd = this.tick;
    if (k === 'finished') {
      if (f.hp <= 0) {
        f.set('dead', Infinity);
        return;
      }
      f.set('stagger', 30);
      return;
    }
    if (k === 'heal' && f.isPlayer) {
      const amt = f.maxHp * T.healFrac;
      f.hp = Math.min(f.maxHp, f.hp + amt);
      this.ps.resolve = Math.max(0, this.ps.resolve - T.healCost);
      this.emit({ type: 'heal', id: f.id, amount: amt });
    }
    f.set('free', Infinity);
    // Keep holding guard/aim seamlessly.
    if (f.isPlayer) {
      if (this.input.held.aim) f.set('aim', Infinity);
      else if (this.input.held.guard) {
        // A press made during the stun still counts as fresh (deflect-capable).
        const pt = this.buffer.pressTick.get('guard') ?? -9999;
        const fresh = this.buffer.consume('guard', this.tick, T.inputBuffer);
        f.set('guard', Infinity);
        this.ps.prevGuardStartTick = this.ps.guardStartTick;
        this.ps.guardStartTick = fresh ? pt : -9999;
      }
    }
  }

  /** Soft circle separation + arena bounds. */
  private separate(): void {
    const live = this.fighters.filter((f) => f.alive && !f.is('finished', 'finisher', 'issen', 'flow', 'gale'));
    for (let i = 0; i < live.length; i++) {
      for (let j = i + 1; j < live.length; j++) {
        const a = live[i];
        const b = live[j];
        const d = dist(a.pos, b.pos);
        const min = a.radius + b.radius;
        if (d < min && d > 1e-4) {
          const push = scale(norm(sub(b.pos, a.pos)), (min - d) * 0.5);
          // Dodging player slips through enemies instead of being blocked.
          const aw = a.isPlayer && a.is('dodge') ? 0.2 : 1;
          const bw = b.isPlayer && b.is('dodge') ? 0.2 : 1;
          a.pos = sub(a.pos, scale(push, aw));
          b.pos = add(b.pos, scale(push, bw));
        }
      }
    }
    for (const f of this.fighters) {
      const r = len(f.pos);
      if (r > T.arenaRadius) f.pos = scale(f.pos, T.arenaRadius / r);
    }
  }

  // ── Helpers used by controllers ─────────────────────────────────────────
  faceToward(f: Fighter, p: Vec2, rate: number): void {
    f.yaw = turnToward(f.yaw, f.yawTo(p), rate);
  }

  pushBack(f: Fighter, dir: Vec2, meters: number): void {
    const d = norm(dir);
    f.kb = add(f.kb, scale(d, meters * 9));
  }

  /** A point `d` meters in front of fighter f. */
  ahead(f: Fighter, d: number): Vec2 {
    return add(f.pos, scale(fromYaw(f.yaw), d));
  }

  gainResolve(amount: number): void {
    const before = this.ps.resolve;
    this.ps.resolve = clamp(this.ps.resolve + amount, 0, T.resolveMax);
    if (this.ps.resolve !== before) this.emit({ type: 'resolve', amount, total: this.ps.resolve });
  }
}
