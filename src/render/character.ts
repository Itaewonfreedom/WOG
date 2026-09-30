import * as THREE from 'three';
import type { ArchetypeId } from '../core/types';
import type { Pose } from './pose';

export type CharKind = 'player' | ArchetypeId;
export type WeaponKind = 'shortsword' | 'katana' | 'nodachi' | 'yari' | 'shortyari' | 'wakizashi' | 'knife' | 'none';
export type OffhandKind = 'buckler' | 'tate' | 'wakizashi' | 'yumi' | 'none';

interface Look {
  skin: number;
  cloth: number;
  cloth2: number;
  trim: number;
  metal: number;
  hat: 'hood' | 'jingasa' | 'jingasaDark' | 'kabuto' | 'kabutoBoss' | 'mask' | 'band' | 'straw';
  skirt: 'tunic' | 'hakama' | 'armor' | 'none';
  cape: number | null;
  armor: boolean;
  weapon: WeaponKind;
  offhand: OffhandKind;
  bulk: number;
}

const LOOKS: Record<CharKind, Look> = {
  player: { skin: 0xc99a74, cloth: 0x2e4a3b, cloth2: 0x4a3526, trim: 0x8c2f23, metal: 0xd5dbe2, hat: 'hood', skirt: 'tunic', cape: 0x2a4033, armor: false, weapon: 'shortsword', offhand: 'buckler', bulk: 1 },
  ronin: { skin: 0xc49070, cloth: 0x3a4a66, cloth2: 0x5c5a58, trim: 0xd8cfb8, metal: 0xcfd6de, hat: 'jingasa', skirt: 'hakama', cape: null, armor: false, weapon: 'katana', offhand: 'none', bulk: 1 },
  shield: { skin: 0xc49070, cloth: 0x6a4a32, cloth2: 0x3d3a36, trim: 0x7a2a22, metal: 0xbfc5cc, hat: 'jingasaDark', skirt: 'armor', cape: null, armor: true, weapon: 'shortyari', offhand: 'tate', bulk: 1.08 },
  spear: { skin: 0xc49070, cloth: 0x34506a, cloth2: 0x3d3a36, trim: 0xc9b98f, metal: 0xcfd6de, hat: 'jingasaDark', skirt: 'hakama', cape: null, armor: false, weapon: 'yari', offhand: 'none', bulk: 1 },
  armored: { skin: 0xb68566, cloth: 0x26262e, cloth2: 0x1b1b20, trim: 0xb8913a, metal: 0xd9dee5, hat: 'kabuto', skirt: 'armor', cape: null, armor: true, weapon: 'nodachi', offhand: 'none', bulk: 1.18 },
  duelist: { skin: 0xc49070, cloth: 0x1c1c22, cloth2: 0x2a2530, trim: 0x8a1f2a, metal: 0xcfd6de, hat: 'mask', skirt: 'none', cape: null, armor: false, weapon: 'wakizashi', offhand: 'wakizashi', bulk: 0.92 },
  archer: { skin: 0xc49070, cloth: 0x5b6040, cloth2: 0x4a4436, trim: 0xe0d6bf, metal: 0xcfd6de, hat: 'band', skirt: 'hakama', cape: null, armor: false, weapon: 'knife', offhand: 'yumi', bulk: 0.98 },
  boss: { skin: 0xb68566, cloth: 0x7c1d1d, cloth2: 0x221416, trim: 0xd4a847, metal: 0xe2e6ec, hat: 'kabutoBoss', skirt: 'armor', cape: 0x3a0d10, armor: true, weapon: 'katana', offhand: 'none', bulk: 1.15 },
  dummy: { skin: 0xc8a86a, cloth: 0xb5935a, cloth2: 0x8a6a3a, trim: 0x6b4a2a, metal: 0x777777, hat: 'straw', skirt: 'none', cape: null, armor: false, weapon: 'none', offhand: 'none', bulk: 1.05 },
};

const Y = new THREE.Vector3(0, 1, 0);
const _a = new THREE.Vector3();
const _c = new THREE.Vector3();
const _d = new THREE.Vector3();
const _m = new THREE.Matrix4();

/** Reflection map for blades & armor (set once by the game from a sky-gradient scene). */
let metalEnv: THREE.Texture | null = null;
export function setMetalEnvironment(t: THREE.Texture): void {
  metalEnv = t;
}

function stdMat(color: number, rough = 0.8, metal = 0): THREE.MeshStandardMaterial {
  const m = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
  if (metal > 0.3 && metalEnv) {
    m.envMap = metalEnv;
    m.envMapIntensity = metal > 0.6 ? 1.4 : 0.45;
  }
  return m;
}

/** Unit-length limb geometry spanning y ∈ [0, 1]. */
function limbGeo(rTop: number, rBot: number, seg = 8): THREE.BufferGeometry {
  const g = new THREE.CylinderGeometry(rBot, rTop, 1, seg, 1);
  g.translate(0, 0.5, 0);
  return g;
}

class Limb {
  readonly mesh: THREE.Mesh;
  constructor(geo: THREE.BufferGeometry, mat: THREE.Material) {
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.castShadow = true;
  }
  place(a: THREE.Vector3, b: THREE.Vector3): void {
    _a.subVectors(b, a);
    const l = _a.length();
    this.mesh.position.copy(a);
    if (l > 1e-5) this.mesh.quaternion.setFromUnitVectors(Y, _a.multiplyScalar(1 / l));
    this.mesh.scale.set(1, Math.max(l, 1e-3), 1);
  }
}

