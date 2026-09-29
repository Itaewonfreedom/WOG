// Procedural animation: fighter state → Pose.
// Attacks are authored as weapon trajectories (windup → strike → follow-through), and
// every state change cross-fades so strings, cancels and finishers flow into each other.

import * as THREE from 'three';
import type { Fighter } from '../core/fighter';
import type { World } from '../core/world';
import { drawInfo } from '../core/bow';
import { T } from '../core/tuning';
import type { MoveDef } from '../core/types';
import { applyKey, basePose, clonePose, lerpPose, type Key, type Pose } from './pose';
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
const smooth = (x: number) => {
  x = Math.max(0, Math.min(1, x));
  return x * x * (3 - 2 * x);
};
const easeOut = (x: number) => {
  x = Math.max(0, Math.min(1, x));
  return 1 - (1 - x) * (1 - x) * (1 - x);
};
const easeIn = (x: number) => {
  x = Math.max(0, Math.min(1, x));
  return x * x;
};

const _k1 = basePose();
const _k2 = basePose();
const _k3 = basePose();

/** Interpolate across a list of [time, pose] keys. */
function track(keys: [number, Pose][], t: number, out: Pose, ease: (x: number) => number = smooth): Pose {
  if (t <= keys[0][0]) return clonePose(keys[0][1], out);
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, p0] = keys[i];
    const [t1, p1] = keys[i + 1];
    if (t <= t1) return lerpPose(p0, p1, ease((t - t0) / Math.max(1e-3, t1 - t0)), out);
  }
  return clonePose(keys[keys.length - 1][1], out);
}

// ── Animator ────────────────────────────────────────────────────────────────
export class Animator {
  readonly pose = basePose();
  private readonly target = basePose();
  private readonly from = basePose();
  private readonly stance = basePose();
  private readonly frozen = basePose();
  private blend = 1;
  private blendDur = 0.1;
  private sig = '';
  private walkPhase = 0;
  private prevKind = '';
  private prevFinisher = '';
  readonly family: Family;

