// Foot planting: the support foot stays locked in WORLD space while only the moving foot lifts
// and lands at a predicted spot. Works on top of any animation pose (render-only: the core
// still owns the character's position, reach and hit shapes).

import * as THREE from 'three';
import type { Pose } from './pose';

export type FeetMode = 'ground' | 'air' | 'pivot';

export interface StepParams {
  /** Horizontal error (m) between a planted foot and where the pose wants it before it steps. */
  threshold: number;
  /** Seconds a step takes. */
  swingDur: number;
  /** Peak foot lift (m). */
  lift: number;
  /** Both feet may be in the air at once (hops, lunges, stumbles). */
  allowBoth: boolean;
  /** Which foot steps first when both need to (0 = left / lead, 1 = right). */
  lead: 0 | 1;
  /** Landing strength for footstep sound / dust (0..1). */
  weight: number;
  /** Locomotion: stride length (m, one full left+right cycle at size 1). > 0 makes the feet
   *  alternate on a cadence (half a cycle apart) instead of stepping on error thresholds. */
  stride: number;
}

export interface Landing {
  foot: 0 | 1;
  pos: THREE.Vector3;
  strength: number;
}

interface FootState {
  /** Started this frame: the time already elapsed this frame is not part of the step. */
  fresh: boolean;
  /** Landing lead ahead of the ideal spot for this step (m, -1 = default). */
  ahead: number;
  planted: THREE.Vector3;
  plantedYaw: number;
  swinging: boolean;
  from: THREE.Vector3;
  fromYaw: number;
  to: THREE.Vector3;
  toYaw: number;
  u: number;
  dur: number;
  lift: number;
  stance: number;
  cur: THREE.Vector3;
  curYaw: number;
}

const LEG = 0.875; // hip → ankle reach at size 1 (thigh + shin)
const ANKLE = 0.07;

function newFoot(): FootState {
  return {
    fresh: false,
    ahead: -1,
    planted: new THREE.Vector3(),
    plantedYaw: 0,
    swinging: false,
    from: new THREE.Vector3(),
    fromYaw: 0,
    to: new THREE.Vector3(),
    toYaw: 0,
    u: 0,
    dur: 0.15,
    lift: 0.05,
    stance: 1,
    cur: new THREE.Vector3(),
    curYaw: 0,
  };
}

const wrap = (a: number) => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};
const smoothstep = (x: number) => x * x * (3 - 2 * x);

function toWorld(l: THREE.Vector3, out: THREE.Vector3, root: THREE.Vector3, c: number, s: number, scale: number): THREE.Vector3 {
  return out.set(root.x + (l.x * c + l.z * s) * scale, l.y * scale, root.z + (-l.x * s + l.z * c) * scale);
}

function toLocal(wv: THREE.Vector3, out: THREE.Vector3, root: THREE.Vector3, c: number, s: number, scale: number): THREE.Vector3 {
  const dx = (wv.x - root.x) / scale;
  const dz = (wv.z - root.z) / scale;
  return out.set(dx * c - dz * s, wv.y / scale, dx * s + dz * c);
}

const _ideal = [new THREE.Vector3(), new THREE.Vector3()];
const _idealYaw = [0, 0];
const _need = [0, 0];
const FEET = [0, 1] as const;
const ORDER_L: (0 | 1)[] = [0, 1];
const ORDER_R: (0 | 1)[] = [1, 0];
const _pred = new THREE.Vector3();
const _hip = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _qi = new THREE.Quaternion();
const _e = new THREE.Euler();
const _piv = new THREE.Vector3();
const _lf = new THREE.Vector3();

export class FootPlanter {
  private readonly feet: [FootState, FootState] = [newFoot(), newFoot()];
  private init = false;
  /** A step requested by the animation (e.g. the attack stomp that lands on the contact tick). */
  private planned: { foot: 0 | 1; dur: number; lift: number } | null = null;
  /** Foot sweeping around (off the ground) during a pivot, or -1. */
  private pivotFree = -1;
  /** Current (eased) pelvis drop that keeps both legs within reach. */
  private drop = 0;
  /** Gait cycle phase 0..1 while walking / running (lead foot lifts at 0, the other at 0.5). */
  private phase = 0;
  private walking = false;
  readonly landings: Landing[] = [];
  /** -1..1: >0 while the left foot swings, <0 for the right (for arm counter-swing and bob). */
  gait = 0;

