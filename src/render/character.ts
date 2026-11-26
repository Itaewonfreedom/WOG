import * as THREE from 'three';
import type { ArchetypeId } from '../core/types';
import type { Pose } from './pose';
import { addOutline, boneGeo, box, flareGeo, pixelTex, toonMat } from './voxel';

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
  player: { skin: 0xe2b088, cloth: 0x3f8a5c, cloth2: 0x7a5a3c, trim: 0xc8402f, metal: 0xeef3f8, hat: 'hood', skirt: 'tunic', cape: 0x2f6a48, armor: false, weapon: 'shortsword', offhand: 'buckler', bulk: 1 },
  ronin: { skin: 0xd9a47e, cloth: 0x4d6aa8, cloth2: 0x77726c, trim: 0xe6dcc0, metal: 0xe6ecf2, hat: 'jingasa', skirt: 'hakama', cape: null, armor: false, weapon: 'katana', offhand: 'none', bulk: 1 },
  shield: { skin: 0xd9a47e, cloth: 0x9a6a40, cloth2: 0x57524c, trim: 0xb23a2e, metal: 0xd8dee5, hat: 'jingasaDark', skirt: 'armor', cape: null, armor: true, weapon: 'shortyari', offhand: 'tate', bulk: 1.08 },
  spear: { skin: 0xd9a47e, cloth: 0x3f7f96, cloth2: 0x57524c, trim: 0xe0cf9c, metal: 0xe6ecf2, hat: 'jingasaDark', skirt: 'hakama', cape: null, armor: false, weapon: 'yari', offhand: 'none', bulk: 1 },
  armored: { skin: 0xc79672, cloth: 0x3d3f52, cloth2: 0x2a2a36, trim: 0xd9a93f, metal: 0xeef2f6, hat: 'kabuto', skirt: 'armor', cape: null, armor: true, weapon: 'nodachi', offhand: 'none', bulk: 1.18 },
  duelist: { skin: 0xd9a47e, cloth: 0x34303f, cloth2: 0x45404f, trim: 0xc02a3c, metal: 0xe6ecf2, hat: 'mask', skirt: 'none', cape: null, armor: false, weapon: 'wakizashi', offhand: 'wakizashi', bulk: 0.92 },
  archer: { skin: 0xd9a47e, cloth: 0x8a9050, cloth2: 0x6a6048, trim: 0xf0e6cc, metal: 0xe6ecf2, hat: 'band', skirt: 'hakama', cape: null, armor: false, weapon: 'knife', offhand: 'yumi', bulk: 0.98 },
  boss: { skin: 0xc79672, cloth: 0xb02a2a, cloth2: 0x3a2226, trim: 0xf0c050, metal: 0xf4f6fa, hat: 'kabutoBoss', skirt: 'armor', cape: 0x5a1218, armor: true, weapon: 'katana', offhand: 'none', bulk: 1.15 },
  dummy: { skin: 0xd8b878, cloth: 0xc8a468, cloth2: 0x9a7848, trim: 0x7a5632, metal: 0x888888, hat: 'straw', skirt: 'none', cape: null, armor: false, weapon: 'none', offhand: 'none', bulk: 1.05 },
};

const Y = new THREE.Vector3(0, 1, 0);
const _a = new THREE.Vector3();
const _c = new THREE.Vector3();
const _d = new THREE.Vector3();
const _m = new THREE.Matrix4();

/** Bone: a box stretched between two joints. */
class Limb {
  readonly mesh: THREE.Mesh;
  constructor(w: number, mat: THREE.Material, d = w) {
    this.mesh = new THREE.Mesh(boneGeo(w, d), mat);
    this.mesh.castShadow = true;
    addOutline(this.mesh);
  }
  place(a: THREE.Vector3, b: THREE.Vector3): void {
    _a.subVectors(b, a);
    const l = _a.length();
    this.mesh.position.copy(a);
    if (l > 1e-5) this.mesh.quaternion.setFromUnitVectors(Y, _a.multiplyScalar(1 / l));
    this.mesh.scale.set(1, Math.max(l, 1e-3), 1);
  }
}

