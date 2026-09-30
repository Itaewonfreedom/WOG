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
  /** Air mode: offset from the pose, decaying to zero after take-off. */
  airOff: THREE.Vector3;
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
    airOff: new THREE.Vector3(),
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
const _land = new THREE.Vector3();
const _dRoot = new THREE.Vector3();

export class FootPlanter {
  private readonly feet: [FootState, FootState] = [newFoot(), newFoot()];
  private init = false;
  /** A step requested by the animation (e.g. the attack stomp that lands on the contact tick). */
  private planned: { foot: 0 | 1; dur: number; lift: number } | null = null;
  /** Foot sweeping around (off the ground) during a pivot, or -1. */
  private pivotFree = -1;
  /** Current (eased) pelvis drop that keeps both legs within reach. */
  private drop = 0;
  private inAir = false;
  /** Height the feet are carried at in a very fast dash (eases in and out). */
  private airLift = 0;
  private readonly lastRoot = new THREE.Vector3();
  /** How much the hands go down with the pelvis (eased: 0 with the bow up, 1 otherwise). */
  private handK = 1;
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

  /** Is `foot` currently planted (locked to its spot on the ground)? */
  isPlanted(foot: 0 | 1): boolean {
    return !this.inAir && !this.feet[foot].swinging && this.pivotFree !== foot;
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
    _dRoot.subVectors(rootPos, this.lastRoot).setY(0);
    this.lastRoot.copy(rootPos);
    const handGoal = pose.bowInHand > 0.5 ? 0 : 1;
    this.handK = this.init ? this.handK + (handGoal - this.handK) * (1 - Math.exp(-dt * 15)) : handGoal;
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
      this.inAir = false;
      this.airLift = 0;
      this.pivotFree = -1;
      this.planned = null;
      this.drop = 0;
      return;
    }

