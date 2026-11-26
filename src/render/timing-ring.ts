import * as THREE from 'three';
import type { World } from '../core/world';
import { attackTelegraph, type Telegraph } from '../core/telegraph';
import { T } from '../core/tuning';

/** The ring is drawn as if contact were this many ticks sooner, so pressing "on touch" (display
 *  latency + the tick it takes an input to reach the simulation) still lands inside the window. */
const VISUAL_LEAD = 2;
/** World radius of a fully open ring / of the target circle (metres at size 1). */
const R_MAX = 1.75;
const R_TARGET = 0.36; // fraction of R_MAX

const COLORS = { white: new THREE.Color(0xfff6e0), blue: new THREE.Color(0x59b8ff), red: new THREE.Color(0xff3b2a) };

const VERT = `varying vec2 vUv; void main(){ vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const FRAG = `
  varying vec2 vUv;
  uniform float uOpen, uBand, uIssen, uLine, uAlpha;
  uniform vec3 uColor;
  void main(){
    float r = length(vUv);
    float R0 = ${R_TARGET.toFixed(3)};
    float span = 0.96 - R0;
    float rc = R0 + span * uOpen;          // the closing ring
    float rb = R0 + span * uBand;          // outer edge of the answer window
    float target = step(abs(r - R0), uLine);
    // The window is a light checker of dots (never hides the fighter inside the ring).
    vec2 cell = floor(gl_FragCoord.xy);
    float checker = mod(cell.x + cell.y, 2.0);
    float band = step(R0, r) * step(r, rb) * 0.42 * checker;
    float ring = step(abs(r - rc), uLine * 1.4);
    bool inWindow = uOpen <= uBand;
    vec3 col = uColor;
    if (ring > 0.5) col = uOpen <= uIssen ? vec3(1.0, 0.82, 0.25) : inWindow ? mix(uColor, vec3(1.0), 0.65) : uColor;
    else if (target > 0.5 && inWindow) col = mix(uColor, vec3(1.0), 0.5);
    float a = max(max(target * 0.85, band), ring);
    if (a <= 0.0) discard;
    gl_FragColor = vec4(col, a * uAlpha);
  }`;

interface Item {
  mesh: THREE.Mesh;
  mat: THREE.ShaderMaterial;
  used: boolean;
}

/**
 * 타이밍 링: one billboard per attacking enemy. A ring closes at a constant pace onto a target
 * circle and touches it when the blow lands; the shaded band is the window in which the answer
 * (buckler for white / blue, flow or dodge for red) works. Colour = how the blow may be answered.
 */
export class TimingRings {
  readonly group = new THREE.Group();
  private readonly geo = new THREE.PlaneGeometry(2, 2);
  private readonly items = new Map<number, Item>();
  private readonly tg = {} as Telegraph;
  private readonly pos = new THREE.Vector3();

  private item(id: number): Item {
    let it = this.items.get(id);
    if (!it) {
      const mat = new THREE.ShaderMaterial({
        uniforms: { uOpen: { value: 1 }, uBand: { value: 0 }, uIssen: { value: 0 }, uLine: { value: 0.02 }, uAlpha: { value: 1 }, uColor: { value: new THREE.Color() } },
        vertexShader: VERT,
        fragmentShader: FRAG,
        transparent: true,
        depthTest: false,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(this.geo, mat);
      mesh.renderOrder = 50;
      mesh.frustumCulled = false;
      this.group.add(mesh);
      it = { mesh, mat, used: false };
      this.items.set(id, it);
    }
    return it;
  }

  /**
   * `rootOf` gives the drawn (interpolated) position of a fighter; `frameHeight` is the height
   * of the rendered frame in dots (lines stay about 1½ dots wide at any distance).
   */
  update(w: World, camera: THREE.PerspectiveCamera, frameHeight: number, rootOf: (id: number) => THREE.Vector3 | null): void {
    for (const it of this.items.values()) it.used = false;
    const p11 = camera.projectionMatrix.elements[5];
    for (const f of w.fighters) {
      // Same clock as the poses: the frame shows tick − 1 + alpha.
      const tg = attackTelegraph(w, f, w.alpha - 1, this.tg);
      if (!tg) continue;
      const root = rootOf(f.id);
      if (!root) continue;
      const it = this.item(f.id);
      it.used = true;
      const size = R_MAX * f.size;
      it.mesh.visible = true;
      it.mesh.position.set(root.x, 1.05 * f.size, root.z);
      it.mesh.quaternion.copy(camera.quaternion);
      it.mesh.scale.setScalar(size);
      const u = it.mat.uniforms;
      const lead = T.telegraphLead;
      u.uOpen.value = Math.max(0, tg.left - VISUAL_LEAD) / lead;
      // The drawn window ends at the (shifted) touch and starts where a press begins to work.
      u.uBand.value = Math.max(0, tg.band - VISUAL_LEAD / lead);
      u.uIssen.value = Math.max(0, tg.issenBand - VISUAL_LEAD / lead);
      (u.uColor.value as THREE.Color).copy(COLORS[tg.grade]);
      // Fade in over the first few ticks the ring exists.
      u.uAlpha.value = Math.min(1, (lead - tg.left) / 4 + 0.35);
      const dist = this.pos.copy(it.mesh.position).sub(camera.position).length();
      const dot = (2 * dist) / (p11 * frameHeight);
      u.uLine.value = Math.min(0.08, (1.5 * dot) / 2 / size);
    }
    for (const [id, it] of this.items) {
      if (it.used) continue;
      // Views come and go with the fighters: drop rings of fighters that no longer exist.
      if (!w.get(id)) {
        this.group.remove(it.mesh);
        it.mat.dispose();
        this.items.delete(id);
      } else it.mesh.visible = false;
    }
  }

  clear(): void {
    for (const it of this.items.values()) {
      this.group.remove(it.mesh);
      it.mat.dispose();
    }
    this.items.clear();
  }
}