const STEEL_GLOW = 0x4a5564;
const steelMat = (c: number) => toonMat(c, { emissive: STEEL_GLOW });

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
  // Blades are a touch oversized and self-lit: the weapon is what the eye must follow.
  const steel = steelMat(look.metal);
  const wrap = toonMat(0x2c2622);
  const brass = toonMat(0xd9a93f);
  const wood = toonMat(0x8a5a34);
  const add = (w: number, h: number, d: number, m: THREE.Material, y: number, x = 0, z = 0) => {
    const mesh = box(w, h, d, m);
    mesh.position.set(x, y, z);
    g.add(mesh);
    return mesh;
  };
  switch (kind) {
    case 'shortsword': {
      // Straight double-edged ranger short sword.
      add(0.075, 0.54, 0.028, steel, 0.35);
      add(0.04, 0.07, 0.028, steel, 0.655);
      add(0.2, 0.04, 0.06, brass, 0.07);
      add(0.04, 0.13, 0.04, wrap, -0.01);
      add(0.06, 0.05, 0.06, brass, -0.095);
      return { group: g, tip: 0.7, base: 0.1 };
    }
    case 'katana':
    case 'nodachi':
    case 'wakizashi': {
      const L = kind === 'nodachi' ? 1.1 : kind === 'katana' ? 0.78 : 0.5;
      const grip = kind === 'wakizashi' ? 0.14 : 0.27;
      const wBlade = kind === 'nodachi' ? 0.062 : 0.05;
      // Slight curve (sori): three stepped segments.
      const segs = 3;
      for (let i = 0; i < segs; i++) {
        const y0 = 0.05 + (L / segs) * i;
        const m = add(wBlade, L / segs + 0.01, 0.026, steel, y0 + L / segs / 2);
        m.position.z = -Math.pow((i + 0.5) / segs, 2) * 0.04 * L;
        m.rotation.x = 0.03 * (i + 1) * L;
      }
      add(0.11, 0.022, 0.11, brass, 0.035);
      add(0.04, grip, 0.04, wrap, 0.02 - grip / 2);
      return { group: g, tip: 0.05 + L, base: 0.1 };
    }
    case 'yari':
    case 'shortyari': {
      const back = kind === 'yari' ? 1.0 : 0.45;
      const front = kind === 'yari' ? 1.6 : 0.9;
      add(0.04, back + front, 0.04, wood, (front - back) / 2);
      add(0.075, 0.2, 0.028, steel, front + 0.1);
      add(0.04, 0.07, 0.028, steel, front + 0.225);
      add(0.07, 0.05, 0.07, brass, front - 0.01);
      return { group: g, tip: front + 0.26, base: front - 0.1 };
    }
    case 'knife':
      add(0.045, 0.22, 0.022, steel, 0.14);
      add(0.035, 0.1, 0.035, wrap, -0.02);
      return { group: g, tip: 0.26, base: 0.05 };
    default:
      return { group: g, tip: 0.1, base: 0 };
  }
}

