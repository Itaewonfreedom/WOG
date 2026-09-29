// 활쏘기 (archery).
//
//  - 당기기: 조준 중 베기 버튼을 누르고 있으면 시위를 당긴다. 화살 종류마다 만작(full draw) 시간이 다르다.
//  - 만작 판정: 완전히 당긴 직후 perfectDrawWindow 틱 안에 놓으면 "정사(正射)" — 탄퍼짐 0, 피해 ×1.3.
//  - 그 이후로 계속 버티면 팔이 떨려(fatigue) 탄퍼짐이 커진다.
//  - 덜 당기면 느리고 약하고 퍼진다.
//  - 헤드샷 ×2.6. 방패 정면은 막히고(관통 화살은 방패를 걷어냄), 갑주 몸통은 일반 화살이 튕긴다.
//  - 적의 화살/쿠나이는 방패 튕기기로 쳐낼 수 있다.

import type { Fighter } from './fighter';
import type { InputFrame, Vec3 } from './input';
import { lerp, toYaw } from './math';
import { DT, HITSTOP, T } from './tuning';
import type { ArrowType, MoveDef, Projectile } from './types';
import type { World } from './world';
import { applyHitToEnemy, damagePlayer, deflectReady, playerInvulnerable } from './combat';

const v3 = (x: number, y: number, z: number): Vec3 => ({ x, y, z });
const v3add = (a: Vec3, b: Vec3): Vec3 => v3(a.x + b.x, a.y + b.y, a.z + b.z);
const v3sub = (a: Vec3, b: Vec3): Vec3 => v3(a.x - b.x, a.y - b.y, a.z - b.z);
const v3scale = (a: Vec3, s: number): Vec3 => v3(a.x * s, a.y * s, a.z * s);
const v3len = (a: Vec3): number => Math.hypot(a.x, a.y, a.z);
const v3norm = (a: Vec3): Vec3 => {
  const l = v3len(a);
  return l > 1e-9 ? v3scale(a, 1 / l) : v3(0, 0, 1);
};

export const headCenter = (f: Fighter): Vec3 => v3(f.pos.x, 1.62 * f.size, f.pos.z);
export const HEAD_R = 0.17;

/** Is point inside the fighter's body capsule / head sphere? */
function pointHit(f: Fighter, p: Vec3): 'head' | 'body' | null {
  const h = headCenter(f);
  const hr = HEAD_R * f.size;
  if ((p.x - h.x) ** 2 + (p.y - h.y) ** 2 + (p.z - h.z) ** 2 <= hr * hr) return 'head';
  if (p.y < 0.1 || p.y > 1.45 * f.size) return null;
  const r = f.radius * 0.85;
  return (p.x - f.pos.x) ** 2 + (p.z - f.pos.z) ** 2 <= r * r ? 'body' : null;
}

/** Draw state helpers (also used by the HUD). */
export function drawInfo(draw: number, type: ArrowType, windowScale = 1) {
  const full = T.drawTicks[type];
  const amount = Math.min(1, draw / full);
  const perfectEnd = full + T.perfectDrawWindow * windowScale;
  const perfect = draw >= full && draw <= perfectEnd;
  const fatigue = Math.max(0, (draw - perfectEnd) / T.fatigueTicks);
  const spread = perfect ? 0 : (1 - amount) * 0.07 + Math.min(1, fatigue) * 0.06;
  return { amount, perfect, fatigue, spread, full };
}

/** Ray vs sphere; returns distance or -1. */
function raySphere(o: Vec3, d: Vec3, c: Vec3, r: number): number {
  const oc = v3sub(o, c);
  const b = oc.x * d.x + oc.y * d.y + oc.z * d.z;
  const cc = oc.x * oc.x + oc.y * oc.y + oc.z * oc.z - r * r;
  const disc = b * b - cc;
  if (disc < 0) return -1;
  const t = -b - Math.sqrt(disc);
  return t > 0 ? t : -1;
}

