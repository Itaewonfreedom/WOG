import * as THREE from 'three';
import { slerpDir } from './pose';

// ── Sword trail ─────────────────────────────────────────────────────────────
const TRAIL_CAP = 48;
/** Seconds of simulation time a blade sample stays visible (fades linearly with age). */
const TRAIL_LIFE = 0.1;
/** Ribbon cross-sections, spread evenly over TRAIL_LIFE (so the ribbon is the same at any refresh rate). */
const TRAIL_VERTS = 32;
/** Minimum simulation time between stored samples (very high refresh rates / deep slow-mo keep
 *  moving the newest sample instead of piling up near-duplicates). */
const TRAIL_MIN_DT = 1 / 240;

const _tb = new THREE.Vector3();
const _tt = new THREE.Vector3();
const _da = new THREE.Vector3();
const _db = new THREE.Vector3();
const _dk = new THREE.Vector3();

/**
 * Ribbon following the blade (base→tip) while a strike is active.
 * Samples live in a ring buffer stamped with simulation time: nothing is added while time is
 * frozen (hit-stop, pause), the ribbon is rebuilt on a fixed time grid (30/60/120 Hz look the
 * same), the tip is interpolated along an arc around the base, and separate strikes (or a
 * teleport) never get joined by a long bridge.
 */
export class SwordTrail {
  readonly mesh: THREE.Mesh;
  private readonly sb = new Float32Array(TRAIL_CAP * 3);
  private readonly st = new Float32Array(TRAIL_CAP * 3);
  private readonly stime = new Float64Array(TRAIL_CAP);
  private readonly sseg = new Int32Array(TRAIL_CAP);
  private head = 0;
  private count = 0;
  private now = 0;
  private segId = 0;
  private wasActive = false;
  private lastKey = Number.NaN;
  private readonly pos: Float32Array;
  private readonly alpha: Float32Array;
  private readonly index: Uint16Array;
  private readonly geo: THREE.BufferGeometry;
  private readonly mat: THREE.ShaderMaterial;

  constructor(color: number) {
    const verts = TRAIL_VERTS * 2;
    this.pos = new Float32Array(verts * 3);
    this.alpha = new Float32Array(verts);
    this.index = new Uint16Array((TRAIL_VERTS - 1) * 6);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    this.geo.setIndex(new THREE.BufferAttribute(this.index, 1));
    this.geo.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { color: { value: new THREE.Color(color) }, intensity: { value: 1 } },
      vertexShader: `attribute float alpha; varying float vA; varying float vEdge;
        void main(){ vA = alpha; vEdge = mod(float(gl_VertexID), 2.0); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 color; uniform float intensity; varying float vA; varying float vEdge;
        void main(){ float a = vA * mix(0.25, 1.0, vEdge); gl_FragColor = vec4(color * intensity, a); }`,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.mesh.frustumCulled = false;
  }

  setColor(c: number, intensity = 1): void {
    this.mat.uniforms.color.value.setHex(c);
    this.mat.uniforms.intensity.value = intensity;
  }

  /** Samples currently stored (for tests). */
  get sampleCount(): number {
    return this.count;
  }

  /** Index buffer entries drawn (for tests). */
  get drawnIndices(): number {
    return this.geo.drawRange.count;
  }

  /**
   * Call once per rendered frame. `dt` is simulation time (0 while frozen); `key` identifies the
   * strike (e.g. the action serial) — a new key starts a new ribbon. `maxSpeed` (m/s of
   * simulation time) splits the ribbon where the blade base moves faster than that, e.g. during a
   * dash, so a movement burst is never bridged; the same speed test holds at any refresh rate.
   */
  update(base: THREE.Vector3, tip: THREE.Vector3, active: boolean, dt: number, key = 0, maxSpeed = 45): void {
    this.now += dt;
    if (active) {
      if (!this.wasActive || key !== this.lastKey) this.segId++;
      const newest = this.count > 0 ? this.head : -1;
      const sameSeg = newest >= 0 && this.sseg[newest] === this.segId;
      // Frozen time adds nothing (no stacked duplicates during hit-stop / pause).
      if (!sameSeg || dt > 0) {
        let replace = false;
        if (sameSeg) {
          const i = newest * 3;
          const jump = Math.hypot(base.x - this.sb[i], base.y - this.sb[i + 1], base.z - this.sb[i + 2]);
          const since = this.now - this.stime[newest];
          const prev = this.count > 1 ? this.idx(1) : -1;
          if (jump > maxSpeed * Math.max(since, 1 / 240)) this.segId++;
          // Keep samples at least TRAIL_MIN_DT apart: move the newest one while it is still too
          // close to the one before it (never replace the only sample of a ribbon).
          else if (prev >= 0 && this.sseg[prev] === this.segId && this.now - this.stime[prev] < TRAIL_MIN_DT) replace = true;
        }
        if (!replace) {
          this.head = this.count === 0 ? 0 : (this.head + 1) % TRAIL_CAP;
          this.count = Math.min(TRAIL_CAP, this.count + 1);
        }
        const h = this.head;
        this.sb[h * 3] = base.x;
        this.sb[h * 3 + 1] = base.y;
        this.sb[h * 3 + 2] = base.z;
        this.st[h * 3] = tip.x;
        this.st[h * 3 + 1] = tip.y;
        this.st[h * 3 + 2] = tip.z;
        this.stime[h] = this.now;
        this.sseg[h] = this.segId;
      }
    }
    this.wasActive = active;
    this.lastKey = key;
    // Forget samples that have fully faded (keep one older sample to interpolate the tail end).
    while (this.count > 1 && this.now - this.stime[this.idx(this.count - 2)] >= TRAIL_LIFE) this.count--;
    if (this.count === 1 && this.now - this.stime[this.head] > TRAIL_LIFE) this.count = 0;
    this.build();
  }

