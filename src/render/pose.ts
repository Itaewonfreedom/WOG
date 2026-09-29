import * as THREE from 'three';

/**
 * A full-body pose in character-local space (meters, size-1 character).
 * Character faces +Z, up is +Y, its RIGHT hand side is -X.
 * Arms/legs are solved with 2-bone IK from hand/foot targets, so animations are
 * authored as weapon trajectories (hand position + blade direction), which reads
 * far better for sword fighting than joint angles.
 */
export interface Pose {
  pelvis: THREE.Vector3;
  pelvisYaw: number;
  torsoYaw: number;
  lean: number;
  roll: number;
  headYaw: number;
  headPitch: number;
  handR: THREE.Vector3;
  bladeR: THREE.Vector3;
  edgeR: THREE.Vector3;
  handL: THREE.Vector3;
  bladeL: THREE.Vector3;
  edgeL: THREE.Vector3;
  footR: THREE.Vector3;
  footL: THREE.Vector3;
  /** Whole-body rotation around the pelvis (rolls, falls). */
  bodyPitch: number;
  bodyRoll: number;
  /** Extra yaw of the whole character (spin attacks). */
  bodyYaw: number;
  /** 0..1 bow string draw. */
  bowDraw: number;
  /** Bow in hand (player aiming / archer). */
  bowInHand: number;
}

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

export function basePose(): Pose {
  return {
    pelvis: V(0, 0.92, 0),
    pelvisYaw: 0,
    torsoYaw: 0,
    lean: 0.05,
    roll: 0,
    headYaw: 0,
    headPitch: 0,
    handR: V(-0.28, 1.0, 0.3),
    bladeR: V(0, 0.5, 1).normalize(),
    edgeR: V(0, 1, 0),
    handL: V(0.26, 1.05, 0.22),
    bladeL: V(0.2, 0, 1).normalize(),
    edgeL: V(0, 1, 0),
    footR: V(-0.13, 0, -0.12),
    footL: V(0.13, 0, 0.14),
    bodyPitch: 0,
    bodyRoll: 0,
    bodyYaw: 0,
    bowDraw: 0,
    bowInHand: 0,
  };
}

export function clonePose(p: Pose, out: Pose = basePose()): Pose {
  out.pelvis.copy(p.pelvis);
  out.pelvisYaw = p.pelvisYaw;
  out.torsoYaw = p.torsoYaw;
  out.lean = p.lean;
  out.roll = p.roll;
  out.headYaw = p.headYaw;
  out.headPitch = p.headPitch;
  out.handR.copy(p.handR);
  out.bladeR.copy(p.bladeR);
  out.edgeR.copy(p.edgeR);
  out.handL.copy(p.handL);
  out.bladeL.copy(p.bladeL);
  out.edgeL.copy(p.edgeL);
  out.footR.copy(p.footR);
  out.footL.copy(p.footL);
  out.bodyPitch = p.bodyPitch;
  out.bodyRoll = p.bodyRoll;
  out.bodyYaw = p.bodyYaw;
  out.bowDraw = p.bowDraw;
  out.bowInHand = p.bowInHand;
  return out;
}

const lerpN = (a: number, b: number, t: number) => a + (b - a) * t;

