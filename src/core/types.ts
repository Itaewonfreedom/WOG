import type { Vec2 } from './math';

export type Team = 'player' | 'enemy';

/** 베기 / 찌르기 / 둔격(방패 치기). Each enemy archetype reacts differently to each. */
export type AttackType = 'slash' | 'thrust' | 'blunt';

/**
 * Telegraph class of an attack.
 *  - none: 막기(block) 가능, 튕기기(deflect) 가능
 *  - blue: 막기 불가, 튕기기(정확한 타이밍)로만 받아낼 수 있음
 *  - red : 막기·튕기기 불가. 회피 또는 흘리기(nagashi)만 가능
 */
export type Unblockable = 'none' | 'blue' | 'red';

export type HitShape =
  | { kind: 'arc'; range: number; halfAngle: number }
  | { kind: 'line'; range: number; width: number };

export interface MoveDef {
  id: string;
  /** Display name (Korean) */
  name: string;
  kanji?: string;
  type: AttackType;
  startup: number;
  active: number;
  recovery: number;
  damage: number;
  posture: number;
  shape: HitShape;
  /** Max forward travel (m) spent during startup+active; soft-targeting clamps it to the gap. */
  lunge: number;
  /** Tick from which the next chained attack can start (inputs are buffered before that). */
  chainFrom: number;
  /** Tick from which dodge / guard may cancel the recovery. */
  cancelFrom: number;
  next?: { slash?: string; thrust?: string };
  unblockable?: Unblockable;
  /** Breaks enemy guard stance on contact. */
  heavy?: boolean;
  /** Not interrupted by light hits while winding up / swinging. */
  hyperArmor?: boolean;
  knockback?: number;
  hitstop?: number;
  /** Attacker may keep rotating toward its target until this tick. */
  trackUntil?: number;
  /** Interrupts the target's wind-up even through hyper armor. */
  interrupt?: boolean;
  /** Spawns a projectile on the first active tick instead of a melee check. */
  projectile?: 'arrow' | 'kunai';
  /** Feint: the attack stops right before the active window (used by AI / standoff). */
  feint?: boolean;
  /** Ignores defense profiles (resolve special). */
  trueStrike?: boolean;
  /** Ranger buckler bash knocks shields aside. */
  shieldBreak?: boolean;
  /** Last hit of a string – bigger feedback. */
  finale?: boolean;
}

export type ActionKind =
  | 'free'
  | 'attack'
  | 'charge'
  | 'guard'
  | 'flowStep'
  | 'flow'
  | 'deflect'
  | 'dodge'
  | 'hitstun'
  | 'stagger'
  | 'blockstun'
  | 'guardbreak'
  | 'recoil'
  | 'broken'
  | 'overextended'
  | 'fear'
  | 'evade'
  | 'finisher'
  | 'finished'
  | 'issen'
  | 'aim'
  | 'quickshot'
  | 'heal'
  | 'standoff'
  | 'gale'
  | 'dead';

export type FinisherKind =
  | 'slash' // 일도양단
  | 'thrust' // 심장 관통
  | 'flow' // 흘려베기 (after nagashi)
  | 'issen' // 일섬
  | 'hajiki' // 튕기기 일섬
  | 'standoff'; // 대치 참

export interface Action {
  kind: ActionKind;
  /** Ticks elapsed in this action. */
  t: number;
  /** Total ticks (Infinity for held actions). */
  dur: number;
  move?: MoveDef;
  /** Ids already struck by this attack instance. */
  hit?: Set<number>;
  dir?: Vec2;
  targetId?: number;
  finisher?: FinisherKind;
  /** Generic numeric payload (charge level, lunge distance, ...). */
  value?: number;
  /** Whether the finisher / strike impact has been applied. */
  done?: boolean;
  /** Side of a flow step / evade (-1 left, 1 right). */
  side?: -1 | 1;
  /** Scripted displacement start/end (dash-ins, flow slide, issen pass-through). */
  from?: Vec2;
  to?: Vec2;
  /** Ticks over which from→to is travelled. */
  travel?: number;
  /** Planned forward travel of an attack lunge (m). */
  lunge?: number;
  /** First hit of a string (can turn into a charged strike). */
  opener?: boolean;
  /** Posture / damage multipliers for riposte & counter bonuses. */
  postureBonus?: number;
  dmgBonus?: number;
  /** Button that started the attack (for charge detection). */
  button?: 'slash' | 'thrust';
}

/** Per-enemy AI memory. */
export interface Brain {
  token: boolean;
  cooldown: number;
  strafeDir: 1 | -1;
  strafeTimer: number;
  /** Planned attack while approaching. */
  plan: string | null;
  guardTimer: number;
  pendingGuard: boolean;
  /** Counter-attack right after an evade/block. */
  counter: boolean;
  /** Not yet engaged (walks in; standoff possible). */
  aware: boolean;
  slot: number;
  rangedCooldown: number;
}

/** How an archetype reacts to one attack type. */
export type DefenseResult = 'normal' | 'effective' | 'glance' | 'bounce' | 'evade' | 'haft';