  constructor(readonly kind: CharKind) {
    this.family = FAMILY[kind];
    applyKey(basePose(), STANCE[this.family], this.stance);
    this.fixHands(this.stance);
    clonePose(this.stance, this.pose);
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

  update(f: Fighter, w: World, alpha: number, dtSim: number): Pose {
    const a = f.act;
    const t = a.t + (w.hitstop > 0 ? 0 : alpha);
    const sig = `${a.kind}|${a.move?.id ?? ''}|${w.tick - a.t}|${a.finisher ?? ''}`;
    if (sig !== this.sig) {
      this.prevKind = this.sig.split('|')[0];
      this.prevFinisher = this.sig.split('|')[3] ?? '';
      if (a.kind === 'finished' && (a.finisher === 'issen' || a.finisher === 'hajiki' || a.finisher === 'standoff')) clonePose(this.pose, this.frozen);
      this.sig = sig;
      clonePose(this.pose, this.from);
      this.blend = 0;
      this.blendDur = blendTime(a.kind);
    }

    this.actionPose(f, w, t, this.target);
    this.locomotion(f, dtSim, this.target);

    this.blend += dtSim;
    const k = this.blendDur <= 0 ? 1 : smooth(this.blend / this.blendDur);
    if (k >= 1) clonePose(this.target, this.pose);
    else lerpPose(this.from, this.target, k, this.pose);
    return this.pose;
  }

  private key(k: Key, out: Pose): Pose {
    applyKey(this.stance, k, out);
    this.fixHands(out);
    return out;
  }

  private swingPose(sw: Swing, m: MoveDef, t: number, out: Pose, holdWindup = false): Pose {
    const S = m.startup;
    const A = m.active;
    const R = m.recovery;
    const wind = this.key(sw.windup, _k1);
    const strike = this.key(sw.strike, _k2);
    const follow = this.key(sw.follow, _k3);
    if (holdWindup || t < S) {
      // Anticipation: ease into the windup, arriving a little early for a readable pause.
      const u = holdWindup ? 1 : t / Math.max(1, S * 0.85);
      return lerpPose(this.stance, wind, smooth(u), out);
    }
    if (t < S + A) {
      const u = (t - S) / Math.max(1, A);
      if (u < 0.5) return lerpPose(wind, strike, easeOut(u * 2), out);
      return lerpPose(strike, follow, easeOut((u - 0.5) * 2), out);
    }
    const r = (t - S - A) / Math.max(1, R);
    if (r < 0.45) return clonePose(follow, out);
    return lerpPose(follow, this.stance, smooth((r - 0.45) / 0.55), out);
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
        this.swingPose(sw, m, t, out);
        if (m.id === 'r_s4') {
          const u = smooth((t - (m.startup - 3)) / (m.active + 12));
          out.bodyYaw = u * Math.PI * 2;
        }
        if (fam === 'archer' && m.projectile) return this.archerShot(t, m, out);
        if (m.id === 'du_leap') {
          // Arc through the air during the startup.
          const u = Math.max(0, Math.min(1, t / (m.startup + m.active)));
          out.pelvis.y += Math.sin(u * Math.PI) * 0.55;
        }
        return out;
      }
      case 'charge': {
        const m = f.act.button === 'thrust' ? 'r_ht' : 'r_hs';
        const sw = RANGER[m];
        this.key(sw.windup, out);
        const c = Math.min(1, t / T.chargeMax);
        out.pelvis.y -= c * 0.05;
        out.handR.x += wob(0.008 * c, 2.1);
        out.handR.y += wob(0.008 * c, 2.7);
        return out;
      }
      case 'guard':
      case 'blockstun': {
        if (fam === 'ranger') {
          this.key({ hand: [-0.3, 1.02, 0.08], blade: [0.1, 0.7, 0.7], lhand: [0.1, 1.32, 0.42], lblade: [0.05, 0.08, 1], torso: 0.1, lean: 0.1, pelvisY: 0.86, step: 0.12 }, out);
        } else if ((fam === 'katana' || fam === 'nodachi') && a.value === 1) {
          // Parry stance (kasumi): blade level at the eyes, point aimed at the opponent.
          this.key({ hand: [-0.16, 1.5, 0.3], blade: [0.3, 0.12, 1], edge: [0, 1, 0], torso: -0.25, lean: 0.08, pelvisY: 0.84, step: 0.25, head: 0.2 }, out);
        } else if (fam === 'katana' || fam === 'nodachi') {
          this.key({ hand: [-0.12, 1.32, 0.38], blade: [0.95, 0.35, 0.15], edge: [0, 1, 0], lean: -0.05, pelvisY: 0.86, step: 0.1 }, out);
        }
        if (a.kind === 'blockstun') {
          out.lean -= 0.12 * (1 - t / 10);
          out.pelvis.z -= 0.05;
        }
        return out;
      }
      case 'deflect': {
        const u = easeOut(t / 4);
        const back = smooth((t - 6) / 8);
        this.key({ hand: [-0.3, 1.05, 0.1], blade: [0.1, 0.6, 0.7], lhand: [0.22, 1.42, 0.52], lblade: [0.55, 0.35, 1], torso: -0.15, lean: -0.02, pelvisY: 0.86, step: 0.15 }, _k1);
        this.key({ hand: [-0.3, 1.02, 0.08], blade: [0.1, 0.7, 0.7], lhand: [0.1, 1.32, 0.42], lblade: [0.05, 0.08, 1], torso: 0.1, lean: 0.1, pelvisY: 0.86, step: 0.12 }, _k2);
        lerpPose(_k2, _k1, u * (1 - back), out);
        return out;
      }
      case 'flow':
      case 'flowStep': {
        const side = a.side ?? 1;
        const u = a.kind === 'flow' ? easeOut(t / 6) : smooth(t / 6);
        this.key({ hand: [-0.36, 1.08, -0.1], blade: [-0.2, -0.2, -1], lhand: [0.3, 1.32, 0.38], lblade: [0.6 * side + 0.2, 0.25, 0.7], torso: 0.5 * side, lean: 0.2, pelvisY: 0.8, step: 0.2, roll: -0.12 * side }, _k1);
        return lerpPose(this.stance, _k1, u, out);
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
        out.pelvis.y = (roll ? 0.9 - bump * 0.4 : 0.9 - bump * 0.14);
        out.lean = 0.08 + lz * 0.25 * bump;
        out.roll = -lx * 0.3 * bump;
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
      case 'stagger': {
        const big = a.kind === 'stagger';
        const u = Math.sin(Math.min(1, t / (big ? 14 : 8)) * Math.PI * 0.5) * (1 - smooth((t - a.dur * 0.5) / (a.dur * 0.5)));
        out.lean = this.stance.lean - (big ? 0.45 : 0.25) * u;
        out.headPitch = -0.35 * u;
        out.torsoYaw = this.stance.torsoYaw + (f.id % 2 ? 0.3 : -0.3) * u;
        out.pelvis.y = this.stance.pelvis.y - (big ? 0.1 : 0.05) * u;
        out.handR.lerp(new THREE.Vector3(-0.4, 1.25, 0.05), u * 0.7);
        out.handL.lerp(new THREE.Vector3(0.4, 1.2, 0.0), u * 0.6);
        out.footR.z -= 0.15 * u;
        this.fixHands(out);
        return out;
      }
      case 'recoil':
      case 'guardbreak': {
        const u = Math.sin(Math.min(1, t / 7) * Math.PI * 0.5) * (1 - smooth((t - a.dur * 0.55) / (a.dur * 0.45)));
        const k: Key = a.kind === 'recoil'
          ? { hand: [-0.32, 1.72, -0.12], blade: [-0.2, 0.8, -0.6], lhand: [0.35, 1.2, 0.05], lean: -0.32, pelvisY: 0.84, headPitch: -0.2, torso: -0.3, step: -0.05 }
          : { hand: [-0.5, 1.25, -0.05], blade: [-0.8, 0.3, -0.3], lhand: [0.5, 1.3, -0.05], lblade: [0.8, 0.5, 0.3], lean: -0.35, pelvisY: 0.8, headPitch: -0.3, step: -0.05 };
        this.key(k, _k1);
        return lerpPose(this.stance, _k1, u, out);
      }
      case 'broken': {
        const u = smooth(t / 12) * (1 - smooth((t - a.dur + 14) / 14));
        this.key({ hand: [-0.3, 0.55, 0.32], blade: [-0.15, -0.95, 0.3], lhand: [0.3, 0.7, 0.25], lblade: [0.2, -0.5, 1], lean: 0.55, pelvisY: 0.62, headPitch: 0.45, step: 0.25, torso: 0.1 }, _k1);
        _k1.pelvis.x += wob(0.02, 0.09);
        _k1.lean += wob(0.04, 0.07);
        return lerpPose(this.stance, _k1, u, out);
      }
      case 'overextended': {
        const u = easeOut(t / 10) * (1 - smooth((t - a.dur + 16) / 16));
        this.key({ hand: [-0.1, 0.85, 0.55], blade: [0.2, -0.7, 0.7], lhand: [0.25, 0.9, 0.45], lean: 0.62, pelvisY: 0.74, step: 0.5, headPitch: 0.25 }, _k1);
        return lerpPose(this.stance, _k1, u, out);
      }
      case 'fear': {
        this.key({ hand: [-0.2, 1.42, 0.28], blade: [0.2, 0.9, 0.3], lhand: [0.22, 1.35, 0.3], lean: -0.22, pelvisY: 0.82, headPitch: -0.1, step: -0.1 }, out);
        out.handR.x += wob(0.02, 1.3);
        out.pelvis.x += wob(0.01, 1.7);
        return out;
      }
      case 'evade': {
        const side = a.side ?? 1;
        const u = Math.sin(Math.min(1, t / a.dur) * Math.PI);
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
        this.key({ hand: [-0.25, 0.9, 0.1], blade: [-0.1, -0.9, 0.3], lhand: [0.05, 1.3, 0.2], pelvisY: 0.66, lean: 0.25, headPitch: 0.4, step: 0.2 }, _k1);
        return lerpPose(this.stance, _k1, u, out);
      }
      case 'standoff':
        return this.standoffPose(f, t, out);
      case 'issen':
        return this.issenPose(t, a.dur, out);
      case 'finisher':
        return this.finisherPose(a.finisher ?? 'slash', t, out);
      case 'gale': {
        const seg = (t - 1) % 15;
        const sw = RANGER.r_gale;
        const fake: MoveDef = { ...RANGER_GALE_TIMING };
        return this.swingPose(sw, fake, seg, out);
      }
      case 'finished':
        return this.victimPose(f, t, out);
      case 'dead':
        return this.deadPose(f, out);
      default:
        return out;
    }
  }

