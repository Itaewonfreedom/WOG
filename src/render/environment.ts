/**
 * Golden-hour pampas-field environment (Ghost-of-Tsushima-inspired).
 *
 * Everything is procedural: gradient sky dome with sun + wispy clouds, warm low sun with a
 * focus-following shadow box, noise-painted ground, two instanced grass fields (short arena turf
 * and tall susuki pampas) swaying in layered wind and bending away from fighters, crimson maple
 * trees, a vermilion torii, stone lanterns, rocks, layered mountain silhouettes, falling maple
 * leaves and sunlit motes.
 *
 * Conventions: Y up, 1 unit = 1 m, ground is flat (y = 0) inside arenaRadius + 4.
 */
import * as THREE from 'three';

export interface EnvironmentOptions {
  arenaRadius: number;          // fighting area radius in meters (≈24). Keep it walkable & readable.
  quality: 'low' | 'high';      // low = fewer grass blades / leaves, smaller shadow map
}

export interface Environment {
  /** Call every rendered frame. time = total seconds (scaled game time is fine), dt = frame seconds.
   *  focus = world position the shadow camera should follow (the player).
   *  benders = up to 8 world positions (fighters) that push grass aside. */
  update(time: number, dt: number, focus: THREE.Vector3, benders: THREE.Vector3[]): void;
  /** Main sun light (casts shadows). Characters added by other code will cast shadows via this light. */
  readonly sun: THREE.DirectionalLight;
  /** Normalized wind direction on the ground plane (x,z) – used by other effects. */
  readonly wind: THREE.Vector2;
  /** Momentary gust (e.g. on an issen/finisher): strength 0..1 decays over ~1.5s. */
  gust(strength: number): void;
  dispose(): void;
}

// ---------------------------------------------------------------------------------------------
// Art direction (sRGB hex). Regrade the whole scene from here.
// ---------------------------------------------------------------------------------------------
const C = {
  zenith: 0x1f1b48, skyUpper: 0x5e4585, horizon: 0xeea27c, sunGlow: 0xffbe6a, sunDisk: 0xfff3d2,
  cloudDark: 0x6e4c78, cloudLit: 0xffb27e,
  sunLight: 0xffb26c, hemiSky: 0xe2b9ae, hemiGround: 0x3a3a1c, ambient: 0x6f68b0,
  groundA: 0x7a7c34, groundB: 0xa89746, groundDark: 0x56612a, dirt: 0xa89066, field: 0xb89c52, litter: 0x8a2416,
  grassRoot: 0x34421a, grassMid: 0x727a2f, grassTip: 0xd2b15e,
  pampasRoot: 0x4c4c1c, pampasMid: 0xa08a3e, pampasTip: 0xd8b66c, plume: 0xd4b888,
  trunk: 0x3b2b24, stone: 0x8d877c, toriiRed: 0xb5341e, toriiBlack: 0x1c1614, lanternGlow: 0xffb45e, mote: 0xffa850,
  maple: [0xa61e1b, 0xc2321f, 0xd9542a, 0x8a1820, 0xe07a2e, 0xb8281c],
} as const;

const SUN_ELEV = THREE.MathUtils.degToRad(15);
const SUN_AZ = THREE.MathUtils.degToRad(-38);        // azimuth from +z toward +x
const SUN_INTENSITY = 3.1;
const TORII_AZ = -0.42;                              // gate direction from arena centre
const WIND_BASE = Math.PI + 0.33;                    // blowing mostly toward -x
const SHADOW_HALF = 18;                              // shadow ortho box half-size (m)
const TAU = Math.PI * 2;

// ---------------------------------------------------------------------------------------------
// Small math helpers (deterministic RNG + value noise shared with the GLSL look).
// ---------------------------------------------------------------------------------------------
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const smoothstep = (a: number, b: number, x: number): number => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
function hash2(ix: number, iz: number): number {
  let h = Math.imul(ix | 0, 374761393) ^ Math.imul(iz | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function vnoise(x: number, z: number): number {
  const ix = Math.floor(x), iz = Math.floor(z);
  const fx = x - ix, fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx), uz = fz * fz * (3 - 2 * fz);
  const a = hash2(ix, iz), b = hash2(ix + 1, iz), c = hash2(ix, iz + 1), d = hash2(ix + 1, iz + 1);
  return a + (b - a) * ux + (c - a) * uz + (a - b - c + d) * ux * uz;
}

const NOISE_GLSL = /* glsl */ `
float wog_hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float wog_noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(wog_hash(i), wog_hash(i + vec2(1.0, 0.0)), u.x), mix(wog_hash(i + vec2(0.0, 1.0)), wog_hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float wog_fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * wog_noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; } return s; }
`;

// ---------------------------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------------------------

/** Accumulates baked (world-space, vertex-coloured, non-indexed) parts into one geometry = one draw call. */
class Baker {
  private pos: number[] = [];
  private nrm: number[] = [];
  private col: number[] = [];
  private readonly p = new THREE.Vector3();
  private readonly c = new THREE.Color();
  constructor(private readonly rng: () => number) {}

  add(src: THREE.BufferGeometry, m: THREE.Matrix4, color: THREE.ColorRepresentation, jitter = 0.1,
    shade?: (p: THREE.Vector3) => number): void {
    const g = src.index ? src.toNonIndexed() : src.clone();
    g.applyMatrix4(m);
    const pa = g.getAttribute('position'), na = g.getAttribute('normal');
    const base = new THREE.Color(color);
    for (let i = 0; i < pa.count; i++) {
      if (i % 3 === 0) this.c.copy(base).multiplyScalar(1 + (this.rng() - 0.5) * jitter); // per-face variation
      this.p.fromBufferAttribute(pa, i);
      const s = shade ? shade(this.p) : 1;
      this.pos.push(this.p.x, this.p.y, this.p.z);
      this.nrm.push(na.getX(i), na.getY(i), na.getZ(i));
      this.col.push(this.c.r * s, this.c.g * s, this.c.b * s);
    }
    g.dispose();
    src.dispose();
  }

  build(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nrm, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.computeBoundingSphere();
    return g;
  }
}

const _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _v = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
function trs(x: number, y: number, z: number, ry = 0, sx = 1, sy = 1, sz = 1): THREE.Matrix4 {
  _q.setFromAxisAngle(UP, ry);
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), _q, _s.set(sx, sy, sz));
}
/** Cylinder from a to b (tapered r0 at a → r1 at b). */
function cylBetween(b: Baker, a: THREE.Vector3, c: THREE.Vector3, r0: number, r1: number, color: number, segs = 7): void {
  const dir = _v.subVectors(c, a);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(r1, r0, len, segs, 1, true);
  _q.setFromUnitVectors(UP, dir.normalize());
  b.add(geo, new THREE.Matrix4().compose(a.clone().lerp(c, 0.5), _q, _s.set(1, 1, 1)), color, 0.12);
}
/** Deterministically wobble vertices (shared positions move together, so no cracks). */
function wobble(geo: THREE.BufferGeometry, amount: number, seed: number): THREE.BufferGeometry {
  const pa = geo.getAttribute('position');
  for (let i = 0; i < pa.count; i++) {
    const x = pa.getX(i), y = pa.getY(i), z = pa.getZ(i);
    const n = hash2(Math.round(x * 97 + y * 13) + seed, Math.round(z * 97 - y * 31)) - 0.5;
    const k = 1 + n * amount;
    pa.setXYZ(i, x * k, y * k, z * k);
  }
  geo.computeVertexNormals();
  return geo;
}

