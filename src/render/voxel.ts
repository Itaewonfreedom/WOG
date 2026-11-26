import * as THREE from 'three';

// 도트 3D building blocks: box-built parts, banded (toon) light, hand-placed pixel textures and
// a dark ink outline (inverted hull) so every part reads as a clean silhouette at low resolution.

export const INK = 0x17131d;

let gradient: THREE.DataTexture | null = null;
/** Three light bands: shadow, mid, lit. */
function toonGradient(): THREE.DataTexture {
  if (gradient) return gradient;
  const steps = [172, 216, 255];
  const data = new Uint8Array(steps.length * 4);
  steps.forEach((v, i) => data.set([v, v, v, 255], i * 4));
  gradient = new THREE.DataTexture(data, steps.length, 1, THREE.RGBAFormat);
  gradient.minFilter = gradient.magFilter = THREE.NearestFilter;
  gradient.generateMipmaps = false;
  gradient.needsUpdate = true;
  return gradient;
}

export function toonMat(color: number, o: { emissive?: number; map?: THREE.Texture; side?: THREE.Side } = {}): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({
    color: o.map ? 0xffffff : color,
    map: o.map ?? null,
    gradientMap: toonGradient(),
    emissive: o.emissive ?? 0x000000,
    side: o.side ?? THREE.FrontSide,
  });
}

/**
 * A pixel texture from rows of characters (first row = top), each character a palette key.
 * Built as a DataTexture so it needs no canvas (also works in tests).
 */
export function pixelTex(rows: string[], palette: Record<string, number>): THREE.DataTexture {
  const h = rows.length;
  const w = rows[0].length;
  const data = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) {
    const row = rows[h - 1 - y];
    for (let x = 0; x < w; x++) {
      const hex = palette[row[x] ?? row[row.length - 1]] ?? 0xff00ff;
      const i = (y * w + x) * 4;
      data[i] = (hex >> 16) & 255;
      data[i + 1] = (hex >> 8) & 255;
      data[i + 2] = hex & 255;
      data[i + 3] = 255;
    }
  }
  const t = new THREE.DataTexture(data, w, h, THREE.RGBAFormat);
  t.colorSpace = THREE.SRGBColorSpace;
  t.minFilter = t.magFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}

/** Outline thickness in dots, turned into a clip-space factor by the pixel pipeline on resize. */
export const inkUniform = { value: (1.25 * 2) / 240 };

/**
 * Ink outline material: the back faces of the part, pushed outward so the rim stays about
 * `OUTLINE_DOTS` dots wide at any distance (and whatever the part's own scale is).
 */
const inkMat = new THREE.ShaderMaterial({
  uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { color: { value: new THREE.Color(INK) } }]),
  vertexShader: `
    attribute vec3 inkDir;
    uniform float uInk;
    #include <fog_pars_vertex>
    void main(){
      vec3 sc = vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), length(modelMatrix[2].xyz));
      float w = (projectionMatrix * modelViewMatrix * vec4(position, 1.0)).w;
      float t = clamp(uInk * w / projectionMatrix[1][1], 0.004, 0.07);
      vec4 mvPosition = modelViewMatrix * vec4(position + inkDir * t / max(sc, vec3(1e-4)), 1.0);
      gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
    }`,
  fragmentShader: `
    uniform vec3 color;
    #include <fog_pars_fragment>
    void main(){
      gl_FragColor = vec4(color, 1.0);
      #include <fog_fragment>
    }`,
  side: THREE.BackSide,
  fog: true,
});
inkMat.uniforms.uInk = inkUniform;
const _center = new THREE.Vector3();

/** Per-vertex outward direction (±1 per axis from the bounding-box centre): grows a box evenly. */
function ensureInkDir(g: THREE.BufferGeometry): void {
  if (g.getAttribute('inkDir')) return;
  if (!g.boundingBox) g.computeBoundingBox();
  g.boundingBox!.getCenter(_center);
  const pos = g.getAttribute('position');
  const dir = new Float32Array(pos.count * 3);
  const sgn = (v: number) => (v > 1e-5 ? 1 : v < -1e-5 ? -1 : 0);
  for (let i = 0; i < pos.count; i++) {
    dir[i * 3] = sgn(pos.getX(i) - _center.x);
    dir[i * 3 + 1] = sgn(pos.getY(i) - _center.y);
    dir[i * 3 + 2] = sgn(pos.getZ(i) - _center.z);
  }
  g.setAttribute('inkDir', new THREE.BufferAttribute(dir, 3));
}

/** Ink outline: a back-face copy of the mesh, grown outward in the vertex shader. */
export function addOutline(mesh: THREE.Mesh): THREE.Mesh {
  ensureInkDir(mesh.geometry);
  const o = new THREE.Mesh(mesh.geometry, inkMat);
  o.castShadow = false;
  o.receiveShadow = false;
  o.name = 'ink';
  mesh.add(o);
  return o;
}

/** A box part with its outline. */
export function box(w: number, h: number, d: number, mat: THREE.Material | THREE.Material[], outline = true): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.castShadow = true;
  if (outline) addOutline(m);
  return m;
}

/** Unit-length bone box spanning y ∈ [0, 1] (scaled to the bone when placed). */
export function boneGeo(w: number, d = w): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, 1, d);
  g.translate(0, 0.5, 0);
  return g;
}

/**
 * A hanging box that widens downward (skirts, tassets): top (wT × dT) at y = 0, bottom
 * (wB × dB) at y = −h. Flat-shaded, open at the bottom.
 */
export function flareGeo(wT: number, dT: number, wB: number, dB: number, h: number): THREE.BufferGeometry {
  const t = [[-wT / 2, 0, dT / 2], [wT / 2, 0, dT / 2], [wT / 2, 0, -dT / 2], [-wT / 2, 0, -dT / 2]];
  const b = [[-wB / 2, -h, dB / 2], [wB / 2, -h, dB / 2], [wB / 2, -h, -dB / 2], [-wB / 2, -h, -dB / 2]];
  const pos: number[] = [];
  const uv: number[] = [];
  const quad = (a: number[], c: number[], d: number[], e: number[]) => {
    pos.push(...a, ...c, ...d, ...a, ...d, ...e);
    uv.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1);
  };
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    quad(b[i], b[j], t[j], t[i]);
  }
  quad(t[0], t[1], t[2], t[3]); // top cap
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
}
