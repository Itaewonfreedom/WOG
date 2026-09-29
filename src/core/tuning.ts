// Global tuning. All times are simulation ticks at 60 Hz unless noted.
// Change numbers here to re-balance the whole combat system.

export const TICK_RATE = 60;
export const DT = 1 / TICK_RATE;

export const T = {
  /** Button presses stay buffered this long (lets you queue the next combo hit during recovery). */
  inputBuffer: 10,

  // ── Buckler: 막기 / 튕기기 (Hajiki) ───────────────────────────────
  /** Guard pressed within this many ticks before impact = 튕기기 (perfect deflect). */
  deflectWindow: 8,
  /** Re-pressing guard too soon shrinks the window (anti-mash). */
  deflectSpamGap: 22,
  deflectSpamWindow: 3,
  /** Buckler only covers the front: half-angle in radians (~70°). */
  guardArc: (70 * Math.PI) / 180,
  /** Deflected attacker is stunned this long (weapon knocked away). */
  deflectRecoil: 42,
  deflectPostureDmg: 26,
  /** After a deflect, attack within this many ticks = 튕기기 일섬 (instant counter-kill). */
  hajikiIssenWindow: 14,
  /** After a deflect, the riposte (any attack) gets bonus posture until this tick. */
  riposteWindow: 40,
  playerMaxPosture: 100,
  blockPostureMul: 1.1,
  guardBreakStun: 55,

  // ── 흘리기 (Nagashi) ─────────────────────────────────────────────
  /** Guard + dodge pressed within this many ticks before impact = 흘리기. Works on red attacks too. */
  flowWindow: 11,
  /** Missed flow input turns into a guarded side-step this long. */
  flowStepDur: 22,
  flowAnimDur: 26,
  flowSideStep: 1.3,
  /** Attacker stumbles past with its back exposed. */
  overextendDur: 70,

  // ── 일섬 (Issen) ──────────────────────────────────────────────────
  /** Attack started this many ticks (or fewer) before the enemy blow lands = 일섬. */
  issenWindow: 5,
  /** Chain issen: window after an issen during which the next issen is easier / chains. */
  issenChainTime: 110,
  issenChainWindow: 8,
  /** A deliberate press is required: no other attack press within this many ticks before. */
  issenMashLockout: 18,
  issenDur: 34,
  /** Bosses lose this fraction of max HP to an issen instead of dying. */
  bossIssenFrac: 0.18,

  // ── Dodge ────────────────────────────────────────────────────────
  dodgeDur: 18,
  dodgeIFrames: [2, 11] as const,
  dodgeDist: 2.6,
  dodgeCancelFrom: 12,
  perfectDodgeFrames: 6,
  rollDur: 30,
  rollDist: 4.4,
  rollIFrames: [2, 18] as const,
  /** After a perfect dodge the next attack is a counter with bonus posture. */
  dodgeCounterWindow: 45,

  // ── Charged attacks ──────────────────────────────────────────────
  /** Tap = instant light hit. Still holding the button this many ticks after the light hit's
   *  active frames → wind up a charged heavy (강베기/강찌르기) with no input latency on taps. */
  chargeCheck: 4,
  /** Minimum wind-up before a release is honored. */
  chargeMin: 16,
  chargeMax: 40,

  // ── Posture / reactions ──────────────────────────────────────────
  hitstun: 18,
  stagger: 34,
  brokenDur: 170,
  /** Enemies start regaining posture after this many ticks without posture damage. */
  postureRegenDelay: 100,
  postureRegen: 0.35,
  playerPostureRegen: 0.6,
  /** HP fraction under which a staggered enemy can be finished. */
  finishHpFrac: 0.2,

  // ── Finishers ────────────────────────────────────────────────────
  finisherRange: 3.4,
  finisherSlashDur: 64,
  finisherThrustDur: 70,
  finisherFlowDur: 44,
  finisherImpact: { slash: 30, thrust: 34, flow: 12 } as Record<'slash' | 'thrust' | 'flow', number>,
  /** From this tick of a finisher, another finisher input chains to the next broken enemy. */
  finisherChainFrom: 40,
  finisherChainRange: 7,
  bossFinisherFrac: 0.22,
  terrifyRadius: 9,
  terrifyChance: 0.35,
  terrifyWeaknessBonus: 0.25,
  fearDur: 110,

  // ── Resolve (결의) ────────────────────────────────────────────────
  resolveMax: 3,
  resolveGain: { deflect: 0.3, flow: 0.45, issen: 0.6, finisher: 1.0, kill: 0.2, headshot: 0.3, perfectDodge: 0.15 },
  healCost: 1,
  healDur: 48,
  healFrac: 0.45,
  galeCost: 2,
  focusDrainPerSec: 0.5,

  // ── Bow (활) ──────────────────────────────────────────────────────
  drawTicks: { standard: 34, heavy: 52, fire: 40 } as Record<'standard' | 'heavy' | 'fire', number>,
  /** Ticks after full draw that count as the "만작" perfect release. */
  perfectDrawWindow: 18,
  /** After that, fatigue makes the aim shake more and more. */
  fatigueTicks: 120,
  arrowSpeed: [20, 62] as const,
  arrowGravity: 9.8,
  arrowDamage: { standard: 22, heavy: 34, fire: 14 } as Record<'standard' | 'heavy' | 'fire', number>,
  headshotMul: 2.6,
  perfectMul: 1.3,
  maxArrows: { standard: 24, heavy: 6, fire: 4 } as Record<'standard' | 'heavy' | 'fire', number>,
  quickshotDur: 20,
  quickshotDamage: 11,
  aimMoveSpeed: 2.4,
  focusScale: 0.3,
  dodgeAimSlowmoSec: 1.1,
  burnTicks: 150,
  burnDps: 5,

  // ── Movement ─────────────────────────────────────────────────────
  runSpeed: 5.4,
  guardMoveSpeed: 2.3,
  playerTurnRate: 0.35,
  arenaRadius: 24,
  softTargetRange: 6.5,

  // ── AI ───────────────────────────────────────────────────────────
  maxAttackers: 2,
  maxShooters: 1,
  glintLead: 20,

  // ── Standoff (대치) ───────────────────────────────────────────────
  standoffStrikeWindow: 14,
  standoffChainMax: 3,
  standoffFailDamage: 30,
};

/** Hit-stop by outcome (ticks the whole sim freezes – sells the weight of the blow). */
export const HITSTOP = {
  light: 3,
  heavy: 6,
  effective: 5,
  block: 3,
  deflect: 7,
  bounce: 6,
  flow: 5,
  issen: 10,
  finisher: 8,
};
