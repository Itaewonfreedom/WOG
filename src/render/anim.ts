// Procedural animation: fighter state → Pose.
// Attacks are authored as weapon trajectories (windup → strike → follow-through) placed on the
// shared action timelines (core/timeline.ts), so the blade is on its strike key the moment the
// simulation applies damage / hit-stop. Every action starts from the pose the body is actually
// in (entry pose), so strings, cancels and finishers flow into each other, and the feet are
// planted in world space by the FootPlanter.

import * as THREE from 'three';
import type { Fighter } from '../core/fighter';
import type { World } from '../core/world';
import { drawInfo } from '../core/bow';
import { T } from '../core/tuning';
import type { AttackType, MoveDef } from '../core/types';
import { FINISHER_TL, GALE_TL, ISSEN_TL, galeLocal, swingTimeline, type FinisherTimeline, type SwingTimeline } from '../core/timeline';
import { applyKey, basePose, clonePose, lerpPose, lerpPoseParts, slerpDir, type Key, type Pose } from './pose';
import { FootPlanter, type FeetMode, type StepParams } from './feet';
import type { CharKind } from './character';

type Family = 'ranger' | 'katana' | 'nodachi' | 'yari' | 'shield' | 'dual' | 'archer' | 'dummy';

const FAMILY: Record<CharKind, Family> = {
  player: 'ranger',
  ronin: 'katana',
  boss: 'katana',
  armored: 'nodachi',
  spear: 'yari',
  shield: 'shield',
  duelist: 'dual',
  archer: 'archer',
  dummy: 'dummy',
};

interface Swing {
  windup: Key;
  strike: Key;
  follow: Key;
}

// ── Stances ─────────────────────────────────────────────────────────────────
const STANCE: Record<Family, Key> = {
  ranger: { hand: [-0.26, 1.02, 0.32], blade: [0.05, 0.55, 1], edge: [1, 0, 0], lhand: [0.24, 1.1, 0.26], lblade: [0.35, 0.1, 1], ledge: [0, 1, 0], torso: -0.12, lean: 0.08, pelvisY: 0.9, step: 0.02 },
  katana: { hand: [-0.05, 1.08, 0.36], blade: [0, 0.62, 0.78], edge: [1, 0, 0], torso: -0.05, lean: 0.06, pelvisY: 0.9, step: 0.05 },
  nodachi: { hand: [-0.2, 1.45, 0.1], blade: [-0.1, 0.9, -0.3], edge: [1, 0, 0], torso: -0.2, lean: 0.02, pelvisY: 0.88, step: 0.08 },
  yari: { hand: [-0.2, 1.0, -0.12], blade: [0.04, 0.1, 1], edge: [0, 1, 0], torso: -0.35, lean: 0.06, pelvisY: 0.88, step: 0.12 },
  shield: { hand: [-0.26, 1.32, 0.05], blade: [0.02, -0.03, 1], edge: [0, 1, 0], lhand: [0.12, 1.02, 0.38], lblade: [0, 1, 0], ledge: [0.1, 0, 1], torso: 0.05, lean: 0.1, pelvisY: 0.86, step: 0.1 },
  dual: { hand: [-0.26, 1.0, 0.3], blade: [0.1, 0.35, 1], edge: [1, 0, 0], lhand: [0.26, 1.0, 0.26], lblade: [-0.1, 0.35, 1], ledge: [1, 0, 0], torso: 0, lean: 0.15, pelvisY: 0.84, step: 0.1 },
  archer: { hand: [-0.25, 0.95, 0.12], blade: [0, -0.3, 1], edge: [1, 0, 0], lhand: [0.26, 1.0, 0.22], lblade: [0.05, 1, 0.2], ledge: [0, 0, 1], torso: 0, lean: 0.03, pelvisY: 0.92, step: 0.05 },
  dummy: { hand: [-0.45, 1.3, 0.05], blade: [0, -1, 0], lhand: [0.45, 1.3, 0.05], torso: 0, lean: 0, pelvisY: 0.95, step: 0 },
};

// ── Ranger (short sword + buckler) ──────────────────────────────────────────
const RANGER: Record<string, Swing> = {
  r_s1: {
    windup: { hand: [-0.38, 0.86, 0.02], blade: [-0.35, -0.55, -0.75], edge: [0, 1, 0], torso: -0.55, lhand: [0.28, 1.2, 0.3], pelvisY: 0.86, step: 0.1 },
    strike: { hand: [-0.08, 1.2, 0.5], blade: [0.55, 0.25, 1], edge: [0, 1, 0.3], torso: 0, lean: 0.18, step: 0.3, pelvisY: 0.85 },
    follow: { hand: [0.2, 1.55, 0.32], blade: [0.55, 0.85, -0.1], edge: [0, 0, 1], torso: 0.5, lean: 0.05, lhand: [0.3, 1.05, -0.05], step: 0.3 },
  },
  r_s2: {
    windup: { hand: [0.12, 1.62, 0.2], blade: [0.45, 0.85, -0.3], edge: [0, 0, 1], torso: 0.5, lean: -0.05, lhand: [0.32, 1.05, 0.0], step: 0.15 },
    strike: { hand: [-0.1, 1.15, 0.52], blade: [-0.5, -0.1, 1], edge: [0, 1, 0.2], torso: 0, lean: 0.2, step: 0.35, pelvisY: 0.84 },
    follow: { hand: [-0.38, 0.92, 0.18], blade: [-0.7, -0.65, 0.1], edge: [0, 1, 0], torso: -0.55, lean: 0.25, pelvisY: 0.84, lhand: [0.22, 1.2, 0.35], step: 0.35 },
  },
  r_s3: {
    windup: { hand: [-0.5, 1.18, -0.05], blade: [-0.85, 0.05, -0.45], edge: [0, 1, 0], torso: -0.8, lhand: [0.25, 1.2, 0.35], step: 0.2, pelvisY: 0.86 },
    strike: { hand: [-0.05, 1.18, 0.55], blade: [0.2, 0, 1], edge: [0, 1, 0], torso: 0, lean: 0.15, step: 0.35, pelvisY: 0.84 },
    follow: { hand: [0.4, 1.2, 0.25], blade: [0.95, 0.05, -0.2], edge: [0, 1, 0], torso: 0.85, lhand: [0.35, 1.0, -0.15], step: 0.35, pelvisY: 0.84 },
  },
  r_s4: {
    windup: { hand: [-0.5, 1.2, -0.1], blade: [-0.9, 0.05, -0.4], edge: [0, 1, 0], torso: -0.3, lhand: [0.3, 1.2, 0.2], pelvisY: 0.82, step: 0.2 },
    strike: { hand: [-0.56, 1.15, 0.12], blade: [-1, 0, 0.15], edge: [0, 1, 0], torso: 0, lean: 0.1, pelvisY: 0.8, lhand: [0.4, 1.25, 0.0] },
    follow: { hand: [0.1, 1.15, 0.5], blade: [0.6, 0, 1], edge: [0, 1, 0], torso: 0.2, lean: 0.15, pelvisY: 0.8, step: 0.3 },
  },
  r_t1: {
    windup: { hand: [-0.24, 1.08, -0.08], blade: [0.02, 0.06, 1], edge: [0, 1, 0], torso: -0.35, lhand: [0.22, 1.2, 0.35], pelvisY: 0.87, step: 0.1 },
    strike: { hand: [-0.06, 1.24, 0.56], blade: [0.02, 0.02, 1], edge: [0, 1, 0], torso: 0.15, lean: 0.25, step: 0.42, pelvisY: 0.84, lhand: [0.28, 1.08, 0.05] },
    follow: { hand: [-0.06, 1.24, 0.56], blade: [0.02, 0.02, 1], edge: [0, 1, 0], torso: 0.15, lean: 0.25, step: 0.42, pelvisY: 0.84, lhand: [0.28, 1.08, 0.05] },
  },
  r_t2: {
    windup: { hand: [-0.2, 1.2, 0.0], blade: [0.04, 0.02, 1], edge: [0, 1, 0], torso: -0.25, lhand: [0.24, 1.2, 0.35], pelvisY: 0.86, step: 0.3 },
    strike: { hand: [-0.02, 1.3, 0.56], blade: [0.05, -0.02, 1], edge: [0, 1, 0], torso: 0.2, lean: 0.25, step: 0.45, pelvisY: 0.84, lhand: [0.3, 1.1, 0.0] },
    follow: { hand: [-0.02, 1.3, 0.56], blade: [0.05, -0.02, 1], edge: [0, 1, 0], torso: 0.2, lean: 0.25, step: 0.45, pelvisY: 0.84, lhand: [0.3, 1.1, 0.0] },
  },
  r_t3: {
    windup: { hand: [-0.3, 1.1, -0.2], blade: [0, 0.05, 1], edge: [0, 1, 0], torso: -0.55, lean: -0.05, lhand: [0.22, 1.25, 0.38], pelvisY: 0.84, step: 0.2 },
    strike: { hand: [-0.02, 1.2, 0.58], blade: [0, 0, 1], edge: [0, 1, 0], torso: 0.25, lean: 0.35, step: 0.62, pelvisY: 0.76, lhand: [0.3, 1.05, -0.1] },
    follow: { hand: [-0.02, 1.2, 0.58], blade: [0, 0, 1], edge: [0, 1, 0], torso: 0.25, lean: 0.35, step: 0.62, pelvisY: 0.76, lhand: [0.3, 1.05, -0.1] },
  },
  r_st: {
    windup: { hand: [0.05, 1.45, 0.2], blade: [-0.1, -0.35, 1], edge: [0, 1, 0], torso: 0.3, lhand: [0.3, 1.05, 0.05], step: 0.25 },
    strike: { hand: [-0.05, 1.22, 0.56], blade: [-0.05, -0.1, 1], edge: [0, 1, 0], torso: 0.1, lean: 0.25, step: 0.45, pelvisY: 0.84 },
    follow: { hand: [-0.05, 1.22, 0.56], blade: [-0.05, -0.1, 1], edge: [0, 1, 0], torso: 0.1, lean: 0.25, step: 0.45, pelvisY: 0.84 },
  },
  r_ts: {
    windup: { hand: [0.18, 1.2, 0.45], blade: [0.9, 0.05, 0.35], edge: [0, 1, 0], torso: 0.5, lhand: [0.3, 1.1, 0.0], step: 0.35 },
    strike: { hand: [-0.1, 1.18, 0.5], blade: [-0.3, 0, 1], edge: [0, 1, 0], torso: 0, lean: 0.15, step: 0.35, pelvisY: 0.85 },
    follow: { hand: [-0.48, 1.15, 0.1], blade: [-0.95, 0, -0.2], edge: [0, 1, 0], torso: -0.7, lean: 0.1, lhand: [0.22, 1.2, 0.35], step: 0.3 },
  },
  r_hs: {
    windup: { hand: [-0.1, 1.85, -0.05], blade: [0, 0.35, -1], edge: [1, 0, 0], torso: -0.2, lean: -0.12, lhand: [0.25, 1.35, 0.2], pelvisY: 0.86, step: 0.15 },
    strike: { hand: [-0.05, 1.12, 0.56], blade: [0, -0.3, 1], edge: [1, 0, 0], torso: 0, lean: 0.3, step: 0.5, pelvisY: 0.8, lhand: [0.3, 1.0, 0.0] },
    follow: { hand: [-0.05, 0.8, 0.45], blade: [0, -0.9, 0.35], edge: [1, 0, 0], torso: 0, lean: 0.45, step: 0.55, pelvisY: 0.76, lhand: [0.32, 0.95, -0.05] },
  },
  r_ht: {
    windup: { hand: [-0.32, 1.1, -0.3], blade: [0, 0.08, 1], edge: [0, 1, 0], torso: -0.7, lean: -0.05, lhand: [0.2, 1.25, 0.4], pelvisY: 0.82, step: 0.25 },
    strike: { hand: [0, 1.2, 0.6], blade: [0, 0, 1], edge: [0, 1, 0], torso: 0.3, lean: 0.4, step: 0.7, pelvisY: 0.74, lhand: [0.32, 1.02, -0.12] },
    follow: { hand: [0, 1.2, 0.6], blade: [0, 0, 1], edge: [0, 1, 0], torso: 0.3, lean: 0.4, step: 0.7, pelvisY: 0.74, lhand: [0.32, 1.02, -0.12] },
  },
  r_bash: {
    windup: { lhand: [0.28, 1.15, 0.05], lblade: [0.3, 0, 1], torso: 0.45, hand: [-0.3, 1.05, 0.05], pelvisY: 0.87, step: 0.1 },
    strike: { lhand: [0.12, 1.3, 0.62], lblade: [0, 0.15, 1], torso: -0.3, lean: 0.2, step: 0.4, pelvisY: 0.84, hand: [-0.34, 1.02, -0.05] },
    follow: { lhand: [0.12, 1.3, 0.6], lblade: [0, 0.15, 1], torso: -0.3, lean: 0.2, step: 0.4, pelvisY: 0.84, hand: [-0.34, 1.02, -0.05] },
  },
  r_gale: {
    windup: { hand: [-0.45, 1.0, -0.2], blade: [-0.6, -0.2, -0.8], edge: [0, 1, 0], torso: -0.7, lean: 0.35, pelvisY: 0.78, step: 0.4 },
    strike: { hand: [0.0, 1.15, 0.55], blade: [0.2, 0, 1], edge: [0, 1, 0], torso: 0, lean: 0.25, pelvisY: 0.8, step: 0.5 },
    follow: { hand: [0.42, 1.15, 0.2], blade: [0.95, 0, -0.25], edge: [0, 1, 0], torso: 0.85, lean: 0.25, pelvisY: 0.8, step: 0.5 },
  },
};