  reset(): void {
    this.init = false;
    this.planned = null;
    this.pivotFree = -1;
  }

  /** Lift `foot` now and land it where the pose wants it after `dur` seconds. */
  planStep(foot: 0 | 1, dur: number, lift: number): void {
    this.planned = { foot, dur: Math.max(0.05, dur), lift };
  }

  /** Is `foot` currently planted (for tests / debug)? */
  isPlanted(foot: 0 | 1): boolean {
    return !this.feet[foot].swinging;
  }

  worldFoot(foot: 0 | 1): THREE.Vector3 {
    return this.feet[foot].cur;
  }

  /**
   * Post-process `pose` (character-local, size-1 units): feet become world-anchored, the pelvis
   * (and the arms with it) is lowered where a leg would over-stretch. `vel` is the root's planar
   * velocity (m/s), `dt` simulation time.
   */
  update(pose: Pose, rootPos: THREE.Vector3, rootYaw: number, scale: number, vel: THREE.Vector3, dt: number, mode: FeetMode, p: StepParams, bulk = 1): void {
    this.landings.length = 0;
    const c = Math.cos(rootYaw);
    const s = Math.sin(rootYaw);
    // The character view rotates the whole body (legs included) about the pelvis for rolls and
    // falls: compare and write back through that rotation so a planted foot stays planted even
    // while the body tilts.
    const tilt = Math.abs(wrap(pose.bodyPitch)) > 1e-4 || Math.abs(wrap(pose.bodyRoll)) > 1e-4;
    if (tilt) {
      _q.setFromEuler(_e.set(pose.bodyPitch, 0, pose.bodyRoll, 'XYZ'));
      _qi.copy(_q).invert();
      _piv.copy(pose.pelvis);
    }
    for (const i of FEET) {
      _lf.copy(i === 0 ? pose.footL : pose.footR);
      if (tilt) _lf.sub(_piv).applyQuaternion(_q).add(_piv);
      toWorld(_lf, _ideal[i], rootPos, c, s, scale);
    }
    const idealYaw = _idealYaw;
    idealYaw[0] = rootYaw + pose.footYawL;
    idealYaw[1] = rootYaw + pose.footYawR;

    // First frame / teleport: re-plant where the pose wants the feet.
    const far = this.init && (_ideal[0].distanceTo(this.feet[0].cur) > 2.2 || _ideal[1].distanceTo(this.feet[1].cur) > 2.2);
    if (!this.init || far) {
      for (const i of FEET) {
        const f = this.feet[i];
        f.swinging = false;
        f.planted.copy(_ideal[i]).setY(0);
        f.plantedYaw = idealYaw[i];
        f.cur.copy(_ideal[i]);
        f.curYaw = idealYaw[i];
        f.stance = 1;
      }
      this.init = true;
      this.pivotFree = -1;
      this.planned = null;
      this.drop = 0;
      return;
    }

    const speed = Math.hypot(vel.x, vel.z);
    if (mode === 'air') {
      // Airborne (rolls, leaps, falls, pass-through dashes): the feet follow the pose, easing
      // off the spot they were planted on instead of snapping.
      const k = 1 - Math.exp(-dt * 25);
      for (const i of FEET) {
        const f = this.feet[i];
        f.swinging = false;
        f.cur.lerp(_ideal[i], k);
        f.curYaw += wrap(idealYaw[i] - f.curYaw) * k;
        f.planted.copy(f.cur).setY(0);
        f.plantedYaw = f.curYaw;
        f.stance = 1;
      }
      this.pivotFree = -1;
      this.planned = null;
      this.gait *= Math.exp(-dt * 10);
      this.drop *= Math.exp(-dt * 10);
      this.writeBack(pose, rootPos, rootYaw, c, s, scale, tilt);
      this.applyDrop(pose);
      return;
    }

    for (const i of FEET) this.feet[i].stance += dt;

    // Pivot (spin attacks): the lead foot turns on the spot, the other follows the pose.
    if (mode === 'pivot') {
      const piv = this.feet[p.lead];
      piv.swinging = false;
      piv.plantedYaw = idealYaw[p.lead];
      piv.cur.copy(piv.planted);
      piv.curYaw = piv.plantedYaw;
      // The other foot sweeps around with the body, just off the ground.
      const oi = p.lead === 0 ? 1 : 0;
      const other = this.feet[oi];
      other.swinging = false;
      other.planted.copy(_ideal[oi]).setY(0);
      other.plantedYaw = idealYaw[oi];
      other.cur.copy(other.planted).setY(Math.max(_ideal[oi].y, 0.04 * scale));
      other.curYaw = other.plantedYaw;
      this.pivotFree = oi;
    } else {
      if (this.pivotFree >= 0) {
        // Pivot over: the swept foot comes down where the pose wants it.
        const i = this.pivotFree as 0 | 1;
        const f = this.feet[i];
        this.pivotFree = -1;
        f.swinging = true;
        f.from.copy(f.cur).setY(0);
        f.fromYaw = f.curYaw;
        this.predict(_ideal[i], vel, 0.08, p, speed, scale, f.to);
        f.toYaw = idealYaw[i];
        f.lift = Math.max(0.01, f.cur.y / scale);
        f.u = 0.5;
        f.dur = 0.16;
      }
      if (this.planned) {
        const pl = this.planned;
        this.planned = null;
        const f = this.feet[pl.foot];
        if (f.swinging) {
          // Already mid-stride: keep that stride and retime what is left of it so it lands on
          // the requested moment (no restart from the old footprint).
          f.dur = pl.dur / Math.max(0.02, 1 - f.u);
        } else {
          this.beginStep(pl.foot, _ideal[pl.foot], idealYaw[pl.foot], vel, speed, p, scale);
          f.dur = pl.dur;
          f.lift = pl.lift;
        }
        f.fresh = true;
      }
      // Walking / running: the feet alternate on the gait cycle. A step that should have started
      // between two frames starts already advanced by that much, so the cadence and footprints are
      // the same at any refresh rate.
      const cyc = p.stride > 0 && speed > 0.4 ? speed / (p.stride * scale) : 0;
      if (cyc > 0) {
        if (!this.walking) {
          // Setting off: the foot furthest behind where it should be goes first.
          const eL = Math.hypot(this.feet[0].planted.x - _ideal[0].x, this.feet[0].planted.z - _ideal[0].z);
          const eR = Math.hypot(this.feet[1].planted.x - _ideal[1].x, this.feet[1].planted.z - _ideal[1].z);
          const first = eL >= eR ? 0 : 1;
          this.phase = first === p.lead ? 0.999 : 0.499;
        }
        this.walking = true;
        const prev = this.phase;
        this.phase = (this.phase + dt * cyc) % 1;
        const swing = Math.min(p.swingDur, 0.42 / cyc);
        // Land ahead by half the stance travel, so the foot passes under the hip mid-stance.
        const ahead = (speed * Math.max(0, 1 / cyc - swing)) / 2;
        for (const i of FEET) {
          const trigger = i === p.lead ? 0 : 0.5;
          const since = (this.phase - trigger + 1) % 1;
          const crossed = since < ((this.phase - prev + 1) % 1) || (prev === this.phase && since === 0);
          const f = this.feet[i];
          if (!crossed || f.swinging) continue;
          this.beginStep(i, _ideal[i], idealYaw[i], vel, speed, p, scale, ahead);
          f.dur = swing;
          f.u = Math.min(0.5, since / cyc / swing);
        }
      } else this.walking = false;
      // Decide which planted foot needs to step.
      const need = _need;
      need[0] = 0;
      need[1] = 0;
      for (const i of FEET) {
        const f = this.feet[i];
        if (f.swinging) continue;
        const err = Math.hypot(f.planted.x - _ideal[i].x, f.planted.z - _ideal[i].z);
        const yawErr = Math.abs(wrap(f.plantedYaw - idealYaw[i]));
        // Over-stretch: the planted foot is beyond what the leg can reach from the hip.
        const hipX = rootPos.x + ((i === 0 ? 0.1 : -0.1) * bulk * c) * scale;
        const hipZ = rootPos.z + (-(i === 0 ? 0.1 : -0.1) * bulk * s) * scale;
        const reach = Math.hypot(f.planted.x - hipX, f.planted.z - hipZ) / scale;
        const urgent = reach > 0.6;
        // While walking the cadence decides; only over-stretch / a sharp turn steps here.
        if (cyc > 0 && !urgent && err < 0.6 * scale && yawErr < 0.95) continue;
        if (err > p.threshold * scale || yawErr > 0.95 || urgent) need[i] = err / scale + (urgent ? 10 : 0) + (i === p.lead ? 0.001 : 0);
      }
      const order = need[0] >= need[1] ? ORDER_L : ORDER_R;
      for (const i of order) {
        if (need[i] <= 0) continue;
        const other = i === 0 ? 1 : 0;
        const urgent = need[i] >= 10;
        // Alternate: wait for the other foot to land (unless hopping / urgent) and respect a short stance.
        if (this.feet[other].swinging && !p.allowBoth && !urgent) continue;
        if (this.feet[i].stance < Math.min(0.06, p.swingDur * 0.4) && !urgent) continue;
        this.beginStep(i, _ideal[i], idealYaw[i], vel, speed, p, scale);
        if (!p.allowBoth && !urgent) break;
      }
    }

    // Advance swings.
    let gait = 0;
    for (const i of FEET) {
      const f = this.feet[i];
      if (!f.swinging) {
        if (i === this.pivotFree) continue;
        f.cur.copy(f.planted);
        f.curYaw = f.plantedYaw;
        continue;
      }
      if (f.fresh) f.fresh = false;
      else f.u = Math.min(1, f.u + dt / f.dur);
      // Keep steering the landing spot toward where the pose will want the foot when it lands
      // (the body keeps moving for the rest of the swing).
      this.predict(_ideal[i], vel, f.dur * (1 - f.u), p, speed, scale, _pred, f.ahead);
      const steer = f.u >= 1 - 1e-6 ? 1 : Math.min(1, 1 - Math.exp(-dt * 18));
      f.to.lerp(_pred, steer);
      f.toYaw = f.toYaw + wrap(idealYaw[i] - f.toYaw) * steer;
      const e = smoothstep(f.u);
      f.cur.lerpVectors(f.from, f.to, e);
      f.cur.y = Math.sin(Math.PI * f.u) * f.lift * scale;
      f.curYaw = f.fromYaw + wrap(f.toYaw - f.fromYaw) * e;
      gait += (i === 0 ? 1 : -1) * Math.sin(Math.PI * f.u);
      if (f.u >= 1 - 1e-6) {
        f.swinging = false;
        f.planted.copy(f.to).setY(0);
        f.plantedYaw = f.toYaw;
        f.cur.copy(f.planted);
        f.curYaw = f.plantedYaw;
        f.stance = 0;
        this.landings.push({ foot: i, pos: f.planted, strength: Math.min(1, p.weight * (0.6 + Math.min(1, speed / 6) * 0.6)) });
      }
    }
    this.gait = gait;

    this.writeBack(pose, rootPos, rootYaw, c, s, scale, tilt);
    // Lower the pelvis where a leg would over-stretch. Planted feet are a hard constraint (applied
    // at once, so they never get dragged by the leg); the swinging foot eases its part in, so a
    // long stride never jerks the upper body.
    const all = pose.pelvis.y - fitPelvisY(pose, bulk, true, true);
    const hard = pose.pelvis.y - fitPelvisY(pose, bulk, !this.feet[0].swinging, !this.feet[1].swinging);
    this.drop += (all - this.drop) * (1 - Math.exp(-dt * (all > this.drop ? 25 : 10)));
    this.drop = Math.max(this.drop, hard);
    this.applyDrop(pose);
  }

