// Enemy AI: a director hands out attack tokens (only a couple of enemies commit at once,
// the rest circle and pressure) – the classic samurai-movie "one at a time" crowd fight.

import type { Fighter } from './fighter';
import { add, fromYaw, len, norm, scale, sub, turnToward, type Vec2 } from './math';
import { getMove } from './moves';
import { T } from './tuning';
import type { Brain, EnemyMoveChoice, MoveDef } from './types';
import type { World } from './world';
import { rightOf } from './combat';

export function makeBrain(w: World, f: Fighter): Brain {
  const cd = f.arch?.ai.cooldown ?? [60, 120];
  return {
    token: false,
    cooldown: Math.round(w.rng.range(cd[0] * 0.5, cd[1])),
    strafeDir: w.rng.chance(0.5) ? 1 : -1,
    strafeTimer: Math.round(w.rng.range(60, 180)),
    plan: null,
    guardTimer: 0,
    pendingGuard: false,
    counter: false,
    aware: true,
    slot: 0,
    rangedCooldown: Math.round(w.rng.range(60, 140)),
  };
}

/** Enemies hold back while the player performs a cinematic move (finisher / issen). */
function playerCinematic(w: World): boolean {
  return w.player.is('finisher', 'issen', 'gale');
}

export function updateAI(w: World): void {
  const p = w.player;
  const enemies = w.fighters.filter((f) => f.team === 'enemy' && f.targetable && f.brain);
  if (enemies.length === 0) return;

  if (w.mode === 'standoff') return; // the standoff script drives everyone
  if (w.mode !== 'combat') {
    for (const e of enemies) {
      e.vel = { x: 0, z: 0 };
      if (e.is('free')) w.faceToward(e, p.pos, e.arch!.turnRate);
    }
    return;
  }

  director(w, enemies);
  enemies.forEach((e, i) => {
    e.brain!.slot = i;
    think(w, e);
  });
  void p;
}

function director(w: World, enemies: Fighter[]): void {
  const p = w.player;
  const melee = enemies.filter((e) => !e.arch!.ai.ranged && e.brain!.aware);
  // An enemy mid-swing still counts as a committed attacker even after returning its token.
  const holders = melee.filter((e) => e.brain!.token || (e.is('attack') && !e.act.move?.feint));
  const boss = melee.find((e) => e.arch!.isBoss);
  const max = boss ? 1 : T.maxAttackers;
  if (boss) {
    if (!boss.brain!.token && boss.is('free') && boss.brain!.cooldown <= 0) boss.brain!.token = true;
    return;
  }
  if (holders.length >= max || !p.alive) return;
  const ready = melee
    .filter((e) => !e.brain!.token && e.brain!.cooldown <= 0 && e.is('free', 'guard'))
    .sort((a, b) => a.distTo(p) - b.distTo(p));
  for (const e of ready.slice(0, max - holders.length)) e.brain!.token = true;
}