    const speed = Math.hypot(vel.x, vel.z);
    if (mode === 'air') {
      // Airborne (rolls, leaps, falls, pass-through dashes): the feet ride with the pose. On the
      // way in, the offset from where they were planted decays (no snap), but they never lag
      // behind a fast-moving body; in a very fast dash they leave the ground instead of skating.
      if (!this.inAir) {
        this.inAir = true;
        this.airLift = 0;
        // Measured against where the pose had the feet before this frame's body motion: the feet
        // leave with the body (a dash starting this frame does not leave them metres behind).
        for (const i of FEET) this.feet[i].airOff.subVectors(this.feet[i].cur, _ideal[i]).add(_dRoot);
      }
      const decay = Math.exp(-dt * 25);
      const liftY = speed > 8 ? Math.min(0.08, (speed - 8) * 0.004 + 0.03) * scale : 0;
      // The faster the dash, the sooner the feet leave the ground (a 60 m/s issen would otherwise
      // drag them along for its first tick).
      this.airLift += (liftY - this.airLift) * (1 - Math.exp(-dt * Math.max(40, speed * 3)));
      for (const i of FEET) {
        const f = this.feet[i];
        f.swinging = false;
        f.airOff.multiplyScalar(decay);
        f.cur.copy(_ideal[i]).add(f.airOff);
        // Never below the ground (a toppling body pivots on its feet).
        f.cur.y = Math.max(f.cur.y, this.airLift, 0);
        f.curYaw += wrap(idealYaw[i] - f.curYaw) * (1 - decay);
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

    if (this.inAir) {
      // Touch down: whatever height the feet were carried at comes down as a short landing step.
      this.inAir = false;
      for (const i of FEET) {
        const f = this.feet[i];
        if (f.cur.y > 0.005 * scale) {
          f.swinging = true;
          f.fresh = false;
          f.ahead = -1;
          f.to.copy(_ideal[i]).setY(0);
          f.toYaw = idealYaw[i];
          // Mid-swing (u = 0.5, smoothstep 0.5) exactly where the foot is now.
          f.from.copy(f.cur).multiplyScalar(2).sub(f.to).setY(0);
          f.fromYaw = f.curYaw;
          f.lift = f.cur.y / scale;
          f.u = 0.5;
          f.dur = 0.14;
        }
      }
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
        if (f.swinging && (1 - f.u) * f.dur > pl.dur * 0.5) {
          // Early in a stride: keep it (no restart from the old footprint), retime what is left so
          // it lands on the requested moment, and drop the running lead (the lunge places it).
          f.ahead = -1;
          f.dur = Math.min(0.5, pl.dur / Math.max(0.05, 1 - f.u));
        } else {
          // Late in a stride (or planted): the stomp starts from where the foot is now, at its
          // current height — a foot still in the air is not put down first.
          const up = f.swinging ? Math.max(0, f.cur.y) : 0;
          _pred.copy(f.cur).setY(0);
          if (f.swinging) {
            f.swinging = false;
            f.planted.copy(_pred);
            f.plantedYaw = f.curYaw;
          }
          this.beginStep(pl.foot, _ideal[pl.foot], idealYaw[pl.foot], vel, speed, p, scale);
          f.lift = Math.max(pl.lift, up / scale);
          const u0 = Math.asin(Math.min(1, up / (f.lift * scale))) / Math.PI;
          const e0 = smoothstep(u0);
          if (e0 > 1e-6) f.from.copy(_pred).addScaledVector(f.to, -e0).multiplyScalar(1 / (1 - e0)).setY(0);
          f.u = u0;
          f.dur = pl.dur / (1 - u0);
        }
        f.fresh = true;
      }
      // Walking / running: the feet alternate on the gait cycle. A step that should have started
      // between two frames starts already advanced by that much, so the cadence and footprints are
      // the same at any refresh rate.
      const cyc = p.stride > 0 && speed > 0.4 ? speed / (p.stride * scale) : 0;
      if (cyc > 0) {
        const swing = Math.min(p.swingDur, 0.42 / cyc);
        // Land ahead by half the stance travel, so the foot passes under the hip mid-stance.
        const ahead = (speed * Math.max(0, 1 / cyc - swing)) / 2;
        if (!this.walking) {
          const sw: 0 | 1 | -1 = this.feet[0].swinging ? 0 : this.feet[1].swinging ? 1 : -1;
          if (sw !== -1) {
            // A step already under way becomes the first stride: the cadence starts from it (else
            // it would wait a whole cycle while the body walks off the other, planted foot).
            // Late in its swing, the other foot sets off as soon as it lands.
            const f = this.feet[sw];
            const trig = sw === p.lead ? 0 : 0.5;
            const left = (1 - f.u) * f.dur * cyc;
            this.phase = (((trig + Math.min(f.u * swing * cyc, 0.5 - left)) % 1) + 1) % 1;
            f.ahead = ahead;
            // Re-aim it like a stride (landing ahead), keeping the foot where it is right now.
            const e = smoothstep(f.u);
            if (e < 0.9) {
              this.predict(_ideal[sw], vel, f.dur * (1 - f.u), p, speed, scale, f.to, ahead);
              f.from.copy(f.cur).setY(0).addScaledVector(f.to, -e).multiplyScalar(1 / (1 - e)).setY(0);
            }
          } else {
            // Setting off: the foot furthest behind where it should be goes first.
            const eL = Math.hypot(this.feet[0].planted.x - _ideal[0].x, this.feet[0].planted.z - _ideal[0].z);
            const eR = Math.hypot(this.feet[1].planted.x - _ideal[1].x, this.feet[1].planted.z - _ideal[1].z);
            const first = Math.abs(eL - eR) < 1e-3 * scale ? p.lead : eL > eR ? 0 : 1;
            this.phase = first === p.lead ? 0.999 : 0.499;
          }
        }
        this.walking = true;
        // Re-sync the cadence to the feet: a planted foot left well behind where a stride would
        // have lifted it (setting off, a change of speed or direction) steps now.
        for (const i of FEET) {
          const f = this.feet[i];
          const o = this.feet[i === 0 ? 1 : 0];
          if (f.swinging || (o.swinging && o.u < 0.5)) continue;
          const d = ((f.planted.x - _ideal[i].x) * vel.x + (f.planted.z - _ideal[i].z) * vel.z) / speed;
          if (d < -(ahead + 0.1 * scale)) {
            this.phase = ((i === p.lead ? 0 : 0.5) + 0.999) % 1;
            break;
          }
        }
        const prev = this.phase;
        this.phase = (this.phase + dt * cyc) % 1;
        for (const i of FEET) {
          const trigger = i === p.lead ? 0 : 0.5;
          const since = (this.phase - trigger + 1) % 1;
          const crossed = since < ((this.phase - prev + 1) % 1) || (prev === this.phase && since === 0);
          const f = this.feet[i];
          if (!crossed || f.swinging) continue;
          this.beginStep(i, _ideal[i], idealYaw[i], vel, speed, p, scale, ahead);
          f.dur = swing;
          // Already this far into the swing (it should have started between two frames); the
          // time elapsed this frame is part of that, so it is not advanced again.
          f.u = Math.max(0, Math.min(0.5, since / cyc / swing));
          f.fresh = true;
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
        // Over-stretched, or the body turned so far over the foot that the leg would twist.
        const urgent = reach > 0.6 || yawErr > 1.6;
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
      // (the body keeps moving for the rest of the swing). The foot commits over the last part of
      // the swing: steering near touchdown would drag it along the ground as it lands.
      this.predict(_ideal[i], vel, f.dur * (1 - f.u), p, speed, scale, _pred, f.ahead);
      const commit = 1 - smoothstep(Math.min(1, Math.max(0, (f.u - 0.55) / 0.35)));
      const steer = Math.min(1, 1 - Math.exp(-dt * 18)) * commit;
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
    // Lower the pelvis where a leg would over-stretch. Planted feet are a hard constraint (so they
    // never get dragged by the leg); a swinging foot counts where it is going to land, blended in
    // as the swing progresses, so the pelvis is already down when it lands (no snap).
    let left = Infinity;
    for (const i of FEET) {
      const f = this.feet[i];
      if (!f.swinging) continue;
      const k = smoothstep(Math.min(1, f.u));
      _land.copy(f.cur).lerp(_lf.copy(f.to).setY(0), k);
      toLocal(_land, i === 0 ? pose.footL : pose.footR, rootPos, c, s, scale);
      left = Math.min(left, (1 - f.u) * f.dur);
    }
    const all = pose.pelvis.y - fitPelvisY(pose, bulk, true, true);
    this.writeBack(pose, rootPos, rootYaw, c, s, scale, tilt);
    const hard = pose.pelvis.y - fitPelvisY(pose, bulk, !this.feet[0].swinging, !this.feet[1].swinging);
    // Going down: eased, but at least fast enough to be there when the stepping foot lands (it
    // becomes a hard constraint then — no one-frame drop on touchdown).
    const rate = all > this.drop ? Math.max(1 - Math.exp(-dt * 25), Math.min(1, dt / Math.max(left, 1e-4))) : 1 - Math.exp(-dt * 10);
    this.drop += (all - this.drop) * rate;
    this.drop = Math.max(this.drop, hard);
    this.applyDrop(pose);
    // The view tilts the body about the lowered pelvis: write the feet back about that pivot.
    if (tilt && this.drop > 0) {
      _piv.y = pose.pelvis.y;
      this.writeBack(pose, rootPos, rootYaw, c, s, scale, tilt);
    }
  }

  /** The body lowers as a whole: pelvis and arms (the hands keep their reach from the shoulders).
   *  With the bow up the hands stay put — the bow is held where the arrow leaves. */
  private applyDrop(pose: Pose): void {
    pose.pelvis.y -= this.drop;
    pose.handR.y -= this.drop * this.handK;
    pose.handL.y -= this.drop * this.handK;
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