/** What is under the crosshair? Used so arrows land where the reticle points. */
export function aimPoint(w: World, origin: Vec3, dir: Vec3): Vec3 {
  let best = 90;
  for (const e of w.fighters) {
    if (e.team !== 'enemy' || !e.targetable) continue;
    const s = e.size;
    const spheres: [Vec3, number][] = [
      [headCenter(e), HEAD_R * s],
      [v3(e.pos.x, 1.2 * s, e.pos.z), e.radius * 0.8],
      [v3(e.pos.x, 0.8 * s, e.pos.z), e.radius * 0.85],
      [v3(e.pos.x, 0.4 * s, e.pos.z), e.radius * 0.8],
    ];
    for (const [c, r] of spheres) {
      const t = raySphere(origin, dir, c, r);
      if (t > 0 && t < best) best = t;
    }
  }
  if (dir.y < -1e-3) {
    const tg = -origin.y / dir.y;
    if (tg > 0 && tg < best) best = tg;
  }
  return v3add(origin, v3scale(dir, best));
}

/** Launch velocity from `from` to hit `to` at `speed`, compensating gravity. */
function ballistic(from: Vec3, to: Vec3, speed: number, g: number): Vec3 {
  const delta = v3sub(to, from);
  const d = v3len(delta);
  const t = d / speed;
  const v = v3scale(v3norm(delta), speed);
  v.y += 0.5 * g * t;
  return v;
}

function jitter(w: World, v: Vec3, spread: number): Vec3 {
  if (spread <= 0) return v;
  const s = v3len(v);
  const d = v3norm(v);
  const n = v3norm(v3(d.x + w.rng.range(-spread, spread), d.y + w.rng.range(-spread, spread) * 0.8, d.z + w.rng.range(-spread, spread)));
  return v3scale(n, s);
}

function bowOrigin(p: Fighter): Vec3 {
  const f = p.forward();
  return v3(p.pos.x + f.x * 0.35 - f.z * 0.12, 1.48, p.pos.z + f.z * 0.35 + f.x * 0.12);
}

function newArrow(w: World, owner: Fighter, kind: 'arrow' | 'kunai', type: ArrowType, pos: Vec3, vel: Vec3, damage: number, gravity: number, perfect: boolean): Projectile {
  const pr: Projectile = {
    id: w.newProjectileId(),
    kind,
    arrowType: type,
    ownerId: owner.id,
    team: owner.team,
    pos: { ...pos },
    prevPos: { ...pos },
    vel,
    damage,
    gravity,
    alive: true,
    stuck: false,
    age: 0,
    perfect,
  };
  w.projectiles.push(pr);
  // Keep the number of stuck arrows bounded.
  if (w.projectiles.length > 90) {
    const i = w.projectiles.findIndex((x) => x.stuck);
    if (i >= 0) w.projectiles.splice(i, 1);
  }
  return pr;
}

export function fireArrow(w: World, p: Fighter, inp: InputFrame, draw: number): void {
  const ps = w.ps;
  const type = ps.arrowType;
  if (ps.arrows[type] <= 0) return;
  const info = drawInfo(draw, type, w.settings.windowScale);
  const speed = lerp(T.arrowSpeed[0], T.arrowSpeed[1], Math.pow(info.amount, 0.8)) * (type === 'heavy' ? 0.8 : 1);
  const g = T.arrowGravity * (type === 'heavy' ? 0.6 : 0.4);
  const origin = bowOrigin(p);
  const target = aimPoint(w, inp.aimOrigin, v3norm(inp.aimDir));
  const vel = jitter(w, ballistic(origin, target, speed, g), info.spread);
  const dmg = T.arrowDamage[type] * (0.35 + 0.65 * info.amount) * (info.perfect ? T.perfectMul : 1);
  newArrow(w, p, 'arrow', type, origin, vel, dmg, g, info.perfect);
  ps.arrows[type]--;
  w.emit({ type: 'arrowFire', id: p.id, owner: p.id, arrowType: type, perfect: info.perfect });
  if (info.perfect) w.emit({ type: 'text', text: '정사', sub: '만작', style: 'info', id: p.id });
}

