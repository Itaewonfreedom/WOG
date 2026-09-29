import type { Action, ActionKind, Archetype, Brain, Team } from './types';
import { angleDiff, dist, fromYaw, sub, toYaw, type Vec2 } from './math';
import { T } from './tuning';

export interface Glint {
  color: 'blue' | 'red';
  t: number;
}

export class Fighter {
  readonly id: number;
  readonly team: Team;
  readonly arch: Archetype | null;
  pos: Vec2;
  prevPos: Vec2;
  yaw: number;
  prevYaw: number;
  radius: number;
  /** Planar velocity requested by locomotion (m/s). */
  vel: Vec2 = { x: 0, z: 0 };
  /** Knock-back velocity (m/s), decays every tick. */
  kb: Vec2 = { x: 0, z: 0 };
  hp: number;
  maxHp: number;
  /** Accumulated posture damage; broken at maxPosture. */
  posture = 0;
  maxPosture: number;
  postureIdle = 0;
  act: Action = { kind: 'free', t: 0, dur: Infinity };
  /** Enemy-only: ticks the big shield is knocked aside. */
  shieldOpen = 0;
  burning = 0;
  /** Boss phase (1 = armored, 2 = armor shattered). */
  phase: 1 | 2 = 1;
  hitFlash = 0;
  glint: Glint | null = null;
  /** Ticks since spawn. */
  age = 0;
  /** Set once dead – corpse stays for rendering. */
  deadTicks = 0;
  /** Current movement speed for animation blending. */
  speed = 0;
  /** Which finisher killed this fighter (for the death animation). */
  deathKind: string | null = null;
  /** Enemy AI memory (null for the player). */
  brain: Brain | null = null;
  /** Rendering scale (armored / boss are bigger). */
  size = 1;
  /** Recent consecutive hits taken (stun-lock protection). */
  poiseHits = 0;
  poiseTimer = 0;

  constructor(id: number, team: Team, arch: Archetype | null, pos: Vec2, yaw: number, hp: number, posture: number, radius: number) {
    this.id = id;
    this.team = team;
    this.arch = arch;
    this.pos = { ...pos };
    this.prevPos = { ...pos };
    this.yaw = yaw;
    this.prevYaw = yaw;
    this.hp = hp;
    this.maxHp = hp;
    this.maxPosture = posture;
    this.radius = radius;
  }

  /** Still has HP (a boss being finished is alive but not targetable). */
  get alive(): boolean {
    return this.hp > 0 && this.act.kind !== 'dead';
  }

  /** Can be attacked / targeted / can act. */
  get targetable(): boolean {
    return this.alive && this.act.kind !== 'finished';
  }

  get isPlayer(): boolean {
    return this.team === 'player';
  }

  set(kind: ActionKind, dur: number, extra: Partial<Action> = {}): Action {
    this.act = { kind, t: 0, dur, ...extra };
    return this.act;
  }

  is(...kinds: ActionKind[]): boolean {
    return kinds.includes(this.act.kind);
  }

  /** Can freely start a new action (idle/locomotion). */
  get free(): boolean {
    return this.act.kind === 'free';
  }

  /** In the startup or active part of an attack. */
  get attacking(): boolean {
    const a = this.act;
    return a.kind === 'attack' && !!a.move && a.t < a.move.startup + a.move.active;
  }

  get attackPhase(): 'startup' | 'active' | 'recovery' | null {
    const a = this.act;
    if (a.kind !== 'attack' || !a.move) return null;
    if (a.t < a.move.startup) return 'startup';
    if (a.t < a.move.startup + a.move.active) return 'active';
    return 'recovery';
  }

  /** Defense is down: shields lowered, can't evade. */
  get defenseless(): boolean {
    return this.is('broken', 'recoil', 'overextended', 'guardbreak', 'fear', 'stagger');
  }

  forward(): Vec2 {
    return fromYaw(this.yaw);
  }

  /** Angle between this fighter's facing and the direction to `p` (radians, absolute). */
  angleTo(p: Vec2): number {
    return Math.abs(angleDiff(this.yaw, toYaw(sub(p, this.pos))));
  }

  yawTo(p: Vec2): number {
    return toYaw(sub(p, this.pos));
  }

  distTo(o: Fighter): number {
    return dist(this.pos, o.pos);
  }

  /** Surface-to-surface gap. */
  gapTo(o: Fighter): number {
    return Math.max(0, dist(this.pos, o.pos) - this.radius - o.radius);
  }

  addPosture(v: number): boolean {
    this.posture = Math.min(this.maxPosture, this.posture + v);
    this.postureIdle = 0;
    return this.posture >= this.maxPosture;
  }

  regenPosture(): void {
    if (this.poiseTimer > 0 && --this.poiseTimer === 0) this.poiseHits = 0;
    this.postureIdle++;
    const guarding = this.act.kind === 'guard';
    if (this.isPlayer) {
      if (this.postureIdle > 40) this.posture = Math.max(0, this.posture - T.playerPostureRegen * (guarding ? 0.5 : 1));
    } else if (this.postureIdle > T.postureRegenDelay && !this.is('broken')) {
      this.posture = Math.max(0, this.posture - T.postureRegen * (guarding ? 1.6 : 1));
    }
  }
}