  private idx(m: number): number {
    return (this.head - m + TRAIL_CAP * 2) % TRAIL_CAP;
  }

  /** Blade at time `tj` (interpolated inside one strike); returns the segment id or -1. */
  private sampleAt(tj: number, cursor: { m: number }, outB: THREE.Vector3, outT: THREE.Vector3): number {
    if (this.count === 0) return -1;
    const newest = this.stime[this.head];
    if (tj > newest + 1e-7) return -1;
    while (cursor.m < this.count && this.stime[this.idx(cursor.m)] > tj) cursor.m++;
    if (cursor.m >= this.count) return -1;
    const k = this.idx(cursor.m);
    if (cursor.m === 0) {
      outB.fromArray(this.sb, k * 3);
      outT.fromArray(this.st, k * 3);
      return this.sseg[k];
    }
    const k1 = this.idx(cursor.m - 1);
    if (this.sseg[k] !== this.sseg[k1]) return -1;
    const t0 = this.stime[k];
    const t1 = this.stime[k1];
    const f = t1 > t0 ? (tj - t0) / (t1 - t0) : 0;
    outB.fromArray(this.sb, k * 3);
    _db.fromArray(this.sb, k1 * 3);
    // Tip swings around the base: interpolate the blade direction, not the tip position.
    _da.fromArray(this.st, k * 3).sub(outB);
    const la = _da.length();
    _dk.fromArray(this.st, k1 * 3).sub(_db);
    const lb = _dk.length();
    outB.lerp(_db, f);
    if (la > 1e-5 && lb > 1e-5) {
      slerpDir(_da.multiplyScalar(1 / la), _dk.multiplyScalar(1 / lb), f, _da);
      outT.copy(outB).addScaledVector(_da, la + (lb - la) * f);
    } else outT.fromArray(this.st, k * 3).lerp(_dk.fromArray(this.st, k1 * 3), f);
    return this.sseg[k];
  }

  private readonly cursor = { m: 0 };

  private build(): void {
    let n = 0;
    let prevSeg = -1;
    this.cursor.m = 0;
    for (let j = 0; j < TRAIL_VERTS; j++) {
      const age = (TRAIL_LIFE * j) / (TRAIL_VERTS - 1);
      const seg = this.sampleAt(this.now - age, this.cursor, _tb, _tt);
      const v = j * 2;
      if (seg >= 0) {
        this.pos[v * 3] = _tb.x;
        this.pos[v * 3 + 1] = _tb.y;
        this.pos[v * 3 + 2] = _tb.z;
        this.pos[v * 3 + 3] = _tt.x;
        this.pos[v * 3 + 4] = _tt.y;
        this.pos[v * 3 + 5] = _tt.z;
        const f = 1 - age / TRAIL_LIFE;
        const k = f * f * 0.6;
        this.alpha[v] = k;
        this.alpha[v + 1] = k;
        if (j > 0 && seg === prevSeg) {
          const a = v - 2;
          this.index[n++] = a;
          this.index[n++] = a + 1;
          this.index[n++] = a + 2;
          this.index[n++] = a + 1;
          this.index[n++] = a + 3;
          this.index[n++] = a + 2;
        }
      } else {
        this.alpha[v] = 0;
        this.alpha[v + 1] = 0;
      }
      prevSeg = seg;
    }
    this.geo.setDrawRange(0, n);
    (this.geo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.getAttribute('alpha') as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.getIndex() as THREE.BufferAttribute).needsUpdate = true;
  }

  dispose(): void {
    this.geo.dispose();
    this.mat.dispose();
  }
}

// ── Sparks (velocity-stretched streaks) ─────────────────────────────────────
interface Spark {
  p: THREE.Vector3;
  v: THREE.Vector3;
  life: number;
  max: number;
  color: THREE.Color;
  g: number;
}