function buildOffhand(kind: OffhandKind, look: Look): { group: THREE.Group; tip: number; base: number; bowString?: THREE.Line; bowTips?: [THREE.Vector3, THREE.Vector3] } | null {
  const g = new THREE.Group();
  const put = (mesh: THREE.Mesh, x: number, y: number, z: number) => {
    mesh.position.set(x, y, z);
    g.add(mesh);
    return mesh;
  };
  switch (kind) {
    case 'buckler': {
      // Very small round buckler strapped to the forearm. +Y = face normal.
      const wood = toonMat(0x9a6a3c);
      const steel = steelMat(0xcfd6de);
      const disc = (r: number, h: number, m: THREE.Material) => {
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 8), m);
        mesh.rotation.y = Math.PI / 8;
        mesh.castShadow = true;
        addOutline(mesh);
        return mesh;
      };
      put(disc(0.2, 0.03, steel), 0, -0.006, 0);
      put(disc(0.165, 0.04, wood), 0, 0.004, 0);
      put(box(0.1, 0.05, 0.1, steel), 0, 0.03, 0);
      return { group: g, tip: 0, base: 0 };
    }
    case 'tate': {
      // Tall wooden shield. +Y = up, +Z = face normal.
      const front = pixelTex(
        ['bbbbbbbb', 'wwwwwwww', 'wwwwwwww', 'wwwttwww', 'wwtwwtww', 'wwtwwtww', 'wwwttwww', 'wwwwwwww', 'wwwwwwww', 'bbbbbbbb', 'wwwwwwww', 'wwwwwwww'],
        { w: 0xb23a2e, b: 0x3a2c22, t: look.trim === 0xb23a2e ? 0xf0e6cc : look.trim },
      );
      const wood = toonMat(0xb23a2e);
      const face = toonMat(0xffffff, { map: front });
      put(box(0.64, 1.14, 0.06, [wood, wood, wood, wood, face, wood]), 0, 0.1, 0.02);
      return { group: g, tip: 0.6, base: -0.4 };
    }
    case 'wakizashi': {
      const w = buildWeapon('wakizashi', look);
      return { group: w.group, tip: w.tip, base: w.base };
    }
    case 'yumi': {
      // Asymmetric longbow (grip at lower third). +Y = bow up, +Z = shooting direction.
      const top = 1.25;
      const bot = -0.72;
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 8; i++) {
        const y = bot + ((top - bot) * i) / 8;
        const u = (y - bot) / (top - bot);
        pts.push(new THREE.Vector3(0, y, Math.sin(u * Math.PI) * 0.14 - Math.sin(u * Math.PI * 2) * 0.02));
      }
      g.add(bowLimbs(pts, toonMat(0x4a3020)));
      put(box(0.05, 0.1, 0.05, toonMat(0xf0e6cc)), 0, 0, 0.14);
      const string = makeString();
      g.add(string);
      return { group: g, tip: top, base: bot, bowString: string, bowTips: [new THREE.Vector3(0, top, 0.0), new THREE.Vector3(0, bot, 0.0)] };
    }
    default:
      return null;
  }
}

/** A bow as a chain of straight box segments. */
function bowLimbs(pts: THREE.Vector3[], mat: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  for (let i = 0; i + 1 < pts.length; i++) {
    const seg = new Limb(0.034, mat);
    seg.place(pts[i], pts[i + 1]);
    g.add(seg.mesh);
  }
  return g;
}

function makeString(): THREE.Line {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(9), 3));
  const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xf4eedc }));
  line.frustumCulled = false;
  return line;
}

/** The ranger's recurve bow: on the back normally, in the left hand while aiming. */
function buildRangerBow(): { group: THREE.Group; string: THREE.Line; tips: [THREE.Vector3, THREE.Vector3] } {
  const g = new THREE.Group();
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= 8; i++) {
    const u = i / 8;
    pts.push(new THREE.Vector3(0, -0.6 + 1.2 * u, Math.sin(u * Math.PI) * 0.12 - Math.pow(Math.abs(u - 0.5) * 2, 6) * 0.07));
  }
  g.add(bowLimbs(pts, toonMat(0x6a4426)));
  const string = makeString();
  g.add(string);
  return { group: g, string, tips: [new THREE.Vector3(0, 0.6, -0.07), new THREE.Vector3(0, -0.6, -0.07)] };
}

/** Darken a colour (pixel-art shadow tone). */
function shade(hex: number, k: number): number {
  const r = Math.round(((hex >> 16) & 255) * k);
  const g = Math.round(((hex >> 8) & 255) * k);
  const b = Math.round((hex & 255) * k);
  return (r << 16) | (g << 8) | b;
}

/**
 * 8×8 pixel faces. s skin · k skin in shadow · m mouth · d eye · h hair · w white · c cloth ·
 * C cloth in shadow · t trim · r red · e glowing eye · n / N mask (menpō).
 */