interface Strip { pos: number[]; nrm: number[]; uv: number[]; part: number[]; idx: number[] }
/** Appends a tapered ribbon along a curve. side(t, tangent) gives the width direction. */
function strip(o: Strip, segs: number, center: (t: number) => THREE.Vector3, width: (t: number) => number,
  side: (tan: THREE.Vector3) => THREE.Vector3, part: (t: number) => number): void {
  const base = o.pos.length / 3;
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const c = center(t);
    const tan = center(Math.min(1, t + 0.01)).sub(center(Math.max(0, t - 0.01))).normalize();
    const s = side(tan).normalize();
    const n = new THREE.Vector3().crossVectors(s, tan).normalize();
    const w = width(t) * 0.5;
    o.pos.push(c.x - s.x * w, c.y - s.y * w, c.z - s.z * w, c.x + s.x * w, c.y + s.y * w, c.z + s.z * w);
    o.nrm.push(n.x, n.y, n.z, n.x, n.y, n.z);
    o.uv.push(0, t, 1, t);
    o.part.push(part(t), part(t));
    if (i < segs) {
      const a = base + i * 2;
      o.idx.push(a, a + 1, a + 3, a, a + 3, a + 2);
    }
  }
}
function stripGeometry(o: Strip): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(o.pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(o.nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(o.uv, 2));
  g.setAttribute('aPart', new THREE.Float32BufferAttribute(o.part, 1));
  g.setIndex(o.idx);
  return g;
}
const newStrip = (): Strip => ({ pos: [], nrm: [], uv: [], part: [], idx: [] });
const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/** Short arena grass: a tuft of unit-height tapered blades fanning out and curling forward. */
function makeTuftGeometry(segs: number): THREE.BufferGeometry {
  const o = newStrip();
  const heights = [1, 0.78, 0.62];
  heights.forEach((hk, b) => {
    const yaw = b * (TAU / 3) + 0.4 * b, c = Math.cos(yaw), s = Math.sin(yaw);
    const rot = (x: number, y: number, z: number) => V(x * c + (z + 0.05) * s, y, -x * s + (z + 0.05) * c);
    strip(o, segs, (t) => rot(0, t * hk, (0.12 + 0.1 * b) * t * t * hk), (t) => 0.13 * (0.8 + 0.2 * hk) * Math.pow(1 - t, 0.75),
      () => V(c, 0, -s), () => 0);
  });
  return stripGeometry(o);
}

/** Susuki stem: thin stalk, drooping feathery plume (aPart = 1) and arching basal leaves. Unit height. */
function makePampasGeometry(high: boolean): THREE.BufferGeometry {
  const o = newStrip();
  const seg = 3;
  strip(o, seg, (t) => V(0.015 * t * t, 0.8 * t, 0), (t) => 0.02 * (1 - 0.4 * t), () => V(1, 0, 0), () => 0);
  const plume = (t: number) => V(0.015 + 0.14 * t * t, 0.73 + 0.27 * t - 0.06 * t * t * t, 0);
  const pw = (t: number) => 0.085 * Math.pow(Math.sin(Math.PI * Math.min(1, 0.1 + t * 0.9)), 0.7) + 0.004;
  const pp = (t: number) => 0.7 + 0.3 * Math.min(1, t * 3);
  strip(o, seg + 1, plume, pw, () => V(0, 0, 1), pp);
  if (high) strip(o, seg + 1, plume, (t) => pw(t) * 0.8, (tan) => new THREE.Vector3().crossVectors(tan, V(0, 0, 1)), pp);
  const leaves = high ? 3 : 1;
  for (let k = 0; k < leaves; k++) {
    const phi = 0.9 + k * 2.1;
    const d = V(Math.cos(phi), 0, Math.sin(phi));
    strip(o, seg, (t) => d.clone().multiplyScalar(0.34 * Math.pow(t, 1.5)).add(V(0, 0.6 * t - 0.2 * t * t * t, 0)),
      (t) => 0.045 * Math.pow(1 - t, 0.7), () => V(d.z, 0, -d.x), () => 0);
  }
  return stripGeometry(o);
}

// ---------------------------------------------------------------------------------------------
// Grass shader (MeshLambertMaterial + onBeforeCompile: keeps lighting, fog and shadow receive)
// ---------------------------------------------------------------------------------------------
const GRASS_VERT_PARS = /* glsl */ `
uniform float uTime; uniform vec2 uWind; uniform float uWindAmp; uniform float uGust;
uniform vec3 uBenders[8]; uniform int uBenderCount;
uniform vec4 uWave; uniform float uWaveAmp;
uniform vec3 uSunDir; uniform vec3 uFocus; uniform float uStiff;
attribute float aPart;
varying float vH; varying float vPart; varying vec3 vGWorld; varying vec2 vGUv;
${NOISE_GLSL}
`;

// Computes the bent world-space vertex (gPos) + a lighting normal. Runs before normal chunks.
const GRASS_VERT_MAIN = /* glsl */ `
  vec3 gRoot = instanceMatrix[3].xyz;
  float h = clamp(position.y, 0.0, 1.0);
  vec3 gPos = (instanceMatrix * vec4(position, 1.0)).xyz;
  vec2 wp = gRoot.xz;
  float rnd = wog_hash(wp * 1.37 + 11.0);

  // Layered wind: rolling gust patches travel downwind, a long wave ripples the field, blades flutter.
  float patchN = wog_noise(wp * 0.05 - uWind * uTime * 0.45);
  float wave = sin(dot(wp, uWind) * 0.25 - uTime * 1.7 + patchN * 2.5);
  float sway = uWindAmp * (0.25 + 1.1 * patchN * patchN) * (0.8 + 0.35 * wave) * (1.0 + uGust * 2.4);
  float flutter = sin(uTime * (2.6 + rnd * 2.4) + rnd * 6.2831 + h * 1.7) * (0.12 + 0.3 * uGust);
  vec2 bend = uWind * (sway + flutter * 0.4) + vec2(-uWind.y, uWind.x) * flutter * 0.35;

  // Expanding shock ring from gust() (issen / finisher).
  vec2 fromO = wp - uWave.xz; float dO = length(fromO) + 1e-3;
  bend += fromO / dO * exp(-pow((dO - uWave.w * 14.0) * 0.4, 2.0)) * uWaveAmp * 1.6;

  // Fighters push the grass aside.
  float heightK = 1.0;
  for (int i = 0; i < 8; i++) {
    if (i >= uBenderCount) break;
    vec2 d = wp - uBenders[i].xz; float dist = length(d) + 1e-3;
    bend += d / dist * (1.0 - smoothstep(0.2, 1.05, dist)) * 2.4;
  }
#ifdef TALL
  // Keep the camera -> player sight line clear of tall pampas (camera may sit inside the field).
  vec2 cam = cameraPosition.xz; vec2 seg = uFocus.xz - cam;
  float st = clamp(dot(wp - cam, seg) / max(dot(seg, seg), 1e-3), 0.0, 1.0);
  vec2 away = wp - (cam + seg * st); float ad = length(away) + 1e-3;
  float clearK = 1.0 - smoothstep(0.9, 2.6, ad);
  bend += away / ad * clearK * 2.5;
  heightK = 1.0 - 0.55 * clearK;
#endif

  // Bend = rotate each vertex about the root; angle grows toward the tip (stiff base, no stretching).
  float bendLen = length(bend);
  float ang = min(bendLen * uStiff, 1.35);
  vec2 bdir = bend / max(bendLen, 1e-4);
  float a = ang * (0.3 * h + 0.7 * h * h);
  vec3 rel = gPos - gRoot; rel.y *= heightK;
  rel.xz += bdir * rel.y * sin(a);
  rel.y *= cos(a);
  gPos = gRoot + rel;

  // Thin blades transmit light: face every blade toward the sun, bias up so the field shades evenly.
  vec3 bn = normalize(mat3(instanceMatrix) * normal);
  bn *= dot(bn, uSunDir) < 0.0 ? -1.0 : 1.0;
  vec3 objectNormal = normalize(mix(bn, vec3(0.0, 1.0, 0.0), 0.35 + 0.3 * aPart) + vec3(bdir.x, 0.0, bdir.y) * ang * 0.4);
  vH = h; vPart = aPart; vGWorld = gPos; vGUv = uv;
`;

