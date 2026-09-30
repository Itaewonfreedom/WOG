import type { World } from '../core/world';
import type { Fighter } from '../core/fighter';
import { FINISHER_TL, GALE_TL, ISSEN_TL, galeLocal } from '../core/timeline';
import { actionTime, swingTl, type Animator } from './anim';

/** What a fighter's blade ribbon should do this frame. */
export interface TrailSpec {
  active: boolean;
  /** Segment key: a new key starts a new, unconnected ribbon. */
  key: number;
  color: number;
  intensity: number;
  maxSpeed: number;
}

/**
 * The ribbon for the action the fighter is showing now, on the same clock and windows as the
 * poses (shared timelines). Written into `out` (no allocation per frame).
 */
export function trailSpec(f: Fighter, w: World, anim: Animator, out: TrailSpec): TrailSpec {
  const a = f.act;
  let t = actionTime(f, w);
  let win: readonly [number, number] | null = null;
  let key = f.serial;
  let color = f.isPlayer ? 0xfff0d0 : 0xcfcfcf;
  let intensity = f.isPlayer ? 1 : 0.6;
  // An attack replaced on this tick (deflected, bounced, killed…) is still drawn up to its final
  // tick while the display gets there: its ribbon runs on to the blade at contact.
  const ap = anim.approach;
  const atk = a.kind === 'attack' ? a.move : ap ? ap.move : null;
  if (ap) {
    t = ap.t;
    key = ap.serial;
  }
  if (atk && !atk.feint && !atk.projectile && atk.type !== 'blunt') {
    const m = atk;
    win = swingTl(m).trail;
    if (f.isPlayer) color = m.type === 'thrust' ? 0xbfeeff : m.heavy ? 0xffd27a : 0xfff0d0;
    if (m.unblockable === 'red') {
      color = 0xff4a30;
      intensity = 1.2;
    } else if (m.unblockable === 'blue') {
      color = 0x8ccaff;
      intensity = 1.1;
    }
  } else if (ap) {
    // Still drawing a replaced bash / feint / shot: no ribbon, and not the new action's yet.
  } else if (a.kind === 'finisher') {
    const k = a.finisher;
    if (k === 'slash' || k === 'thrust' || k === 'flow') win = FINISHER_TL[k].trail;
    color = 0xffe6c0;
    intensity = 1.4;
  } else if (a.kind === 'issen') {
    win = ISSEN_TL.trail;
    color = 0xffffff;
    intensity = 2;
  } else if (a.kind === 'gale') {
    key = f.serial * 64 + Math.floor((a.t - 1) / GALE_TL.seg);
    t = galeLocal(t);
    win = GALE_TL.trail;
    color = 0xa8f0ff;
    intensity = 1.6;
  } else if (a.kind === 'standoff' && !f.isPlayer && a.value === 1) {
    const travel = a.travel ?? 18;
    win = [travel - 3, travel + 6];
  }
  out.active = !!win && t >= win[0] && t < win[1];
  out.key = key;
  out.color = color;
  out.intensity = intensity;
  // The issen's pass-through streak is the point of the move; other dashes split the ribbon.
  out.maxSpeed = !ap && (a.kind === 'issen' || a.kind === 'gale') ? Infinity : 45;
  return out;
}
