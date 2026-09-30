import * as THREE from 'three';

const fwd3 = (yaw: number, pitch: number, out = new THREE.Vector3()) => out.set(Math.sin(yaw) * Math.cos(pitch), -Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
const rightOf = (yaw: number, out = new THREE.Vector3()) => out.set(-Math.cos(yaw), 0, Math.sin(yaw));

export type CineStyle = 'finisher' | 'issen' | 'standoff' | 'killcam' | 'flow';

interface Cine {
  a: THREE.Vector3;
  b: THREE.Vector3;
  /** Framing axis / side fixed when the shot starts (subjects may pass through each other). */
  axis: THREE.Vector3;
  perp: THREE.Vector3;
  style: CineStyle;
  t: number;
  /** Nominal shot length (drives the camera move) … */
  dur: number;
  /** … and the hard limit after which the shot ends on its own (safety net). */
  maxDur: number;
  /** Shot progress 0..1 supplied by the action being filmed (overrides t / dur). */
  progress: number | null;
  side: number;
}

const _mid = new THREE.Vector3();
const _p2 = new THREE.Vector3();
const _camPos = new THREE.Vector3();
const _lookAt = new THREE.Vector3();
const _fin = new THREE.Vector3();
const _finLook = new THREE.Vector3();
const _v = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const _f = new THREE.Vector3();
const _r = new THREE.Vector3();
const _eye = new THREE.Vector3();
/** Frame-rate independent exponential approach factor. */
const approach = (rate: number, dt: number) => 1 - Math.exp(-rate * dt);

/**
 * Third-person camera with an over-the-shoulder aim mode, cinematic framing for
 * finishers / issen / standoffs (profile shots like a samurai film), and trauma shake.
 */
export class CameraRig {
  readonly camera: THREE.PerspectiveCamera;
  yaw = 0;
  pitch = 0.2;
  private dist = 5.2;
  private readonly target = new THREE.Vector3(0, 1.4, 0);
  private readonly pos = new THREE.Vector3(0, 3, -5);
  private readonly look = new THREE.Vector3();
  private aimBlend = 0;
  private cine: Cine | null = null;
  private cineBlend = 0;
  private readonly cinePos = new THREE.Vector3();
  private readonly cineLook = new THREE.Vector3();
  private readonly focus = new THREE.Vector3();
  private focusW = 0;
  private cineFov = 44;
  private trauma = 0;
  private time = 0;
  private sinceManual = 99;
  fovKick = 0;
  sensitivity = 0.0024;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(58, aspect, 0.05, 900);
  }

  get aiming(): boolean {
    return this.aimBlend > 0.5;
  }

  get inCinematic(): boolean {
    return this.cine !== null;
  }

  /** Mouse / right stick look. */
  look2(dx: number, dy: number): void {
    if (dx === 0 && dy === 0) return;
    this.yaw -= dx * this.sensitivity;
    this.pitch = Math.max(-0.55, Math.min(1.1, this.pitch + dy * this.sensitivity));
    this.sinceManual = 0;
  }

  shake(amount: number): void {
    this.trauma = Math.min(1, this.trauma + amount);
  }

  cinematic(a: THREE.Vector3, b: THREE.Vector3, style: CineStyle, dur: number, maxDur = dur): void {
    a = a.clone().setY(0);
    b = b.clone().setY(0);
    // Keep an ongoing shot of the same style (standoff is re-issued every frame).
    if (this.cine && this.cine.style === style && style === 'standoff') {
      const c = this.cine;
      c.a.copy(a);
      c.b.copy(b);
      c.t = Math.min(c.t, 0.5);
      c.dur = Math.max(c.dur, 1);
      c.maxDur = Math.max(c.maxDur, 1);
      // A chained standoff moves on to another enemy: re-frame on the new pair (profile again),
      // staying on the side the camera is already on.
      _v.subVectors(b, a).setY(0);
      if (_v.lengthSq() > 1e-4) {
        _v.normalize();
        if (Math.abs(_v.dot(c.axis)) < Math.cos(0.35)) {
          c.axis.copy(_v);
          const mid = _mid.copy(a).add(b).multiplyScalar(0.5);
          c.perp.set(-_v.z, 0, _v.x);
          const toCam = _p2.copy(this.cinePos).sub(mid).setY(0);
          if (toCam.dot(c.perp) < 0) c.perp.multiplyScalar(-1);
        }
      }
      return;
    }
    // Choose the profile side closest to the current view so the cut isn't jarring.
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const axis = b.clone().sub(a).setY(0);
    if (axis.lengthSq() < 1e-6) axis.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    axis.normalize();
    const perp = new THREE.Vector3(-axis.z, 0, axis.x);
    const toCam = this.camera.position.clone().sub(mid).setY(0);
    const side = toCam.dot(perp) >= 0 ? 1 : -1;
    this.cine = { a: a.clone(), b: b.clone(), axis, perp: perp.multiplyScalar(side), style, t: 0, dur, maxDur: Math.max(dur, maxDur), progress: null, side };
    this.focusW = 0;
  }

  /**
   * Follow the live subjects of the current shot (called every frame while it runs). `focus` is
   * the contact point the shot should drift toward with weight `focusW` (0..1).
   */
  track(a: THREE.Vector3, b: THREE.Vector3, focus: THREE.Vector3 | null, focusW: number, progress: number | null = null): void {
    if (!this.cine) return;
    this.cine.a.copy(a).setY(0);
    this.cine.b.copy(b).setY(0);
    this.cine.progress = progress;
    if (focus) this.focus.copy(focus);
    this.focusW = focus ? focusW : 0;
  }

  /** End the shot now and hand back to the follow camera, looking the way the shot looked. */
  releaseCinematic(): void {
    if (!this.cine) return;
    this.cine = null;
    _v.subVectors(this.cineLook, this.cinePos);
    if (_v.x * _v.x + _v.z * _v.z > 1e-6) {
      this.yaw = Math.atan2(_v.x, _v.z);
      this.sinceManual = 0;
    }
  }

  /** Hard cut back (new game / title). */
  endCinematic(): void {
    this.cine = null;
    this.cineBlend = 0;
  }

  update(dt: number, player: THREE.Vector3, opts: { aiming: boolean; lockTarget: THREE.Vector3 | null; crowd: number; moveDir: THREE.Vector3 | null; slowmo: boolean }): void {
    this.time += dt;
    this.sinceManual += dt;

    // Lock-on / lazy follow.
    if (opts.lockTarget && !opts.aiming) {
      const d = _v.subVectors(opts.lockTarget, player);
      const want = Math.atan2(d.x, d.z);
      this.yaw += wrap(want - this.yaw) * approach(4, dt);
      this.pitch += (0.22 - this.pitch) * approach(2, dt);
    } else if (opts.moveDir && this.sinceManual > 1.5 && !opts.aiming) {
      const want = Math.atan2(opts.moveDir.x, opts.moveDir.z);
      const diff = wrap(want - this.yaw);
      if (Math.abs(diff) < 1.1) this.yaw += diff * approach(0.8, dt);
    }

    this.aimBlend += ((opts.aiming ? 1 : 0) - this.aimBlend) * approach(12, dt);
    const wantDist = 4.8 + Math.min(2, opts.crowd * 0.45) - (opts.slowmo ? 0.6 : 0);
    this.dist += (wantDist - this.dist) * approach(2.5, dt);

    // Follow framing.
    const aimK = this.aimBlend;
    const f = fwd3(this.yaw, this.pitch, _f);
    const r = rightOf(this.yaw, _r);
    this.target.lerp(_v.copy(player).setY(player.y + 1.45), approach(14, dt));
    const shoulder = 0.35 + aimK * 0.45;
    const d = this.dist * (1 - aimK) + 2.2 * aimK;
    const eye = _eye.copy(this.target).addScaledVector(r, shoulder).addScaledVector(f, -d);
    eye.y += aimK * 0.1;
    eye.y = Math.max(0.35, eye.y);
    this.pos.copy(eye);
    this.look.copy(this.target).addScaledVector(r, shoulder).addScaledVector(f, 4);

    // Cinematic override: the framing axis is fixed when the shot starts, the subjects are
    // followed live, and the view drifts to the contact point around the blow.
    if (this.cine) {
      const c = this.cine;
      c.t += dt;
      const mid = _mid.copy(c.a).add(c.b).multiplyScalar(0.5);
      const axis = c.axis;
      const perp = c.perp;
      const u = Math.min(1, c.progress ?? c.t / c.dur);
      const camPos = _camPos;
      const lookAt = _lookAt;
      switch (c.style) {
        case 'standoff':
          // Wide low profile shot, both fighters on screen.
          camPos.copy(mid).addScaledVector(perp, 7.5 - u * 1.5).setY(mid.y + 1.1);
          lookAt.copy(mid).setY(mid.y + 1.1);
          break;
        case 'issen':
          camPos.copy(mid).addScaledVector(perp, 3.6 + u * 0.8).addScaledVector(axis, -0.8 - u * 0.8).setY(mid.y + 0.9);
          lookAt.copy(mid).setY(mid.y + 1.1);
          break;
        case 'killcam':
          camPos.copy(c.b).addScaledVector(perp, 3.0).addScaledVector(axis, -1.5).setY(c.b.y + 1.0 + u * 0.4);
          lookAt.copy(c.b).setY(c.b.y + 0.9);
          break;
        default: {
          // Finisher: slow orbit around the pair, low and close.
          const orbit = (u - 0.5) * 0.7 * c.side;
          const p2 = _p2.copy(perp).applyAxisAngle(UP, orbit);
          camPos.copy(mid).addScaledVector(p2, 3.5).addScaledVector(axis, -0.9).setY(mid.y + 1.2 - u * 0.2);
          lookAt.copy(mid).setY(mid.y + 1.1);
        }
      }
      if (this.focusW > 0) lookAt.lerp(this.focus, Math.min(1, this.focusW) * 0.6);
      if (this.cineBlend === 0) {
        this.cinePos.copy(camPos);
        this.cineLook.copy(lookAt);
      }
      this.cinePos.lerp(camPos, approach(8, dt));
      this.cineLook.lerp(lookAt, approach(8, dt));
      if (c.t >= (c.progress === null ? c.dur : c.maxDur)) this.releaseCinematic();
    }
    this.cineBlend += ((this.cine ? 1 : 0) - this.cineBlend) * approach(this.cine ? 14 : 4, dt);
    if (this.cineBlend < 0.001) this.cineBlend = 0;
    const k = smooth(this.cineBlend);
    const finalPos = _fin.copy(this.pos).lerp(this.cinePos, k);
    const finalLook = _finLook.copy(this.look).lerp(this.cineLook, k);

    // Trauma shake.
    this.trauma = Math.max(0, this.trauma - dt * 1.6);
    const s = this.trauma * this.trauma;
    const n = (o: number) => Math.sin(this.time * 37 + o) * 0.5 + Math.sin(this.time * 61 + o * 2.3) * 0.5;
    finalPos.x += n(1) * 0.22 * s;
    finalPos.y += n(2) * 0.18 * s;
    finalPos.z += n(3) * 0.22 * s;

    this.camera.position.copy(finalPos);
    this.camera.lookAt(finalLook);
    this.camera.rotateZ(n(4) * 0.03 * s);

    // Keep the shot's lens while blending back out (the blend weight k takes it to the follow FOV).
    if (this.cine) this.cineFov = this.cine.style === 'standoff' ? 38 : 44;
    const cineFov = this.cineFov;
    const fov = 58 * (1 - aimK) + 46 * aimK;
    this.fovKick *= Math.pow(0.02, dt);
    this.camera.fov = fov * (1 - k) + cineFov * k - this.fovKick;
    this.camera.updateProjectionMatrix();
  }

  /** Ray through the screen centre (reticle) for bow aiming. */
  aimRay(origin: THREE.Vector3, dir: THREE.Vector3): void {
    origin.copy(this.camera.position);
    this.camera.getWorldDirection(dir);
  }
}

function wrap(a: number): number {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

function smooth(x: number): number {
  x = Math.max(0, Math.min(1, x));
  return x * x * (3 - 2 * x);
}