const Z = new THREE.Vector3(0, 0, 1);
const ARM = 0.58;
/** Fastest an elbow / knee bend plane may turn (rad/s). */
const BEND_MAX_RATE = 40;
const LEG = 0.875;
const ANKLE = 0.07;
const V = () => new THREE.Vector3();
/** Scratch for applyPose (not re-entrant; nothing is allocated per frame). */
const S = {
  hipQ: new THREE.Quaternion(),
  chestQ: new THREE.Quaternion(),
  bodyQ: new THREE.Quaternion(),
  headQ: new THREE.Quaternion(),
  q: new THREE.Quaternion(),
  e: new THREE.Euler(),
  m: new THREE.Matrix4(),
  pivot: V(), chestTop: V(), shR: V(), shL: V(), headPos: V(), hipR: V(), hipL: V(),
  handR: V(), handL: V(), elbowR: V(), elbowL: V(), poleR: V(), poleL: V(),
  ankR: V(), ankL: V(), footR: V(), footL: V(), kneeR: V(), kneeL: V(), poleKR: V(), poleKL: V(),
  pel: V(), bladeR: V(), edgeR: V(), bladeL: V(), edgeL: V(), tmp: V(), tmp2: V(),
};

/** Whole-body rotation around the pelvis (S.pivot / S.bodyQ, set by applyPose). */
function xf(v: THREE.Vector3): THREE.Vector3 {
  return v.sub(S.pivot).applyQuaternion(S.bodyQ).add(S.pivot);
}

/** Points carried by the whole-body rotation (rolls / falls). */
const BODY_POINTS = [S.chestTop, S.shR, S.shL, S.headPos, S.hipR, S.hipL, S.elbowR, S.elbowL, S.handR, S.handL, S.kneeR, S.kneeL, S.ankR, S.ankL, S.footR, S.footL];

/**
 * 2-bone IK with a temporally smoothed bend direction. A raw pole projection flips 180° when the
 * limb passes through the pole axis; here the bend plane follows the pole at a finite rate and
 * keeps its previous side when the pole becomes degenerate.
 */
class Bend {
  private readonly dir = new THREE.Vector3();
  private init = false;
  private static readonly t = new THREE.Vector3();
  private static readonly u = new THREE.Vector3();
  private static readonly w = new THREE.Vector3();

  solve(root: THREE.Vector3, target: THREE.Vector3, l1: number, l2: number, pole: THREE.Vector3, dt: number, out: THREE.Vector3): THREE.Vector3 {
    const ax = Bend.t.subVectors(target, root);
    let d = ax.length();
    if (d < 1e-5) ax.set(0, -1, 0);
    else ax.multiplyScalar(1 / d);
    d = Math.min(l1 + l2 - 1e-4, Math.max(Math.abs(l1 - l2) + 1e-4, d));
    const want = Bend.u.copy(pole).addScaledVector(ax, -pole.dot(ax));
    const wl = want.length();
    const pl = pole.length() || 1;
    if (!this.init) {
      if (wl < 1e-4) want.set(0, 0, 1).addScaledVector(ax, -ax.z);
      this.dir.copy(want).normalize();
      this.init = true;
    } else if (wl > 0.15 * pl && dt > 0) {
      want.multiplyScalar(1 / wl);
      // Turn toward the wanted bend plane about the limb axis: fast, but rate-limited so even a
      // reversed pole swings the joint across over several frames at any refresh rate.
      const ang = Math.acos(Math.max(-1, Math.min(1, this.dir.dot(want))));
      if (ang > 1e-5) {
        const step = Math.min(ang * (1 - Math.exp(-dt * 30)), BEND_MAX_RATE * dt);
        const axis = Bend.w.crossVectors(this.dir, want);
        if (axis.lengthSq() < 1e-10) axis.copy(ax);
        this.dir.applyAxisAngle(axis.normalize(), step);
      }
    }
    // Keep the bend perpendicular to the current limb axis.
    this.dir.addScaledVector(ax, -this.dir.dot(ax));
    if (this.dir.lengthSq() < 1e-8) this.dir.copy(want.lengthSq() > 1e-8 ? want : _c.set(0, 0, 1).addScaledVector(ax, -ax.z));
    this.dir.normalize();
    const cosA = (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d);
    const sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
    return out.copy(root).addScaledVector(ax, l1 * cosA).addScaledVector(this.dir, l1 * sinA);
  }
}

/** Orient `obj` so its +Y follows `dir` and its +Z follows `up` (orthogonalized). */
function orient(obj: THREE.Object3D, dir: THREE.Vector3, up: THREE.Vector3): void {
  _a.copy(dir).normalize();
  _c.copy(up).addScaledVector(_a, -up.dot(_a));
  if (_c.lengthSq() < 1e-6) _c.set(0, 0, 1).addScaledVector(_a, -_a.z);
  _c.normalize();
  _d.crossVectors(_a, _c).normalize();
  _m.makeBasis(_d, _a, _c);
  obj.quaternion.setFromRotationMatrix(_m);
}

// ── Weapons ─────────────────────────────────────────────────────────────────
interface WeaponBuild {
  group: THREE.Group;
  tip: number;
  base: number;
}