function think(w: World, e: Fighter): void {
  const b = e.brain!;
  const arch = e.arch!;
  const p = w.player;
  if (b.cooldown > 0) b.cooldown--;
  if (b.rangedCooldown > 0) b.rangedCooldown--;
  e.vel = { x: 0, z: 0 };

  if (arch.id === 'dummy') {
    if (e.hp < e.maxHp * 0.5) e.hp = e.maxHp;
    return;
  }

  const a = e.act;
  const d = e.distTo(p);
  const gap = e.gapTo(p);
  const speed = arch.speed * (arch.isBoss && e.phase === 2 ? 1.2 : 1);

  switch (a.kind) {
    case 'attack': {
      const m = a.move!;
      // Follow-up of a string (e.g. 내려베기 → 되베기).
      const followAt = m.startup + m.active + Math.floor(m.recovery * 0.35);
      if (a.t !== followAt) return;
      if (m.next?.slash) {
        if (p.targetable && gap < getMove(m.next.slash).shape.range + 0.8 && w.rng.chance(arch.ai.comboChance) && !playerCinematic(w)) {
          startEnemyAttack(w, e, getMove(m.next.slash));
        } else {
          b.token = false;
          b.cooldown = Math.round(w.rng.range(arch.ai.cooldown[0], arch.ai.cooldown[1]) * (1.4 - arch.ai.aggression));
        }
      } else if (m.feint && b.token && gap < 3 && !playerCinematic(w)) {
        // Feint → real attack.
        const real = pickMove(w, e, gap, true);
        if (real) startEnemyAttack(w, e, real);
      }
      return;
    }
    case 'guard':
      w.faceToward(e, p.pos, arch.turnRate);
      e.vel = scale(rightOf(e.yaw), b.strafeDir * speed * 0.25);
      if (--b.guardTimer <= 0) e.set('free', Infinity);
      // Counter out of guard once the player's attack is spent.
      else if (b.token && b.counter && p.attackPhase === 'recovery' && gap < 2.5) {
        b.counter = false;
        const m = pickMove(w, e, gap, false);
        if (m) startEnemyAttack(w, e, m);
      }
      return;
    case 'fear': {
      const away = norm(sub(e.pos, p.pos));
      e.vel = scale(away, speed * 0.55);
      w.faceToward(e, p.pos, arch.turnRate);
      return;
    }
    case 'free':
      break;
    default:
      return;
  }

  // ── Free: decide ──────────────────────────────────────────────────────────
  if (!p.targetable) {
    w.faceToward(e, p.pos, arch.turnRate * 0.5);
    return;
  }
  w.faceToward(e, p.pos, arch.turnRate);

  if (!b.aware) {
    // Walk in (pre-engagement). A standoff can be issued now.
    if (d > 7.5) e.vel = scale(norm(sub(p.pos, e.pos)), speed * 0.35);
    return;
  }

  if (b.pendingGuard) {
    b.pendingGuard = false;
    e.set('guard', Infinity);
    b.guardTimer = Math.round(w.rng.range(50, 100));
    return;
  }
  // Reactive block when the player winds up close by.
  if (arch.ai.guardChance > 0 && !b.token && p.attackPhase === 'startup' && gap < 2.6 && w.rng.chance(arch.ai.guardChance * 0.25)) {
    e.set('guard', Infinity);
    b.guardTimer = Math.round(w.rng.range(40, 80));
    return;
  }

  if (arch.ai.ranged) return rangedThink(w, e, gap, speed);

  const cinematic = playerCinematic(w);
  if (b.token && !cinematic) {
    // Counter-attack immediately after an evade / bounce.
    if (b.counter) {
      b.counter = false;
      const m = pickMove(w, e, gap, false);
      if (m && gap <= m.shape.range + 0.2) return startEnemyAttack(w, e, m);
    }
    if (!b.plan) {
      const m = pickMove(w, e, gap, false, true);
      b.plan = m?.id ?? null;
    }
    const plan = b.plan ? getMove(b.plan) : null;
    if (plan) {
      const reach = plan.shape.kind === 'line' ? plan.shape.range : plan.shape.range;
      const want = Math.max(0.3, reach * 0.8 + (plan.lunge > 2 ? plan.lunge * 0.6 : 0));
      if (gap <= want) {
        b.plan = null;
        return startEnemyAttack(w, e, plan);
      }
      e.vel = scale(norm(sub(p.pos, e.pos)), speed);
      return;
    }
  }

  // Circle at a respectful distance, occasionally switching direction.
  const ring = arch.ai.preferredRange + 1.6 + (b.slot % 3) * 0.7;
  const toP = norm(sub(p.pos, e.pos));
  const tangent = scale(rightOf(e.yaw), b.strafeDir);
  let radial = 0;
  if (d < ring - 0.5) radial = -1;
  else if (d > ring + 0.5) radial = 1;
  const dir = add(scale(toP, radial), scale(tangent, 0.6));
  e.vel = scale(norm(dir), speed * (radial === 1 && d > ring + 3 ? 0.9 : 0.45));
  // Avoid crowding allies.
  for (const o of w.fighters) {
    if (o === e || o.team !== 'enemy' || !o.targetable) continue;
    const off = sub(e.pos, o.pos);
    const l = len(off);
    if (l < 1.8 && l > 1e-3) e.vel = add(e.vel, scale(off, ((1.8 - l) / l) * 1.2));
  }
  if (--b.strafeTimer <= 0) {
    b.strafeTimer = Math.round(w.rng.range(80, 200));
    b.strafeDir = b.strafeDir === 1 ? -1 : 1;
  }
}