// ── Enemy swing templates (two-handed katana / nodachi / spear …) ───────────
const KATANA: Record<string, Swing> = {
  overhead: {
    windup: { hand: [-0.05, 1.75, 0.0], blade: [0, 0.6, -0.8], edge: [1, 0, 0], torso: -0.05, lean: -0.1, step: 0.05, pelvisY: 0.9 },
    strike: { hand: [0, 1.25, 0.5], blade: [0, 0.1, 1], edge: [1, 0, 0], lean: 0.25, step: 0.35, pelvisY: 0.84 },
    follow: { hand: [0.05, 0.85, 0.42], blade: [0.05, -0.75, 0.6], edge: [1, 0, 0], lean: 0.4, step: 0.4, pelvisY: 0.8 },
  },
  rising: {
    windup: { hand: [-0.35, 0.9, 0.1], blade: [-0.3, -0.6, -0.6], edge: [0, 1, 0], torso: -0.5, pelvisY: 0.86, step: 0.1 },
    strike: { hand: [-0.05, 1.2, 0.5], blade: [0.4, 0.3, 1], edge: [0, 1, 0.3], torso: 0, lean: 0.2, step: 0.3, pelvisY: 0.85 },
    follow: { hand: [0.2, 1.55, 0.25], blade: [0.4, 0.9, -0.2], edge: [0, 0, 1], torso: 0.5, lean: 0.05, step: 0.3 },
  },
  thrust: {
    windup: { hand: [-0.2, 1.1, -0.15], blade: [0, 0.05, 1], edge: [0, 1, 0], torso: -0.3, pelvisY: 0.86, step: 0.1 },
    strike: { hand: [0, 1.2, 0.6], blade: [0, 0, 1], edge: [0, 1, 0], lean: 0.3, step: 0.5, pelvisY: 0.8, torso: 0.1 },
    follow: { hand: [0, 1.2, 0.6], blade: [0, 0, 1], edge: [0, 1, 0], lean: 0.3, step: 0.5, pelvisY: 0.8, torso: 0.1 },
  },
  horizontal: {
    windup: { hand: [-0.5, 1.2, -0.1], blade: [-0.9, 0.1, -0.3], edge: [0, 1, 0], torso: -0.9, pelvisY: 0.86, step: 0.15 },
    strike: { hand: [0, 1.15, 0.55], blade: [0.1, 0, 1], edge: [0, 1, 0], torso: 0, lean: 0.15, step: 0.35, pelvisY: 0.82 },
    follow: { hand: [0.45, 1.15, 0.15], blade: [0.9, 0, -0.3], edge: [0, 1, 0], torso: 0.9, lean: 0.1, step: 0.35, pelvisY: 0.82 },
  },
  crush: {
    windup: { hand: [0, 1.95, -0.1], blade: [0, 0.3, -1], edge: [1, 0, 0], torso: 0, lean: -0.2, pelvisY: 0.95, step: 0.1 },
    strike: { hand: [0, 1.05, 0.58], blade: [0, -0.3, 1], edge: [1, 0, 0], lean: 0.35, step: 0.55, pelvisY: 0.76 },
    follow: { hand: [0, 0.7, 0.5], blade: [0, -0.9, 0.3], edge: [1, 0, 0], lean: 0.5, step: 0.55, pelvisY: 0.7 },
  },
  feint: {
    windup: { hand: [-0.05, 1.55, 0.1], blade: [0, 0.8, -0.4], edge: [1, 0, 0], lean: 0.12, step: 0.2, pelvisY: 0.86 },
    strike: { hand: [-0.05, 1.5, 0.15], blade: [0, 0.8, -0.3], edge: [1, 0, 0], lean: 0.1, step: 0.15, pelvisY: 0.87 },
    follow: { hand: [-0.05, 1.2, 0.3], blade: [0, 0.7, 0.6], edge: [1, 0, 0], step: 0.05 },
  },
};

const SPEAR: Record<string, Swing> = {
  thrust: {
    windup: { hand: [-0.2, 1.05, -0.35], blade: [0.03, 0.08, 1], edge: [0, 1, 0], torso: -0.45, pelvisY: 0.86, step: 0.15 },
    strike: { hand: [-0.05, 1.15, 0.45], blade: [0, 0, 1], edge: [0, 1, 0], torso: -0.05, lean: 0.25, step: 0.45, pelvisY: 0.82 },
    follow: { hand: [-0.05, 1.15, 0.45], blade: [0, 0, 1], edge: [0, 1, 0], torso: -0.05, lean: 0.25, step: 0.45, pelvisY: 0.82 },
  },
  sweep: {
    windup: { hand: [-0.3, 1.0, 0.1], blade: [-1, -0.1, 0.45], edge: [0, 1, 0], torso: -1.0, pelvisY: 0.82, step: 0.2 },
    strike: { hand: [-0.1, 0.95, 0.35], blade: [0, -0.15, 1], edge: [0, 1, 0], torso: 0, lean: 0.25, pelvisY: 0.76, step: 0.35 },
    follow: { hand: [0.15, 0.95, 0.2], blade: [1, -0.1, 0.25], edge: [0, 1, 0], torso: 0.95, lean: 0.2, pelvisY: 0.76, step: 0.35 },
  },
};

const SHIELD: Record<string, Swing> = {
  stab: {
    windup: { hand: [-0.28, 1.35, -0.15], blade: [0.02, -0.04, 1], torso: -0.1, lean: 0.05, step: 0.1 },
    strike: { hand: [-0.16, 1.3, 0.55], blade: [0.03, -0.05, 1], torso: 0.1, lean: 0.2, step: 0.35, pelvisY: 0.83 },
    follow: { hand: [-0.16, 1.3, 0.55], blade: [0.03, -0.05, 1], torso: 0.1, lean: 0.2, step: 0.35, pelvisY: 0.83 },
  },
  charge: {
    windup: { lhand: [0.12, 1.05, 0.3], hand: [-0.3, 1.3, -0.05], lean: -0.05, pelvisY: 0.84, step: 0.05 },
    strike: { lhand: [0.05, 1.1, 0.55], hand: [-0.3, 1.25, 0.1], lean: 0.4, pelvisY: 0.78, step: 0.5 },
    follow: { lhand: [0.05, 1.1, 0.55], hand: [-0.3, 1.25, 0.1], lean: 0.4, pelvisY: 0.78, step: 0.5 },
  },
};

const DUAL: Record<string, Swing> = {
  right: {
    windup: { hand: [-0.45, 1.3, 0.0], blade: [-0.7, 0.5, -0.4], edge: [0, 1, 0], torso: -0.6, lhand: [0.25, 1.05, 0.3], pelvisY: 0.82, step: 0.15 },
    strike: { hand: [0.0, 1.1, 0.5], blade: [0.3, -0.1, 1], edge: [0, 1, 0], torso: 0, lean: 0.25, pelvisY: 0.8, step: 0.35 },
    follow: { hand: [0.3, 0.95, 0.25], blade: [0.8, -0.4, 0.1], edge: [0, 1, 0], torso: 0.5, lean: 0.25, pelvisY: 0.8, step: 0.35 },
  },
  left: {
    windup: { lhand: [0.45, 1.3, 0.0], lblade: [0.7, 0.5, -0.4], ledge: [0, 1, 0], torso: 0.6, hand: [-0.28, 1.05, 0.3], pelvisY: 0.82, step: 0.2 },
    strike: { lhand: [0.0, 1.1, 0.5], lblade: [-0.3, -0.1, 1], ledge: [0, 1, 0], torso: 0, lean: 0.25, pelvisY: 0.8, step: 0.35 },
    follow: { lhand: [-0.3, 0.95, 0.25], lblade: [-0.8, -0.4, 0.1], ledge: [0, 1, 0], torso: -0.5, lean: 0.25, pelvisY: 0.8, step: 0.35 },
  },
  cross: {
    windup: { hand: [-0.3, 1.55, 0.05], blade: [-0.4, 0.8, -0.3], lhand: [0.3, 1.55, 0.05], lblade: [0.4, 0.8, -0.3], lean: -0.1, pelvisY: 0.86, step: 0.1 },
    strike: { hand: [0.1, 1.1, 0.5], blade: [0.6, -0.4, 0.7], lhand: [-0.1, 1.1, 0.5], lblade: [-0.6, -0.4, 0.7], lean: 0.3, pelvisY: 0.8, step: 0.4 },
    follow: { hand: [0.25, 0.9, 0.35], blade: [0.7, -0.7, 0.2], lhand: [-0.25, 0.9, 0.35], lblade: [-0.7, -0.7, 0.2], lean: 0.35, pelvisY: 0.78, step: 0.4 },
  },
  leap: {
    windup: { hand: [-0.25, 1.75, -0.05], blade: [-0.2, 0.7, -0.6], lhand: [0.25, 1.75, -0.05], lblade: [0.2, 0.7, -0.6], lean: -0.15, pelvisY: 1.35, step: 0.3 },
    strike: { hand: [-0.1, 1.05, 0.5], blade: [0.1, -0.5, 0.9], lhand: [0.1, 1.05, 0.5], lblade: [-0.1, -0.5, 0.9], lean: 0.4, pelvisY: 0.78, step: 0.45 },
    follow: { hand: [-0.1, 0.85, 0.45], blade: [0.1, -0.85, 0.4], lhand: [0.1, 0.85, 0.45], lblade: [-0.1, -0.85, 0.4], lean: 0.45, pelvisY: 0.72, step: 0.45 },
  },
  throw: {
    windup: { hand: [-0.32, 1.55, -0.2], blade: [0, 1, -0.2], torso: -0.6, lean: -0.05, step: 0.15 },
    strike: { hand: [-0.08, 1.4, 0.52], blade: [0, 0.3, 1], torso: 0.25, lean: 0.2, step: 0.3 },
    follow: { hand: [0.05, 1.2, 0.45], blade: [0, -0.2, 1], torso: 0.3, lean: 0.2, step: 0.3 },
  },
};