function buildWeapon(kind: WeaponKind, look: Look): WeaponBuild {
  const g = new THREE.Group();
  const steel = stdMat(look.metal, 0.22, 0.9);
  const wrap = stdMat(0x1c1714, 0.9);
  const brass = stdMat(0xb08a3e, 0.4, 0.7);
  const wood = stdMat(0x5a3b22, 0.8);
  const add = (geo: THREE.BufferGeometry, m: THREE.Material, y: number, x = 0, z = 0) => {
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    g.add(mesh);
    return mesh;
  };
  switch (kind) {
    case 'shortsword': {
      // Straight double-edged ranger short sword.
      add(new THREE.BoxGeometry(0.058, 0.54, 0.012), steel, 0.35);
      const tip = add(new THREE.ConeGeometry(0.029, 0.09, 4), steel, 0.665);
      tip.scale.set(1, 1, 0.25);
      add(new THREE.BoxGeometry(0.17, 0.022, 0.035), brass, 0.07);
      add(new THREE.CylinderGeometry(0.017, 0.017, 0.13, 6), wrap, -0.01);
      add(new THREE.SphereGeometry(0.026, 8, 6), brass, -0.09);
      return { group: g, tip: 0.7, base: 0.1 };
    }
    case 'katana':
    case 'nodachi':
    case 'wakizashi': {
      const L = kind === 'nodachi' ? 1.1 : kind === 'katana' ? 0.78 : 0.5;
      const grip = kind === 'wakizashi' ? 0.14 : 0.27;
      // Slight curve (sori): three segments.
      const segs = 3;
      for (let i = 0; i < segs; i++) {
        const y0 = 0.05 + (L / segs) * i;
        const m = add(new THREE.BoxGeometry(0.032, L / segs + 0.01, 0.01), steel, y0 + L / segs / 2);
        m.position.z = -Math.pow((i + 0.5) / segs, 2) * 0.035 * L;
        m.rotation.x = 0.03 * (i + 1) * L;
      }
      add(new THREE.CylinderGeometry(0.045, 0.045, 0.012, 12), brass, 0.035);
      add(new THREE.CylinderGeometry(0.017, 0.017, grip, 6), wrap, 0.02 - grip / 2);
      return { group: g, tip: 0.05 + L, base: 0.1 };
    }
    case 'yari':
    case 'shortyari': {
      const back = kind === 'yari' ? 1.0 : 0.45;
      const front = kind === 'yari' ? 1.6 : 0.9;
      add(new THREE.CylinderGeometry(0.018, 0.018, back + front, 6), wood, (front - back) / 2);
      const head = add(new THREE.ConeGeometry(0.03, 0.26, 4), steel, front + 0.13);
      head.scale.set(1, 1, 0.3);
      add(new THREE.CylinderGeometry(0.026, 0.026, 0.05, 6), brass, front - 0.01);
      return { group: g, tip: front + 0.26, base: front - 0.1 };
    }
    case 'knife':
      add(new THREE.BoxGeometry(0.03, 0.22, 0.008), steel, 0.14);
      add(new THREE.CylinderGeometry(0.015, 0.015, 0.1, 6), wrap, -0.02);
      return { group: g, tip: 0.26, base: 0.05 };
    default:
      return { group: g, tip: 0.1, base: 0 };
  }
}

function buildOffhand(kind: OffhandKind, look: Look): { group: THREE.Group; tip: number; base: number; bowString?: THREE.Line; bowTips?: [THREE.Vector3, THREE.Vector3] } | null {
  const g = new THREE.Group();
  const add = (geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number) => {
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    g.add(mesh);
    return mesh;
  };
  switch (kind) {
    case 'buckler': {
      // Very small round buckler strapped to the forearm. +Y = face normal.
      const wood = stdMat(0x5b3f28, 0.7);
      const steel = stdMat(0xaeb5bd, 0.3, 0.85);
      add(new THREE.CylinderGeometry(0.165, 0.165, 0.025, 20), wood, 0, 0.0, 0);
      const rim = add(new THREE.TorusGeometry(0.165, 0.012, 6, 24), steel, 0, 0.012, 0);
      rim.rotation.x = Math.PI / 2;
      add(new THREE.SphereGeometry(0.055, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), steel, 0, 0.012, 0);
      return { group: g, tip: 0, base: 0 };
    }
    case 'tate': {
      // Tall wooden shield. +Y = up, +Z = face normal.
      const wood = stdMat(0x7a2a22, 0.75);
      const band = stdMat(0x2b2118, 0.8);
      add(new THREE.BoxGeometry(0.62, 1.12, 0.05), wood, 0, 0.1, 0.02);
      for (const y of [-0.3, 0.5]) add(new THREE.BoxGeometry(0.64, 0.05, 0.06), band, 0, y, 0.02);
      const mon = add(new THREE.TorusGeometry(0.1, 0.018, 6, 20), stdMat(look.trim === 0x7a2a22 ? 0xe8dcc0 : look.trim, 0.6), 0, 0.2, 0.05);
      mon.rotation.x = 0;
      return { group: g, tip: 0.6, base: -0.4 };
    }
    case 'wakizashi': {
      const w = buildWeapon('wakizashi', look);
      return { group: w.group, tip: w.tip, base: w.base };
    }
    case 'yumi': {
      // Asymmetric longbow (grip at lower third). +Y = bow up, +Z = shooting direction.
      const wood = stdMat(0x2a1a12, 0.6);
      const pts: THREE.Vector3[] = [];
      const top = 1.25;
      const bot = -0.72;
      for (let i = 0; i <= 16; i++) {
        const y = bot + ((top - bot) * i) / 16;
        const u = (y - bot) / (top - bot);
        const bend = Math.sin(u * Math.PI) * 0.14 - Math.sin(u * Math.PI * 2) * 0.02;
        pts.push(new THREE.Vector3(0, y, bend));
      }
      const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.013, 5), wood);
      tube.castShadow = true;
      g.add(tube);
      add(new THREE.CylinderGeometry(0.02, 0.02, 0.1, 6), stdMat(0xe0d6bf, 0.9), 0, 0, 0.14);
      const string = makeString();
      g.add(string);
      return { group: g, tip: top, base: bot, bowString: string, bowTips: [new THREE.Vector3(0, top, 0.0), new THREE.Vector3(0, bot, 0.0)] };
    }
    default:
      return null;
  }
}

function makeString(): THREE.Line {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(9), 3));
  const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xe8e2d0 }));
  line.frustumCulled = false;
  return line;
}