  private archerShot(t: number, m: MoveDef, out: Pose): Pose {
    const draw = smooth((t - 6) / (m.startup - 10));
    const released = t >= m.startup;
    this.key({ lhand: [0.08, 1.48, 0.55], lblade: [0.1, 1, 0.1], ledge: [0, 0, 1], torso: 0.5, pelvisY: 0.9, head: -0.4, step: 0.12 }, _k1);
    const handStart = new THREE.Vector3(0.05, 1.48, 0.46);
    const handAnchor = new THREE.Vector3(-0.08, 1.55, 0.02);
    lerpPose(this.stance, _k1, smooth(t / 8), out);
    out.handR.copy(handStart).lerp(handAnchor, released ? 1 : draw);
    if (released) out.handR.add(new THREE.Vector3(-0.08, 0.02, -0.08));
    out.bladeR.set(0, 1, 0);
    out.bowDraw = released ? 0 : draw;
    return out;
  }

  private aimPose(f: Fighter, w: World, t: number, out: Pose): Pose {
    const ps = w.ps;
    const quick = f.act.kind === 'quickshot';
    const pitch = Math.asin(Math.max(-0.8, Math.min(0.8, w.input.aimDir.y)));
    let draw: number;
    if (quick) draw = t < 6 ? easeOut(t / 5) : 0;
    else draw = drawInfo(ps.draw, ps.arrowType, w.settings.windowScale).amount;
    const raise = quick ? smooth(t / 3) * (1 - smooth((t - 14) / 6)) : 1;
    const y = 1.45 + pitch * 0.35;
    this.key({ hand: [0.05, y, 0.45], blade: [0, 1, 0], lhand: [0.1, y, 0.54 - Math.abs(pitch) * 0.1], lblade: [0.22, 1, -pitch * 0.8], ledge: [0, pitch * 0.9, 1], torso: 0.55, pelvisYaw: 0.35, head: -0.85, headPitch: -pitch * 0.8, pelvisY: 0.9, step: 0.18, bow: 1 }, _k1);
    const anchor = new THREE.Vector3(-0.1, 1.56 + pitch * 0.2, 0.02);
    _k1.handR.lerp(anchor, draw);
    _k1.bowDraw = draw;
    // Fatigue: the bow arm trembles when held too long at full draw.
    if (!quick) {
      const info = drawInfo(ps.draw, ps.arrowType, w.settings.windowScale);
      const shake = Math.min(1, info.fatigue) * 0.012;
      _k1.handL.x += Math.sin(f.age * 1.9) * shake;
      _k1.handL.y += Math.sin(f.age * 2.3 + 1) * shake;
    }
    lerpPose(this.stance, _k1, raise, out);
    out.bowInHand = raise > 0.3 ? 1 : 0;
    return out;
  }

