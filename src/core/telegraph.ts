import type { Fighter } from './fighter';
import type { World } from './world';
import { T } from './tuning';

/** How an incoming blow may be answered (the ring's colour). */
export type TelegraphGrade = 'white' | 'blue' | 'red';

export interface Telegraph {
  grade: TelegraphGrade;
  /** Ticks until the blow lands (the first active tick). */
  left: number;
  /** 1 = ring fully open … 0 = contact. Closes at the same pace for every attack. */
  open: number;
  /** The part of `open` (0…band) during which a fresh buckler press deflects. */
  deflectBand: number;
  /** The part of `open` (0…band) during which starting an attack is an issen. */
  issenBand: number;
}

/**
 * 타이밍 링: the one timing language for every enemy melee attack. The ring starts closing
 * `telegraphLead` ticks before contact — always at the same pace, whatever the attack — and
 * touches the target circle on the contact tick. Feints and projectiles have no ring.
 * `sub` is the fraction of the current tick already shown (render interpolation).
 */
export function attackTelegraph(w: World, f: Fighter, sub = 0, out?: Telegraph): Telegraph | null {
  const a = f.act;
  const m = a.move;
  if (f.isPlayer || !f.alive || a.kind !== 'attack' || !m || m.feint || m.projectile) return null;
  const left = m.startup - (a.t + sub);
  if (left < 0 || left > T.telegraphLead) return null;
  const t = out ?? ({} as Telegraph);
  t.grade = m.unblockable === 'red' ? 'red' : m.unblockable === 'blue' ? 'blue' : 'white';
  t.left = left;
  t.open = left / T.telegraphLead;
  t.deflectBand = t.grade === 'red' ? 0 : w.win(T.deflectWindow) / T.telegraphLead;
  t.issenBand = w.win(T.issenWindow) / T.telegraphLead;
  return t;
}