const HEADS: Record<Look['hat'], { front: string[]; side: string[]; top: string }> = {
  hood: {
    front: ['cccccccc', 'CCCCCCCC', 'kkkkkkkk', 'kdkssdkk', 'ssssssss', 'rrrrrrrr', 'rrrrrrrr', 'rrrrrrrr'],
    side: ['cccccccc', 'cccccccc', 'cccccccc', 'cccccccc', 'cccccccc', 'rrrrrrrr', 'rrrrrrrr', 'rrrrrrrr'],
    top: 'c',
  },
  jingasa: {
    front: ['hhhhhhhh', 'kkkkkkkk', 'kkkkkkkk', 'sdsssdss', 'ssssssss', 'ssssssss', 'ssmmmmss', 'ssssssss'],
    side: ['hhhhhhhh', 'hhhhhhhh', 'hhhhhsss', 'hhhhssss', 'hhhsssss', 'ssssssss', 'ssssssss', 'ssssssss'],
    top: 'h',
  },
  jingasaDark: {
    front: ['hhhhhhhh', 'kkkkkkkk', 'kkkkkkkk', 'sdsssdss', 'ssssssss', 'ssssssss', 'sssmmsss', 'ssssssss'],
    side: ['hhhhhhhh', 'hhhhhhhh', 'hhhhhsss', 'hhhhssss', 'hhhsssss', 'ssssssss', 'ssssssss', 'ssssssss'],
    top: 'h',
  },
  kabuto: {
    front: ['tttttttt', 'kkkkkkkk', 'kekkkkek', 'kkkkkkkk', 'nnnnnnnn', 'nNnNnNnN', 'nnnnnnnn', 'nnnnnnnn'],
    side: ['tttttttt', 'kkkkkkkk', 'kkkkkkkk', 'kkkkkkkk', 'nnnnnnnn', 'nnnnnnnn', 'nnnnnnnn', 'nnnnnnnn'],
    top: 't',
  },
  kabutoBoss: {
    front: ['nnnnnnnn', 'kkkkkkkk', 'keekkeek', 'kkkkkkkk', 'nnnnnnnn', 'nwnwnwnw', 'nnnnnnnn', 'nnnnnnnn'],
    side: ['nnnnnnnn', 'kkkkkkkk', 'kkkkkkkk', 'kkkkkkkk', 'nnnnnnnn', 'nnnnnnnn', 'nnnnnnnn', 'nnnnnnnn'],
    top: 'n',
  },
  mask: {
    front: ['cccccccc', 'cccccccc', 'rrrrrrrr', 'rwrrrrwr', 'rrrrrrrr', 'cccccccc', 'CCCCCCCC', 'cccccccc'],
    side: ['cccccccc', 'cccccccc', 'rrrrrrrr', 'rrrrrrrr', 'rrrrrrrr', 'cccccccc', 'cccccccc', 'cccccccc'],
    top: 'c',
  },
  band: {
    front: ['hhhhhhhh', 'wwwwwwww', 'ssssssss', 'sdsssdss', 'ssssssss', 'ssssssss', 'sssmmsss', 'ssssssss'],
    side: ['hhhhhhhh', 'wwwwwwww', 'hhhhhsss', 'hhhhssss', 'hhhsssss', 'ssssssss', 'ssssssss', 'ssssssss'],
    top: 'h',
  },
  straw: {
    front: ['ssssssss', 'ssssssss', 'sdsssdss', 'ssssssss', 'ssssssss', 'sdddddds', 'ssssssss', 'ssssssss'],
    side: ['ssssssss', 'ssssssss', 'ssssssss', 'ssssssss', 'ssssssss', 'ssssssss', 'ssssssss', 'ssssssss'],
    top: 's',
  },
};

// ── Character view ──────────────────────────────────────────────────────────
export class CharacterView {
  readonly root = new THREE.Group();
  readonly kind: CharKind;
  readonly look: Look;
  private readonly mats: THREE.MeshToonMaterial[] = [];
  private readonly textures: THREE.Texture[] = [];
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
    const m = (c: number, o?: Parameters<typeof toonMat>[1]) => {
      const mm = toonMat(c, o);
      this.mats.push(mm);
      return mm;
    };
    const tex = (rows: string[], pal: Record<string, number>) => {
      const t = pixelTex(rows, pal);
      this.textures.push(t);
      return t;
    };
    const skin = m(look.skin);
    const cloth = m(look.cloth);
    const cloth2 = m(look.cloth2);
    const trim = m(look.trim);
    const bulk = look.bulk;
    this.grip = look.weapon === 'katana' ? -0.2 : look.weapon === 'nodachi' ? -0.25 : look.weapon === 'yari' ? 0.55 : null;
    const belt = shade(look.cloth2, 0.55);
    const P: Record<string, number> = { c: look.cloth, C: shade(look.cloth, 0.78), l: look.cloth2, t: look.trim, s: look.skin, b: belt, y: 0xf0c050, a: look.cloth, A: shade(look.cloth, 0.7) };
    // Armour: rows of plates with coloured lacing (odoshi).
    const laced = look.armor ? m(0xffffff, { map: tex(['aaaa', 'AAAA', 'tttt', 'aaaa', 'AAAA', 'tttt'], P) }) : cloth;