  private standoffPose(f: Fighter, t: number, out: Pose): Pose {
    if (f.isPlayer) {
      // Low, coiled stance – blade held back, buckler forward.
      return this.key({ hand: [-0.32, 0.95, -0.12], blade: [-0.3, -0.35, -0.9], lhand: [0.2, 1.15, 0.36], lblade: [0.2, 0.1, 1], torso: -0.35, head: 0.3, pelvisY: 0.82, lean: 0.12, step: 0.35 }, out);
    }
    const v = f.act.value ?? 0;
    if (v === 2) {
      // Feint twitch.
      const u = Math.sin(Math.min(1, t / 22) * Math.PI);
      this.key({ hand: [-0.05, 1.5, 0.2], blade: [0, 0.8, -0.3], lean: 0.2, step: 0.25, pelvisY: 0.84 }, _k1);
      return lerpPose(this.stance, _k1, u, out);
    }
    if (v === 1) {
      const travel = f.act.travel ?? 18;
      // Running charge with the blade raised, cut on arrival.
      this.key({ hand: [-0.1, 1.7, 0.0], blade: [0, 0.6, -0.8], lean: 0.35, pelvisY: 0.84, step: 0.35 }, _k1);
      if (t < travel - 4) return clonePose(_k1, out);
      this.key(KATANA.overhead.strike, _k2);
      return lerpPose(_k1, _k2, easeOut((t - travel + 4) / 5), out);
    }
    return out;
  }