/** 속사: snap shot at the soft target's chest, no aiming. */
export function quickshotRelease(w: World, p: Fighter): void {
  const ps = w.ps;
  if (ps.arrows.standard <= 0) return;
  const tgt = w.get(p.act.targetId);
  const origin = bowOrigin(p);
  const g = T.arrowGravity * 0.4;
  const to = tgt && tgt.targetable ? v3(tgt.pos.x, 1.15 * tgt.size, tgt.pos.z) : v3add(origin, v3(p.forward().x * 30, 0, p.forward().z * 30));
  const vel = jitter(w, ballistic(origin, to, 55, g), 0.01);
  newArrow(w, p, 'arrow', 'standard', origin, vel, T.quickshotDamage, g, false);
  ps.arrows.standard--;
  w.emit({ type: 'arrowFire', id: p.id, owner: p.id, arrowType: 'standard', perfect: false });
}

export function spawnEnemyProjectile(w: World, e: Fighter, m: MoveDef): void {
  const p = w.player;
  const kunai = m.projectile === 'kunai';
  const speed = kunai ? 24 : 34;
  const g = T.arrowGravity * (kunai ? 0.5 : 0.4);
  const f = e.forward();
  const origin = v3(e.pos.x + f.x * 0.4, 1.45, e.pos.z + f.z * 0.4);
  const dist = Math.hypot(p.pos.x - e.pos.x, p.pos.z - e.pos.z);
  const lead = (dist / speed) * 0.5;
  const aim = v3(p.pos.x + p.vel.x * lead, 1.15, p.pos.z + p.vel.z * lead);
  const vel = jitter(w, ballistic(origin, aim, speed, g), 0.012);
  newArrow(w, e, kunai ? 'kunai' : 'arrow', 'standard', origin, vel, m.damage, g, false);
  w.emit({ type: 'arrowFire', id: e.id, owner: e.id, arrowType: 'standard', perfect: false });
}

// ─────────────────────────────────────────────────────────────────────────────
export function stepProjectiles(w: World): void {
  for (const pr of w.projectiles) {
    pr.age++;
    if (!pr.alive) continue;
    if (pr.stuck) {
      if (pr.age > 900) pr.alive = false;
      continue;
    }
    pr.prevPos = { ...pr.pos };
    pr.vel.y -= pr.gravity * DT;
    const next = v3add(pr.pos, v3scale(pr.vel, DT));
    const seg = v3sub(next, pr.pos);
    const steps = Math.max(1, Math.ceil(v3len(seg) / 0.08));
    let hit = false;
    for (let i = 1; i <= steps && !hit; i++) {
      const pt = v3add(pr.pos, v3scale(seg, i / steps));
      if (pt.y <= 0) {
        pr.pos = v3(pt.x, 0.02, pt.z);
        pr.stuck = true;
        hit = true;
        if (pr.team === 'player') w.emit({ type: 'arrowMiss', pos: pr.pos });
        break;
      }
      for (const f of w.fighters) {
        if (f.team === pr.team || !f.targetable) continue;
        const where = pointHit(f, pt);
        if (!where) continue;
        if (pr.team === 'enemy') {
          if (playerInvulnerable(w, f)) continue;
          hit = resolveOnPlayerProjectile(w, pr, f, pt);
        } else {
          hit = resolveArrowOnEnemy(w, pr, f, where === 'head', pt);
        }
        if (hit) {
          pr.pos = pt;
          break;
        }
      }
    }
    if (!hit) pr.pos = next;
    if (pr.age > 240 || Math.hypot(pr.pos.x, pr.pos.z) > 140) pr.alive = false;
  }
  for (let i = w.projectiles.length - 1; i >= 0; i--) if (!w.projectiles[i].alive) w.projectiles.splice(i, 1);
}

function stickTo(pr: Projectile, f: Fighter, pt: Vec3): void {
  pr.stuck = true;
  pr.stuckTo = f.id;
  const dx = pt.x - f.pos.x;
  const dz = pt.z - f.pos.z;
  // Store offset in the fighter's local frame so the arrow follows it.
  const c = Math.cos(-f.yaw);
  const s = Math.sin(-f.yaw);
  const yawDir = Math.atan2(pr.vel.x, pr.vel.z) - f.yaw;
  pr.stuckOffset = { x: dx * c + dz * s, y: pt.y, z: -dx * s + dz * c, yaw: yawDir };
  pr.age = 0;
}