    // Torso: a box with the robe drawn on it (collar, strap, belt).
    const frontRows =
      kind === 'player'
        ? ['cccccccc', 'lccccccc', 'clcccccc', 'cclccccc', 'ccclcccc', 'cccclccc', 'bbbbbybb', 'bbbbbybb', 'cccccccc', 'CCCCCCCC']
        : kind === 'dummy'
          ? ['cccccccc', 'cCcccCcc', 'cccccccc', 'ccCcccCc', 'cccccccc', 'cCcccCcc', 'bbbbbbbb', 'cccccccc', 'ccCcccCc', 'cccccccc']
          : look.armor
            ? ['llllllll', 'llllllll', 'llllllll', 'llllllll', 'llllllll', 'llllllll', 'bbbbbbbb', 'bbbbbbbb', 'llllllll', 'llllllll']
            : ['ctsssstc', 'cctsstcc', 'ccctcccc', 'ccctcccc', 'cccctccc', 'cccccccc', 'bbbbbbbb', 'bbbbbbbb', 'cccccccc', 'CCCCCCCC'];
    const sideRows = frontRows.map((r, i) => (i === 6 || i === 7 ? 'bbbbbbbb' : r[0].repeat(8)));
    const torsoFront = m(0xffffff, { map: tex(frontRows, P) });
    const torsoSide = m(0xffffff, { map: tex(sideRows, P) });
    const torsoCap = look.armor ? cloth2 : cloth;
    this.torso = box(0.34 * bulk, 0.5, 0.22 * bulk, [torsoSide, torsoSide, torsoCap, torsoCap, torsoFront, torsoSide]);
    this.root.add(this.torso);
    this.pelvisMesh = box(0.3 * bulk, 0.16, 0.2 * bulk, cloth2);
    this.root.add(this.pelvisMesh);

    this.neck = new Limb(0.09, skin);
    this.root.add(this.neck.mesh);
    this.head = this.buildHead(look, m, tex);
    this.root.add(this.head);

    const armTopMat = look.armor ? laced : cloth;
    const foreMat = kind === 'player' ? cloth2 : look.armor ? cloth2 : cloth;
    this.uArmR = new Limb(0.115 * bulk, armTopMat);
    this.lArmR = new Limb(0.1 * bulk, foreMat);
    this.uArmL = new Limb(0.115 * bulk, armTopMat);
    this.lArmL = new Limb(0.1 * bulk, foreMat);
    const legMat = kind === 'player' ? m(0x8a6e4e) : cloth2;
    const bootMat = kind === 'player' || look.armor ? m(0x3a2e28) : legMat;
    this.thighR = new Limb(0.145 * bulk, legMat);
    this.shinR = new Limb(0.125 * bulk, bootMat);
    this.thighL = new Limb(0.145 * bulk, legMat);
    this.shinL = new Limb(0.125 * bulk, bootMat);
    for (const l of [this.uArmR, this.lArmR, this.uArmL, this.lArmL, this.thighR, this.shinR, this.thighL, this.shinL]) this.root.add(l.mesh);
    // Joint cubes close the gap where two bone boxes meet at an angle (no outline: one silhouette).
    for (let i = 0; i < 4; i++) {
      const sz = (i < 2 ? 0.112 : 0.14) * bulk;
      const j = box(sz, sz, sz, i < 2 ? armTopMat : legMat, false);
      this.joints.push(j);
      this.root.add(j);
    }
    const handMat = kind === 'player' ? cloth2 : skin;
    this.handRMesh = box(0.1, 0.1, 0.1, handMat);
    this.handLMesh = box(0.1, 0.1, 0.1, handMat);
    const footGeo = new THREE.BoxGeometry(0.12, 0.08, 0.25);
    footGeo.translate(0, 0.04, 0.04);
    const footMat = m(kind === 'dummy' ? look.cloth2 : 0x33292a);
    const foot = () => {
      const f = new THREE.Mesh(footGeo, footMat);
      f.castShadow = true;
      addOutline(f);
      return f;
    };
    this.footRMesh = foot();
    this.footLMesh = foot();
    for (const x of [this.handRMesh, this.handLMesh, this.footRMesh, this.footLMesh]) this.root.add(x);