const ARCHER_KNIFE: Swing = {
  windup: { hand: [-0.4, 1.25, 0.0], blade: [-0.6, 0.6, -0.3], torso: -0.5, step: 0.1 },
  strike: { hand: [0.0, 1.1, 0.5], blade: [0.4, -0.1, 1], torso: 0.1, lean: 0.2, step: 0.3 },
  follow: { hand: [0.25, 1.0, 0.3], blade: [0.8, -0.3, 0.2], torso: 0.4, lean: 0.2, step: 0.3 },
};

function swingFor(fam: Family, m: MoveDef): Swing | null {
  if (fam === 'ranger') return RANGER[m.id] ?? null;
  const id = m.id;
  if (fam === 'katana' || fam === 'nodachi') {
    if (m.feint) return KATANA.feint;
    if (id === 'ro_cut1' || id === 'ar_cleave' || id === 'bo_c1') return KATANA.overhead;
    if (id === 'ro_cut2' || id === 'bo_c2') return KATANA.rising;
    if (id === 'ar_sweep') return KATANA.horizontal;
    if (id === 'ar_crush' || id === 'bo_red') return KATANA.crush;
    return KATANA.thrust;
  }
  if (fam === 'yari') return id === 'sp_sweep' ? SPEAR.sweep : SPEAR.thrust;
  if (fam === 'shield') return id === 'sh_charge' ? SHIELD.charge : SHIELD.stab;
  if (fam === 'dual') {
    if (id === 'du_f1') return DUAL.right;
    if (id === 'du_f2') return DUAL.left;
    if (id === 'du_f3') return DUAL.cross;
    if (id === 'du_leap') return DUAL.leap;
    return DUAL.throw;
  }
  if (fam === 'archer') return ARCHER_KNIFE;
  return null;
}

// ── Helpers ─────────────────────────────────────────────────────────────────
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  x = clamp01(x);
  return x * x * (3 - 2 * x);
};
const easeOut = (x: number) => {
  x = clamp01(x);
  return 1 - (1 - x) * (1 - x) * (1 - x);
};
const easeIn = (x: number) => {
  x = clamp01(x);
  return x * x;
};
const powIn = (x: number, p: number) => Math.pow(clamp01(x), p);
const wrapAngle = (a: number) => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};

/** Slashing hands sweep around the chest instead of cutting straight across. */
const ARC_PIVOT = new THREE.Vector3(-0.02, 1.3, 0.04);

type Ease = 'smooth' | 'in' | 'out';

/** Per-move trajectory shape. */
interface Profile {
  arc: boolean;
  /** Acceleration of the release (higher = snappier, the blade is fastest at contact). */
  pow: number;
}
function profileFor(m: MoveDef): Profile {
  if (m.type === 'thrust') return { arc: false, pow: m.heavy ? 2.6 : 2.2 };
  if (m.type === 'blunt') return { arc: false, pow: 1.8 };
  return { arc: true, pow: m.heavy || m.finale ? 2.1 : 1.7 };
}

// ── Static keys (hoisted so poses can be cached and nothing is allocated per frame) ──
const K = {
  guardRanger: { hand: [-0.3, 1.02, 0.08], blade: [0.1, 0.7, 0.7], lhand: [0.1, 1.32, 0.42], lblade: [0.05, 0.08, 1], torso: 0.1, lean: 0.1, pelvisY: 0.86, step: 0.12 } as Key,
  parryKatana: { hand: [-0.16, 1.5, 0.3], blade: [0.3, 0.12, 1], edge: [0, 1, 0], torso: -0.25, lean: 0.08, pelvisY: 0.84, step: 0.25, head: 0.2 } as Key,
  guardKatana: { hand: [-0.12, 1.32, 0.38], blade: [0.95, 0.35, 0.15], edge: [0, 1, 0], lean: -0.05, pelvisY: 0.86, step: 0.1 } as Key,
  deflectUp: { hand: [-0.3, 1.05, 0.1], blade: [0.1, 0.6, 0.7], lhand: [0.22, 1.42, 0.52], lblade: [0.55, 0.35, 1], torso: -0.15, lean: -0.02, pelvisY: 0.86, step: 0.15 } as Key,
  flowR: { hand: [-0.36, 1.08, -0.1], blade: [-0.2, -0.2, -1], lhand: [0.3, 1.32, 0.38], lblade: [0.8, 0.25, 0.7], torso: 0.5, lean: 0.2, pelvisY: 0.8, step: 0.2, roll: -0.12 } as Key,
  flowL: { hand: [-0.36, 1.08, -0.1], blade: [-0.2, -0.2, -1], lhand: [0.3, 1.32, 0.38], lblade: [-0.4, 0.25, 0.7], torso: -0.5, lean: 0.2, pelvisY: 0.8, step: 0.2, roll: 0.12 } as Key,
  recoil: { hand: [-0.32, 1.72, -0.12], blade: [-0.2, 0.8, -0.6], lhand: [0.35, 1.2, 0.05], lean: -0.32, pelvisY: 0.84, headPitch: -0.2, torso: -0.3, step: -0.05 } as Key,
  guardbreak: { hand: [-0.5, 1.25, -0.05], blade: [-0.8, 0.3, -0.3], lhand: [0.5, 1.3, -0.05], lblade: [0.8, 0.5, 0.3], lean: -0.35, pelvisY: 0.8, headPitch: -0.3, step: -0.05 } as Key,
  broken: { hand: [-0.3, 0.55, 0.32], blade: [-0.15, -0.95, 0.3], lhand: [0.3, 0.7, 0.25], lblade: [0.2, -0.5, 1], lean: 0.55, pelvisY: 0.62, headPitch: 0.45, step: 0.25, torso: 0.1 } as Key,
  overextended: { hand: [-0.1, 0.85, 0.55], blade: [0.2, -0.7, 0.7], lhand: [0.25, 0.9, 0.45], lean: 0.62, pelvisY: 0.74, step: 0.5, headPitch: 0.25 } as Key,
  fear: { hand: [-0.2, 1.42, 0.28], blade: [0.2, 0.9, 0.3], lhand: [0.22, 1.35, 0.3], lean: -0.22, pelvisY: 0.82, headPitch: -0.1, step: -0.1 } as Key,
  heal: { hand: [-0.25, 0.9, 0.1], blade: [-0.1, -0.9, 0.3], lhand: [0.05, 1.3, 0.2], pelvisY: 0.66, lean: 0.25, headPitch: 0.4, step: 0.2 } as Key,
  standoffPlayer: { hand: [-0.32, 0.95, -0.12], blade: [-0.3, -0.35, -0.9], lhand: [0.2, 1.15, 0.36], lblade: [0.2, 0.1, 1], torso: -0.35, head: 0.3, pelvisY: 0.82, lean: 0.12, step: 0.35 } as Key,
  standoffFeint: { hand: [-0.05, 1.5, 0.2], blade: [0, 0.8, -0.3], lean: 0.2, step: 0.25, pelvisY: 0.84 } as Key,
  standoffCharge: { hand: [-0.1, 1.7, 0.0], blade: [0, 0.6, -0.8], lean: 0.35, pelvisY: 0.84, step: 0.35 } as Key,
  issenStrike: { hand: [-0.1, 1.1, 0.5], blade: [0.2, -0.1, 1], edge: [0, 1, 0], torso: 0.1, lean: 0.35, pelvisY: 0.8, step: 0.45 } as Key,
  issenZanshin: { hand: [-0.5, 1.12, -0.02], blade: [-0.82, -0.15, -0.55], edge: [0, 1, 0], torso: -0.7, lean: 0.22, pelvisY: 0.76, step: 0.6, lhand: [0.3, 1.1, 0.3], head: 0.4 } as Key,
  runRanger: { hand: [-0.3, 0.98, -0.05], blade: [-0.15, -0.25, -1], lhand: [0.26, 1.05, 0.2] } as Key,
  archerDraw: { lhand: [0.08, 1.48, 0.55], lblade: [0.1, 1, 0.1], ledge: [0, 0, 1], torso: 0.5, pelvisY: 0.9, head: -0.4, step: 0.12 } as Key,
  // Victims
  stunned: { hand: [-0.3, 0.7, 0.3], blade: [-0.1, -0.9, 0.3], lhand: [0.3, 0.8, 0.25], lean: 0.35, pelvisY: 0.74, headPitch: 0.3, step: 0.2 } as Key,
  slashHit: { hand: [-0.42, 0.95, 0.12], blade: [-0.3, -0.9, 0.2], lhand: [0.4, 1.25, 0.02], torso: 0.55, roll: 0.3, lean: 0.12, pelvisY: 0.72, head: 0.4, headPitch: -0.25, step: 0.1 } as Key,
  slashKneel: { hand: [-0.45, 0.5, 0.15], blade: [-0.2, -1, 0.1], lhand: [0.2, 0.75, 0.3], torso: 0.45, roll: 0.35, lean: 0.35, pelvisY: 0.46, headPitch: 0.4, head: 0.3, step: 0.12 } as Key,
  impaled: { hand: [-0.12, 1.02, 0.3], blade: [0.1, -0.8, 0.5], lhand: [0.1, 1.05, 0.32], lblade: [0, -0.5, 1], lean: 0.5, pelvisY: 0.8, headPitch: 0.5, step: 0.05, torso: 0.05 } as Key,
  pulledOff: { hand: [-0.2, 0.95, 0.2], blade: [0, -1, 0.2], lhand: [0.12, 1.0, 0.22], lean: -0.18, pelvisY: 0.78, headPitch: -0.3, step: -0.15 } as Key,
  thrustKneel: { hand: [-0.3, 0.6, 0.2], blade: [0, -1, 0.2], lhand: [0.15, 0.85, 0.25], lean: 0.15, pelvisY: 0.5, headPitch: 0.3, step: 0 } as Key,
  arched: { hand: [-0.5, 1.2, 0.1], blade: [-0.6, 0.4, 0.4], lhand: [0.5, 1.25, 0.1], lean: -0.35, pelvisY: 0.8, headPitch: -0.45, step: 0.35 } as Key,
  kneel: { hand: [-0.3, 0.6, 0.35], blade: [0, -1, 0.2], lhand: [0.3, 0.6, 0.35], lean: 0.45, pelvisY: 0.5, headPitch: 0.3, step: 0.2 } as Key,
  issenKneel: { hand: [-0.2, 0.5, 0.3], blade: [0, -1, 0.2], lhand: [0.2, 0.55, 0.3], pelvisY: 0.45, lean: 0.7, headPitch: 0.5, step: 0.2 } as Key,
  down: { hand: [-0.45, 0.4, 0.2], blade: [-0.5, -0.2, 0.8], lhand: [0.45, 0.45, 0.1], lean: 0.1, pelvisY: 0.2, headPitch: 0.1, step: 0.1 } as Key,
};