export class Sparks {
  readonly mesh: THREE.LineSegments;
  private readonly list: Spark[] = [];
  private readonly pos: Float32Array;
  private readonly col: Float32Array;
  private readonly cap: number;

  constructor(cap = 600) {
    this.cap = cap;
    this.pos = new Float32Array(cap * 6);
    this.col = new Float32Array(cap * 6);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    this.mesh = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.mesh.frustumCulled = false;
  }

  burst(at: THREE.Vector3, n: number, color: number, speed: number, opts: { up?: number; life?: number; gravity?: number; dir?: THREE.Vector3; spread?: number } = {}): void {
    const c = new THREE.Color(color);
    for (let i = 0; i < n; i++) {
      if (this.list.length >= this.cap) this.list.shift();
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5 + (opts.up ?? 0.3), Math.random() - 0.5).normalize();
      if (opts.dir) v.lerp(opts.dir, 1 - (opts.spread ?? 0.6)).normalize();
      v.multiplyScalar(speed * (0.4 + Math.random() * 0.8));
      const life = (opts.life ?? 0.35) * (0.5 + Math.random() * 0.8);
      this.list.push({ p: at.clone(), v, life, max: life, color: c.clone().offsetHSL(0, 0, (Math.random() - 0.5) * 0.15), g: opts.gravity ?? 9 });
    }
  }

  update(dt: number): void {
    let j = 0;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const s = this.list[i];
      s.life -= dt;
      if (s.life <= 0) {
        this.list.splice(i, 1);
        continue;
      }
      s.v.y -= s.g * dt;
      s.v.multiplyScalar(1 - 2.5 * dt);
      s.p.addScaledVector(s.v, dt);
    }
    for (const s of this.list) {
      const k = s.life / s.max;
      const tail = s.p.clone().addScaledVector(s.v, -0.035);
      this.pos.set([s.p.x, s.p.y, s.p.z, tail.x, tail.y, tail.z], j * 6);
      this.col.set([s.color.r * k, s.color.g * k, s.color.b * k, 0, 0, 0], j * 6);
      j++;
    }
    this.pos.fill(0, j * 6);
    this.col.fill(0, j * 6);
    const g = this.mesh.geometry;
    (g.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('color') as THREE.BufferAttribute).needsUpdate = true;
    g.setDrawRange(0, j * 2);
  }
}

// ── Soft particles (dust, blood mist, embers, petals) ───────────────────────
interface Puff {
  p: THREE.Vector3;
  v: THREE.Vector3;
  life: number;
  max: number;
  size: number;
  grow: number;
  color: THREE.Color;
  g: number;
  drag: number;
  alpha: number;
}

export class Puffs {
  readonly points: THREE.Points;
  private readonly list: Puff[] = [];
  private readonly pos: Float32Array;
  private readonly col: Float32Array;
  private readonly size: Float32Array;
  private readonly alpha: Float32Array;
  private readonly cap: number;