/** The ranger's recurve bow: on the back normally, in the left hand while aiming. */
function buildRangerBow(): { group: THREE.Group; string: THREE.Line; tips: [THREE.Vector3, THREE.Vector3] } {
  const g = new THREE.Group();
  const wood = stdMat(0x3b2616, 0.55);
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= 14; i++) {
    const u = i / 14;
    const y = -0.6 + 1.2 * u;
    const z = Math.sin(u * Math.PI) * 0.12 - Math.pow(Math.abs(u - 0.5) * 2, 6) * 0.07;
    pts.push(new THREE.Vector3(0, y, z));
  }
  const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.014, 5), wood);
  tube.castShadow = true;
  g.add(tube);
  const string = makeString();
  g.add(string);
  return { group: g, string, tips: [new THREE.Vector3(0, 0.6, -0.07), new THREE.Vector3(0, -0.6, -0.07)] };
}

// ── Character view ──────────────────────────────────────────────────────────
export class CharacterView {
  readonly root = new THREE.Group();
  readonly kind: CharKind;
  readonly look: Look;
  private readonly mats: THREE.MeshStandardMaterial[] = [];
  private readonly torso: THREE.Mesh;
  private readonly pelvisMesh: THREE.Mesh;
  private readonly head: THREE.Group;
  private readonly neck: Limb;
  private readonly uArmR: Limb;
  private readonly lArmR: Limb;
  private readonly uArmL: Limb;
  private readonly lArmL: Limb;
  private readonly thighR: Limb;
  private readonly shinR: Limb;
  private readonly thighL: Limb;
  private readonly shinL: Limb;
  private readonly joints: THREE.Mesh[] = [];
  private readonly handRMesh: THREE.Mesh;
  private readonly handLMesh: THREE.Mesh;
  private readonly footRMesh: THREE.Mesh;
  private readonly footLMesh: THREE.Mesh;
  private readonly skirt: THREE.Mesh | null = null;
  private readonly cape: THREE.Mesh | null = null;
  private readonly shoulderPads: THREE.Mesh[] = [];
  private readonly chestPlate: THREE.Mesh | null = null;
  readonly weapon: THREE.Group;
  readonly weaponTip: number;
  readonly weaponBase: number;
  readonly offhand: THREE.Group | null;
  readonly offTip: number;
  readonly offBase: number;
  private readonly offKind: OffhandKind;
  private readonly bowString: THREE.Line | null = null;
  private readonly bowTips: [THREE.Vector3, THREE.Vector3] | null = null;
  private readonly rangerBow: ReturnType<typeof buildRangerBow> | null = null;
  private readonly quiver: THREE.Mesh | null = null;
  /** Arrow nocked on the string while drawing. */
  private readonly nocked: THREE.Mesh | null = null;
  readonly glintSprite: THREE.Sprite;
  shieldOpen = 0;
  private armorBroken = false;
  /** Cape swing state. */
  private capeLift = 0;
  /** Two-handed weapons: left-hand offset along the blade from the right hand (null = one-handed). */
  private readonly grip: number | null;
  /** Temporally smoothed IK bend planes (no elbow / knee flips). */
  private readonly bendR = new Bend();
  private readonly bendL = new Bend();
  private readonly bendKR = new Bend();
  private readonly bendKL = new Bend();

  // Solved joint positions (local space), exposed for effects.
  readonly jHandR = new THREE.Vector3();
  readonly jHandL = new THREE.Vector3();
  readonly jHead = new THREE.Vector3();
  readonly jChest = new THREE.Vector3();