  private issenPose(t: number, dur: number, out: Pose): Pose {
    // Pass-through cut: blade flicked out to the side after the strike (zanshin), then flourish.
    this.key({ hand: [-0.1, 1.1, 0.5], blade: [0.2, -0.1, 1], edge: [0, 1, 0], torso: 0.1, lean: 0.35, pelvisY: 0.8, step: 0.45 }, _k1);
    this.key({ hand: [-0.5, 1.12, -0.02], blade: [-0.82, -0.15, -0.55], edge: [0, 1, 0], torso: -0.7, lean: 0.22, pelvisY: 0.76, step: 0.6, lhand: [0.3, 1.1, 0.3], head: 0.4 }, _k2);
    if (t < 4) return lerpPose(this.stance, _k1, easeOut(t / 4), out);
    if (t < 8) return lerpPose(_k1, _k2, easeOut((t - 4) / 4), out);
    if (t < dur - 10) return clonePose(_k2, out);
    return lerpPose(_k2, this.stance, smooth((t - dur + 10) / 10), out);
  }

  private finisherPose(kind: string, t: number, out: Pose): Pose {
    const dash: Key = { hand: [-0.3, 0.95, -0.1], blade: [-0.2, -0.3, -1], lean: 0.35, pelvisY: 0.82, step: 0.4 };
    if (kind === 'slash') {
      const keys: [number, Key][] = [
        [0, dash],
        [7, dash],
        [20, { hand: [-0.1, 1.9, -0.05], blade: [0, 0.3, -1], edge: [1, 0, 0], torso: -0.25, lean: -0.15, lhand: [0.3, 1.4, 0.2], pelvisY: 0.9, step: 0.25 }],
        [27, { hand: [-0.1, 1.9, -0.02], blade: [0, 0.35, -1], edge: [1, 0, 0], torso: -0.3, lean: -0.18, lhand: [0.3, 1.42, 0.2], pelvisY: 0.9, step: 0.25 }],
        [30, { hand: [-0.05, 1.15, 0.55], blade: [0.2, -0.3, 1], edge: [1, 0, 0], torso: 0, lean: 0.3, pelvisY: 0.8, step: 0.5 }],
        [34, { hand: [0.25, 0.78, 0.4], blade: [0.5, -0.85, 0.2], edge: [1, 0, 0], torso: 0.35, lean: 0.45, pelvisY: 0.72, step: 0.6, lhand: [0.35, 1.0, -0.1] }],
        [50, { hand: [0.25, 0.8, 0.4], blade: [0.5, -0.85, 0.2], edge: [1, 0, 0], torso: 0.35, lean: 0.42, pelvisY: 0.73, step: 0.6, lhand: [0.35, 1.0, -0.1] }],
        [54, { hand: [-0.42, 1.05, 0.28], blade: [-0.9, -0.35, 0.3], edge: [0, 1, 0], torso: -0.4, lean: 0.1, pelvisY: 0.84, step: 0.3 }],
        [64, {}],
      ];
      return this.keyTrack(keys, t, out);
    }
    if (kind === 'thrust') {
      const keys: [number, Key][] = [
        [0, dash],
        [7, dash],
        [22, { hand: [-0.3, 1.12, -0.3], blade: [0, 0.05, 1], edge: [0, 1, 0], torso: -0.6, lhand: [0.25, 1.28, 0.45], lblade: [0.1, 0.2, 1], pelvisY: 0.84, step: 0.3 }],
        [30, { hand: [-0.3, 1.12, -0.32], blade: [0, 0.05, 1], edge: [0, 1, 0], torso: -0.62, lhand: [0.25, 1.28, 0.45], lblade: [0.1, 0.2, 1], pelvisY: 0.83, step: 0.3 }],
        [34, { hand: [0, 1.25, 0.55], blade: [0, 0.02, 1], edge: [0, 1, 0], torso: 0.2, lean: 0.3, pelvisY: 0.8, step: 0.6, lhand: [0.3, 1.1, 0.0] }],
        [48, { hand: [0.02, 1.27, 0.53], blade: [0.05, 0.1, 1], edge: [0.3, 1, 0], torso: 0.25, lean: 0.28, pelvisY: 0.8, step: 0.6, lhand: [0.3, 1.1, 0.0] }],
        [53, { hand: [-0.25, 1.15, 0.12], blade: [0, 0.1, 1], edge: [0, 1, 0], torso: -0.2, lean: 0.05, pelvisY: 0.84, step: 0.35, lhand: [0.15, 1.3, 0.62], lblade: [0, 0.2, 1] }],
        [60, { hand: [-0.42, 1.05, 0.28], blade: [-0.9, -0.35, 0.3], edge: [0, 1, 0], torso: -0.4, lean: 0.1, pelvisY: 0.86, step: 0.25 }],
        [70, {}],
      ];
      return this.keyTrack(keys, t, out);
    }
    // flow: backstab
    const keys: [number, Key][] = [
      [0, { hand: [-0.3, 1.2, 0.0], blade: [-0.3, 0.5, -0.8], lean: 0.2, pelvisY: 0.84, step: 0.3 }],
      [8, { hand: [-0.3, 1.62, 0.05], blade: [-0.3, 0.8, -0.5], edge: [1, 0, 0], torso: -0.45, lean: -0.05, pelvisY: 0.86, step: 0.3 }],
      [12, { hand: [-0.3, 1.64, 0.05], blade: [-0.3, 0.82, -0.5], edge: [1, 0, 0], torso: -0.45, lean: -0.05, pelvisY: 0.86, step: 0.3 }],
      [16, { hand: [0.15, 0.95, 0.45], blade: [0.6, -0.6, 0.4], edge: [1, 0, 0], torso: 0.4, lean: 0.4, pelvisY: 0.76, step: 0.55 }],
      [34, { hand: [0.15, 0.97, 0.44], blade: [0.6, -0.6, 0.4], edge: [1, 0, 0], torso: 0.4, lean: 0.38, pelvisY: 0.77, step: 0.55 }],
      [44, {}],
    ];
    return this.keyTrack(keys, t, out);
  }