/** out = lerp(a, b, t). Direction vectors are re-normalized. `out` may alias `a`. */
export function lerpPose(a: Pose, b: Pose, t: number, out: Pose): Pose {
  out.pelvis.lerpVectors(a.pelvis, b.pelvis, t);
  out.pelvisYaw = lerpN(a.pelvisYaw, b.pelvisYaw, t);
  out.torsoYaw = lerpN(a.torsoYaw, b.torsoYaw, t);
  out.lean = lerpN(a.lean, b.lean, t);
  out.roll = lerpN(a.roll, b.roll, t);
  out.headYaw = lerpN(a.headYaw, b.headYaw, t);
  out.headPitch = lerpN(a.headPitch, b.headPitch, t);
  out.handR.lerpVectors(a.handR, b.handR, t);
  slerpDir(a.bladeR, b.bladeR, t, out.bladeR);
  slerpDir(a.edgeR, b.edgeR, t, out.edgeR);
  out.handL.lerpVectors(a.handL, b.handL, t);
  slerpDir(a.bladeL, b.bladeL, t, out.bladeL);
  slerpDir(a.edgeL, b.edgeL, t, out.edgeL);
  out.footR.lerpVectors(a.footR, b.footR, t);
  out.footL.lerpVectors(a.footL, b.footL, t);
  out.bodyPitch = lerpN(a.bodyPitch, b.bodyPitch, t);
  out.bodyRoll = lerpN(a.bodyRoll, b.bodyRoll, t);
  out.bodyYaw = lerpN(a.bodyYaw, b.bodyYaw, t);
  out.bowDraw = lerpN(a.bowDraw, b.bowDraw, t);
  out.bowInHand = lerpN(a.bowInHand, b.bowInHand, t);
  return out;
}

const _qa = new THREE.Quaternion();
const _qb = new THREE.Quaternion();
const _z = new THREE.Vector3(0, 0, 1);
/** Spherical interpolation of unit directions (keeps sword arcs round instead of cutting corners). */
export function slerpDir(a: THREE.Vector3, b: THREE.Vector3, t: number, out: THREE.Vector3): THREE.Vector3 {
  const d = a.dot(b);
  if (d > 0.9995 || d < -0.9995) return out.lerpVectors(a, b, t).normalize();
  _qa.setFromUnitVectors(_z, a);
  _qb.setFromUnitVectors(_z, b);
  _qa.slerp(_qb, t);
  return out.copy(_z).applyQuaternion(_qa).normalize();
}

// ── Authoring helpers ───────────────────────────────────────────────────────
export type Arr3 = [number, number, number];

export interface Key {
  hand?: Arr3;
  blade?: Arr3;
  edge?: Arr3;
  lhand?: Arr3;
  lblade?: Arr3;
  ledge?: Arr3;
  torso?: number;
  pelvisYaw?: number;
  lean?: number;
  roll?: number;
  pelvisY?: number;
  /** Front (left) foot forward offset and back (right) foot back offset. */
  step?: number;
  head?: number;
  headPitch?: number;
  bodyPitch?: number;
  bodyRoll?: number;
  draw?: number;
  bow?: number;
}

/** Apply a key on top of a pose (unspecified fields keep the pose's values). */
export function applyKey(base: Pose, k: Key, out: Pose): Pose {
  clonePose(base, out);
  if (k.hand) out.handR.set(...k.hand);
  if (k.blade) out.bladeR.set(...k.blade).normalize();
  if (k.edge) out.edgeR.set(...k.edge).normalize();
  if (k.lhand) out.handL.set(...k.lhand);
  if (k.lblade) out.bladeL.set(...k.lblade).normalize();
  if (k.ledge) out.edgeL.set(...k.ledge).normalize();
  if (k.torso !== undefined) out.torsoYaw = k.torso;
  if (k.pelvisYaw !== undefined) out.pelvisYaw = k.pelvisYaw;
  if (k.lean !== undefined) out.lean = k.lean;
  if (k.roll !== undefined) out.roll = k.roll;
  if (k.pelvisY !== undefined) out.pelvis.y = k.pelvisY;
  if (k.step !== undefined) {
    out.footL.z = 0.14 + k.step;
    out.footR.z = -0.12 - k.step * 0.6;
  }
  if (k.head !== undefined) out.headYaw = k.head;
  if (k.headPitch !== undefined) out.headPitch = k.headPitch;
  if (k.bodyPitch !== undefined) out.bodyPitch = k.bodyPitch;
  if (k.bodyRoll !== undefined) out.bodyRoll = k.bodyRoll;
  if (k.draw !== undefined) out.bowDraw = k.draw;
  if (k.bow !== undefined) out.bowInHand = k.bow;
  return out;
}