  constructor(kind: CharKind, glintTex: THREE.Texture) {
    this.kind = kind;
    const look = (this.look = LOOKS[kind]);
    const m = (c: number, r = 0.85, me = 0) => {
      const mm = stdMat(c, r, me);
      this.mats.push(mm);
      return mm;
    };
    const skin = m(look.skin, 0.7);
    const cloth = m(look.cloth);
    const cloth2 = m(look.cloth2);
    const trim = m(look.trim, 0.6, look.armor ? 0.5 : 0);
    const armorMat = look.armor ? m(look.cloth, 0.45, 0.35) : cloth;
    const bulk = look.bulk;
    this.grip = look.weapon === 'katana' ? -0.2 : look.weapon === 'nodachi' ? -0.25 : look.weapon === 'yari' ? 0.55 : null;

    // Torso: tapered, wider at the shoulders.
    this.torso = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * bulk, 0.15 * bulk, 0.52, 10), armorMat);
    this.torso.scale.z = 0.68;
    this.torso.castShadow = true;
    this.root.add(this.torso);
    this.pelvisMesh = new THREE.Mesh(new THREE.SphereGeometry(0.16 * bulk, 10, 8), cloth2);
    this.pelvisMesh.scale.set(1, 0.7, 0.75);
    this.pelvisMesh.castShadow = true;
    this.root.add(this.pelvisMesh);

    this.neck = new Limb(limbGeo(0.045, 0.05, 6), skin);
    this.root.add(this.neck.mesh);
    this.head = this.buildHead(look, skin, cloth, trim, m);
    this.root.add(this.head);

    const armTopMat = look.armor ? armorMat : cloth;
    this.uArmR = new Limb(limbGeo(0.058 * bulk, 0.05 * bulk), armTopMat);
    this.lArmR = new Limb(limbGeo(0.05 * bulk, 0.042 * bulk), kind === 'player' ? cloth2 : cloth);
    this.uArmL = new Limb(limbGeo(0.058 * bulk, 0.05 * bulk), armTopMat);
    this.lArmL = new Limb(limbGeo(0.05 * bulk, 0.042 * bulk), kind === 'player' ? cloth2 : cloth);
    const legMat = kind === 'player' ? m(0x5a4a3a, 0.9) : cloth2;
    const bootMat = kind === 'player' || look.armor ? m(0x241d18, 0.85) : legMat;
    this.thighR = new Limb(limbGeo(0.085 * bulk, 0.066 * bulk), legMat);
    this.shinR = new Limb(limbGeo(0.066 * bulk, 0.052 * bulk), bootMat);
    this.thighL = new Limb(limbGeo(0.085 * bulk, 0.066 * bulk), legMat);
    this.shinL = new Limb(limbGeo(0.066 * bulk, 0.052 * bulk), bootMat);
    for (const l of [this.uArmR, this.lArmR, this.uArmL, this.lArmL, this.thighR, this.shinR, this.thighL, this.shinL]) this.root.add(l.mesh);
    const jointGeo = new THREE.SphereGeometry(0.05 * bulk, 8, 6);
    for (let i = 0; i < 4; i++) {
      const j = new THREE.Mesh(jointGeo, i < 2 ? armTopMat : legMat);
      j.castShadow = true;
      this.joints.push(j);
      this.root.add(j);
    }
    const handGeo = new THREE.SphereGeometry(0.042, 8, 6);
    this.handRMesh = new THREE.Mesh(handGeo, kind === 'player' ? cloth2 : skin);
    this.handLMesh = new THREE.Mesh(handGeo, kind === 'player' ? cloth2 : skin);
    const footGeo = new THREE.BoxGeometry(0.09, 0.07, 0.22);
    footGeo.translate(0, 0.035, 0.04);
    const footMat = m(0x2a2420, 0.9);
    this.footRMesh = new THREE.Mesh(footGeo, footMat);
    this.footLMesh = new THREE.Mesh(footGeo, footMat);
    for (const x of [this.handRMesh, this.handLMesh, this.footRMesh, this.footLMesh]) {
      x.castShadow = true;
      this.root.add(x);
    }

    // Skirt / hakama / armor tassets.
    if (look.skirt !== 'none') {
      const long = look.skirt === 'hakama';
      const armored = look.skirt === 'armor';
      const geo = new THREE.CylinderGeometry(0.19 * bulk, (long ? 0.34 : armored ? 0.3 : 0.25) * bulk, long ? 0.6 : armored ? 0.38 : 0.34, 14, 1, true);
      geo.translate(0, -(long ? 0.3 : armored ? 0.19 : 0.17), 0);
      const mat = look.skirt === 'hakama' ? cloth2 : armored ? armorMat : cloth;
      const mesh = new THREE.Mesh(geo, mat);
      (mesh.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
      mesh.castShadow = true;
      this.skirt = mesh;
      this.root.add(mesh);
    }
    if (look.cape !== null) {
      const geo = new THREE.PlaneGeometry(0.46 * bulk, 0.92, 1, 6);
      geo.translate(0, -0.46, 0);
      const mat = m(look.cape, 0.9);
      mat.side = THREE.DoubleSide;
      this.cape = new THREE.Mesh(geo, mat);
      this.cape.castShadow = true;
      this.root.add(this.cape);
    }
    if (look.armor) {
      const padGeo = new THREE.BoxGeometry(0.16 * bulk, 0.05, 0.2 * bulk);
      for (let i = 0; i < 2; i++) {
        const pad = new THREE.Mesh(padGeo, armorMat);
        const edge = new THREE.Mesh(new THREE.BoxGeometry(0.165 * bulk, 0.015, 0.205 * bulk), trim);
        edge.position.y = -0.03;
        pad.add(edge);
        pad.castShadow = true;
        this.shoulderPads.push(pad);
        this.root.add(pad);
      }
      this.chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.36 * bulk, 0.3, 0.06), armorMat);
      this.chestPlate.castShadow = true;
      this.root.add(this.chestPlate);
    }

    const wb = buildWeapon(look.weapon, look);
    this.weapon = wb.group;
    this.weaponTip = wb.tip;
    this.weaponBase = wb.base;
    this.root.add(this.weapon);
    this.offKind = look.offhand;
    const oh = buildOffhand(look.offhand, look);
    this.offhand = oh?.group ?? null;
    this.offTip = oh?.tip ?? 0;
    this.offBase = oh?.base ?? 0;
    if (oh?.bowString) {
      this.bowString = oh.bowString;
      this.bowTips = oh.bowTips!;
    }
    if (this.offhand) this.root.add(this.offhand);

    if (kind === 'player') {
      this.rangerBow = buildRangerBow();
      this.root.add(this.rangerBow.group);
      const q = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.5, 8), m(0x4a3526, 0.9));
      q.castShadow = true;
      this.quiver = q;
      this.root.add(q);
      const fletch = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.1, 6), m(0xe6e0cf, 0.9));
      fletch.position.y = 0.3;
      q.add(fletch);
    }
    if (kind === 'player' || kind === 'archer') {
      const arrow = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.8, 4), stdMat(0xd8c9a3, 0.8));
      arrow.geometry.translate(0, 0.4, 0);
      this.nocked = arrow;
      this.root.add(arrow);
    }

    const glintMat = new THREE.SpriteMaterial({ map: glintTex, color: 0x66aaff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 });
    this.glintSprite = new THREE.Sprite(glintMat);
    this.glintSprite.scale.setScalar(0.01);
    this.root.add(this.glintSprite);

    this.root.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).receiveShadow = false;
    });
  }

  private buildHead(look: Look, skin: THREE.Material, cloth: THREE.Material, trim: THREE.Material, m: (c: number, r?: number, me?: number) => THREE.MeshStandardMaterial): THREE.Group {
    const g = new THREE.Group();
    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      g.add(mesh);
      return mesh;
    };
    const headMat = look.hat === 'mask' ? cloth : skin;
    add(new THREE.SphereGeometry(0.112, 14, 10), headMat).scale.set(0.92, 1.05, 1);
    switch (look.hat) {
      case 'hood': {
        // Hood open at the front so the face shows (phi = π/2 is +Z).
        const hood = add(new THREE.SphereGeometry(0.15, 16, 10, Math.PI / 2 + 0.75, Math.PI * 2 - 1.5, 0, Math.PI * 0.66), cloth, 0, 0.01, -0.02);
        hood.scale.set(1, 1.1, 1.08);
        (hood.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
        // Eyes: a thin dark band in the shadow of the hood.
        add(new THREE.BoxGeometry(0.1, 0.018, 0.02), m(0x1a1210, 0.9), 0, 0.02, 0.1);
        const tail = add(new THREE.ConeGeometry(0.08, 0.2, 8), cloth, 0, 0.02, -0.14);
        tail.rotation.x = -1.9;
        // Scarf / mask covering the lower face.
        add(new THREE.CylinderGeometry(0.1, 0.115, 0.08, 12), m(0x8c2f23, 0.9), 0, -0.07, 0.01);
        break;
      }
      case 'jingasa':
      case 'jingasaDark': {
        const hat = add(new THREE.ConeGeometry(0.36, 0.13, 18), m(look.hat === 'jingasa' ? 0xb89a5a : 0x2a2622, 0.8, look.hat === 'jingasa' ? 0 : 0.2), 0, 0.1, 0);
        hat.castShadow = true;
        break;
      }
      case 'kabuto':
      case 'kabutoBoss': {
        const boss = look.hat === 'kabutoBoss';
        add(new THREE.SphereGeometry(0.135, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), trim, 0, 0.02, 0);
        const shikoro = add(new THREE.CylinderGeometry(0.14, 0.22, 0.12, 14, 1, true), trim, 0, -0.03, -0.02);
        (shikoro.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
        const gold = m(0xd4a847, 0.35, 0.8);
        if (boss) {
          const crescent = add(new THREE.TorusGeometry(0.2, 0.014, 6, 24, Math.PI), gold, 0, 0.14, 0.1);
          crescent.rotation.z = Math.PI;
          crescent.position.y = 0.3;
          crescent.name = 'armor';
        } else {
          for (const s of [-1, 1]) {
            const horn = add(new THREE.BoxGeometry(0.02, 0.22, 0.012), gold, s * 0.07, 0.2, 0.1);
            horn.rotation.z = -s * 0.45;
          }
        }
        // Menpō (face mask)
        add(new THREE.BoxGeometry(0.16, 0.08, 0.05), m(0x2a1c1a, 0.5, 0.3), 0, -0.05, 0.09);
        break;
      }
      case 'mask':
        add(new THREE.BoxGeometry(0.2, 0.035, 0.03), m(0x8a1f2a, 0.8), 0, 0.01, 0.1);
        break;
      case 'band':
        add(new THREE.TorusGeometry(0.11, 0.015, 6, 16), m(0xe0d6bf, 0.9), 0, 0.05, 0).rotation.x = Math.PI / 2;
        break;
      case 'straw':
        add(new THREE.ConeGeometry(0.16, 0.2, 10), m(0xd4b578, 1), 0, 0.12, 0);
        break;
    }
    return g;
  }

  /** Solve IK and place every part for `pose`. `dt` is simulation time (0 during hit-stop / pause). */
  applyPose(p: Pose, speed: number, dt: number): void {
    const bulk = this.look.bulk;
    const pelvis = p.pelvis;
    const hipQ = S.hipQ.setFromAxisAngle(Y, p.pelvisYaw);
    const chestQ = S.chestQ.setFromEuler(S.e.set(p.lean, p.pelvisYaw + p.torsoYaw, p.roll, 'YXZ'));

    // Whole-body rotation around the pelvis (for rolls / falls).
    const bodyQ = S.bodyQ.setFromEuler(S.e.set(p.bodyPitch, 0, p.bodyRoll, 'XYZ'));
    S.pivot.copy(pelvis);

    const chestTop = S.chestTop.set(0, 0.5, 0).applyQuaternion(chestQ).add(pelvis);
    const shR = S.shR.set(-0.19 * bulk, 0.45, 0).applyQuaternion(chestQ).add(pelvis);
    const shL = S.shL.set(0.19 * bulk, 0.45, 0).applyQuaternion(chestQ).add(pelvis);
    const headQ = S.headQ.copy(chestQ).multiply(S.q.setFromEuler(S.e.set(p.headPitch - p.lean * 0.6, p.headYaw, 0, 'YXZ')));
    const headPos = S.headPos.set(0, 0.17, 0.01).applyQuaternion(headQ).add(chestTop);
    const hipR = S.hipR.set(-0.1 * bulk, -0.02, 0).applyQuaternion(hipQ).add(pelvis);
    const hipL = S.hipL.set(0.1 * bulk, -0.02, 0).applyQuaternion(hipQ).add(pelvis);

    // Hands: keep them reachable first, then enforce the two-handed grip, then solve the elbows
    // (so the elbows always match the hands that are actually drawn).
    const handR = S.handR.copy(p.handR);
    const handL = S.handL.copy(p.handL);
    clampReach(shR, handR, ARM);
    if (this.grip !== null) {
      handL.copy(handR).addScaledVector(p.bladeR, this.grip);
      if (handL.distanceTo(shL) > ARM) {
        clampReach(shL, handL, ARM);
        handR.copy(handL).addScaledVector(p.bladeR, -this.grip);
        clampReach(shR, handR, ARM);
        handL.copy(handR).addScaledVector(p.bladeR, this.grip);
      }
    } else clampReach(shL, handL, ARM);
    const poleR = S.poleR.set(-0.7, -0.5, -0.5).applyQuaternion(chestQ);
    const poleL = S.poleL.set(0.7, -0.5, -0.5).applyQuaternion(chestQ);
    const elbowR = this.bendR.solve(shR, handR, 0.29, 0.29, poleR, dt, S.elbowR);
    const elbowL = this.bendL.solve(shL, handL, 0.29, 0.29, poleL, dt, S.elbowL);

    // Legs: knees follow the hips and the planted feet's heading. The ankle is clamped to the
    // leg's reach and the foot stays attached to it.
    const ankR = S.ankR.copy(p.footR).setY(p.footR.y + ANKLE);
    const ankL = S.ankL.copy(p.footL).setY(p.footL.y + ANKLE);
    clampReach(hipR, ankR, LEG);
    clampReach(hipL, ankL, LEG);
    const footR = S.footR.copy(ankR).setY(ankR.y - ANKLE);
    const footL = S.footL.copy(ankL).setY(ankL.y - ANKLE);
    const poleKR = S.poleKR.set(Math.sin(p.pelvisYaw) + Math.sin(p.footYawR), 0.4, Math.cos(p.pelvisYaw) + Math.cos(p.footYawR));
    const poleKL = S.poleKL.set(Math.sin(p.pelvisYaw) + Math.sin(p.footYawL), 0.4, Math.cos(p.pelvisYaw) + Math.cos(p.footYawL));
    const kneeR = this.bendKR.solve(hipR, ankR, 0.44, 0.44, poleKR, dt, S.kneeR);
    const kneeL = this.bendKL.solve(hipL, ankL, 0.44, 0.44, poleKL, dt, S.kneeL);

    for (const v of BODY_POINTS) xf(v);
    const pel = xf(S.pel.copy(pelvis));
    chestQ.premultiply(bodyQ);
    hipQ.premultiply(bodyQ);
    headQ.premultiply(bodyQ);

    // Torso & pelvis
    this.torso.position.set(0, 0.27, 0).applyQuaternion(chestQ).add(pel);
    this.torso.quaternion.copy(chestQ);
    this.pelvisMesh.position.copy(pel);
    this.pelvisMesh.quaternion.copy(hipQ);
    this.neck.place(S.tmp.copy(chestTop).setY(chestTop.y - 0.03), headPos);
    this.head.position.copy(headPos);
    this.head.quaternion.copy(headQ);
    this.jHead.copy(headPos);
    this.jChest.copy(this.torso.position);

    this.uArmR.place(shR, elbowR);
    this.lArmR.place(elbowR, handR);
    this.uArmL.place(shL, elbowL);
    this.lArmL.place(elbowL, handL);
    this.thighR.place(hipR, kneeR);
    this.shinR.place(kneeR, ankR);
    this.thighL.place(hipL, kneeL);
    this.shinL.place(kneeL, ankL);
    this.joints[0].position.copy(elbowR);
    this.joints[1].position.copy(elbowL);
    this.joints[2].position.copy(kneeR);
    this.joints[3].position.copy(kneeL);
    this.handRMesh.position.copy(handR);
    this.handLMesh.position.copy(handL);
    this.footRMesh.position.copy(footR);
    this.footLMesh.position.copy(footL);
    // Planted feet keep their own heading (the body may turn over them).
    this.footRMesh.quaternion.setFromAxisAngle(Y, p.footYawR).premultiply(bodyQ);
    this.footLMesh.quaternion.setFromAxisAngle(Y, p.footYawL).premultiply(bodyQ);
    this.jHandR.copy(handR);
    this.jHandL.copy(handL);

    if (this.skirt) {
      this.skirt.position.copy(pel);
      this.skirt.position.y += 0.1;
      // Let the skirt follow the stride a little.
      const stride = (footL.z - footR.z) * 0.25;
      this.skirt.quaternion.copy(hipQ).multiply(S.q.setFromEuler(S.e.set(stride * 0.4, 0, 0)));
    }
    if (this.cape) {
      this.capeLift += (Math.min(1, speed / 6) - this.capeLift) * (1 - Math.exp(-dt * 5));
      this.cape.position.set(0, 0.47, -0.13 * bulk).applyQuaternion(chestQ).add(pel);
      this.cape.quaternion.copy(chestQ).multiply(S.q.setFromEuler(S.e.set(0.12 + this.capeLift * 0.9 - p.lean * 0.5, 0, 0)));
    }
    if (this.chestPlate) {
      this.chestPlate.position.set(0, 0.3, 0.1 * bulk).applyQuaternion(chestQ).add(pel);
      this.chestPlate.quaternion.copy(chestQ);
    }
    for (let i = 0; i < this.shoulderPads.length; i++) {
      const pad = this.shoulderPads[i];
      pad.position.copy(i === 0 ? shR : shL);
      pad.position.y += 0.03;
      pad.quaternion.copy(chestQ).multiply(S.q.setFromAxisAngle(Z, (i === 0 ? 1 : -1) * 0.5));
    }

    // Weapon in the right hand (the ranger slips the short sword into its hip scabbard to shoot).
    const bladeR = S.bladeR.copy(p.bladeR).applyQuaternion(bodyQ);
    const edgeR = S.edgeR.copy(p.edgeR).applyQuaternion(bodyQ);
    if (this.kind === 'player' && p.bowInHand > 0.5) {
      this.weapon.position.set(0.2, -0.02, 0.06).applyQuaternion(hipQ).add(pel);
      orient(this.weapon, S.tmp.set(0.15, -0.55, -1).applyQuaternion(hipQ), S.tmp2.set(1, 0, 0).applyQuaternion(hipQ));
    } else {
      this.weapon.position.copy(handR);
      orient(this.weapon, bladeR, edgeR);
    }

    // Off-hand item.
    const bladeL = S.bladeL.copy(p.bladeL).applyQuaternion(bodyQ);
    const edgeL = S.edgeL.copy(p.edgeL).applyQuaternion(bodyQ);
    if (this.offhand) {
      if (this.offKind === 'buckler') {
        // Strapped on the forearm, just behind the fist.
        const fore = S.tmp.subVectors(handL, elbowL).normalize();
        this.offhand.position.copy(handL).addScaledVector(fore, -0.07).addScaledVector(bladeL, 0.03);
        orient(this.offhand, bladeL, fore);
      } else if (this.offKind === 'tate') {
        this.offhand.position.copy(handL).addScaledVector(edgeL, 0.06);
        orient(this.offhand, bladeL, edgeL);
      } else {
        this.offhand.position.copy(handL);
        orient(this.offhand, bladeL, edgeL);
      }
    }
    // Bow strings.
    if (this.bowString && this.bowTips && this.offhand) this.updateString(this.bowString, this.offhand, this.bowTips, handR, p.bowDraw);
    if (this.rangerBow) {
      const bow = this.rangerBow.group;
      if (p.bowInHand > 0.5) {
        bow.position.copy(handL);
        orient(bow, bladeL, edgeL);
      } else {
        // Slung across the back.
        bow.position.set(0.02, 0.28, -0.17 * bulk).applyQuaternion(chestQ).add(pel);
        bow.quaternion.copy(chestQ).multiply(S.q.setFromEuler(S.e.set(0, Math.PI, 0.55)));
      }
      this.updateString(this.rangerBow.string, bow, this.rangerBow.tips, handR, p.bowInHand > 0.5 ? p.bowDraw : 0);
    }
    if (this.quiver) {
      this.quiver.position.set(-0.12, 0.3, -0.16 * bulk).applyQuaternion(chestQ).add(pel);
      this.quiver.quaternion.copy(chestQ).multiply(S.q.setFromEuler(S.e.set(0.15, 0, -0.35)));
    }
    if (this.nocked) {
      const show = (this.kind === 'archer' ? 1 : p.bowInHand) > 0.5 && p.bowDraw > 0.05;
      this.nocked.visible = show;
      if (show) {
        const bowGroup = this.rangerBow ? this.rangerBow.group : this.offhand!;
        const dir = S.tmp.subVectors(bowGroup.position, handR);
        const l = dir.length();
        this.nocked.position.copy(handR);
        this.nocked.quaternion.setFromUnitVectors(Y, dir.normalize());
        this.nocked.scale.set(1, Math.max(1, (l + 0.12) / 0.8), 1);
      }
    }
  }

  private updateString(line: THREE.Line, bow: THREE.Object3D, tips: [THREE.Vector3, THREE.Vector3], handR: THREE.Vector3, draw: number): void {
    const pos = line.geometry.getAttribute('position') as THREE.BufferAttribute;
    // Draw point in the bow's local space.
    bow.updateMatrix();
    const inv = S.m.copy(bow.matrix).invert();
    const mid = S.tmp.set(0, (tips[0].y + tips[1].y) / 2, tips[0].z);
    const hand = S.tmp2.copy(handR).applyMatrix4(inv);
    mid.lerp(hand, Math.min(1, draw * 1.15));
    pos.setXYZ(0, tips[0].x, tips[0].y, tips[0].z);
    pos.setXYZ(1, mid.x, mid.y, mid.z);
    pos.setXYZ(2, tips[1].x, tips[1].y, tips[1].z);
    pos.needsUpdate = true;
  }

  /** World-space blade base/tip (for sword trails). */
  bladeWorld(base: THREE.Vector3, tip: THREE.Vector3, offhand = false): void {
    const obj = offhand && this.offhand ? this.offhand : this.weapon;
    obj.updateWorldMatrix(true, false);
    base.set(0, offhand ? this.offBase : this.weaponBase, 0).applyMatrix4(obj.matrixWorld);
    tip.set(0, offhand ? this.offTip : this.weaponTip, 0).applyMatrix4(obj.matrixWorld);
  }

  /** Boss phase 2: plates and crest fall away, leaving the dark under-robe. */
  shatterArmor(): void {
    if (this.armorBroken) return;
    this.armorBroken = true;
    if (this.chestPlate) this.chestPlate.visible = false;
    for (const p of this.shoulderPads) p.visible = false;
    this.head.traverse((o) => {
      if (o.name === 'armor') o.visible = false;
    });
    (this.torso.material as THREE.MeshStandardMaterial).color.setHex(this.look.cloth2);
    if (this.skirt) (this.skirt.material as THREE.MeshStandardMaterial).color.setHex(0x2a1416);
  }

  setFlash(v: number, color = 0xffffff): void {
    for (const m of this.mats) {
      m.emissive.setHex(color);
      m.emissiveIntensity = v;
    }
  }

  setGlint(color: 'blue' | 'red' | null, t: number): void {
    const s = this.glintSprite;
    if (!color) {
      (s.material as THREE.SpriteMaterial).opacity = 0;
      return;
    }
    const mat = s.material as THREE.SpriteMaterial;
    mat.color.setHex(color === 'blue' ? 0x7fc4ff : 0xff3b2a);
    const k = Math.min(1, t / 6);
    const fade = t > 20 ? Math.max(0, 1 - (t - 20) / 16) : 1;
    mat.opacity = k * fade;
    s.scale.setScalar((0.25 + 0.55 * k) * (1 + 0.15 * Math.sin(t * 0.9)));
    s.material.rotation = t * 0.05;
    // Near the weapon tip.
    s.position.set(0, this.weaponTip * 0.8, 0).applyQuaternion(this.weapon.quaternion).add(this.weapon.position);
  }

  dispose(): void {
    this.root.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) mesh.geometry.dispose();
    });
    for (const m of this.mats) m.dispose();
  }
}

function clampReach(root: THREE.Vector3, target: THREE.Vector3, max: number): void {
  _a.subVectors(target, root);
  const l = _a.length();
  if (l > max) target.copy(root).addScaledVector(_a, max / l);
}