  /** The body lowers as a whole: pelvis and arms (the hands keep their reach from the shoulders). */
  private applyDrop(pose: Pose): void {
    pose.pelvis.y -= this.drop;
    pose.handR.y -= this.drop;
    pose.handL.y -= this.drop;
  }

  /** Planted / swinging feet (world) back into the pose (character-local, through the body tilt). */
  private writeBack(pose: Pose, rootPos: THREE.Vector3, rootYaw: number, c: number, s: number, scale: number, tilt: boolean): void {
    toLocal(this.feet[0].cur, pose.footL, rootPos, c, s, scale);
    toLocal(this.feet[1].cur, pose.footR, rootPos, c, s, scale);
    if (tilt) {
      pose.footL.sub(_piv).applyQuaternion(_qi).add(_piv);
      pose.footR.sub(_piv).applyQuaternion(_qi).add(_piv);
    }
    pose.footYawL = wrap(this.feet[0].curYaw - rootYaw);
    pose.footYawR = wrap(this.feet[1].curYaw - rootYaw);
  }

  private predict(ideal: THREE.Vector3, vel: THREE.Vector3, remaining: number, p: StepParams, speed: number, scale: number, out: THREE.Vector3, ahead = -1): THREE.Vector3 {
    out.copy(ideal).setY(0);
    // Compensate for the body moving during the rest of the swing, and land ahead of the hip
    // while moving so the foot passes under the body mid-stance.
    out.x += vel.x * remaining;
    out.z += vel.z * remaining;
    if (speed > 0.3) {
      const a = ahead >= 0 ? Math.min(ahead, 0.4 * scale) : Math.min(p.threshold * scale * 0.6, 0.3 * scale);
      out.x += (vel.x / speed) * a;
      out.z += (vel.z / speed) * a;
    }
    return out;
  }