// ── Finisher key tracks (times from the shared FINISHER_TL; key 0 is the entry pose) ──
interface TrackKey {
  t: number;
  key: Key;
  /** Easing of the segment that ends on this key. */
  ease?: Ease;
}
function finisherKeys(kind: 'slash' | 'thrust' | 'flow'): TrackKey[] {
  const tl = FINISHER_TL[kind];
  const chiburi: Key = { hand: [-0.42, 1.05, 0.28], blade: [-0.9, -0.35, 0.3], edge: [0, 1, 0], torso: -0.4, lean: 0.1, pelvisY: 0.84, step: 0.3 };
  if (kind === 'slash') {
    const dash: Key = { hand: [-0.3, 0.95, -0.1], blade: [-0.2, -0.3, -1], lean: 0.35, pelvisY: 0.82, step: 0.4 };
    const follow: Key = { hand: [0.25, 0.78, 0.4], blade: [0.5, -0.85, 0.2], edge: [1, 0, 0], torso: 0.35, lean: 0.45, pelvisY: 0.72, step: 0.6, lhand: [0.35, 1.0, -0.1] };
    return [
      { t: tl.dash, key: dash },
      { t: tl.windupEnd, key: { hand: [-0.1, 1.9, -0.05], blade: [0, 0.3, -1], edge: [1, 0, 0], torso: -0.25, lean: -0.15, lhand: [0.3, 1.4, 0.2], pelvisY: 0.9, step: 0.25 } },
      { t: tl.release, key: { hand: [-0.1, 1.92, -0.04], blade: [0, 0.4, -1], edge: [1, 0, 0], torso: -0.32, lean: -0.2, lhand: [0.3, 1.42, 0.2], pelvisY: 0.9, step: 0.25 } },
      { t: tl.contact, ease: 'in', key: { hand: [-0.05, 1.15, 0.55], blade: [0.2, -0.3, 1], edge: [1, 0, 0], torso: 0, lean: 0.3, pelvisY: 0.8, step: 0.5 } },
      { t: tl.followEnd, ease: 'out', key: follow },
      { t: tl.holdEnd, key: { ...follow, lean: 0.42, pelvisY: 0.73 } },
      { t: tl.pull, key: chiburi },
      { t: tl.dur, key: {} },
    ];
  }
  if (kind === 'thrust') {
    const dash: Key = { hand: [-0.3, 0.95, -0.1], blade: [-0.2, -0.3, -1], lean: 0.35, pelvisY: 0.82, step: 0.4 };
    return [
      { t: tl.dash, key: dash },
      { t: tl.windupEnd, key: { hand: [-0.3, 1.12, -0.3], blade: [0, 0.05, 1], edge: [0, 1, 0], torso: -0.6, lhand: [0.25, 1.28, 0.45], lblade: [0.1, 0.2, 1], pelvisY: 0.84, step: 0.3 } },
      { t: tl.release, key: { hand: [-0.3, 1.12, -0.35], blade: [0, 0.05, 1], edge: [0, 1, 0], torso: -0.66, lhand: [0.25, 1.28, 0.46], lblade: [0.1, 0.2, 1], pelvisY: 0.83, step: 0.3 } },
      { t: tl.contact, ease: 'in', key: { hand: [0, 1.25, 0.55], blade: [0, 0.02, 1], edge: [0, 1, 0], torso: 0.2, lean: 0.3, pelvisY: 0.8, step: 0.6, lhand: [0.3, 1.1, 0.0] } },
      { t: tl.followEnd, ease: 'out', key: { hand: [0.01, 1.25, 0.6], blade: [0.02, 0.02, 1], edge: [0, 1, 0], torso: 0.24, lean: 0.34, pelvisY: 0.79, step: 0.62, lhand: [0.3, 1.1, 0.0] } },
      { t: tl.holdEnd, key: { hand: [0.02, 1.27, 0.57], blade: [0.05, 0.1, 1], edge: [0.3, 1, 0], torso: 0.25, lean: 0.3, pelvisY: 0.8, step: 0.6, lhand: [0.3, 1.1, 0.0] } },
      { t: tl.pull, ease: 'out', key: { hand: [-0.25, 1.15, 0.12], blade: [0, 0.1, 1], edge: [0, 1, 0], torso: -0.2, lean: 0.05, pelvisY: 0.84, step: 0.35, lhand: [0.15, 1.3, 0.62], lblade: [0, 0.2, 1] } },
      { t: tl.pull + 7, key: chiburi },
      { t: tl.dur, key: {} },
    ];
  }
  const follow: Key = { hand: [0.15, 0.95, 0.45], blade: [0.6, -0.6, 0.4], edge: [1, 0, 0], torso: 0.4, lean: 0.4, pelvisY: 0.76, step: 0.55 };
  return [
    { t: tl.dash, key: { hand: [-0.3, 1.2, 0.0], blade: [-0.3, 0.5, -0.8], lean: 0.2, pelvisY: 0.84, step: 0.3 } },
    { t: tl.windupEnd, key: { hand: [-0.3, 1.62, 0.05], blade: [-0.3, 0.8, -0.5], edge: [1, 0, 0], torso: -0.45, lean: -0.05, pelvisY: 0.86, step: 0.3 } },
    { t: tl.release, key: { hand: [-0.3, 1.66, 0.03], blade: [-0.3, 0.85, -0.5], edge: [1, 0, 0], torso: -0.5, lean: -0.07, pelvisY: 0.86, step: 0.3 } },
    { t: tl.contact, ease: 'in', key: { hand: [-0.02, 1.22, 0.52], blade: [0.35, -0.25, 1], edge: [1, 0, 0], torso: 0.05, lean: 0.28, pelvisY: 0.8, step: 0.45 } },
    { t: tl.followEnd, ease: 'out', key: follow },
    { t: tl.holdEnd, key: { ...follow, lean: 0.38, pelvisY: 0.77 } },
    { t: tl.pull, key: { ...chiburi, lean: 0.12, step: 0.35 } },
    { t: tl.dur, key: {} },
  ];
}

// ── Scratch (never allocate per frame) ──────────────────────────────────────
const _k1 = basePose();
const _k2 = basePose();
const _k3 = basePose();
const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _vel = new THREE.Vector3();
const AIM_ANCHOR = new THREE.Vector3();
const ARCHER_HAND_START = new THREE.Vector3(0.05, 1.48, 0.46);
const ARCHER_HAND_ANCHOR = new THREE.Vector3(-0.08, 1.55, 0.02);
const HIT_FLAIL_R = new THREE.Vector3(-0.45, 1.3, 0.0);
const HIT_FLAIL_L = new THREE.Vector3(0.45, 1.25, 0.0);
const HIT_GUT_R = new THREE.Vector3(-0.1, 1.02, 0.26);
const HIT_GUT_L = new THREE.Vector3(0.1, 1.05, 0.26);

/** Last blow taken (character-local), for directional reactions. */
interface HitInfo {
  /** Push direction (away from the attacker), local x/z, unit. */
  px: number;
  pz: number;
  /** Sideways travel of the blade across the body (local x, −1..1). */
  lat: number;
  type: AttackType;
  heavy: boolean;
  /** Per-hit amplitude variation so repeated hits don't look identical. */
  amp: number;
}

/** A reaction without a recorded blow (e.g. a scripted stagger): struck from the front. */
const DEFAULT_HIT: HitInfo = { px: 0, pz: -1, lat: 0, type: 'slash', heavy: false, amp: 1 };

const GALE_MOVE: MoveDef = { id: 'r_gale_seg', name: '', type: 'slash', startup: GALE_TL.contact, active: 2, recovery: GALE_TL.seg - GALE_TL.contact - 2, damage: 0, posture: 0, shape: { kind: 'arc', range: 0, halfAngle: 0 }, lunge: 0, chainFrom: 0, cancelFrom: 0 };

const SWING_TL = new Map<string, SwingTimeline>();
/** Shared swing timeline for a move (cached). Projectiles get a 2-tick visual release. */
export function swingTl(m: MoveDef): SwingTimeline {
  let tl = SWING_TL.get(m.id);
  if (!tl) {
    tl = swingTimeline(m);
    // Projectiles and feints have no core release; give the pose a short visual one.
    if (m.projectile || m.feint) tl = { ...tl, release: Math.max(1, tl.contact - 3), windupEnd: Math.max(1, Math.min(tl.windupEnd, tl.contact - 5)) };
    SWING_TL.set(m.id, tl);
  }
  return tl;
}

/** Presentation time of `f`'s current action (ticks): what poses, trails and camera focus use. */
export function actionTime(f: Fighter, w: World): number {
  return Math.max(0, f.act.t - 1 + w.alpha);
}

const SPIN_START = (m: MoveDef) => m.startup - 3;
const SPIN_LEN = (m: MoveDef) => m.active + 12;

// ── Animator ────────────────────────────────────────────────────────────────
export class Animator {
  /** Final pose (feet planted in world space). */
  readonly pose = basePose();
  /** Animation pose before foot planting (what blends and entries are taken from). */
  private readonly animPose = basePose();
  private readonly target = basePose();
  private readonly from = basePose();
  private readonly entry = basePose();
  private readonly stance = basePose();
  private readonly frozen = basePose();
  private readonly corpse = basePose();
  private blend = 1;
  private blendDur = 0.1;
  private serial = -1;
  private kind = '';
  private prevKind = '';
  private galeSeg = -1;
  private stepPlanned = false;
  /** Finisher victim timeline, continued after the body turns into a corpse. */
  private victimKind: string = 'slash';
  private victimPerf = -1;
  private victimT = 0;
  private deadClock = 0;
  private dtSim = 0;
  /** The attack being played (to re-evaluate it exactly at the tick another action replaced it). */
  private atkMove: MoveDef | null = null;
  private atkT = 0;
  private atkTick = 0;
  /** Direction of the performer in the victim's frame, latched at contact (the fall never re-aims). */
  private perfX = 0;
  private perfZ = 1;
  private perfLatched = false;
  /** Fall direction of a normal death, latched from the killing blow. */
  private fallX = 0;
  private fallZ = 1;
  private readonly prevHand = new THREE.Vector3();
  private readonly handVel = new THREE.Vector3();
  private readonly entryVel = new THREE.Vector3();
  private hit: HitInfo | null = null;
  private hitAge = 99;
  private hitSerial = -1;
  private readonly cache = new Map<Key, Pose>();
  private readonly finKeys = new Map<string, [number, Pose, Ease][]>();
  readonly planter = new FootPlanter();
  readonly family: Family;

