import * as THREE from 'three';

const fwd3 = (yaw: number, pitch: number, out = new THREE.Vector3()) => out.set(Math.sin(yaw) * Math.cos(pitch), -Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
const rightOf = (yaw: number, out = new THREE.Vector3()) => out.set(-Math.cos(yaw), 0, Math.sin(yaw));

export type CineStyle = 'finisher' | 'issen' | 'standoff' | 'killcam' | 'flow';

interface Cine {
  a: THREE.Vector3;
  b: THREE.Vector3;
  style: CineStyle;
  t: number;
  dur: number;
  side: number;
}

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

  cinematic(a: THREE.Vector3, b: THREE.Vector3, style: CineStyle, dur: number): void {
    a = a.clone().setY(0);
    b = b.clone().setY(0);
    // Keep an ongoing shot of the same style (standoff is re-issued every frame).
    if (this.cine && this.cine.style === style && style === 'standoff') {
      this.cine.a.copy(a);
      this.cine.b.copy(b);
      this.cine.t = Math.min(this.cine.t, 0.5);
      this.cine.dur = Math.max(this.cine.dur, 1);
      return;
    }
    // Choose the profile side closest to the current view so the cut isn't jarring.
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const axis = b.clone().sub(a).setY(0).normalize();
    const perp = new THREE.Vector3(-axis.z, 0, axis.x);
    const toCam = this.camera.position.clone().sub(mid).setY(0);
    const side = toCam.dot(perp) >= 0 ? 1 : -1;
    this.cine = { a: a.clone(), b: b.clone(), style, t: 0, dur, side };
  }

  endCinematic(): void {
    this.cine = null;
  }

  update(dt: number, player: THREE.Vector3, opts: { aiming: boolean; lockTarget: THREE.Vector3 | null; crowd: number; moveDir: THREE.Vector3 | null; slowmo: boolean }): void {
    this.time += dt;
    this.sinceManual += dt;

    // Lock-on / lazy follow.
    if (opts.lockTarget && !opts.aiming) {
      const d = opts.lockTarget.clone().sub(player);
      const want = Math.atan2(d.x, d.z);
      this.yaw += wrap(want - this.yaw) * Math.min(1, dt * 4);
      this.pitch += (0.22 - this.pitch) * Math.min(1, dt * 2);
    } else if (opts.moveDir && this.sinceManual > 1.5 && !opts.aiming) {
      const want = Math.atan2(opts.moveDir.x, opts.moveDir.z);
      const diff = wrap(want - this.yaw);
      if (Math.abs(diff) < 1.1) this.yaw += diff * Math.min(1, dt * 0.8);
    }

    this.aimBlend += ((opts.aiming ? 1 : 0) - this.aimBlend) * Math.min(1, dt * 12);
    const wantDist = 4.8 + Math.min(2, opts.crowd * 0.45) - (opts.slowmo ? 0.6 : 0);
    this.dist += (wantDist - this.dist) * Math.min(1, dt * 2.5);

    // Follow framing.
    const aimK = this.aimBlend;
    const f = fwd3(this.yaw, this.pitch);
    const r = rightOf(this.yaw);
    this.target.lerp(player.clone().add(new THREE.Vector3(0, 1.45, 0)), Math.min(1, dt * 14));
    const shoulder = 0.35 + aimK * 0.45;
    const d = this.dist * (1 - aimK) + 2.2 * aimK;
    const eye = this.target.clone().addScaledVector(r, shoulder).addScaledVector(f, -d);
    eye.y += aimK * 0.1;
    eye.y = Math.max(0.35, eye.y);
    this.pos.copy(eye);
    this.look.copy(this.target).addScaledVector(r, shoulder).addScaledVector(f, 4);

    // Cinematic override.
    if (this.cine) {
      const c = this.cine;
      c.t += dt;
      const mid = c.a.clone().add(c.b).multiplyScalar(0.5);
      const axis = c.b.clone().sub(c.a).setY(0).normalize();
      const perp = new THREE.Vector3(-axis.z, 0, axis.x).multiplyScalar(c.side);
      const u = Math.min(1, c.t / c.dur);
      let camPos: THREE.Vector3;
      let lookAt: THREE.Vector3;
      switch (c.style) {
        case 'standoff':
          // Wide low profile shot, both fighters on screen.
          camPos = mid.clone().addScaledVector(perp, 7.5 - u * 1.5).add(new THREE.Vector3(0, 1.1, 0));
          lookAt = mid.clone().add(new THREE.Vector3(0, 1.1, 0));
          break;
        case 'issen':
          camPos = mid.clone().addScaledVector(perp, 3.6 + u * 0.8).addScaledVector(axis, -0.8 - u * 0.8).add(new THREE.Vector3(0, 0.9, 0));
          lookAt = mid.clone().add(new THREE.Vector3(0, 1.1, 0));
          break;
        case 'killcam':
          camPos = c.b.clone().addScaledVector(perp, 3.0).addScaledVector(axis, -1.5).add(new THREE.Vector3(0, 1.0 + u * 0.4, 0));
          lookAt = c.b.clone().add(new THREE.Vector3(0, 0.9, 0));
          break;
        default: {
          // Finisher: slow orbit around the pair, low and close.
          const orbit = (u - 0.5) * 0.7 * c.side;
          const p2 = perp.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), orbit);
          camPos = mid.clone().addScaledVector(p2, 3.5).addScaledVector(axis, -0.9).add(new THREE.Vector3(0, 1.2 - u * 0.2, 0));
          lookAt = mid.clone().add(new THREE.Vector3(0, 1.1, 0));
        }
      }
      if (this.cineBlend === 0) {
        this.cinePos.copy(camPos);
        this.cineLook.copy(lookAt);
      }
      this.cinePos.lerp(camPos, Math.min(1, dt * 8));
      this.cineLook.lerp(lookAt, Math.min(1, dt * 8));
      if (c.t >= c.dur) this.cine = null;
    }
    this.cineBlend += ((this.cine ? 1 : 0) - this.cineBlend) * Math.min(1, dt * (this.cine ? 14 : 5));
    if (this.cineBlend < 0.001) this.cineBlend = 0;
    const k = smooth(this.cineBlend);
    const finalPos = this.pos.clone().lerp(this.cinePos, k);
    const finalLook = this.look.clone().lerp(this.cineLook, k);

    // Trauma shake.
    this.trauma = Math.max(0, this.trauma - dt * 1.6);
    const s = this.trauma * this.trauma;
    const n = (o: number) => Math.sin(this.time * 37 + o) * 0.5 + Math.sin(this.time * 61 + o * 2.3) * 0.5;
    finalPos.add(new THREE.Vector3(n(1) * 0.22 * s, n(2) * 0.18 * s, n(3) * 0.22 * s));

    this.camera.position.copy(finalPos);
    this.camera.lookAt(finalLook);
    this.camera.rotateZ(n(4) * 0.03 * s);

    const cineFov = this.cine?.style === 'standoff' ? 38 : this.cine ? 44 : 58;
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