function resolveOnPlayerProjectile(w: World, pr: Projectile, p: Fighter, pt: Vec3): boolean {
  const from = { x: p.pos.x - pr.vel.x, z: p.pos.z - pr.vel.z };
  const frontal = p.angleTo(from) <= T.guardArc;
  const owner = w.get(pr.ownerId) ?? p;
  if (p.is('guard', 'deflect', 'blockstun') && frontal) {
    pr.alive = false;
    if (deflectReady(w, p)) {
      w.stats.deflects++;
      w.gainResolve(T.resolveGain.deflect * 0.5);
      w.freeze(HITSTOP.block);
      w.emit({ type: 'deflect', defender: p.id, attacker: owner.id, pos: { x: pt.x, z: pt.z }, arrow: true });
      w.emit({ type: 'text', text: '화살 튕기기', sub: '矢弾き', style: 'deflect', id: p.id });
    } else {
      p.addPosture(8);
      w.emit({ type: 'block', defender: p.id, attacker: owner.id, pos: { x: pt.x, z: pt.z }, enemy: false });
    }
    return true;
  }
  stickTo(pr, p, pt);
  pr.alive = false;
  damagePlayer(w, owner, p, pr.damage, false);
  return true;
}

function resolveArrowOnEnemy(w: World, pr: Projectile, e: Fighter, headshot: boolean, pt: Vec3): boolean {
  const p = w.player;
  const arch = e.arch!;
  const incoming = toYaw({ x: -pr.vel.x, z: -pr.vel.z });
  const frontal = Math.abs(((incoming - e.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI) <= (70 * Math.PI) / 180;
  const heavy = pr.arrowType === 'heavy';

  // Big shield takes frontal arrows (heavy arrows knock it aside).
  if (arch.arrow.shieldFront && frontal && e.shieldOpen <= 0 && !e.defenseless && !(headshot && pr.perfect)) {
    stickTo(pr, e, pt);
    if (heavy) {
      e.shieldOpen = 160;
      e.set('stagger', 30);
      if (e.brain) e.brain.token = false;
      w.emit({ type: 'shieldOpen', id: e.id });
      w.emit({ type: 'text', text: '방패 걷어냄', sub: '관통 화살', style: 'effective', id: e.id });
    } else {
      w.emit({ type: 'text', text: '방패에 막힘', sub: '관통 화살(2)을 써라', style: 'bad', id: e.id });
    }
    w.emit({ type: 'arrowHit', target: e.id, pos: pt, headshot: false, dmg: 0, lethal: false, blocked: !heavy });
    return true;
  }

  let mul = headshot ? T.headshotMul * arch.arrow.headMul : arch.arrow.bodyMul;
  const glance = !headshot && arch.arrow.glanceBody && !heavy;
  if (!headshot && arch.arrow.glanceBody && heavy) mul = 1.1;
  const dmg = pr.damage * mul;
  stickTo(pr, e, pt);
  if (glance) {
    w.emit({ type: 'text', text: '갑옷에 튕김', sub: '관통 화살 / 머리를 노려라', style: 'bad', id: e.id });
  }
  const before = e.hp;
  applyHitToEnemy(w, p, e, dmg, dmg * 0.6, { heavy: heavy || headshot, interrupt: true, result: glance ? 'glance' : headshot ? 'effective' : 'normal', atkType: 'thrust', knockback: heavy ? 0.6 : 0, arrow: true });
  const lethal = before > 0 && e.hp <= 0;
  if (headshot) {
    w.stats.headshots++;
    w.gainResolve(T.resolveGain.headshot);
    w.emit({ type: 'text', text: '헤드샷', sub: pr.perfect ? '정사 · 頭' : '頭', style: 'effective', id: e.id });
  }
  if (pr.arrowType === 'fire' && e.alive) {
    e.burning = T.burnTicks;
    if (!arch.heavyBody && !arch.isBoss && !e.is('broken', 'finished')) {
      e.set('fear', 90);
      if (e.brain) e.brain.token = false;
    }
    w.emit({ type: 'burn', id: e.id });
  }
  w.emit({ type: 'arrowHit', target: e.id, pos: pt, headshot, dmg, lethal, blocked: false });
  if (lethal && e.deathKind !== 'arrow') e.deathKind = 'arrow';
  if (lethal && !e.alive && e.brain) e.brain.token = false;
  return true;
}