  constructor(readonly kind0: CharKind) {
    this.family = FAMILY[kind0];
    applyKey(basePose(), STANCE[this.family], this.stance);
    this.fixHands(this.stance);
    clonePose(this.stance, this.pose);
    clonePose(this.stance, this.animPose);
    this.prevHand.copy(this.stance.handR);
  }

  /** Two-handed weapons: derive the left hand from the grip. */
  private fixHands(p: Pose): void {
    const fam = this.family;
    if (fam === 'katana') p.handL.copy(p.handR).addScaledVector(p.bladeR, -0.2);
    else if (fam === 'nodachi') p.handL.copy(p.handR).addScaledVector(p.bladeR, -0.25);
    else if (fam === 'yari') {
      p.handL.copy(p.handR).addScaledVector(p.bladeR, 0.55);
      p.bladeL.copy(p.bladeR);
    }
  }

  /** Cached pose for a static key (applied on the stance). */
  private kp(k: Key): Pose {
    let p = this.cache.get(k);
    if (!p) {
      p = applyKey(this.stance, k, basePose());
      this.fixHands(p);
      this.cache.set(k, p);
    }
    return p;
  }

  /**
   * Which way (character-local x) the blade travels through the target on this move:
   * +1 toward the attacker's left, −1 toward its right, 0 for thrusts / blunt.
   */
  sweepSign(m: MoveDef): number {
    if (m.type !== 'slash') return 0;
    const sw = swingFor(this.family, m);
    if (!sw || !sw.follow.hand || !sw.strike.hand) return 0;
    const dx = sw.follow.hand[0] - sw.strike.hand[0];
    return Math.abs(dx) < 0.05 ? 0 : Math.sign(dx);
  }

  /** A blow landed on this fighter. `pushX/Z` and `lat` are in this character's local frame. */
  onHit(f: Fighter, pushX: number, pushZ: number, lat: number, type: AttackType, heavy: boolean): void {
    const l = Math.hypot(pushX, pushZ) || 1;
    // Deterministic per-hit variation (serial-based, so replays match).
    const h = Math.sin(f.serial * 12.9898 + f.id * 78.233) * 43758.5453;
    const amp = 0.85 + (h - Math.floor(h)) * 0.3;
    this.hit = { px: pushX / l, pz: pushZ / l, lat, type, heavy, amp };
    this.hitAge = 0;
    this.hitSerial = f.serial;
  }

  /** The animation pose before foot planting (what the action timeline produced). */
  get rawPose(): Pose {
    return this.animPose;
  }

  /** Landings (footstep / dust events) produced by the last update. */
  get landings() {
    return this.planter.landings;
  }

  update(f: Fighter, w: World, alpha: number, dtSim: number, root: THREE.Vector3, yaw: number): Pose {
    const a = f.act;
    // Poses run on the same clock as the interpolated roots (the frame shows tick − 1 + alpha).
    // During hit-stop the world holds alpha = 1, i.e. exactly the tick that caused it: the
    // contact key, whatever the refresh rate or frame phase.
    const t = Math.max(0, a.t - 1 + alpha);
    if (f.serial !== this.serial || a.kind !== this.kind) this.onActionStart(f, w);
    if (a.kind === 'attack') {
      this.atkMove = a.move ?? null;
      this.atkT = a.t;
      this.atkTick = w.tick;
    }
    if (a.kind === 'gale') {
      // Same clock as the pose: a new dash-cut segment starts from where the last one ended.
      const seg = Math.floor(Math.max(0, t - 1) / GALE_TL.seg);
      if (seg !== this.galeSeg) {
        this.galeSeg = seg;
        this.snapshot(this.entry);
        this.entryVel.copy(this.handVel);
      }
    }
    this.hitAge += dtSim;
    this.dtSim = dtSim;

    this.actionPose(f, w, t, this.target);

    const vx = (f.pos.x - f.prevPos.x) * 60;
    const vz = (f.pos.z - f.prevPos.z) * 60;
    const speed = Math.hypot(vx, vz);
    const c = Math.cos(f.yaw);
    const sn = Math.sin(f.yaw);
    const lx = speed > 1e-3 ? (vx * c - vz * sn) / speed : 0;
    const lz = speed > 1e-3 ? (vx * sn + vz * c) / speed : 0;
    this.locomotion(f, this.target, speed, lx, lz);
    this.flinch(f, this.target);

    this.blend += dtSim;
    const k = this.blendDur <= 0 ? 1 : smooth(this.blend / this.blendDur);
    if (k >= 1) clonePose(this.target, this.animPose);
    else lerpPose(this.from, this.target, k, this.animPose);
    this.fixHands(this.animPose);

    // Hand velocity (local, per sim-second): carried into the next move's windup.
    if (dtSim > 0) {
      _v1.subVectors(this.animPose.handR, this.prevHand).multiplyScalar(1 / dtSim);
      this.handVel.lerp(_v1, 1 - Math.exp(-dtSim * 40));
      this.prevHand.copy(this.animPose.handR);
    }

    // Feet: the support foot stays locked in world space, the moving foot steps. Ideally the feet
    // point roughly where the hips do (e.g. the archer's side-on stance).
    clonePose(this.animPose, this.pose);
    this.pose.footYawL += this.pose.pelvisYaw * 0.8;
    this.pose.footYawR += this.pose.pelvisYaw * 0.8;
    _vel.set(vx, 0, vz);
    const mode = this.feetMode(f, this.pose, t);
    this.planter.update(this.pose, root, yaw + this.pose.bodyYaw, f.size, _vel, dtSim, mode, this.stepParams(f, t, speed, lx, lz), 1);
    return this.pose;
  }

  private prevKindIs(k: string): boolean {
    return this.prevKind === k;
  }

  /** From the pose the action started in (entry) toward `rest`, done by `dur` ticks. */
  private settle(rest: Pose, t: number, dur: number, out: Pose): Pose {
    return lerpPose(this.entry, rest, smooth(t / Math.max(1, dur)), out);
  }

  /** Copy the current animation pose with whole-body angles wrapped (a finished 360° spin or roll is 0, not a reverse spin). */
  private snapshot(out: Pose): Pose {
    clonePose(this.animPose, out);
    out.bodyYaw = wrapAngle(out.bodyYaw);
    out.bodyPitch = wrapAngle(out.bodyPitch);
    out.bodyRoll = wrapAngle(out.bodyRoll);
    return out;
  }

  private onActionStart(f: Fighter, w: World): void {
    const a = f.act;
    this.prevKind = this.kind;
    this.kind = a.kind;
    this.serial = f.serial;
    this.galeSeg = -1;
    this.stepPlanned = false;
    this.snapshot(this.from);
    // An attack replaced mid-way (deflected, flowed, bounced, parried, issen'd, interrupted…): the
    // new action starts from the attack exactly as it was on the tick it was replaced — e.g. the
    // strike key when that happened on its contact tick — not from the last drawn frame.
    const m = this.prevKindIs('attack') ? this.atkMove : null;
    const sw = m && !m.projectile ? swingFor(this.family, m) : null;
    if (m && sw) {
      const tl = swingTl(m);
      const at = Math.min(tl.end, this.atkT + Math.max(0, w.tick - this.atkTick));
      this.swingPose(sw, m, tl, at, this.entry, this.from);
      this.fixHands(this.from);
      this.from.bodyYaw = m.id === 'r_s4' ? wrapAngle(smooth((at - SPIN_START(m)) / SPIN_LEN(m)) * Math.PI * 2) : 0;
    }
    clonePose(this.from, this.entry);
    // Momentum carry: the new windup starts moving the way the blade was already going.
    this.entryVel.copy(this.handVel);
    const maxV = 3.5;
    if (this.entryVel.length() > maxV) this.entryVel.setLength(maxV);
    if (a.kind === 'finished' && (a.finisher === 'issen' || a.finisher === 'hajiki' || a.finisher === 'standoff')) clonePose(this.from, this.frozen);
    if (a.kind === 'finished') {
      this.victimKind = a.finisher ?? 'slash';
      this.victimPerf = a.targetId ?? -1;
      this.victimT = 0;
      this.perfLatched = false;
    }
    if (a.kind === 'dead') {
      clonePose(this.from, this.corpse);
      this.deadClock = 0;
      // The body falls the way the killing blow pushed it (forward for burns / unknown causes).
      const h = this.hit && this.hitAge < 0.5 ? this.hit : null;
      this.fallX = h ? h.px : 0;
      this.fallZ = h ? h.pz : 1;
    }
    // A spin that just finished: keep the root heading continuous (bodyYaw wraps to ~0).
    this.animPose.bodyYaw = this.from.bodyYaw;
    this.blend = 0;
    this.blendDur = blendTime(a.kind);
  }

  // ── Attacks ───────────────────────────────────────────────────────────────
  private swingPose(sw: Swing, m: MoveDef, tl: SwingTimeline, t: number, entry: Pose, out: Pose, holdWindup = false): Pose {
    const wind = this.kp(sw.windup);
    const strike = this.kp(sw.strike);
    const follow = this.kp(sw.follow);
    const prof = profileFor(m);
    const pivot = prof.arc ? ARC_PIVOT : undefined;
    if (holdWindup) return clonePose(wind, out);
    // Coiled windup: a touch past the windup, away from the strike (loads the release) — only
    // when there is time to coil; otherwise the release starts from the windup itself.
    const coil = _k3;
    if (tl.release - tl.windupEnd >= 1) {
      lerpPose(strike, wind, 1.06, coil);
      coil.torsoYaw = wind.torsoYaw + (wind.torsoYaw - strike.torsoYaw) * 0.08;
    } else clonePose(wind, coil);

    if (t < tl.windupEnd) {
      // Anticipation from wherever the body actually is (the previous move's end, a cancel, a
      // charge…). Legs and pelvis lead, the torso follows, the arms arrive last.
      const u = t / tl.windupEnd;
      lerpPoseParts(entry, wind, smooth(u * 1.35), smooth(u * 1.12), smooth(u), out, pivot);
      const h = u * (1 - u) * (1 - u) * (tl.windupEnd / 60);
      out.handR.addScaledVector(this.entryVel, h);
      return out;
    }
    if (t < tl.release) {
      const u = (t - tl.windupEnd) / Math.max(1e-3, tl.release - tl.windupEnd);
      return lerpPose(wind, coil, smooth(u), out);
    }
    if (t < tl.contact) {
      // Release: the body drives first, the blade whips through and is fastest at contact.
      const u = (t - tl.release) / Math.max(1e-3, tl.contact - tl.release);
      return lerpPoseParts(coil, strike, smooth(u * 1.5), powIn(u, prof.pow * 0.6), powIn(u, prof.pow), out, pivot);
    }
    if (t < tl.followEnd) {
      // Follow-through: carries the speed out of contact, then brakes.
      const u = (t - tl.contact) / Math.max(1e-3, tl.followEnd - tl.contact);
      return lerpPoseParts(strike, follow, smooth(u * 1.2), easeOut(u), easeOut(u), out, pivot);
    }
    // Recovery: settle, then return to guard.
    const u = (t - tl.followEnd) / Math.max(1e-3, tl.end - tl.followEnd);
    const r = clamp01((u - 0.2) / 0.8);
    return lerpPoseParts(follow, this.stance, smooth(r * 1.15), smooth(r), smooth(r), out, pivot);
  }