const GRASS_FRAG_PARS = /* glsl */ `
uniform vec3 uRoot; uniform vec3 uMid; uniform vec3 uTip; uniform vec3 uPlume;
uniform vec3 uSunDir; uniform vec3 uSunCol; uniform float uSss;
varying float vH; varying float vPart; varying vec3 vGWorld; varying vec2 vGUv;
`;

type Uniforms = Record<string, THREE.IUniform>;

function makeGrassMaterial(kind: 'short' | 'tall', shared: Uniforms, own: Uniforms): THREE.MeshLambertMaterial {
  const mat = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide });
  if (kind === 'tall') mat.defines = { TALL: '' };
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, shared, own);
    shader.vertexShader = GRASS_VERT_PARS + shader.vertexShader
      .replace('#include <beginnormal_vertex>', GRASS_VERT_MAIN)
      .replace('#include <defaultnormal_vertex>', 'vec3 transformedNormal = normalMatrix * objectNormal;')
      .replace('#include <begin_vertex>', 'vec3 transformed = gPos;')
      .replace('#include <project_vertex>', 'vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);\ngl_Position = projectionMatrix * mvPosition;')
      .replace('#include <worldpos_vertex>', 'vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);');
    shader.fragmentShader = GRASS_FRAG_PARS + shader.fragmentShader
      .replace('#include <color_fragment>', /* glsl */ `
        vec3 gCol = mix(uRoot, uMid, smoothstep(0.0, 0.5, vH));
        gCol = mix(gCol, uTip, smoothstep(0.45, 1.0, vH)) * vColor.rgb;
        float across = abs(vGUv.x - 0.5) * 2.0;
        diffuseColor.rgb = mix(gCol, uPlume * (0.8 + 0.25 * vColor.rgb) * mix(0.85, 1.1, across), vPart);
        if (vPart > 0.5) {
          // Feathery plume: slanted barbs cut into the ribbon edge up close (faded out at range to avoid sparkle).
          float fk = 1.0 - smoothstep(7.0, 16.0, length(vGWorld - cameraPosition));
          float barb = fract(vGUv.y * 22.0 - across * 1.7);
          if (across > 0.3 && barb > mix(1.01, 0.5, fk)) discard;
        }`)
      // Blades are lit from their sun-facing side regardless of which face we see.
      .replace('#include <normal_fragment_begin>', 'float faceDirection = gl_FrontFacing ? 1.0 : -1.0;\nvec3 normal = normalize(vNormal);')
      .replace('#include <lights_fragment_end>', /* glsl */ `#include <lights_fragment_end>
        float back = pow(clamp(dot(normalize(vGWorld - cameraPosition), uSunDir), 0.0, 1.0), 5.0);
        reflectedLight.directDiffuse += uSunCol * diffuseColor.rgb * back * (0.55 * vH + 1.1 * vPart) * uSss;`);
  };
  mat.customProgramCacheKey = () => 'wog-grass-' + kind;
  return mat;
}