  private keyTrack(keys: [number, Key][], t: number, out: Pose): Pose {
    const poses: [number, Pose][] = keys.map(([kt, k]) => [kt, this.key(k, basePose())]);
    return track(poses, t, out);
  }

  private victimPose(f: Fighter, t: number, out: Pose): Pose {
    const kind = f.act.finisher ?? 'slash';
    if (kind === 'issen' || kind === 'hajiki' || kind === 'standoff') {
      // Frozen mid-attack … then the cut registers and they collapse.
      if (t < 22) return clonePose(this.frozen, out);
      const u = smooth((t - 22) / 24);
      this.key({ hand: [-0.2, 0.5, 0.3], blade: [0, -1, 0.2], lhand: [0.2, 0.55, 0.3], pelvisY: 0.45, lean: 0.7, headPitch: 0.5, step: 0.2 }, _k1);
      return lerpPose(this.frozen, _k1, u, out);
    }
    const impact = kind === 'thrust' ? 34 : kind === 'flow' ? 16 : 30;
    // Stunned before the blow.
    this.key({ hand: [-0.3, 0.7, 0.3], blade: [-0.1, -0.9, 0.3], lhand: [0.3, 0.8, 0.25], lean: 0.35, pelvisY: 0.74, headPitch: 0.3, step: 0.2 }, _k1);
    if (t < impact) return clonePose(_k1, out);
    if (kind === 'thrust') {
      // Impaled, doubled over the blade; pushed off at ~50.
      this.key({ hand: [-0.25, 0.9, 0.35], blade: [0, -1, 0.2], lhand: [0.15, 1.05, 0.35], lean: 0.55, pelvisY: 0.8, headPitch: 0.4, step: 0.1 }, _k2);
      if (t < 50) return lerpPose(_k1, _k2, easeOut((t - impact) / 4), out);
      const u = easeIn((t - 50) / 22);
      clonePose(_k2, out);
      out.bodyPitch = -1.5 * u;
      out.pelvis.y = 0.8 - 0.55 * u;
      out.pelvis.z = -0.4 * u;
      return out;
    }
    // Slash / flow: knees buckle, then fall forward.
    this.key({ hand: [-0.3, 0.55, 0.3], blade: [0, -1, 0.1], lhand: [0.3, 0.6, 0.25], lean: 0.5, pelvisY: 0.5, headPitch: 0.5, step: 0.15 }, _k2);
    const u = easeOut((t - impact) / 10);
    lerpPose(_k1, _k2, u, out);
    if (t > impact + 18) {
      const v = easeIn((t - impact - 18) / 18);
      out.bodyPitch = 1.35 * v;
      out.pelvis.y = 0.5 - 0.3 * v;
    }
    return out;
  }