  private actionPose(f: Fighter, w: World, t: number, out: Pose): Pose {
    const a = f.act;
    const fam = this.family;
    clonePose(this.stance, out);
    const wob = (amp: number, freq: number) => Math.sin((f.age + t) * freq + f.id) * amp;

    switch (a.kind) {
      case 'attack': {
        const m = a.move!;
        const sw = swingFor(fam, m);
        if (!sw) return out;
        if (fam === 'archer' && m.projectile) return this.archerShot(t, m, out);
        const tl = swingTl(m);
        this.swingPose(sw, m, tl, t, this.entry, out);
        if (m.id === 'r_s4') out.bodyYaw = smooth((t - SPIN_START(m)) / SPIN_LEN(m)) * Math.PI * 2;
        if (m.id === 'du_leap') {
          // Arc through the air during the startup.
          const u = clamp01(t / (m.startup + m.active));
          out.pelvis.y += Math.sin(u * Math.PI) * 0.55;
        }
        // Fumikomi: the lead foot lifts and stamps down on the contact tick.
        if (!this.stepPlanned && !m.projectile && !m.feint && m.id !== 'du_leap' && m.id !== 'r_s4' && (a.lunge ?? 0) > 0.3) {
          const lead = Math.min(tl.contact - 1, m.heavy || m.finale ? 12 : 9);
          if (t >= tl.contact - lead) {
            this.stepPlanned = true;
            this.planter.planStep(0, (tl.contact - t) / 60, 0.07);
          }
        }
        return out;
      }
      case 'charge': {
        const sw = RANGER[f.act.button === 'thrust' ? 'r_ht' : 'r_hs'];
        clonePose(this.kp(sw.windup), out);
        const c = Math.min(1, t / T.chargeMax);
        out.pelvis.y -= c * 0.05;
        out.handR.x += wob(0.008 * c, 2.1);
        out.handR.y += wob(0.008 * c, 2.7);
        return out;
      }
      case 'guard':
      case 'blockstun': {
        if (fam === 'ranger') clonePose(this.kp(K.guardRanger), out);
        else if ((fam === 'katana' || fam === 'nodachi') && a.value === 1) clonePose(this.kp(K.parryKatana), out);
        else if (fam === 'katana' || fam === 'nodachi') clonePose(this.kp(K.guardKatana), out);
        if (a.kind === 'blockstun') {
          const u = 1 - clamp01(t / 10);
          out.lean -= 0.12 * u;
          out.pelvis.z -= 0.05 * u;
        }
        return out;
      }
      case 'deflect': {
        const u = easeOut(t / 4);
        const back = smooth((t - 6) / 8);
        this.settle(this.kp(K.guardRanger), t, 6, _k1);
        return lerpPose(_k1, this.kp(K.deflectUp), u * (1 - back), out);
      }
      case 'flow':
      case 'flowStep': {
        const u = a.kind === 'flow' ? easeOut(t / 6) : smooth(t / 6);
        this.settle(this.stance, t, 6, _k1);
        return lerpPose(_k1, this.kp((a.side ?? 1) > 0 ? K.flowR : K.flowL), u, out);
      }
      case 'dodge': {
        const roll = a.value === 1;
        const dir = a.dir ?? { x: 0, z: -1 };
        const c = Math.cos(f.yaw);
        const sn = Math.sin(f.yaw);
        const lx = dir.x * c - dir.z * sn;
        const lz = dir.x * sn + dir.z * c;
        const u = t / a.dur;
        const bump = Math.sin(Math.min(1, u * 1.2) * Math.PI);
        out.pelvis.y = roll ? 0.9 - bump * 0.4 : 0.9 - bump * 0.14;
        out.lean = 0.08 + lz * 0.25 * bump;
        out.roll = -lx * 0.3 * bump;
        // Feet spread along the dodge so the landing lands wide and braced.
        out.footL.z += lz * 0.2 * bump;
        out.footR.z -= lz * 0.2 * bump;
        out.footL.x += lx * 0.12 * bump;
        out.footR.x += lx * 0.12 * bump;
        if (roll) {
          const r = smooth(u / 0.8) * Math.PI * 2;
          if (Math.abs(lz) >= Math.abs(lx)) out.bodyPitch = r * Math.sign(lz || 1);
          else out.bodyRoll = -r * Math.sign(lx);
          out.handR.set(-0.2, 1.1, 0.2);
          out.handL.set(0.2, 1.1, 0.2);
        }
        return out;
      }
      case 'hitstun':
      case 'stagger':
        return this.hitPose(f, t, out);
      case 'recoil':
      case 'guardbreak': {
        const u = Math.sin(Math.min(1, t / 7) * Math.PI * 0.5) * (1 - smooth((t - a.dur * 0.55) / (a.dur * 0.45)));
        this.settle(this.stance, t, a.dur * 0.6, _k1);
        return lerpPose(_k1, this.kp(a.kind === 'recoil' ? K.recoil : K.guardbreak), u, out);
      }
      case 'broken': {
        const u = smooth(t / 12) * (1 - smooth((t - a.dur + 14) / 14));
        this.settle(this.stance, t, 12, _k1);
        lerpPose(_k1, this.kp(K.broken), u, out);
        out.pelvis.x += wob(0.02, 0.09) * u;
        out.lean += wob(0.04, 0.07) * u;
        return out;
      }
      case 'overextended': {
        const u = easeOut(t / 10) * (1 - smooth((t - a.dur + 16) / 16));
        this.settle(this.stance, t, 10, _k1);
        return lerpPose(_k1, this.kp(K.overextended), u, out);
      }
      case 'fear': {
        clonePose(this.kp(K.fear), out);
        out.handR.x += wob(0.02, 1.3);
        out.pelvis.x += wob(0.01, 1.7);
        return out;
      }
      case 'evade': {
        const side = a.side ?? 1;
        const u = Math.sin(Math.min(1, t / a.dur) * Math.PI);
        this.settle(this.stance, t, a.dur * 0.5, out);
        out.roll = -side * 0.35 * u;
        out.pelvis.y -= 0.12 * u;
        out.lean -= 0.1 * u;
        return out;
      }
      case 'aim':
      case 'quickshot':
        return this.aimPose(f, w, t, out);
      case 'heal': {
        const u = smooth(t / 10) * (1 - smooth((t - a.dur + 8) / 8));
        return lerpPose(this.stance, this.kp(K.heal), u, out);
      }
      case 'standoff':
        return this.standoffPose(f, t, out);
      case 'issen':
        return this.issenPose(t, a.dur, out);
      case 'finisher':
        return this.finisherPose(f, w, t, out);
      case 'gale': {
        const local = galeLocal(t);
        return this.swingPose(RANGER.r_gale, GALE_MOVE, swingTl(GALE_MOVE), local, this.entry, out);
      }
      case 'finished':
        this.victimT = t;
        return this.victimPose(f, w, t, this.victimKind, this.victimPerf, out);
      case 'dead':
        return this.deadPose(f, w, out);
      default:
        return out;
    }
  }

  // ── Reactions ─────────────────────────────────────────────────────────────
  /** Directional hit reaction: depends on where the blow came from, its type and weight. */
  private hitPose(f: Fighter, t: number, out: Pose): Pose {
    const a = f.act;
    const big = a.kind === 'stagger';
    // Start from the pose the blow caught (mid-swing, guard…) and relax toward stance.
    lerpPose(this.entry, this.stance, smooth(t / (a.dur * 0.7)), out);
    const h: HitInfo = this.hit && this.hitSerial === f.serial ? this.hit : DEFAULT_HIT;
    const rise = big ? 6 : 4;
    const u = Math.sin(Math.min(1, t / rise) * Math.PI * 0.5) * (1 - smooth((t - a.dur * 0.45) / (a.dur * 0.55)));
    const amp = (big ? 1.35 : 1) * h.amp * (h.heavy && !big ? 1.15 : 1);
    out.lean += h.pz * 0.28 * amp * u;
    out.roll += -h.px * 0.22 * amp * u;
    out.pelvis.x += h.px * 0.05 * amp * u;
    out.pelvis.z += h.pz * 0.05 * amp * u;
    out.pelvis.y -= (big ? 0.1 : 0.05) * u;
    if (h.type === 'thrust') {
      // Folds around the point.
      out.lean += 0.42 * amp * u;
      out.headPitch += 0.35 * u;
      out.handR.lerp(HIT_GUT_R, 0.55 * u);
      out.handL.lerp(HIT_GUT_L, 0.5 * u);
    } else if (h.type === 'blunt') {
      out.headPitch -= 0.45 * u;
      out.lean += h.pz * 0.15 * u;
      out.handR.lerp(HIT_FLAIL_R, 0.4 * u);
      out.handL.lerp(HIT_FLAIL_L, 0.4 * u);
    } else {
      // Twisted along the cut, head snapped, arms thrown.
      out.torsoYaw += h.lat * 0.5 * amp * u;
      out.headYaw += h.lat * 0.35 * u;
      out.headPitch -= 0.25 * u;
      out.handR.lerp(HIT_FLAIL_R, (h.lat > 0 ? 0.35 : 0.65) * u);
      out.handL.lerp(HIT_FLAIL_L, (h.lat > 0 ? 0.65 : 0.35) * u);
    }
    this.fixHands(out);
    return out;
  }

  /** Super armor / heavy bodies keep their action but still visibly take the blow (additive). */
  private flinch(f: Fighter, out: Pose): void {
    const h = this.hit;
    if (!h || this.hitAge > 0.4) return;
    const k = f.act.kind;
    if (k === 'hitstun' || k === 'stagger' || k === 'dead' || k === 'finished') return;
    const s = Math.sin(Math.min(1, this.hitAge / 0.05) * Math.PI * 0.5) * Math.exp(-this.hitAge / 0.1) * (h.heavy ? 0.6 : 0.4) * h.amp;
    out.lean += h.pz * 0.25 * s;
    out.roll -= h.px * 0.2 * s;
    out.torsoYaw += h.lat * 0.4 * s;
    out.headPitch -= 0.3 * s;
    out.pelvis.x += h.px * 0.03 * s;
    out.pelvis.z += h.pz * 0.03 * s;
  }

  /** Lying pose whose fall goes toward local direction (fx, fz). */
  private downPose(fx: number, fz: number, out: Pose): Pose {
    const l = Math.hypot(fx, fz) || 1;
    clonePose(this.kp(K.down), out);
    out.bodyPitch = 1.45 * (fz / l);
    out.bodyRoll = -1.45 * (fx / l);
    // Arms go out toward the ground on the side it falls to.
    out.handR.z += (fz / l) * 0.2;
    out.handL.z += (fz / l) * 0.2;
    return out;
  }

  /** start → kneel (knees buckle) → down (the body tips over), u ∈ [0, 1]. */
  private collapse(start: Pose, kneel: Pose, fx: number, fz: number, u: number, split: number, out: Pose): Pose {
    if (u < split) {
      const v = u / split;
      return lerpPoseParts(start, kneel, easeOut(v * 1.2), easeOut(v), smooth(v), out);
    }
    const down = this.downPose(fx, fz, _k2);
    const v = easeIn((u - split) / (1 - split));
    return lerpPose(kneel, down, v, out);
  }