function rangedThink(w: World, e: Fighter, gap: number, speed: number): void {
  const b = e.brain!;
  const p = w.player;
  const arch = e.arch!;
  const toP = norm(sub(p.pos, e.pos));
  if (gap < 2.0 && b.cooldown <= 0) {
    b.cooldown = Math.round(w.rng.range(arch.ai.cooldown[0], arch.ai.cooldown[1]));
    return startEnemyAttack(w, e, getMove('ac_knife'));
  }
  if (gap < 6) {
    e.vel = scale(toP, -speed * 0.8);
    return;
  }
  const shooters = w.fighters.filter((f) => f.team === 'enemy' && f.targetable && f.is('attack') && f.act.move?.projectile === 'arrow').length;
  if (b.rangedCooldown <= 0 && shooters < T.maxShooters && !playerCinematic(w)) {
    b.rangedCooldown = Math.round(w.rng.range(arch.ai.cooldown[0], arch.ai.cooldown[1]));
    return startEnemyAttack(w, e, getMove('ac_shot'));
  }
  if (gap > arch.ai.preferredRange + 4) e.vel = scale(toP, speed * 0.6);
  else e.vel = scale(rightOf(e.yaw), b.strafeDir * speed * 0.3);
  if (--b.strafeTimer <= 0) {
    b.strafeTimer = Math.round(w.rng.range(90, 200));
    b.strafeDir = b.strafeDir === 1 ? -1 : 1;
  }
}

function pickMove(w: World, e: Fighter, gap: number, noFeint: boolean, anyRange = false): MoveDef | null {
  const arch = e.arch!;
  const opts: EnemyMoveChoice[] = arch.moves.filter((c) => {
    const m = getMove(c.move);
    if (m.projectile && c.move === 'ac_shot') return false;
    if (noFeint && m.feint) return false;
    if (m.feint && !w.rng.chance(arch.ai.feintChance * 4)) return false;
    return anyRange ? gap >= c.minRange - 0.5 : gap >= c.minRange - 0.5 && gap <= c.maxRange + 0.5;
  });
  if (opts.length === 0) return null;
  // Prefer moves whose range fits the current gap.
  const weights = opts.map((c) => c.weight * (gap >= c.minRange && gap <= c.maxRange ? 2 : 1));
  return getMove(opts[w.rng.weighted(weights)].move);
}

export function startEnemyAttack(w: World, e: Fighter, m: MoveDef): void {
  const p = w.player;
  const b = e.brain!;
  const arch = e.arch!;
  e.yaw = turnToward(e.yaw, e.yawTo(p.pos), 0.6);
  const gap = e.gapTo(p);
  const lunge = Math.max(0, Math.min(m.lunge, gap - m.shape.range * 0.55 + 0.3));
  e.set('attack', m.startup + m.active + m.recovery, { move: m, hit: new Set(), targetId: p.id, lunge });
  if (!m.next?.slash && !m.feint) {
    b.token = false;
    b.cooldown = Math.round(w.rng.range(arch.ai.cooldown[0], arch.ai.cooldown[1]) * (1.4 - arch.ai.aggression));
  }
}

/** Direction helper for spawners. */
export function ringPos(center: Vec2, yaw: number, r: number): Vec2 {
  return add(center, scale(fromYaw(yaw), r));
}