// ---------------------------------------------------------------------------------------------
// Main factory
// ---------------------------------------------------------------------------------------------
export function createEnvironment(scene: THREE.Scene, renderer: THREE.WebGLRenderer, opts: EnvironmentOptions): Environment {
  const R = opts.arenaRadius;
  const high = opts.quality === 'high';
  const rng = mulberry32(0x7a51c3);
  const root = new THREE.Group();
  root.name = 'Environment';
  scene.add(root);
  const owned: { dispose(): void }[] = [];
  const own = <T extends { dispose(): void }>(o: T): T => { owned.push(o); return o; };
  const col = (hex: number) => new THREE.Color(hex);

  // --- renderer / scene setup ---------------------------------------------------------------
  renderer.shadowMap.enabled = true;
  // PCFSoftShadowMap was removed in three r18x (it now warns + falls back); PCF + radius gives soft edges.
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const fog = new THREE.Fog(C.horizon, 45, 340);
  scene.fog = fog;
  const background = col(C.horizon);
  scene.background = background;

  const sunDir = new THREE.Vector3(Math.sin(SUN_AZ) * Math.cos(SUN_ELEV), Math.sin(SUN_ELEV), Math.cos(SUN_AZ) * Math.cos(SUN_ELEV));
  const wind = new THREE.Vector2(Math.cos(WIND_BASE), Math.sin(WIND_BASE));

  // Uniforms shared by grass + foliage (same objects → one update per frame).
  const U: Uniforms = {
    uTime: { value: 0 }, uWind: { value: wind.clone() }, uWindAmp: { value: 0.6 }, uGust: { value: 0 },
    uBenders: { value: Array.from({ length: 8 }, () => new THREE.Vector3(1e4, 0, 1e4)) }, uBenderCount: { value: 0 },
    uWave: { value: new THREE.Vector4(0, 0, 0, 100) }, uWaveAmp: { value: 0 },
    uSunDir: { value: sunDir.clone() }, uSunCol: { value: col(C.sunLight).multiplyScalar(SUN_INTENSITY) },
    uFocus: { value: new THREE.Vector3() },
  };

  // --- layout: path through the torii, obstacles for grass placement -------------------------
  const pathAxis = new THREE.Vector2(Math.sin(TORII_AZ), Math.cos(TORII_AZ));
  const pathLen = R + 0.8;                                         // gate distance from centre
  const pathCentre = (u: number) => Math.sin(u * Math.PI / pathLen) * 1.2;
  const toPath = (x: number, z: number) => ({ u: x * pathAxis.x + z * pathAxis.y, v: -x * pathAxis.y + z * pathAxis.x });
  const fromPath = (u: number, v: number) => new THREE.Vector3(u * pathAxis.x - v * pathAxis.y, 0, u * pathAxis.y + v * pathAxis.x);
  function pathMask(x: number, z: number): number {                // mirrors pathMask() in the ground shader
    const { u, v } = toPath(x, z);
    const outer = u > pathLen;
    const hw = outer ? 1.05 : 0.75;
    const along = smoothstep(-2, 2, u) * (1 - smoothstep(pathLen + 40, pathLen + 60, u));
    const m = (1 - smoothstep(hw * 0.6, hw * 1.4, Math.abs(v - pathCentre(u)))) * along;
    return Math.max(m * (outer ? 1 : 0.45), (1 - smoothstep(2.0, 3.6, Math.hypot(x, z))) * 0.4);
  }
  const blockers: { x: number; z: number; r: number }[] = [];
  const blocked = (x: number, z: number, pad = 0) => blockers.some((b) => (x - b.x) ** 2 + (z - b.z) ** 2 < (b.r + pad) ** 2);
  const terrainH = (x: number, z: number): number => {
    const k = smoothstep(R + 12, R + 60, Math.hypot(x, z));
    if (k <= 0) return 0;
    return k * (1.4 + Math.sin(x * 0.045 + 1.3) * Math.cos(z * 0.038 - 0.7) * 1.6 + Math.sin(x * 0.021 - z * 0.027 + 2.1) * 2.0);
  };

  // --- sky dome --------------------------------------------------------------------------------
  const skyMat = own(new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      uZenith: { value: col(C.zenith) }, uUpper: { value: col(C.skyUpper) }, uHorizon: { value: col(C.horizon) },
      uGlow: { value: col(C.sunGlow) }, uSunCol: { value: col(C.sunDisk) }, uSunDir: { value: sunDir },
      uCloudDark: { value: col(C.cloudDark) }, uCloudLit: { value: col(C.cloudLit) }, uTime: U.uTime,
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * mat4(mat3(modelViewMatrix)) * vec4(position, 1.0);
        gl_Position = p.xyww;                      // pinned to the far plane, follows camera rotation only
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uZenith, uUpper, uHorizon, uGlow, uSunCol, uSunDir, uCloudDark, uCloudLit;
      uniform float uTime;
      varying vec3 vDir;
      ${NOISE_GLSL}
      void main() {
        vec3 d = normalize(vDir);
        float h = max(d.y, 0.0);
        vec3 col = mix(uHorizon, uUpper, smoothstep(0.0, 0.42, pow(h, 0.75)));
        col = mix(col, uZenith, smoothstep(0.3, 1.0, h));
        float mu = dot(d, uSunDir);
        float az = max(dot(normalize(d.xz + 1e-5), normalize(uSunDir.xz)), 0.0);
        col = mix(col, uGlow, pow(az, 4.0) * exp(-h * 5.0) * 0.8);            // golden band hugging the horizon
        // Wispy stratus streaks, lit gold toward the sun and dusky purple away from it.
        vec2 cuv = d.xz / (d.y + 0.12);
        float c = wog_fbm(cuv * vec2(0.7, 2.6) + vec2(uTime * 0.004, 0.0));
        float cm = smoothstep(0.52, 0.78, c) * smoothstep(0.03, 0.12, d.y) * (1.0 - smoothstep(0.28, 0.55, d.y));
        vec3 cloud = mix(uCloudDark, uCloudLit, pow(max(mu, 0.0), 3.0) * 0.9 + 0.1 * az);
        col = mix(col, cloud, cm * 0.65);
        float s = max(mu, 0.0);
        col += uSunCol * (pow(s, 10.0) * 0.35 + pow(s, 80.0) * 0.6 + smoothstep(0.9993, 0.99965, mu) * 3.0);
        col = mix(col, uHorizon, smoothstep(0.0, -0.03, d.y));                // below horizon = fog colour
        col = col / (1.0 + max(col - 1.0, 0.0));                             // soft clip only above 1
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
        gl_FragColor.rgb += (wog_hash(gl_FragCoord.xy) - 0.5) / 255.0;        // dither away banding
      }`,
  }));
  const sky = new THREE.Mesh(own(new THREE.SphereGeometry(100, 48, 24)), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = 1e6;                          // drawn after opaque geometry: early-z skips covered pixels
  root.add(sky);

  // --- lights ----------------------------------------------------------------------------------
  const sun = new THREE.DirectionalLight(C.sunLight, SUN_INTENSITY);
  sun.castShadow = true;
  const shadowSize = high ? 2048 : 1024;
  sun.shadow.mapSize.set(shadowSize, shadowSize);
  const sc = sun.shadow.camera;
  sc.left = -SHADOW_HALF; sc.right = SHADOW_HALF; sc.top = SHADOW_HALF; sc.bottom = -SHADOW_HALF;
  sc.near = 1; sc.far = 160;
  sc.updateProjectionMatrix();
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.035;
  sun.shadow.radius = high ? 3 : 2;
  root.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(C.hemiSky, C.hemiGround, 1.05);
  const ambient = new THREE.AmbientLight(C.ambient, 0.35);
  root.add(hemi, ambient);

  // --- props: torii, lanterns, maple trees, rocks ----------------------------------------------
  const props = new Baker(rng), foliage = new Baker(rng), rocks = new Baker(rng), glow = new Baker(rng);

  // Torii: gate stands on the arena edge, the path runs through it.
  {
    const p = fromPath(pathLen, 0);
    const M = trs(p.x, 0, p.z, TORII_AZ);
    const weather = (q: THREE.Vector3) => 0.75 + 0.25 * smoothstep(0, 1.6, q.y) - 0.1 * vnoise(q.x * 3 + q.y * 4, q.z * 3);
    const put = (g: THREE.BufferGeometry, x: number, y: number, z: number, c: number, s = weather) =>
      props.add(g, M.clone().multiply(trs(x, y, z)), c, 0.05, s);
    for (const sx of [-1.9, 1.9]) {
      put(new THREE.CylinderGeometry(0.21, 0.25, 4.7, 14), sx, 2.35, 0, C.toriiRed);
      put(new THREE.CylinderGeometry(0.29, 0.29, 0.42, 14), sx, 0.21, 0, C.toriiBlack, () => 1);
      blockers.push({ x: p.x + Math.cos(TORII_AZ) * sx, z: p.z - Math.sin(TORII_AZ) * sx, r: 0.55 });
    }
    put(new THREE.BoxGeometry(5.0, 0.26, 0.2), 0, 3.65, 0, C.toriiRed);         // nuki
    put(new THREE.BoxGeometry(0.24, 0.62, 0.18), 0, 4.08, 0, C.toriiRed);       // gakuzuka
    put(new THREE.BoxGeometry(5.5, 0.3, 0.36), 0, 4.52, 0, C.toriiRed);         // shimaki
    const kasagi = new THREE.BoxGeometry(6.6, 0.3, 0.5, 24, 1, 1);             // upswept top beam
    const ka = kasagi.getAttribute('position');
    for (let i = 0; i < ka.count; i++) {
      const x = ka.getX(i) / 3.3;
      ka.setY(i, ka.getY(i) + 0.32 * x * x * x * x + (ka.getY(i) > 0 ? 0.04 * x * x : 0));
    }
    kasagi.computeVertexNormals();
    put(kasagi, 0, 4.82, 0, C.toriiBlack, () => 1);
  }

  // Stone lanterns (tōrō); the fire boxes glow via an unlit core.
  const lantern = (x: number, z: number, ry: number) => {
    const M = trs(x, 0, z, ry);
    const put = (g: THREE.BufferGeometry, y: number, c: number = C.stone) =>
      props.add(g, M.clone().multiply(trs(0, y, 0)), c, 0.12, (q) => 0.8 + 0.2 * smoothstep(0, 1.8, q.y));
    put(new THREE.CylinderGeometry(0.42, 0.5, 0.2, 6), 0.1);
    put(new THREE.CylinderGeometry(0.13, 0.16, 0.8, 8), 0.6);
    put(new THREE.CylinderGeometry(0.36, 0.26, 0.16, 6), 1.08);
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * TAU;
      props.add(new THREE.BoxGeometry(0.06, 0.34, 0.06), M.clone().multiply(trs(Math.cos(a) * 0.22, 1.33, Math.sin(a) * 0.22)), C.stone, 0.1);
    }
    put(new THREE.CylinderGeometry(0.05, 0.52, 0.28, 6), 1.64);
    put(new THREE.SphereGeometry(0.1, 8, 6), 1.84);
    glow.add(new THREE.CylinderGeometry(0.19, 0.19, 0.3, 6), M.clone().multiply(trs(0, 1.33, 0)), C.lanternGlow, 0);
    blockers.push({ x, z, r: 0.9 });
  };
  for (const v of [-2.5, 2.5]) { const p = fromPath(pathLen + 1.8, v); lantern(p.x, p.z, TORII_AZ); }
  for (const a of [TORII_AZ + 2.1, TORII_AZ - 2.3]) lantern(Math.sin(a) * (R + 1.8), Math.cos(a) * (R + 1.8), a);

  // Crimson maple trees just outside the arena (trunk → props, canopy → swaying foliage mesh).
  const trees: THREE.Vector4[] = [];
  const treeSpots: [number, number, number][] = [[-0.5, 6.0, 1.25], [0.95, 7.0, 1.15], [2.0, 5.5, 1.3], [3.1, 7.5, 1.2], [-2.1, 6.5, 1.1]];
  for (const [da, dr, s] of treeSpots) {
    const a = TORII_AZ + da, r = R + dr;
    const x = Math.sin(a) * r, z = Math.cos(a) * r;
    const lean = new THREE.Vector3(rng() - 0.5, 0, rng() - 0.5).multiplyScalar(0.9 * s);
    const p0 = V(x, -0.2, z);
    const p1 = p0.clone().add(V(lean.x * 0.4, 1.6 * s, lean.z * 0.4));
    const p2 = p1.clone().add(V(lean.x * 0.7 + (rng() - 0.5) * 0.4, 1.4 * s, lean.z * 0.7 + (rng() - 0.5) * 0.4));
    cylBetween(props, p0, p1, 0.36 * s, 0.26 * s, C.trunk);
    cylBetween(props, p1, p2, 0.26 * s, 0.17 * s, C.trunk);
    const crown = p2.clone().add(V(0, 0.9 * s, 0));
    const blobs = high ? 22 : 14;
    for (let i = 0; i < blobs; i++) {
      const ang = rng() * TAU, rad = Math.sqrt(rng()) * 3.1 * s;
      const c = crown.clone().add(V(Math.cos(ang) * rad, (rng() - 0.3) * 1.3 * s - rad * rad * 0.09, Math.sin(ang) * rad));
      if (i < 5) cylBetween(props, p2, c.clone().lerp(p2, 0.25), 0.11 * s, 0.05 * s, C.trunk, 5);   // branches
      const br = (0.75 + rng() * 0.6) * s;
      const g = wobble(new THREE.IcosahedronGeometry(1, 1), 0.28, i * 7 + Math.round(x));
      foliage.add(g, new THREE.Matrix4().compose(c, _q.setFromAxisAngle(UP, rng() * TAU), _s.set(br, br * 0.72, br)),
        C.maple[Math.floor(rng() * C.maple.length)], 0.18);
    }
    trees.push(new THREE.Vector4(x, z, 4.2 * s, 0));
    blockers.push({ x, z, r: 1.1 });
  }

  // Rocks (flat-shaded, mossy tops).
  for (let i = 0; i < 9; i++) {
    const a = rng() * TAU, r = R + 2 + rng() * 10, s = 0.35 + rng() * 0.9;
    const x = Math.sin(a) * r, z = Math.cos(a) * r;
    if (blocked(x, z, s + 1) || pathMask(x, z) > 0.1) continue;
    const g = wobble(new THREE.DodecahedronGeometry(1, 1), 0.35, i * 13);
    rocks.add(g, trs(x, terrainH(x, z) + s * 0.15, z, rng() * TAU, s * (1 + rng() * 0.6), s * 0.65, s), 0x7d786e, 0.15);
    blockers.push({ x, z, r: s * 1.2 });
  }

  const propMat = own(new THREE.MeshLambertMaterial({ vertexColors: true }));
  const flatMat = own(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
  const leafMatC = own(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, emissive: 0x1a0402 }));
  leafMatC.onBeforeCompile = (shader) => {        // gentle canopy sway + backlit glow
    Object.assign(shader.uniforms, U);
    shader.vertexShader = 'uniform float uTime; uniform vec2 uWind; uniform float uWindAmp; uniform float uGust;\nvarying vec3 vFW;\n' +
      shader.vertexShader.replace('#include <begin_vertex>', /* glsl */ `#include <begin_vertex>
        float fk = clamp((transformed.y - 2.5) / 4.0, 0.0, 1.0);
        float fs = sin(uTime * 1.3 + transformed.x * 0.35 + transformed.z * 0.27) + 0.5 * sin(uTime * 2.7 + transformed.y * 1.3);
        transformed.xz += uWind * (fs * 0.07 + 0.06) * fk * (uWindAmp + uGust * 2.0);
        vFW = transformed;`);
    shader.fragmentShader = 'uniform vec3 uSunDir; uniform vec3 uSunCol;\nvarying vec3 vFW;\n' +
      shader.fragmentShader.replace('#include <lights_fragment_end>', /* glsl */ `#include <lights_fragment_end>
        reflectedLight.directDiffuse += uSunCol * diffuseColor.rgb * pow(clamp(dot(normalize(vFW - cameraPosition), uSunDir), 0.0, 1.0), 4.0) * 0.45;`);
  };
  leafMatC.customProgramCacheKey = () => 'wog-foliage';
  const addMesh = (geo: THREE.BufferGeometry, mat: THREE.Material, cast: boolean, receive = true) => {
    const m = new THREE.Mesh(own(geo), mat);
    m.castShadow = cast; m.receiveShadow = receive;
    root.add(m);
    return m;
  };
  addMesh(props.build(), propMat, true);
  addMesh(rocks.build(), flatMat, true);
  addMesh(foliage.build(), leafMatC, true);
  addMesh(glow.build(), own(new THREE.MeshBasicMaterial({ vertexColors: true })), false, false);

  // --- ground ----------------------------------------------------------------------------------
  const groundGeo = new THREE.PlaneGeometry(640, 640, 160, 160);   // owned via addMesh below
  groundGeo.rotateX(-Math.PI / 2);
  {
    const pa = groundGeo.getAttribute('position');
    for (let i = 0; i < pa.count; i++) pa.setY(i, terrainH(pa.getX(i), pa.getZ(i)));
    groundGeo.computeVertexNormals();
  }
  while (trees.length < 5) trees.push(new THREE.Vector4(1e4, 1e4, 0, 0));
  const groundMat = own(new THREE.MeshLambertMaterial());
  groundMat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, {
      uGA: { value: col(C.groundA) }, uGB: { value: col(C.groundB) }, uGDark: { value: col(C.groundDark) },
      uDirt: { value: col(C.dirt) }, uField: { value: col(C.field) }, uLitter: { value: col(C.litter) },
      uPathAxis: { value: pathAxis }, uPathLen: { value: pathLen }, uArenaR: { value: R }, uTrees: { value: trees },
    });
    shader.vertexShader = 'varying vec3 vGWorld;\n' + shader.vertexShader.replace('#include <begin_vertex>',
      '#include <begin_vertex>\nvGWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = /* glsl */ `
      uniform vec3 uGA, uGB, uGDark, uDirt, uField, uLitter;
      uniform vec2 uPathAxis; uniform float uPathLen; uniform float uArenaR; uniform vec4 uTrees[5];
      varying vec3 vGWorld;
      ${NOISE_GLSL}
      float pathMask(vec2 p, float n) {
        float u = dot(p, uPathAxis), v = dot(p, vec2(-uPathAxis.y, uPathAxis.x));
        float outer = step(uPathLen, u);
        float hw = mix(0.75, 1.05, outer) + (n - 0.5) * 0.6;
        float along = smoothstep(-2.0, 2.0, u) * (1.0 - smoothstep(uPathLen + 40.0, uPathLen + 60.0, u));
        float m = (1.0 - smoothstep(hw * 0.6, hw * 1.4, abs(v - sin(u * 3.14159265 / uPathLen) * 1.2))) * along;
        return max(m * mix(0.45, 1.0, outer), (1.0 - smoothstep(2.0 + n, 3.6 + n, length(p))) * 0.4);
      }
      ` + shader.fragmentShader.replace('#include <color_fragment>', /* glsl */ `
        vec2 p = vGWorld.xz;
        float n1 = wog_fbm(p * 0.06), n2 = wog_fbm(p * 0.33 + 7.0), n3 = wog_noise(p * 1.9);
        vec3 gc = mix(uGA, uGB, smoothstep(0.3, 0.7, n1));
        gc = mix(gc, uGDark, smoothstep(0.5, 0.78, n2) * 0.65) * (0.82 + 0.3 * n3);
        float r = length(p);
        gc = mix(gc, uField * (0.7 + 0.25 * wog_noise(p * vec2(0.9, 0.25)) + 0.35 * n1), smoothstep(uArenaR + 1.0, uArenaR + 12.0, r) * 0.8);
        gc = mix(gc, uDirt * (0.82 + 0.3 * n3), pathMask(p, n2) * 0.85);
        float litter = 0.0;
        for (int i = 0; i < 5; i++) litter = max(litter, 1.0 - smoothstep(uTrees[i].z * 0.35, uTrees[i].z, length(p - uTrees[i].xy)));
        litter *= smoothstep(0.35, 0.7, wog_noise(p * 2.4 + 3.0));
        gc = mix(gc, uLitter * (0.75 + 0.45 * n3), litter * 0.85);
        diffuseColor.rgb = gc;`);
  };
  groundMat.customProgramCacheKey = () => 'wog-ground';
  const ground = addMesh(groundGeo, groundMat, false);
  ground.name = 'Ground';

  // --- grass fields ----------------------------------------------------------------------------
  const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler(), tmpC = new THREE.Color();
  const tints = [[1, 1, 1], [0.92, 1.06, 0.84], [1.1, 0.96, 0.8], [1.05, 1.02, 0.95], [0.85, 0.95, 0.8]];
  const tint = (amount: number) => {
    const t = tints[Math.floor(rng() * tints.length)], j = 1 + (rng() - 0.5) * 0.18;
    return tmpC.setRGB(1 + (t[0] - 1) * amount, 1 + (t[1] - 1) * amount, 1 + (t[2] - 1) * amount).multiplyScalar(j);
  };

  // Short arena turf (0.25–0.55 m inside the arena so feet stay readable).
  const shortCount = high ? 14000 : 3000;      // tufts of 3 blades
  const shortMesh = new THREE.InstancedMesh(own(makeTuftGeometry(3)), own(makeGrassMaterial('short', U, {
    uRoot: { value: col(C.grassRoot) }, uMid: { value: col(C.grassMid) }, uTip: { value: col(C.grassTip) },
    uPlume: { value: col(C.plume) }, uStiff: { value: 0.5 }, uSss: { value: 0.55 },
  })), shortCount);
  let placed = 0;
  for (let tries = 0; placed < shortCount && tries < shortCount * 6; tries++) {
    const r = Math.sqrt(rng()) * (R + 4), a = rng() * TAU;
    const x = Math.sin(a) * r, z = Math.cos(a) * r;
    if (rng() < smoothstep(R + 0.5, R + 4, r) * 0.85) continue;          // tall pampas takes over outside
    const path = pathMask(x, z);
    if (rng() < path * 0.6 || blocked(x, z)) continue;
    let H = 0.25 + 0.3 * (0.35 * rng() + 0.65 * vnoise(x * 0.18, z * 0.18));
    H = Math.max(0.2, H * (1 - path * 0.35)) * (1 + smoothstep(R, R + 4, r) * 0.6);
    tmpE.set((rng() - 0.5) * 0.45, rng() * TAU, (rng() - 0.5) * 0.45, 'YXZ');
    tmpM.compose(_v.set(x, 0, z), tmpQ.setFromEuler(tmpE), _s.set(H * (0.8 + rng() * 0.5), H, H));
    shortMesh.setMatrixAt(placed, tmpM);
    shortMesh.setColorAt(placed, tint(1));
    placed++;
  }
  shortMesh.count = placed;

  // Tall susuki pampas in clumps, densest near the arena edge, thinning into the distance.
  const tallCount = high ? 12000 : 3000;
  const tallMesh = new THREE.InstancedMesh(own(makePampasGeometry(high)), own(makeGrassMaterial('tall', U, {
    uRoot: { value: col(C.pampasRoot) }, uMid: { value: col(C.pampasMid) }, uTip: { value: col(C.pampasTip) },
    uPlume: { value: col(C.plume) }, uStiff: { value: 0.38 }, uSss: { value: 0.45 },
  })), tallCount);
  placed = 0;
  const outward = new THREE.Vector3(), axis = new THREE.Vector3(), qYaw = new THREE.Quaternion();
  for (let tries = 0; placed < tallCount && tries < tallCount * 4; tries++) {
    const far = rng() < 0.22;                       // a sparse scatter keeps the distant field textured
    const r = far ? R + 12 + rng() * 38 : R + 2.2 + -Math.log(1 - rng() * 0.96) * 7, a = rng() * TAU;
    if (r > R + 50) continue;
    const cx = Math.sin(a) * r, cz = Math.cos(a) * r;
    const { u, v } = toPath(cx, cz);
    if (u > pathLen - 1 && Math.abs(v - pathCentre(u)) < 2.0) continue;   // keep the path through the gate open
    if (blocked(cx, cz, 0.4)) continue;
    const stems = far ? 3 + Math.floor(rng() * 5) : 6 + Math.floor(rng() * 9);
    const clumpH = 1.15 + rng() * 0.5 + smoothstep(R + 3, R + 14, r) * 0.2;
    for (let s = 0; s < stems && placed < tallCount; s++) {
      const oa = rng() * TAU, orad = Math.sqrt(rng()) * 0.75;
      const x = cx + Math.cos(oa) * orad, z = cz + Math.sin(oa) * orad;
      const H = Math.min(1.9, clumpH * (0.85 + rng() * 0.22)) * (0.72 + 0.28 * smoothstep(R + 2, R + 5, r));
      outward.set(Math.cos(oa), 0, Math.sin(oa));
      axis.set(outward.z, 0, -outward.x);
      qYaw.setFromAxisAngle(UP, rng() * TAU);
      tmpQ.setFromAxisAngle(axis, 0.05 + orad * 0.3 + rng() * 0.08).multiply(qYaw);
      tmpM.compose(_v.set(x, terrainH(x, z) - 0.12, z), tmpQ, _s.set(H, H, H));
      tallMesh.setMatrixAt(placed, tmpM);
      tallMesh.setColorAt(placed, tint(0.8));
      placed++;
    }
  }
  tallMesh.count = placed;
  for (const g of [shortMesh, tallMesh]) {
    g.frustumCulled = false;        // blades cover the whole field; wind displaces them anyway
    g.receiveShadow = true;         // (grass does not cast: too costly for little gain)
    root.add(g);
  }

  // --- distant mountains: layered ridges melting into the fog ----------------------------------
  {
    const pos: number[] = [], cols: number[] = [];
    const hz = col(C.horizon), warm = col(0xd98a7a), cA = new THREE.Color(), cB = new THREE.Color();
    const mrng = mulberry32(0x3a11d9);           // own stream: layout changes elsewhere don't reshape the range
    const layers = [
      { r: 128, depth: 16, base: 4, amp: 15, color: 0x4a4272 },
      { r: 166, depth: 22, base: 9, amp: 26, color: 0x655d92 },
      { r: 212, depth: 28, base: 14, amp: 38, color: 0x857cab },
    ];
    const N = 200;
    for (const L of layers) {
      const ph = [mrng() * TAU, mrng() * TAU, mrng() * TAU, mrng() * TAU];
      const height = (t: number) => {
        const ridge = (f: number, p: number) => Math.pow(1 - Math.abs(Math.sin(t * f + p)), 2.2);
        return L.base + L.amp * (0.5 * ridge(3, ph[0]) + 0.3 * ridge(7, ph[1]) + 0.14 * ridge(17, ph[2]) + 0.06 * ridge(41, ph[3]));
      };
      for (let i = 0; i < N; i++) {
        const t0 = (i / N) * TAU, t1 = ((i + 1) / N) * TAU;
        const pt = (t: number, rr: number, y: number) => [Math.sin(t) * rr, y, Math.cos(t) * rr];
        const a = pt(t0, L.r, -14), b = pt(t1, L.r, -14), c = pt(t0, L.r + L.depth, height(t0)), d = pt(t1, L.r + L.depth, height(t1));
        pos.push(...a, ...b, ...d, ...a, ...d, ...c);
        const lit = 0.5 - 0.5 * Math.cos(t0 - SUN_AZ);      // side facing away from the sun catches pink light
        cA.set(L.color).lerp(hz, 0.55);
        cB.set(L.color).lerp(warm, lit * 0.3);
        for (const cc of [cA, cA, cB, cA, cB, cB]) cols.push(cc.r, cc.g, cc.b);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    addMesh(g, own(new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })), false, false);
  }

  // --- falling maple leaves (CPU-driven instanced quads) ---------------------------------------
  const leafTex = own(makeLeafTexture());
  const leafCount = high ? 400 : 120;
  const leafMat = own(new THREE.MeshLambertMaterial({ map: leafTex, alphaTest: 0.5, side: THREE.DoubleSide }));
  leafMat.onBeforeCompile = (shader) => {        // leaves glow when backlit by the low sun
    Object.assign(shader.uniforms, U);
    shader.vertexShader = 'varying vec3 vLW;\n' + shader.vertexShader.replace('#include <worldpos_vertex>',
      '#include <worldpos_vertex>\nvLW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = 'uniform vec3 uSunDir; uniform vec3 uSunCol;\nvarying vec3 vLW;\n' + shader.fragmentShader.replace(
      '#include <lights_fragment_end>', `#include <lights_fragment_end>
      float lb = pow(clamp(dot(normalize(vLW - cameraPosition), uSunDir), 0.0, 1.0), 3.0);
      totalEmissiveRadiance += diffuseColor.rgb * (0.3 + uSunCol * lb * 0.35);`);
  };
  leafMat.customProgramCacheKey = () => 'wog-leaves';
  const leafMesh = new THREE.InstancedMesh(own(new THREE.PlaneGeometry(1, 1)), leafMat, leafCount);
  leafMesh.frustumCulled = false;
  const LEAF_R = 22;
  const lp = new Float32Array(leafCount * 3), lr = new Float32Array(leafCount * 3), ls = new Float32Array(leafCount * 3);
  const lk = new Float32Array(leafCount * 3);          // size, fall speed, phase
  const leafColors = [0xc0281c, 0xd8431f, 0xe8742a, 0xf0a531, 0x9e1b1b, 0xd35a22];
  const spawnLeaf = (i: number, f: THREE.Vector3, initial: boolean) => {
    const a = rng() * TAU, r = Math.sqrt(rng()) * LEAF_R;
    lp[i * 3] = f.x + Math.cos(a) * r - wind.x * 8;
    lp[i * 3 + 1] = initial ? rng() * 11 : 5 + rng() * 7;
    lp[i * 3 + 2] = f.z + Math.sin(a) * r - wind.y * 8;
    for (let k = 0; k < 3; k++) { lr[i * 3 + k] = rng() * TAU; ls[i * 3 + k] = (rng() - 0.5) * 6; }
    lk[i * 3] = 0.14 + rng() * 0.08; lk[i * 3 + 1] = 0.45 + rng() * 0.45; lk[i * 3 + 2] = rng() * TAU;
  };
  for (let i = 0; i < leafCount; i++) {
    spawnLeaf(i, V(0, 0, 0), true);
    leafMesh.setColorAt(i, tmpC.set(leafColors[i % leafColors.length]));
  }
  root.add(leafMesh);

  // --- sunlit motes / pollen (GPU-animated additive points wrapped around the focus) -----------
  const moteCount = high ? 240 : 70;
  const moteGeo = own(new THREE.BufferGeometry());
  {
    const seeds = new Float32Array(moteCount * 4);
    for (let i = 0; i < seeds.length; i++) seeds[i] = rng();
    moteGeo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(moteCount * 3), 3));
    moteGeo.setAttribute('aSeed', new THREE.Float32BufferAttribute(seeds, 4));
  }
  const moteMat = own(new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: U.uTime, uWind: U.uWind, uGust: U.uGust, uFocus: U.uFocus, uPx: { value: 800 }, uColor: { value: col(C.mote) } },
    vertexShader: /* glsl */ `
      uniform float uTime, uGust, uPx; uniform vec2 uWind; uniform vec3 uFocus;
      attribute vec4 aSeed; varying float vA;
      void main() {
        vec3 box = vec3(34.0, 3.0, 34.0);
        vec3 p = aSeed.xyz * box;
        p.xz += uWind * uTime * (0.4 + aSeed.w * 0.5) * (1.0 + uGust);
        p += vec3(sin(uTime * 0.7 + aSeed.w * 40.0), 0.5 * sin(uTime * 0.9 + aSeed.w * 17.0), cos(uTime * 0.6 + aSeed.w * 23.0)) * 0.5;
        vec3 lo = uFocus - box * 0.5;
        vec2 rel = mod(p.xz - lo.xz, box.xz);
        vec3 wp = vec3(lo.x + rel.x, 0.25 + mod(p.y, box.y), lo.z + rel.y);
        vec2 e = abs(rel / box.xz * 2.0 - 1.0);
        vec4 mv = modelViewMatrix * vec4(wp, 1.0);
        vA = (1.0 - smoothstep(0.7, 1.0, max(e.x, e.y))) * (0.45 + 0.55 * sin(uTime * 1.7 + aSeed.w * 60.0)) * (1.0 - smoothstep(8.0, 20.0, -mv.z));
        gl_PointSize = min(16.0, (0.025 + 0.03 * aSeed.w) * uPx * projectionMatrix[1][1] * 0.5 / max(-mv.z, 0.1));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor; varying float vA;
      void main() {
        float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5)) * max(vA, 0.0);
        gl_FragColor = vec4(uColor * a * 0.42, 1.0);
        #include <colorspace_fragment>
      }`,
  }));
  const motes = new THREE.Points(moteGeo, moteMat);
  motes.frustumCulled = false;
  motes.renderOrder = 10;
  root.add(motes);

  // --- per-frame state -------------------------------------------------------------------------
  let gustLevel = 0, gustSmooth = 0, waveAge = 100, waveAmp = 0;
  const lastFocus = new THREE.Vector3();
  const lx = new THREE.Vector3(), ly = new THREE.Vector3(), snapped = new THREE.Vector3();
  lx.crossVectors(UP, sunDir).normalize();
  ly.crossVectors(sunDir, lx).normalize();
  const bufSize = new THREE.Vector2();
  const lpos = new THREE.Vector3(), lscale = new THREE.Vector3();

  function update(time: number, dt: number, focus: THREE.Vector3, benders: THREE.Vector3[]): void {
    dt = Math.min(Math.max(dt, 0), 0.1);
    lastFocus.copy(focus);

    // Wind meanders slowly; gusts have a fast attack and ~1.5 s decay.
    const wa = WIND_BASE + Math.sin(time * 0.05) * 0.22 + Math.sin(time * 0.17 + 1.3) * 0.07;
    wind.set(Math.cos(wa), Math.sin(wa));
    gustLevel *= Math.exp(-dt / 0.5);
    gustSmooth += (gustLevel - gustSmooth) * Math.min(1, dt * 12);
    waveAge += dt;
    U.uTime.value = time;
    (U.uWind.value as THREE.Vector2).copy(wind);
    U.uWindAmp.value = 0.62 + 0.18 * Math.sin(time * 0.23);
    U.uGust.value = gustSmooth;
    (U.uWave.value as THREE.Vector4).w = waveAge;
    U.uWaveAmp.value = waveAmp * Math.exp(-waveAge * 1.4) * smoothstep(0, 0.06, waveAge);
    (U.uFocus.value as THREE.Vector3).copy(focus);
    const bArr = U.uBenders.value as THREE.Vector3[];
    const nb = Math.min(8, benders.length);
    for (let i = 0; i < nb; i++) bArr[i].copy(benders[i]);
    U.uBenderCount.value = nb;

    // Shadow box follows the focus, snapped to whole shadow texels in light space (no shimmering).
    const texel = (2 * SHADOW_HALF) / sun.shadow.mapSize.x;
    const px = Math.round(focus.dot(lx) / texel) * texel, py = Math.round(focus.dot(ly) / texel) * texel;
    snapped.copy(lx).multiplyScalar(px).addScaledVector(ly, py).addScaledVector(sunDir, focus.dot(sunDir));
    sun.target.position.copy(snapped);
    sun.position.copy(snapped).addScaledVector(sunDir, 80);
    sun.target.updateMatrixWorld();

    // Leaves: drift downwind, flutter, tumble, recycle around the focus.
    const speed = 1 + gustSmooth * 3.5;
    const px2 = -wind.y, pz2 = wind.x;
    for (let i = 0; i < leafCount; i++) {
      const i3 = i * 3;
      const ph = lk[i3 + 2];
      const flutter = Math.sin(time * 1.7 + ph) * 0.6;
      const drift = (1.0 + (ph % 1) * 0.8) * speed;
      lp[i3] += (wind.x * drift + px2 * flutter) * dt;
      lp[i3 + 2] += (wind.y * drift + pz2 * flutter) * dt;
      lp[i3 + 1] -= lk[i3 + 1] * (1 + 0.6 * Math.sin(time * 2.3 + ph * 3)) * dt;
      for (let k = 0; k < 3; k++) lr[i3 + k] += ls[i3 + k] * dt * (1 + gustSmooth * 1.5);
      const dx = lp[i3] - focus.x, dz = lp[i3 + 2] - focus.z;
      if (lp[i3 + 1] < 0.02 || dx * dx + dz * dz > (LEAF_R + 10) ** 2) spawnLeaf(i, focus, false);
      tmpQ.setFromEuler(tmpE.set(lr[i3], lr[i3 + 1], lr[i3 + 2]));
      const s = lk[i3];
      tmpM.compose(lpos.set(lp[i3], lp[i3 + 1], lp[i3 + 2]), tmpQ, lscale.set(s, s, s));
      leafMesh.setMatrixAt(i, tmpM);
    }
    leafMesh.instanceMatrix.needsUpdate = true;

    renderer.getDrawingBufferSize(bufSize);
    moteMat.uniforms.uPx.value = bufSize.y;
  }

  function gust(strength: number): void {
    const s = THREE.MathUtils.clamp(strength, 0, 1);
    gustLevel = Math.max(gustLevel, s);
    waveAmp = s;
    waveAge = 0;
    (U.uWave.value as THREE.Vector4).set(lastFocus.x, lastFocus.y, lastFocus.z, 0);
  }

  function dispose(): void {
    scene.remove(root);
    if (scene.fog === fog) scene.fog = null;
    if (scene.background === background) scene.background = null;
    sun.shadow.dispose();
    for (const o of owned) o.dispose();
    shortMesh.dispose(); tallMesh.dispose(); leafMesh.dispose();
    owned.length = 0;
  }

  update(0, 0, new THREE.Vector3(), []);
  return { update, sun, wind, gust, dispose };
}

/** Maple-leaf silhouette (white, tinted per instance) drawn on a small canvas. */
function makeLeafTexture(): THREE.CanvasTexture {
  const S = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.translate(S / 2, S * 0.54);
    const lobes: [number, number][] = [[0, 1], [1.05, 0.9], [-1.05, 0.9], [2.1, 0.55], [-2.1, 0.55]];
    ctx.beginPath();
    for (let i = 0; i <= 160; i++) {
      const phi = (i / 160) * TAU - Math.PI;
      let r = 0.22;
      for (const [a, s] of lobes) r += s * Math.exp(-(((phi - a) / 0.3) ** 2));
      r *= (1 + 0.08 * Math.sin(phi * 26)) * S * 0.36;
      const x = Math.sin(phi) * r, y = -Math.cos(phi) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = 'rgba(120,60,40,0.55)';
    ctx.lineWidth = 1.2;
    for (const [a] of lobes) {
      ctx.beginPath(); ctx.moveTo(0, 0);
      ctx.lineTo(Math.sin(a) * S * 0.3, -Math.cos(a) * S * 0.3); ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, S * 0.4); ctx.lineWidth = 2; ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