  private victimPose(f: Fighter, w: World, t: number, kind: string, perfId: number, out: Pose): Pose {
    const survive = f.hp > 0;
    // Where the performer is, in this victim's frame — latched when the blow lands so the fall
    // (and the corpse) never re-aims at wherever the player walks afterwards.
    const contactT = kind === 'issen' || kind === 'hajiki' || kind === 'standoff' ? ISSEN_TL.victimFreeze : FINISHER_TL[kind === 'thrust' || kind === 'flow' ? kind : 'slash'].contact;
    if (!this.perfLatched) {
      const perf = w.get(perfId);
      if (perf) {
        const dx = perf.pos.x - f.pos.x;
        const dz = perf.pos.z - f.pos.z;
        const l = Math.hypot(dx, dz) || 1;
        const c = Math.cos(f.yaw);
        const s = Math.sin(f.yaw);
        this.perfX = (dx * c - dz * s) / l;
        this.perfZ = (dx * s + dz * c) / l;
      }
      if (t >= contactT) this.perfLatched = true;
    }
    const ax = this.perfX;
    const az = this.perfZ;

    if (kind === 'issen' || kind === 'hajiki' || kind === 'standoff') {
      // Frozen mid-attack … then the cut registers.
      const I = ISSEN_TL;
      if (t < I.victimFreeze) return clonePose(this.frozen, out);
      const u = (t - I.victimFreeze) / (I.victimDown - I.victimFreeze);
      if (survive) {
        const r = Math.sin(clamp01(u * 1.5) * Math.PI);
        lerpPose(this.frozen, this.stance, smooth(u), out);
        out.lean -= 0.3 * r;
        out.headPitch -= 0.3 * r;
        return out;
      }
      // Stumbles on in the direction it was attacking, then pitches forward.
      return this.collapse(this.frozen, this.kp(K.issenKneel), 0, 1, clamp01(u), 0.45, out);
    }

    const tl = FINISHER_TL[kind === 'thrust' || kind === 'flow' ? kind : 'slash'];
    if (t < tl.contact) {
      // Reeling, waiting for the blow.
      return lerpPose(this.entry, this.kp(kind === 'flow' ? K.overextended : K.stunned), smooth(t / 8), out);
    }
    const pre = this.kp(kind === 'flow' ? K.overextended : K.stunned);
    if (kind === 'thrust') {
      // Impaled → the blade is pulled out → falls away.
      const impaled = this.kp(K.impaled);
      if (t < tl.pull) {
        lerpPose(pre, impaled, easeOut((t - tl.contact) / 4), out);
        // Held on the blade: small convulsions.
        out.handR.y += Math.sin(t * 1.7) * 0.01;
        out.headPitch += Math.sin(t * 1.3) * 0.03;
        return out;
      }
      const pulled = this.kp(K.pulledOff);
      const u = (t - tl.pull) / (tl.victimDown - tl.pull);
      if (u < 0.25) {
        lerpPose(impaled, pulled, smooth(u / 0.25), out);
        out.pelvis.z -= 0.2 * smooth(u / 0.25);
        return out;
      }
      if (survive) return lerpPose(pulled, this.stance, smooth((u - 0.25) / 0.75), out);
      clonePose(pulled, _k1);
      _k1.pelvis.z -= 0.2;
      return this.collapse(_k1, this.kp(K.thrustKneel), -ax, -az, clamp01((u - 0.25) / 0.75), 0.35, out);
    }
    if (kind === 'flow') {
      // Cut across the back: arches, then falls away from the cut.
      const arched = this.kp(K.arched);
      if (t < tl.victimFall) return lerpPose(pre, arched, easeOut((t - tl.contact) / Math.max(1, tl.victimFall - tl.contact)), out);
      const u = (t - tl.victimFall) / (tl.victimDown - tl.victimFall);
      if (survive) return lerpPose(arched, this.stance, smooth(u), out);
      return this.collapse(arched, this.kp(K.kneel), -ax, -az, clamp01(u), 0.4, out);
    }
    // Slash (kesa-giri): the cut enters the left shoulder and exits low on the right, so the
    // body twists after it and collapses toward the victim's right, away from the attacker.
    const hitK = this.kp(K.slashHit);
    if (t < tl.victimFall) return lerpPose(pre, hitK, easeOut((t - tl.contact) / 5), out);
    const u = (t - tl.victimFall) / (tl.victimDown - tl.victimFall);
    if (survive) return lerpPose(hitK, this.stance, smooth(u), out);
    // Right (−x) and away from the attacker.
    const fx = -0.85 - ax * 0.5;
    const fz = -az * 0.5;
    return this.collapse(hitK, this.kp(K.slashKneel), fx, fz, clamp01(u), 0.4, out);
  }

  private deadPose(f: Fighter, w: World, out: Pose): Pose {
    this.deadClock += this.dtSim;
    // Finisher victims keep playing their fall on the same timeline until the body is down.
    if (this.prevKind === 'finished') return this.victimPose(f, w, this.victimT + this.deadClock * 60, this.victimKind, this.victimPerf, out);
    // Normal death: the collapse runs on the presentation clock (smooth in slow-mo / at any rate).
    const u = clamp01((this.deadClock * 60) / 34);
    const fx = this.fallX;
    const fz = this.fallZ;
    const kneel = clonePose(this.kp(K.kneel), _k1);
    kneel.lean = 0.45 * fz;
    kneel.roll = -0.3 * fx;
    return this.collapse(this.corpse, kneel, fx, fz, u, 0.35, out);
  }

  // ── Bow ───────────────────────────────────────────────────────────────────
  private archerShot(t: number, m: MoveDef, out: Pose): Pose {
    const draw = smooth((t - 6) / (m.startup - 10));
    // The arrow is spawned and moved on the startup tick, so it is on screen from display time
    // startup − 1: the string is released on that same frame (no second, nocked arrow).
    const released = t >= m.startup - 1;
    lerpPose(this.stance, this.kp(K.archerDraw), smooth(t / 8), out);
    out.handR.copy(ARCHER_HAND_START).lerp(ARCHER_HAND_ANCHOR, released ? 1 : draw);
    if (released) out.handR.x -= 0.08;
    if (released) out.handR.y += 0.02;
    if (released) out.handR.z -= 0.08;
    out.bladeR.set(0, 1, 0);
    out.bowDraw = released ? 0 : draw;
    return out;
  }

  private aimPose(f: Fighter, w: World, t: number, out: Pose): Pose {
    const ps = w.ps;
    const quick = f.act.kind === 'quickshot';
    const pitch = Math.asin(Math.max(-0.8, Math.min(0.8, w.input.aimDir.y)));
    let draw: number;
    if (quick) draw = t < 5 ? easeOut(t / 5) : 0;
    else draw = drawInfo(ps.draw, ps.arrowType, w.settings.windowScale).amount;
    const raise = quick ? smooth(t / 3) * (1 - smooth((t - 14) / 6)) : 1;
    const y = 1.45 + pitch * 0.35;
    const k1 = _k1;
    clonePose(this.stance, k1);
    k1.handR.set(0.05, y, 0.45);
    k1.bladeR.set(0, 1, 0);
    k1.handL.set(0.1, y, 0.54 - Math.abs(pitch) * 0.1);
    k1.bladeL.set(0.22, 1, -pitch * 0.8).normalize();
    k1.edgeL.set(0, pitch * 0.9, 1).normalize();
    k1.torsoYaw = 0.55;
    k1.pelvisYaw = 0.35;
    k1.headYaw = -0.85;
    k1.headPitch = -pitch * 0.8;
    k1.pelvis.y = 0.9;
    k1.footL.z = 0.14 + 0.18;
    k1.footR.z = -0.12 - 0.18 * 0.6;
    k1.bowInHand = 1;
    AIM_ANCHOR.set(-0.1, 1.56 + pitch * 0.2, 0.02);
    k1.handR.lerp(AIM_ANCHOR, draw);
    k1.bowDraw = draw;
    // Fatigue: the bow arm trembles when held too long at full draw.
    if (!quick) {
      const info = drawInfo(ps.draw, ps.arrowType, w.settings.windowScale);
      const shake = Math.min(1, info.fatigue) * 0.012;
      k1.handL.x += Math.sin(f.age * 1.9) * shake;
      k1.handL.y += Math.sin(f.age * 2.3 + 1) * shake;
    }
    lerpPose(this.stance, k1, raise, out);
    out.bowInHand = raise > 0.3 ? 1 : 0;
    return out;
  }

  private standoffPose(f: Fighter, t: number, out: Pose): Pose {
    // Low, coiled stance – blade held back, buckler forward.
    if (f.isPlayer) return clonePose(this.kp(K.standoffPlayer), out);
    const v = f.act.value ?? 0;
    if (v === 2) {
      // Feint twitch.
      const u = Math.sin(Math.min(1, t / 22) * Math.PI);
      return lerpPose(this.stance, this.kp(K.standoffFeint), u, out);
    }
    if (v === 1) {
      // Running charge with the blade raised, cut on arrival.
      const travel = f.act.travel ?? 18;
      const charge = this.kp(K.standoffCharge);
      if (t < travel - 4) return clonePose(charge, out);
      return lerpPose(charge, this.kp(KATANA.overhead.strike), easeOut((t - travel + 4) / 5), out);
    }
    return out;
  }

  private issenPose(t: number, dur: number, out: Pose): Pose {
    // Pass-through cut: strike on the contact tick, blade flicked out to the side (zanshin).
    const I = ISSEN_TL;
    const strike = this.kp(K.issenStrike);
    const zanshin = this.kp(K.issenZanshin);
    // The kill and its freeze land as the issen starts: the blade is already out (a flash cut).
    if (t <= I.contact) return clonePose(strike, out);
    if (t < I.trail[1]) return lerpPoseParts(strike, zanshin, smooth((t - I.contact) / 3), easeOut((t - I.contact) / 4), easeOut((t - I.contact) / (I.trail[1] - I.contact)), out, ARC_PIVOT);
    if (t < dur - 10) return clonePose(zanshin, out);
    return lerpPose(zanshin, this.stance, smooth((t - dur + 10) / 10), out);
  }

  // ── Finishers ─────────────────────────────────────────────────────────────
  private finTrack(kind: 'slash' | 'thrust' | 'flow'): [number, Pose, Ease][] {
    let tr = this.finKeys.get(kind);
    if (!tr) {
      tr = finisherKeys(kind).map((k) => [k.t, this.kp(k.key), k.ease ?? 'smooth'] as [number, Pose, Ease]);
      this.finKeys.set(kind, tr);
    }
    return tr;
  }