  private beginStep(i: 0 | 1, ideal: THREE.Vector3, idealYaw: number, vel: THREE.Vector3, speed: number, p: StepParams, scale: number, ahead = -1): void {
    const f = this.feet[i];
    f.swinging = true;
    f.fresh = false;
    f.u = 0;
    f.ahead = ahead;
    f.from.copy(f.planted);
    f.fromYaw = f.plantedYaw;
    this.predict(ideal, vel, p.swingDur, p, speed, scale, f.to, ahead);
    f.toYaw = idealYaw;
    const dist = f.from.distanceTo(f.to) / scale;
    // Short adjustments are quicker and lower than full strides.
    f.dur = Math.max(0.06, p.swingDur * Math.min(1, 0.45 + dist * 1.4));
    f.lift = Math.max(0.03, p.lift * Math.min(1, 0.5 + dist * 1.6));
  }
}

/** Highest pelvis height at which both ankles are within leg reach (knees never lock straight). */
export function fitPelvisY(pose: Pose, bulk = 1, useL = true, useR = true): number {
  if (Math.abs(wrap(pose.bodyPitch)) > 0.25 || Math.abs(wrap(pose.bodyRoll)) > 0.25) return pose.pelvis.y;
  const cy = Math.cos(pose.pelvisYaw);
  const sy = Math.sin(pose.pelvisYaw);
  let maxY = pose.pelvis.y;
  for (let k = 0; k < 2; k++) {
    if (!(k === 0 ? useL : useR)) continue;
    const foot = k === 0 ? pose.footL : pose.footR;
    const hx = (k === 0 ? 1 : -1) * 0.1 * bulk;
    _hip.set(pose.pelvis.x + hx * cy, 0, pose.pelvis.z - hx * sy);
    const h = Math.hypot(foot.x - _hip.x, foot.z - _hip.z);
    const reach = LEG * 0.975;
    if (h >= reach) continue;
    const y = foot.y + ANKLE + Math.sqrt(reach * reach - h * h) + 0.02;
    maxY = Math.min(maxY, y);
  }
  // Never drop more than 22 cm (beyond that the planter steps instead).
  return Math.max(pose.pelvis.y - 0.22, maxY);
}
