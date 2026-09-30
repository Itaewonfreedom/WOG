// Shared action timelines. The simulation, the animator, sword trails and effects all read
// these markers, so a blow's damage, hit-stop, sound, blade position and trail line up on
// the same tick. Everything is in simulation ticks (60 Hz).

import type { FinisherKind, MoveDef } from './types';
import { T } from './tuning';

export interface SwingTimeline {
  /** Blade arrives at the windup pose (then holds / coils). */
  windupEnd: number;
  /** Blade starts accelerating from the windup toward the target. */
  release: number;
  /** First active tick: damage, hit-stop and the strike key pose all happen here. */
  contact: number;
  /** Last active tick + 1. */
  activeEnd: number;
  /** Follow-through settles; afterwards the body returns to stance. */
  followEnd: number;
  end: number;
  /** Ticks during which the blade leaves a trail. */
  trail: [number, number];
}

/** Ticks spent swinging from windup to contact (the "release"). Never shifts the contact tick. */
export function releaseTicks(m: MoveDef): number {
  if (m.feint || m.projectile) return 0;
  return Math.max(2, Math.min(6, Math.round(m.startup * 0.34)));
}

export function swingTimeline(m: MoveDef): SwingTimeline {
  const rel = releaseTicks(m);
  const contact = m.startup;
  const release = contact - rel;
  const activeEnd = m.startup + m.active;
  const followEnd = Math.min(activeEnd + m.recovery, activeEnd + Math.max(3, Math.round(m.recovery * 0.38)));
  return {
    windupEnd: Math.max(1, Math.round(release * 0.78)),
    release,
    contact,
    activeEnd,
    followEnd,
    end: activeEnd + m.recovery,
    trail: [release, Math.min(followEnd, activeEnd + 3)],
  };
}

export interface FinisherTimeline {
  dur: number;
  /** Dash-in finishes (core `travel`). */
  dash: number;
  windupEnd: number;
  release: number;
  /** Impact tick: the kill / boss damage is applied here (core). */
  contact: number;
  followEnd: number;
  /** Zanshin hold ends. */
  holdEnd: number;
  /** Thrust: blade pulled out / victim pushed off. Slash/flow: blood flick (chiburi). */
  pull: number;
  trail: [number, number];
  /** Victim: when the fall starts and when the body is fully down (presentation; may run past
   *  victimDur — the corpse keeps playing the same timeline after it turns 'dead'). */
  victimFall: number;
  victimDown: number;
  /** Victim 'finished' action length (core). */
  victimDur: number;
  /** Where the dash-in stops: distance to the victim's centre = stand + victim radius × 0.6 (m).
   *  Chosen so the blade meets the torso at contact (slash: mid-blade on the front of the body,
   *  thrust: tip just past the centre of the chest). */
  stand: number;
}

function finisherTl(kind: 'slash' | 'thrust' | 'flow'): FinisherTimeline {
  const contact = T.finisherImpact[kind];
  if (kind === 'slash') {
    const dur = T.finisherSlashDur;
    return { dur, dash: 7, windupEnd: contact - 10, release: contact - 4, contact, followEnd: contact + 4, holdEnd: contact + 20, pull: contact + 24, trail: [contact - 4, contact + 6], victimFall: contact + 8, victimDown: contact + 38, victimDur: dur + 6, stand: 0.85 };
  }
  if (kind === 'thrust') {
    const dur = T.finisherThrustDur;
    return { dur, dash: 7, windupEnd: contact - 12, release: contact - 4, contact, followEnd: contact + 2, holdEnd: contact + 14, pull: contact + 19, trail: [contact - 4, contact + 2], victimFall: contact + 19, victimDown: contact + 54, victimDur: dur + 6, stand: 1.0 };
  }
  const dur = T.finisherFlowDur;
  return { dur, dash: 5, windupEnd: contact - 5, release: contact - 3, contact, followEnd: contact + 4, holdEnd: contact + 18, pull: contact + 22, trail: [contact - 3, contact + 5], victimFall: contact + 3, victimDown: contact + 34, victimDur: dur + 6, stand: 0.85 };
}

export const FINISHER_TL: Record<'slash' | 'thrust' | 'flow', FinisherTimeline> = {
  slash: finisherTl('slash'),
  thrust: finisherTl('thrust'),
  flow: finisherTl('flow'),
};

/** Issen / hajiki issen / standoff cut: the ranger passes through the target. */
export const ISSEN_TL = {
  dur: T.issenDur,
  /** Core pass-through travel. */
  travel: 5,
  contact: 3,
  trail: [1, 7] as [number, number],
  /** Victim stays frozen in its attack pose, then the cut registers. */
  victimFreeze: 22,
  victimDown: 52,
  victimDur: 56,
};

/** 질풍참: one dash-cut per target, every `seg` ticks; the hit lands on local tick `contact`. */
export const GALE_TL = {
  seg: 15,
  contact: 3,
  trail: [1, 8] as [number, number],
};

/** Local tick inside the current gale segment (the core uses (t - 1) % seg). */
export function galeLocal(t: number): number {
  return (((t - 1) % GALE_TL.seg) + GALE_TL.seg) % GALE_TL.seg;
}

export function finisherTimeline(kind: FinisherKind): FinisherTimeline | null {
  return kind === 'slash' || kind === 'thrust' || kind === 'flow' ? FINISHER_TL[kind] : null;
}