  private finisherPose(f: Fighter, w: World, t: number, out: Pose): Pose {
    const kind = (f.act.finisher ?? 'slash') as 'slash' | 'thrust' | 'flow';
    const tl = FINISHER_TL[kind];
    const tr = this.finTrack(kind);
    // Key 0 is where the body actually was when the finisher started.
    let p0: Pose = this.entry;
    let t0 = 0;
    let done = false;
    for (let i = 0; i < tr.length; i++) {
      const [t1, p1, ease] = tr[i];
      if (t <= t1) {
        const u = (t - t0) / Math.max(1e-3, t1 - t0);
        const e = ease === 'in' ? powIn(u, 2.2) : ease === 'out' ? easeOut(u) : smooth(u);
        // Legs drive the strike, torso next, arms last.
        if (ease === 'in') lerpPoseParts(p0, p1, smooth(u * 1.5), powIn(u, 1.3), e, out, kind === 'thrust' ? undefined : ARC_PIVOT);
        else if (ease === 'out') lerpPoseParts(p0, p1, smooth(u * 1.2), e, e, out, kind === 'thrust' ? undefined : ARC_PIVOT);
        else lerpPose(p0, p1, e, out);
        done = true;
        break;
      }
      p0 = p1;
      t0 = t1;
    }
    if (!done) clonePose(tr[tr.length - 1][1], out);
    this.finisherContact(f, w, kind, tl, t, out);
    // Stamp on the strike.
    if (!this.stepPlanned && t >= tl.release - 2) {
      this.stepPlanned = true;
      this.planter.planStep(0, Math.max(0.05, (tl.contact - t) / 60), 0.06);
    }
    return out;
  }

  /**
   * Aim the strike at the victim that is actually there: the hand is moved so the blade meets
   * the victim's torso (size and position aware) at contact, and the body leans / steps in when
   * the arm alone cannot reach. Render-only: the core owns both positions.
   */
  private finisherContact(f: Fighter, w: World, kind: 'slash' | 'thrust' | 'flow', tl: FinisherTimeline, t: number, out: Pose): void {
    const v = w.get(f.act.targetId);
    if (!v) return;
    const pre = tl.release - 3;
    const wgt = t < pre ? 0 : t < tl.contact ? smooth((t - pre) / (tl.contact - pre)) : t < tl.holdEnd ? 1 : 1 - smooth((t - tl.holdEnd) / Math.max(1, tl.pull - tl.holdEnd));
    if (wgt <= 0) return;
    const c = Math.cos(f.yaw);
    const s = Math.sin(f.yaw);
    const dx = v.pos.x - f.pos.x;
    const dz = v.pos.z - f.pos.z;
    const D = (dx * s + dz * c) / f.size;
    const L = (dx * c - dz * s) / f.size;
    const sv = v.size / f.size;
    const tr = this.finTrack(kind);
    let strike = tr[0][1];
    for (const [kt, kp] of tr) if (kt === tl.contact) strike = kp;
    const chestY = Math.max(1.0, Math.min(1.45, 1.2 * sv));
    let hx: number;
    let hz: number;
    if (kind === 'thrust') {
      // Point just past the centre of the chest.
      hx = L * 0.9 - 0.02;
      hz = D + 0.05 - 0.68;
    } else {
      // Middle of the blade on the front (or back) of the torso.
      hx = strike.handR.x + L * 0.5;
      hz = D - 0.14 * sv - 0.33;
    }
    _v1.set(hx - strike.handR.x, chestY - strike.handR.y, hz - strike.handR.z);
    // How far the body must lean / step in so the arm reaches the contact point — computed once
    // from the contact target (not from the whipping hand), then eased in with the same weight.
    _v2.copy(strike.handR).add(_v1);
    const shift = reachShift(strike, _v2);
    out.handR.addScaledVector(_v1, wgt);
    out.pelvis.z += shift * wgt;
    out.footL.z += shift * 1.1 * wgt;
    out.lean += shift * 0.3 * wgt;
    if (kind === 'thrust') {
      _v2.set(L - out.handR.x, chestY + 0.02 - out.handR.y, D - out.handR.z).normalize();
      slerpDir(out.bladeR, _v2, wgt, out.bladeR);
    }
  }

  // ── Locomotion & feet ─────────────────────────────────────────────────────
  /** Upper-body motion while moving; the feet themselves are planted by the FootPlanter. */
  private locomotion(f: Fighter, out: Pose, speed: number, lx: number, lz: number): void {
    const k = f.act.kind;
    const loco = k === 'free' || k === 'guard' || k === 'aim' || k === 'fear' || (k === 'standoff' && !f.isPlayer && (f.act.value ?? 0) !== 2) || k === 'heal';
    if (!loco || speed < 0.15) return;
    const run = clamp01((speed - 2.5) / 3);
    const g = this.planter.gait;
    // Pelvis rides highest mid-stride and dips as the foot lands. Aiming on the move, the knees
    // stay bent and the hips level instead, so the bow arm does not bob with the steps.
    if (k === 'aim') out.pelvis.y -= 0.06 * Math.min(1, speed / 2);
    else out.pelvis.y -= (1 - Math.abs(g)) * 0.035 * Math.min(1, speed / 3);
    out.lean += lz * run * 0.18;
    out.roll += -lx * run * 0.08;
    out.torsoYaw += g * 0.06 * Math.min(1, speed / 3);
    if (k === 'free') {
      // Arms counter-swing the legs; the blade drops back while sprinting.
      out.handR.z += g * 0.1 * run;
      out.handL.z -= g * 0.1 * run;
      if (this.family === 'ranger' && run > 0) {
        const runKey = this.kp(K.runRanger);
        out.handR.lerp(runKey.handR, run);
        slerpDir(out.bladeR, runKey.bladeR, run, out.bladeR);
      }
      this.fixHands(out);
    }
  }

  private feetMode(f: Fighter, p: Pose, t: number): FeetMode {
    // Whole-body rotations are compared wrapped: the end of a 360° roll is upright again.
    if (Math.abs(wrapAngle(p.bodyPitch)) > 0.3 || Math.abs(wrapAngle(p.bodyRoll)) > 0.3) return 'air';
    if (p.pelvis.y > this.stance.pelvis.y + 0.08) return 'air';
    const a = f.act;
    if (a.kind === 'attack' && a.move?.id === 'r_s4') {
      if (t >= SPIN_START(a.move) - 1 && t <= SPIN_START(a.move) + SPIN_LEN(a.move)) return 'pivot';
    }
    // Pass-through dashes cover metres in a few ticks: the feet trail the body, then plant.
    if ((a.kind === 'issen' && t <= ISSEN_TL.travel + 2) || (a.kind === 'gale' && galeLocal(t) < GALE_TL.contact + 2)) return 'air';
    return 'ground';
  }

  private stepParams(f: Fighter, t: number, speed: number, lx: number, lz: number): StepParams {
    const a = f.act;
    const P = this.params;
    P.stride = 0;
    switch (a.kind) {
      case 'attack': {
        const tl = a.move ? swingTl(a.move) : null;
        const before = tl ? t < tl.release : false;
        P.threshold = before ? 0.24 : 0.15;
        P.swingDur = 0.12;
        P.lift = 0.05;
        P.allowBoth = false;
        P.lead = 0;
        P.weight = 0.75;
        return P;
      }
      case 'finisher':
      case 'issen':
      case 'gale':
        P.threshold = 0.18;
        P.swingDur = 0.11;
        P.lift = 0.06;
        P.allowBoth = false;
        P.lead = 0;
        P.weight = 0.8;
        return P;
      case 'dodge':
      case 'flowStep':
      case 'flow':
      case 'evade':
        P.threshold = 0.1;
        P.swingDur = 0.1;
        P.lift = 0.07;
        P.allowBoth = true;
        P.lead = lx > 0.35 ? 0 : lx < -0.35 ? 1 : lz >= 0 ? 0 : 1;
        P.weight = 0.65;
        return P;
      case 'hitstun':
      case 'stagger':
      case 'recoil':
      case 'guardbreak':
      case 'blockstun':
      case 'overextended': {
        const h = this.hit;
        P.threshold = 0.14;
        P.swingDur = 0.13;
        P.lift = 0.05;
        P.allowBoth = true;
        P.lead = h && h.px > 0.3 ? 0 : h && h.px < -0.3 ? 1 : 1;
        P.weight = 0.4;
        return P;
      }
      case 'finished':
      case 'dead':
        P.threshold = 0.22;
        P.swingDur = 0.16;
        P.lift = 0.04;
        P.allowBoth = true;
        P.lead = 1;
        P.weight = 0.3;
        return P;
      default: {
        // Walk / run. Strafing leads with the foot on the moving side, retreating with the rear foot.
        P.threshold = Math.min(0.42, 0.14 + speed * 0.05);
        P.swingDur = Math.max(0.14, Math.min(0.3, 0.3 - speed * 0.03));
        P.lift = Math.min(0.14, 0.04 + speed * 0.018);
        P.allowBoth = false;
        P.lead = lx > 0.5 ? 0 : lx < -0.5 ? 1 : lz < -0.2 ? 1 : 0;
        P.weight = Math.min(1, 0.3 + speed * 0.08);
        // Full left+right cycle length: longer strides as speed rises, but the stance travel
        // (stride − speed × swing) stays within what the legs reach (≈ ±0.45 m of the hip).
        // Sideways the legs spread less than they stride: shorter, quicker side steps.
        P.stride = Math.min(1.4, 0.8 + speed * 0.12) * (1 - 0.3 * Math.min(1, Math.abs(lx)));
        return P;
      }
    }
  }
  private readonly params: StepParams = { threshold: 0.2, swingDur: 0.2, lift: 0.05, allowBoth: false, lead: 0, weight: 0.4, stride: 0 };
}

/**
 * Forward (local z) shift of the pelvis needed for the right arm of pose `p` to reach `hand`.
 * Only the horizontal shortfall is corrected (a hand too high or low is not "fixed" by lurching),
 * and it is capped: this is a lean / step-in, never a change of the character's position.
 */
function reachShift(p: Pose, hand: THREE.Vector3): number {
  const yaw = p.pelvisYaw + p.torsoYaw;
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const shx = -0.19;
  const shz = 0.45 * Math.sin(p.lean);
  const sx = p.pelvis.x + shx * cy + shz * sy;
  const sz = p.pelvis.z - shx * sy + shz * cy;
  const syy = p.pelvis.y + 0.45 * Math.cos(p.lean);
  const max = 0.56;
  const dy = hand.y - syy;
  if (Math.abs(dy) >= max) return 0;
  const reachH = Math.sqrt(max * max - dy * dy);
  const dx = hand.x - sx;
  const dz = hand.z - sz;
  // Shortfall along z, keeping the sideways offset.
  const needZ = Math.sqrt(Math.max(0, reachH * reachH - dx * dx));
  return Math.max(0, Math.min(0.2, dz - needZ));
}

function blendTime(kind: string): number {
  switch (kind) {
    // These start from the entry pose themselves (no cross-fade needed).
    case 'attack':
    case 'finisher':
    case 'issen':
    case 'gale':
    case 'hitstun':
    case 'stagger':
    case 'dead':
      return 0;
    case 'deflect':
    case 'flow':
    case 'flowStep':
    case 'recoil':
    case 'guardbreak':
    case 'broken':
    case 'overextended':
    case 'evade':
      return 0;
    case 'blockstun':
      return 0.05;
    case 'finished':
      return 0;
    case 'free':
      return 0.14;
    default:
      return 0.1;
  }
}

/** Authoring tables, exposed for the animation regression tests. */
export const __animTest = { STANCE, RANGER, swingFor, FAMILY, finisherKeys };