export interface DefenseRule {
  result: DefenseResult;
  dmgMul: number;
  postureMul: number;
  /** Rule only applies when struck from the front (within frontArc of facing); otherwise 'normal'. */
  frontalOnly?: boolean;
}

export type ArchetypeId = 'ronin' | 'shield' | 'spear' | 'armored' | 'duelist' | 'archer' | 'boss' | 'dummy';

export interface EnemyMoveChoice {
  move: string;
  weight: number;
  minRange: number;
  maxRange: number;
}

export interface Archetype {
  id: ArchetypeId;
  name: string;
  kanji: string;
  hp: number;
  posture: number;
  radius: number;
  speed: number;
  turnRate: number;
  defense: Record<AttackType, DefenseRule>;
  arrow: { bodyMul: number; headMul: number; shieldFront?: boolean; glanceBody?: boolean };
  /** Which button is effective – shown as a hint above the enemy. */
  weakness: AttackType | null;
  moves: EnemyMoveChoice[];
  ai: {
    preferredRange: number;
    aggression: number;
    guardChance: number;
    courage: number;
    cooldown: [number, number];
    ranged?: boolean;
    /** Chance to chain into a follow-up of the same string. */
    comboChance: number;
    feintChance: number;
  };
  /** Posture broken also requires HP threshold? (boss) */
  isBoss?: boolean;
  /** Light hits never flinch this archetype. */
  heavyBody?: boolean;
  /** Tip shown the first time the archetype appears. */
  tip: string;
}

export type ArrowType = 'standard' | 'heavy' | 'fire';

export interface Projectile {
  id: number;
  kind: 'arrow' | 'kunai';
  arrowType: ArrowType;
  ownerId: number;
  team: 'player' | 'enemy';
  pos: { x: number; y: number; z: number };
  prevPos: { x: number; y: number; z: number };
  vel: { x: number; y: number; z: number };
  damage: number;
  gravity: number;
  alive: boolean;
  /** Stuck into something – kept for rendering until expire. */
  stuck: boolean;
  stuckTo?: number;
  stuckOffset?: { x: number; y: number; z: number; yaw: number };
  age: number;
  perfect: boolean;
}

/** Everything the presentation layer needs to react to. */
export type CombatEvent =
  | { type: 'swing'; id: number; move: MoveDef }
  | { type: 'hit'; attacker: number; target: number; pos: Vec2; dmg: number; result: DefenseResult; atkType: AttackType; lethal: boolean; heavy: boolean; counter?: boolean }
  | { type: 'bounce'; attacker: number; target: number; pos: Vec2 }
  | { type: 'glance'; attacker: number; target: number; pos: Vec2 }
  | { type: 'haft'; attacker: number; target: number; pos: Vec2 }
  | { type: 'evade'; id: number; attacker: number }
  | { type: 'block'; defender: number; attacker: number; pos: Vec2; enemy: boolean }
  | { type: 'guardBreak'; id: number; pos: Vec2 }
  | { type: 'deflect'; defender: number; attacker: number; pos: Vec2; arrow?: boolean }
  | { type: 'flow'; defender: number; attacker: number; pos: Vec2; side: -1 | 1 }
  | { type: 'issen'; performer: number; victim: number; pos: Vec2; chain: number; hajiki: boolean }
  | { type: 'perfectDodge'; id: number; attacker: number }
  | { type: 'postureBreak'; id: number; pos: Vec2 }
  | { type: 'finisherStart'; performer: number; victim: number; kind: FinisherKind; weakness: boolean }
  | { type: 'finisherImpact'; performer: number; victim: number; kind: FinisherKind; pos: Vec2 }
  | { type: 'kill'; victim: number; killer: number; cause: string }
  | { type: 'glint'; id: number; color: 'blue' | 'red'; move: MoveDef }
  | { type: 'arrowFire'; id: number; owner: number; arrowType: ArrowType; perfect: boolean }
  | { type: 'arrowHit'; target: number; pos: { x: number; y: number; z: number }; headshot: boolean; dmg: number; lethal: boolean; blocked: boolean }
  | { type: 'arrowMiss'; pos: { x: number; y: number; z: number } }
  | { type: 'fear'; id: number }
  | { type: 'resolve'; amount: number; total: number }
  | { type: 'heal'; id: number; amount: number }
  | { type: 'shieldOpen'; id: number }
  | { type: 'armorShatter'; id: number; pos: Vec2 }
  | { type: 'standoff'; phase: 'begin' | 'feint' | 'strike' | 'win' | 'fail'; id?: number }
  | { type: 'text'; text: string; sub?: string; style: 'deflect' | 'flow' | 'issen' | 'finisher' | 'info' | 'warn' | 'effective' | 'bad'; worldPos?: Vec2; id?: number }
  | { type: 'wave'; index: number; title: string; subtitle: string }
  | { type: 'waveClear'; index: number }
  | { type: 'victory' }
  | { type: 'defeat' }
  | { type: 'gale'; id: number }
  | { type: 'burn'; id: number };