    // Skirt / hakama / armor tassets: a box that flares toward the hem.
    if (look.skirt !== 'none') {
      const long = look.skirt === 'hakama';
      const armored = look.skirt === 'armor';
      const geo = long
        ? flareGeo(0.36 * bulk, 0.25 * bulk, 0.62 * bulk, 0.5 * bulk, 0.6)
        : armored
          ? flareGeo(0.38 * bulk, 0.27 * bulk, 0.58 * bulk, 0.44 * bulk, 0.38)
          : flareGeo(0.36 * bulk, 0.25 * bulk, 0.48 * bulk, 0.37 * bulk, 0.34);
      const mat = long
        ? m(0xffffff, { map: tex(['llll', 'llll', 'llll', 'llll', 'LLLL'], { l: look.cloth2, L: shade(look.cloth2, 0.75) }), side: THREE.DoubleSide })
        : armored
          ? m(0xffffff, { map: tex(['aaaa', 'AAAA', 'tttt', 'aaaa', 'AAAA', 'tttt'], P), side: THREE.DoubleSide })
          : m(0xffffff, { map: tex(['cccc', 'cccc', 'cccc', 'CCCC', 'tttt'], P), side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      addOutline(mesh);
      this.skirt = mesh;
      this.root.add(mesh);
    }
    if (look.cape !== null) {
      const geo = new THREE.BoxGeometry(0.46 * bulk, 0.92, 0.035);
      geo.translate(0, -0.46, 0);
      this.cape = new THREE.Mesh(geo, m(look.cape));
      this.cape.castShadow = true;
      addOutline(this.cape);
      this.root.add(this.cape);
    }
    if (look.armor) {
      for (let i = 0; i < 2; i++) {
        const pad = box(0.19 * bulk, 0.07, 0.23 * bulk, laced);
        const edge = box(0.2 * bulk, 0.025, 0.24 * bulk, trim, false);
        edge.position.y = -0.04;
        pad.add(edge);
        this.shoulderPads.push(pad);
        this.root.add(pad);
      }
      this.chestPlate = box(0.37 * bulk, 0.32, 0.07, laced);
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
      const q = box(0.1, 0.5, 0.1, m(0x7a5a3c));
      this.quiver = q;
      this.root.add(q);
      const fletch = box(0.11, 0.1, 0.11, m(0xf4eedc));
      fletch.position.y = 0.3;
      q.add(fletch);
    }
    if (kind === 'player' || kind === 'archer') {
      const geo = new THREE.BoxGeometry(0.02, 0.8, 0.02);
      geo.translate(0, 0.4, 0);
      const arrow = new THREE.Mesh(geo, m(0xf0e2bc));
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

  /** A cube head with a pixel face, plus the headgear that tells the enemy types apart. */
  private buildHead(look: Look, m: (c: number, o?: Parameters<typeof toonMat>[1]) => THREE.MeshToonMaterial, tex: (rows: string[], pal: Record<string, number>) => THREE.Texture): THREE.Group {
    const g = new THREE.Group();
    const HS = 0.25;
    const hair = 0x2e2428;
    const P: Record<string, number> = {
      s: look.skin, k: shade(look.skin, 0.62), d: 0x1c1418, h: hair, m: shade(look.skin, 0.72), w: 0xffffff,
      c: look.cloth, C: shade(look.cloth, 0.7), t: look.trim, r: 0xc8402f, e: 0xff5a3c, n: 0x2a2024, N: 0x4a3a3c,
    };
    const F = HEADS[look.hat];
    const face = m(0xffffff, { map: tex(F.front, P) });
    // Side rows are drawn for the −x face (hair at the back); the +x face is its mirror image.
    const side = m(0xffffff, { map: tex(F.side, P) });
    const sideMirror = m(0xffffff, { map: tex(F.side.map((r) => [...r].reverse().join('')), P) });
    const top = m(P[F.top]);
    const chin = m(P[F.side[7][0]]);
    const add = (mesh: THREE.Mesh, x = 0, y = 0, z = 0) => {
      mesh.position.set(x, y, z);
      g.add(mesh);
      return mesh;
    };
    add(box(HS, HS, HS * 0.96, [sideMirror, side, top, chin, face, m(0xffffff, { map: tex(F.side.map((r) => r[0].repeat(8)), P) })]));
    const cloth = m(look.cloth);
    switch (look.hat) {
      case 'hood': {
        // The hood wraps the top, back and sides; the face pokes out in front under a small brim.
        add(box(0.29, 0.28, 0.27, cloth), 0, 0.02, -0.03);
        add(box(0.29, 0.05, 0.07, cloth), 0, 0.125, 0.115);
        add(box(0.14, 0.12, 0.12, cloth), 0, 0.02, -0.2);
        break;
      }
      case 'jingasa':
      case 'jingasaDark': {
        const straw = look.hat === 'jingasa';
        const c1 = m(straw ? 0xe0b860 : 0x4a4440);
        const c2 = m(straw ? 0xc79a48 : 0x34302e);
        add(box(0.64, 0.035, 0.64, c2), 0, 0.105, 0);
        add(box(0.44, 0.05, 0.44, c1), 0, 0.145, 0);
        add(box(0.22, 0.05, 0.22, c2), 0, 0.19, 0);
        break;
      }
      case 'kabuto':
      case 'kabutoBoss': {
        const boss = look.hat === 'kabutoBoss';
        const bowl = m(boss ? 0x3a2226 : look.trim);
        const gold = m(0xf0c050);
        add(box(0.3, 0.13, 0.3, bowl), 0, 0.1, 0);
        add(box(0.32, 0.03, 0.1, gold), 0, 0.05, 0.13);
        // Shikoro: the neck guard flaring out at the back and sides.
        add(box(0.4, 0.1, 0.24, m(0xffffff, { map: tex(['aaaa', 'tttt', 'aaaa'], { a: look.cloth, t: look.trim }) })), 0, -0.03, -0.09);
        if (boss) {
          // Crescent crest.
          for (const s of [-1, 1]) {
            const horn = add(box(0.05, 0.26, 0.03, gold), s * 0.17, 0.3, 0.12);
            horn.rotation.z = -s * 0.3;
            horn.name = 'armor';
          }
          add(box(0.3, 0.05, 0.03, gold), 0, 0.185, 0.12).name = 'armor';
        } else {
          for (const s of [-1, 1]) {
            const horn = add(box(0.045, 0.22, 0.03, gold), s * 0.09, 0.26, 0.12);
            horn.rotation.z = -s * 0.5;
          }
        }
        break;
      }
      case 'mask':
        add(box(0.07, 0.07, 0.1, m(0xc02a3c)), 0.05, 0.02, -0.16);
        break;
      case 'band':
        add(box(0.06, 0.14, 0.05, m(0xf0e6cc)), 0.05, -0.02, -0.15);
        break;
      case 'straw':
        add(box(0.34, 0.04, 0.34, m(0xe0c078)), 0, 0.13, 0);
        add(box(0.2, 0.07, 0.2, m(0xcaa860)), 0, 0.18, 0);
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
    // The lamellar skirt becomes a plain dark under-robe.
    if (this.skirt) {
      const sm = this.skirt.material as THREE.MeshToonMaterial;
      sm.map = null;
      sm.color.setHex(0x4a2428);
      sm.needsUpdate = true;
    }
    const am = toonMat(this.look.cloth2);
    this.mats.push(am);
    for (const part of [this.uArmR.mesh, this.uArmL.mesh, this.joints[0], this.joints[1]]) part.material = am;
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
    for (const t of this.textures) t.dispose();
  }
}

function clampReach(root: THREE.Vector3, target: THREE.Vector3, max: number): void {
  _a.subVectors(target, root);
  const l = _a.length();
  if (l > max) target.copy(root).addScaledVector(_a, max / l);
}