  constructor(cap: number, additive: boolean) {
    this.cap = cap;
    this.pos = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 3);
    this.size = new Float32Array(cap);
    this.alpha = new Float32Array(cap);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: { scale: { value: 600 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying vec3 vC; varying float vA;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = vA * smoothstep(0.5, 0.15, r); gl_FragColor = vec4(vC, a); }`,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
  }

  setViewportHeight(h: number): void {
    (this.points.material as THREE.ShaderMaterial).uniforms.scale.value = h * 0.9;
  }

  emit(at: THREE.Vector3, n: number, o: { color: number; speed: number; size: number; life: number; gravity?: number; drag?: number; up?: number; grow?: number; alpha?: number; jitter?: number; dir?: THREE.Vector3; spread?: number }): void {
    for (let i = 0; i < n; i++) {
      if (this.list.length >= this.cap) this.list.shift();
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5 + (o.up ?? 0), Math.random() - 0.5).normalize();
      if (o.dir) v.lerp(o.dir, 1 - (o.spread ?? 0.6)).normalize();
      v.multiplyScalar(o.speed * (0.3 + Math.random()));
      const life = o.life * (0.6 + Math.random() * 0.7);
      const p = at.clone();
      if (o.jitter) p.add(new THREE.Vector3((Math.random() - 0.5) * o.jitter, (Math.random() - 0.5) * o.jitter, (Math.random() - 0.5) * o.jitter));
      this.list.push({ p, v, life, max: life, size: o.size * (0.6 + Math.random() * 0.8), grow: o.grow ?? 0, color: new THREE.Color(o.color), g: o.gravity ?? 0, drag: o.drag ?? 1.5, alpha: o.alpha ?? 1 });
    }
  }

  update(dt: number): void {
    let j = 0;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const s = this.list[i];
      s.life -= dt;
      if (s.life <= 0 || s.p.y < -0.2) {
        this.list.splice(i, 1);
        continue;
      }
      s.v.y -= s.g * dt;
      s.v.multiplyScalar(Math.max(0, 1 - s.drag * dt));
      s.p.addScaledVector(s.v, dt);
      if (s.p.y < 0.02 && s.g > 0) {
        s.p.y = 0.02;
        s.v.set(0, 0, 0);
      }
      s.size += s.grow * dt;
    }
    for (const s of this.list) {
      const k = s.life / s.max;
      this.pos.set([s.p.x, s.p.y, s.p.z], j * 3);
      this.col.set([s.color.r, s.color.g, s.color.b], j * 3);
      this.size[j] = s.size;
      this.alpha[j] = s.alpha * Math.min(1, k * 2.5);
      j++;
    }
    for (let i = j; i < this.cap; i++) this.alpha[i] = 0;
    const g = this.points.geometry;
    for (const n of ['position', 'color', 'size', 'alpha']) (g.getAttribute(n) as THREE.BufferAttribute).needsUpdate = true;
    g.setDrawRange(0, j);
  }
}

// ── Expanding rings (issen shockwave, deflect flash on the ground) ──────────
export class Rings {
  readonly group = new THREE.Group();
  private readonly list: { mesh: THREE.Mesh; life: number; max: number; grow: number }[] = [];
  private readonly geo = new THREE.RingGeometry(0.85, 1, 48);

  spawn(at: THREE.Vector3, color: number, life = 0.5, grow = 6, flat = true): void {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(this.geo, mat);
    mesh.position.copy(at);
    if (flat) mesh.rotation.x = -Math.PI / 2;
    mesh.scale.setScalar(0.2);
    this.group.add(mesh);
    this.list.push({ mesh, life, max: life, grow });
  }

  /** Billboard rings face the camera. */
  update(dt: number, camera: THREE.Camera): void {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const r = this.list[i];
      r.life -= dt;
      const k = 1 - r.life / r.max;
      r.mesh.scale.setScalar(0.2 + r.grow * (1 - (1 - k) * (1 - k)));
      (r.mesh.material as THREE.MeshBasicMaterial).opacity = 0.8 * (1 - k);
      if (r.mesh.rotation.x === 0) r.mesh.quaternion.copy(camera.quaternion);
      if (r.life <= 0) {
        this.group.remove(r.mesh);
        (r.mesh.material as THREE.Material).dispose();
        this.list.splice(i, 1);
      }
    }
  }
}

// ── Ground decals (blood pools / scorch) ────────────────────────────────────
export class Decals {
  readonly mesh: THREE.InstancedMesh;
  private i = 0;
  private readonly born: number[];
  private readonly cap: number;
  private time = 0;

  constructor(cap = 64) {
    this.cap = cap;
    const tex = makeSplatTexture();
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, color: 0x5a0a0a, opacity: 0.85, polygonOffset: true, polygonOffsetFactor: -2 });
    const geo = new THREE.PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.InstancedMesh(geo, mat, cap);
    this.mesh.count = 0;
    this.born = new Array(cap).fill(-1);
    this.mesh.frustumCulled = false;
  }

  add(x: number, z: number, size: number): void {
    const m = new THREE.Matrix4().compose(new THREE.Vector3(x, 0.015 + this.i * 0.0001, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6.28), new THREE.Vector3(size, 1, size));
    this.mesh.setMatrixAt(this.i, m);
    this.born[this.i] = this.time;
    this.i = (this.i + 1) % this.cap;
    this.mesh.count = Math.min(this.cap, Math.max(this.mesh.count, this.i === 0 ? this.cap : this.i));
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  update(dt: number): void {
    this.time += dt;
  }

  clear(): void {
    this.mesh.count = 0;
    this.i = 0;
  }
}

function makeSplatTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  g.fillStyle = '#fff';
  for (let i = 0; i < 14; i++) {
    const r = 10 + Math.random() * 26;
    const a = Math.random() * Math.PI * 2;
    const d = Math.random() * 30;
    g.beginPath();
    g.arc(64 + Math.cos(a) * d, 64 + Math.sin(a) * d, r, 0, Math.PI * 2);
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Four-point star used for the unblockable-attack glint. */
export function makeGlintTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.15, 'rgba(255,255,255,0.8)');
  grd.addColorStop(0.4, 'rgba(255,255,255,0.15)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  g.globalCompositeOperation = 'lighter';
  for (const [w, h] of [
    [128, 6],
    [6, 128],
  ]) {
    const lg = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    lg.addColorStop(0, 'rgba(255,255,255,1)');
    lg.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = lg;
    g.fillRect(64 - w / 2, 64 - h / 2, w, h);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