  private deadPose(f: Fighter, out: Pose): Pose {
    // Victims of a finisher already collapsed during the 'finished' action.
    const afterFinisher = this.prevKind === 'finished';
    const u = afterFinisher ? 1 : easeIn(Math.min(1, f.deadTicks / 24));
    const forward = afterFinisher ? this.prevFinisher !== 'thrust' : f.deathKind === 'burn' || f.deathKind === 'blunt' || (f.id % 3 === 0 && f.deathKind !== 'arrow');
    this.key({ hand: [-0.45, 0.4, 0.2], blade: [-0.5, -0.2, 0.8], lhand: [0.45, 0.45, 0.1], lean: forward ? 0.3 : -0.2, pelvisY: 0.2, headPitch: forward ? 0.3 : -0.4, step: 0.1 }, _k1);
    lerpPose(this.stance, _k1, u, out);
    out.bodyPitch = (forward ? 1.45 : -1.45) * u;
    out.pelvis.y = 0.9 - 0.72 * u;
    if (f.isPlayer) out.bodyPitch = -1.4 * u;
    return out;
  }

  /** Feet cycle + upper body sway while moving. */
  private locomotion(f: Fighter, dt: number, out: Pose): void {
    const k = f.act.kind;
    const locoStates = k === 'free' || k === 'guard' || k === 'aim' || k === 'fear' || (k === 'standoff' && !f.isPlayer && (f.act.value ?? 0) !== 2) || k === 'heal';
    const vx = (f.pos.x - f.prevPos.x) * 60;
    const vz = (f.pos.z - f.prevPos.z) * 60;
    const speed = Math.hypot(vx, vz);
    if (!locoStates || speed < 0.15) {
      this.walkPhase *= 0.9;
      return;
    }
    const c = Math.cos(f.yaw);
    const sn = Math.sin(f.yaw);
    const lx = (vx * c - vz * sn) / speed;
    const lz = (vx * sn + vz * c) / speed;
    const stride = 0.55 + Math.min(1, speed / 6) * 0.35;
    this.walkPhase += ((speed * dt) / stride) * Math.PI;
    const ph = this.walkPhase;
    const amp = Math.min(0.36, speed * 0.075);
    const lift = Math.min(0.16, speed * 0.035);
    const sw = Math.sin(ph);
    out.footL.x += lx * sw * amp;
    out.footL.z += lz * sw * amp;
    out.footR.x -= lx * sw * amp;
    out.footR.z -= lz * sw * amp;
    out.footL.y += Math.max(0, Math.cos(ph)) * lift;
    out.footR.y += Math.max(0, -Math.cos(ph)) * lift;
    // Running feet come under the body.
    const run = Math.min(1, Math.max(0, (speed - 2.5) / 3));
    out.footL.z = out.footL.z * (1 - run * 0.4);
    out.footR.z = out.footR.z * (1 - run * 0.4);
    out.pelvis.y -= Math.abs(Math.cos(ph)) * 0.035 * Math.min(1, speed / 3);
    out.lean += lz * run * 0.18;
    out.roll += -lx * run * 0.08;
    if (k === 'free') {
      // Arms pump, blade drops back while sprinting.
      out.handR.z -= sw * 0.1 * run;
      out.handL.z += sw * 0.1 * run;
      if (this.family === 'ranger' && run > 0) {
        const runKey = this.key({ hand: [-0.3, 0.98, -0.05], blade: [-0.15, -0.25, -1], lhand: [0.26, 1.05, 0.2] }, _k1);
        out.handR.lerp(runKey.handR, run);
        out.bladeR.lerp(runKey.bladeR, run).normalize();
      }
      this.fixHands(out);
    }
  }
}

const RANGER_GALE_TIMING = { id: 'r_gale_seg', name: '', type: 'slash' as const, startup: 4, active: 3, recovery: 8, damage: 0, posture: 0, shape: { kind: 'arc' as const, range: 0, halfAngle: 0 }, lunge: 0, chainFrom: 0, cancelFrom: 0 };

function blendTime(kind: string): number {
  switch (kind) {
    case 'attack':
      return 0.045;
    case 'deflect':
    case 'issen':
    case 'flow':
      return 0.03;
    case 'finisher':
    case 'gale':
      return 0.06;
    case 'hitstun':
    case 'stagger':
    case 'recoil':
    case 'guardbreak':
    case 'blockstun':
      return 0.05;
    case 'finished':
      return 0.02;
    case 'dead':
      return 0.25;
    case 'free':
      return 0.14;
    default:
      return 0.1;
  }
}

