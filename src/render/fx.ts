import * as THREE from 'three';

// ── Sword trail ─────────────────────────────────────────────────────────────
const TRAIL_SAMPLES = 16;
const SUB = 3;

/** Ribbon following the blade (base→tip) while a strike is active. */
export class SwordTrail {
  readonly mesh: THREE.Mesh;
  private readonly bases: THREE.Vector3[] = [];
  private readonly tips: THREE.Vector3[] = [];
  private readonly ages: number[] = [];
  private readonly pos: Float32Array;
  private readonly alpha: Float32Array;
  private readonly geo: THREE.BufferGeometry;
  private readonly mat: THREE.ShaderMaterial;

  constructor(color: number) {
    const verts = TRAIL_SAMPLES * SUB * 2;
    this.pos = new Float32Array(verts * 3);
    this.alpha = new Float32Array(verts);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    const idx: number[] = [];
    for (let i = 0; i < TRAIL_SAMPLES * SUB - 1; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    this.geo.setIndex(idx);
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

  /** Call once per rendered frame. */
  update(base: THREE.Vector3, tip: THREE.Vector3, active: boolean, dt: number): void {
    for (let i = 0; i < this.ages.length; i++) this.ages[i] += dt;
    if (active) {
      this.bases.unshift(base.clone());
      this.tips.unshift(tip.clone());
      this.ages.unshift(0);
      if (this.bases.length > TRAIL_SAMPLES) {
        this.bases.pop();
        this.tips.pop();
        this.ages.pop();
      }
    }
    const n = this.bases.length;
    let v = 0;
    for (let i = 0; i < TRAIL_SAMPLES * SUB; i++) {
      const fi = i / SUB;
      const i0 = Math.min(n - 1, Math.floor(fi));
      const i1 = Math.min(n - 1, i0 + 1);
      const f = fi - Math.floor(fi);
      if (n < 2 || i0 >= n - 1) {
        this.alpha[v] = 0;
        this.alpha[v + 1] = 0;
        this.pos.fill(0, v * 3, v * 3 + 6);
        v += 2;
        continue;
      }
      const b = this.bases[i0].clone().lerp(this.bases[i1], f);
      const t = this.tips[i0].clone().lerp(this.tips[i1], f);
      const age = this.ages[i0] * (1 - f) + this.ages[i1] * f;
      const k = (1 - fi / (n - 1)) * Math.max(0, 1 - age / 0.16);
      this.pos.set([b.x, b.y, b.z], v * 3);
      this.pos.set([t.x, t.y, t.z], v * 3 + 3);
      this.alpha[v] = k * 0.9;
      this.alpha[v + 1] = k * 0.9;
      v += 2;
    }
    (this.geo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.getAttribute('alpha') as THREE.BufferAttribute).needsUpdate = true;
    // Drop fully faded samples.
    while (this.ages.length && this.ages[this.ages.length - 1] > 0.2) {
      this.ages.pop();
      this.bases.pop();
      this.tips.pop();
    }
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
