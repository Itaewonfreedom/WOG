// Hit detection and resolution: the heart of the chanbara system.
//
//  적의 공격이 플레이어에게 닿는 순간 (resolveOnPlayer) 우선순위:
//    1) 무적(회피 i-frame / 피니쉬 / 일섬 / 흘리기)  → 빗나감 (+완벽 회피 판정)
//    2) 일섬 (Issen)      : 공격 버튼을 적의 타격 직전 issenWindow 틱 안에 눌렀다
//    3) 흘리기 (Nagashi)  : 방패 + 회피를 flowWindow 안에 입력 (빨간 공격도 가능)
//    4) 튕기기 (Hajiki)   : 방패를 deflectWindow 안에 올렸다 (빨간 공격 불가)
//    5) 막기 (Block)      : 방패를 들고 있고 정면, 일반 공격만
//    6) 피격
//
//  플레이어의 공격이 적에게 닿는 순간 (resolveOnEnemy): 적 상성(베기/찌르기) → 가드 → 피해/체간.

import { BOSS_PHASE2_DEFENSE } from './archetypes';
import type { Fighter } from './fighter';
import { add, dist, distToSegment, dot, norm, scale, sub, toYaw, turnToward, type Vec2 } from './math';
import { MOVES } from './moves';
import { HITSTOP, T } from './tuning';
import type { AttackType, DefenseRule, FinisherKind, MoveDef } from './types';
import type { World } from './world';
import { spawnEnemyProjectile, quickshotRelease } from './bow';

const NORMAL: DefenseRule = { result: 'normal', dmgMul: 1, postureMul: 1 };
const ENEMY_FRONT_ARC = (75 * Math.PI) / 180;

export const easeOut = (x: number): number => {
  x = Math.max(0, Math.min(1, x));
  return 1 - (1 - x) * (1 - x);
};
export const smooth = (x: number): number => {
  x = Math.max(0, Math.min(1, x));
  return x * x * (3 - 2 * x);
};
export const rightOf = (yaw: number): Vec2 => ({ x: -Math.cos(yaw), z: Math.sin(yaw) });

export function defenseOf(e: Fighter, type: AttackType): DefenseRule {
  if (!e.arch) return NORMAL;
  if (e.arch.isBoss && e.phase === 2) return BOSS_PHASE2_DEFENSE[type];
  return e.arch.defense[type];
}

// ─────────────────────────────────────────────────────────────────────────────
// Shapes
// ─────────────────────────────────────────────────────────────────────────────
export function inShape(att: Fighter, tgt: Fighter, m: MoveDef): boolean {
  const s = m.shape;
  const d = dist(att.pos, tgt.pos);
  if (s.kind === 'arc') {
    if (s.range <= 0) return false;
    if (d > s.range + tgt.radius) return false;
    if (s.halfAngle >= Math.PI - 1e-3) return true;
    const slack = d > 1e-3 ? Math.asin(Math.min(1, tgt.radius / d)) : Math.PI;
    return att.angleTo(tgt.pos) <= s.halfAngle + slack;
  }
  if (s.range <= 0) return false;
  const fwd = att.forward();
  if (dot(sub(tgt.pos, att.pos), fwd) < -tgt.radius) return false;
  return distToSegment(tgt.pos, att.pos, add(att.pos, scale(fwd, s.range))) <= s.width / 2 + tgt.radius;
}

// ─────────────────────────────────────────────────────────────────────────────
// Scripted motion (pass 1)
// ─────────────────────────────────────────────────────────────────────────────
function travel(f: Fighter): Vec2 {
  const a = f.act;
  if (!a.from || !a.to || !a.travel) return { x: 0, z: 0 };
  if (a.t > a.travel) return { x: 0, z: 0 };
  const e0 = easeOut((a.t - 1) / a.travel);
  const e1 = easeOut(a.t / a.travel);
  return scale(sub(a.to, a.from), e1 - e0);
}

export function stepScripted(w: World, f: Fighter): Vec2 {
  const a = f.act;
  switch (a.kind) {
    case 'attack':
      return attackMotion(w, f);
    case 'charge': {
      const tgt = w.get(a.targetId);
      if (tgt && tgt.targetable) f.yaw = turnToward(f.yaw, f.yawTo(tgt.pos), 0.08);
      return { x: 0, z: 0 };
    }
    case 'dodge': {
      const total = a.value === 1 ? T.rollDist : T.dodgeDist;
      const e0 = easeOut((a.t - 1) / (a.dur * 0.8));
      const e1 = easeOut(a.t / (a.dur * 0.8));
      return scale(a.dir ?? { x: 0, z: 0 }, total * (e1 - e0));
    }
    case 'flowStep': {
      const e0 = easeOut((a.t - 1) / 10);
      const e1 = easeOut(a.t / 10);
      return scale(a.dir ?? { x: 0, z: 0 }, 0.8 * (e1 - e0));
    }
    case 'flow':
    case 'issen': {
      const tgt = w.get(a.targetId);
      if (tgt && a.kind === 'flow') f.yaw = turnToward(f.yaw, f.yawTo(tgt.pos), 0.3);
      return travel(f);
    }
    case 'finisher': {
      const tgt = w.get(a.targetId);
      if (tgt) {
        if (a.t <= 8) f.yaw = turnToward(f.yaw, f.yawTo(tgt.pos), 0.5);
        if (a.finisher !== 'flow') tgt.yaw = turnToward(tgt.yaw, tgt.yawTo(f.pos), 0.4);
        const impact = T.finisherImpact[a.finisher as 'slash' | 'thrust' | 'flow'];
        if (a.t === impact && !a.done) {
          a.done = true;
          applyFinisherImpact(w, f, tgt, a.finisher ?? 'slash');
        }
      }
      return travel(f);
    }
    case 'overextended':
    case 'evade':
    case 'standoff':
      return travel(f);
    case 'gale':
      return galeMotion(w, f);
    case 'quickshot':
      if (a.t === 6) quickshotRelease(w, f);
      return { x: 0, z: 0 };
    case 'recoil':
    case 'hitstun':
    case 'stagger':
    case 'guardbreak':
    case 'blockstun':
    case 'broken':
    case 'deflect':
    case 'finished':
    default:
      return { x: 0, z: 0 };
  }
}

function attackMotion(w: World, f: Fighter): Vec2 {
  const a = f.act;
  const m = a.move!;
  const tgt = w.get(a.targetId);
  if (tgt && tgt.targetable && a.t <= (m.trackUntil ?? 0)) {
    const rate = f.isPlayer ? 0.5 : (f.arch?.turnRate ?? 0.12) * 1.4;
    f.yaw = turnToward(f.yaw, f.yawTo(tgt.pos), rate);
  }
  const n = m.startup + m.active;
  if (!a.lunge || a.t > n) return { x: 0, z: 0 };
  const e0 = smooth((a.t - 1) / n);
  const e1 = smooth(a.t / n);
  let step = a.lunge * (e1 - e0);
  if (tgt && tgt.targetable && f.gapTo(tgt) < 0.25) step = 0;
  return scale(f.forward(), step);
}

// ─────────────────────────────────────────────────────────────────────────────
// Active frames (pass 2)
// ─────────────────────────────────────────────────────────────────────────────
export function stepAttack(w: World, f: Fighter): void {
  const a = f.act;
  const m = a.move!;
  if (!f.isPlayer && m.unblockable && m.unblockable !== 'none' && a.t === Math.max(1, m.startup - T.glintLead)) {
    f.glint = { color: m.unblockable, t: 0 };
    w.emit({ type: 'glint', id: f.id, color: m.unblockable, move: m });
  }
  if (m.feint) return;
  if (a.t === m.startup) {
    w.emit({ type: 'swing', id: f.id, move: m });
    if (m.projectile) spawnEnemyProjectile(w, f, m);
    // A dodge that carried the player out of reach still counts as a perfect dodge
    // if the blow would have connected from where the dodge started.
    const p = w.player;
    if (!f.isPlayer && !m.projectile && p.is('dodge') && p.distTo(f) <= m.shape.range + T.dodgeDist + p.radius) tryPerfectDodge(w, f, p);
  }
  if (m.projectile) return;
  if (a.t < m.startup || a.t >= m.startup + m.active) return;
  a.hit ??= new Set();
  const targets = f.isPlayer ? w.fighters.filter((e) => e.team === 'enemy' && e.targetable) : w.player.targetable ? [w.player] : [];
  for (const tg of targets) {
    if (a.hit.has(tg.id) || !inShape(f, tg, m)) continue;
    a.hit.add(tg.id);
    if (f.isPlayer) resolveOnEnemy(w, f, tg, m);
    else resolveOnPlayer(w, f, tg, m);
    if (f.act !== a) break; // attacker was bounced / deflected / issen'd
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Enemy → Player
// ─────────────────────────────────────────────────────────────────────────────
export function playerInvulnerable(w: World, p: Fighter): boolean {
  const a = p.act;
  if (a.kind === 'dodge') {
    const [i0, i1] = a.value === 1 ? T.rollIFrames : T.dodgeIFrames;
    return a.t >= i0 && a.t <= i1;
  }
  if (a.kind === 'flowStep' && a.t <= w.win(T.flowWindow)) return false;
  return p.is('finisher', 'issen', 'flow', 'gale', 'dead');
}

/** Is the player's buckler currently able to deflect? */
export function deflectReady(w: World, p: Fighter): boolean {
  if (!p.is('guard', 'deflect')) return false;
  const ps = w.ps;
  const spam = ps.guardStartTick - ps.prevGuardStartTick < T.deflectSpamGap;
  const window = w.win(spam ? T.deflectSpamWindow : T.deflectWindow);
  return w.tick - ps.guardStartTick <= window;
}

/** 완벽 회피 (Mikiri): the blow comes out within the first few invulnerable ticks of a dodge. */
export function tryPerfectDodge(w: World, att: Fighter, p: Fighter): void {
  const a = p.act;
  const ps = w.ps;
  if (a.kind !== 'dodge') return;
  const i0 = a.value === 1 ? T.rollIFrames[0] : T.dodgeIFrames[0];
  const dodgeId = w.tick - a.t;
  if (a.t < i0 || a.t - i0 > T.perfectDodgeFrames || ps.perfectDodgeTick === dodgeId) return;
  ps.perfectDodgeTick = dodgeId;
  ps.dodgeCounterUntil = w.tick + T.dodgeCounterWindow;
  w.stats.perfectDodges++;
  w.gainResolve(T.resolveGain.perfectDodge);
  w.slowmo(0.35, 0.4);
  w.emit({ type: 'perfectDodge', id: p.id, attacker: att.id });
  w.emit({ type: 'text', text: '완벽 회피', sub: '見切り', style: 'info', id: p.id });
}

export function canIssen(w: World, p: Fighter, att: Fighter): boolean {
  const a = p.act;
  if (a.kind !== 'attack' || !a.move) return false;
  const ps = w.ps;
  const chain = w.tick <= ps.issenChainUntil;
  const window = w.win(chain ? T.issenChainWindow : T.issenWindow);
  if (a.t > window || a.t >= a.move.startup) return false;
  if (!chain && ps.attackPressTick - ps.prevAttackPressTick < T.issenMashLockout) return false;
  return p.angleTo(att.pos) <= Math.PI * 0.6;
}

export function resolveOnPlayer(w: World, att: Fighter, p: Fighter, m: MoveDef): void {
  const ps = w.ps;
  const a = p.act;

  if (playerInvulnerable(w, p)) {
    tryPerfectDodge(w, att, p);
    return;
  }

  if (canIssen(w, p, att)) {
    doIssen(w, p, att, false);
    return;
  }

  if (a.kind === 'flowStep' && a.t <= w.win(T.flowWindow)) {
    doFlow(w, p, att, a.side ?? 1);
    return;
  }

  const ub = m.unblockable ?? 'none';
  const frontal = p.angleTo(att.pos) <= T.guardArc;
  if (p.is('guard', 'deflect') && frontal) {
    if (ub !== 'red' && deflectReady(w, p)) {
      doDeflect(w, p, att);
      return;
    }
    if (ub === 'none') {
      doBlock(w, p, att, m);
      return;
    }
    // blue / red through a raised guard: the small buckler is smashed aside.
    w.emit({ type: 'text', text: ub === 'red' ? '막을 수 없다' : '튕기기로만 막힌다', style: 'bad', id: p.id });
  }
  damagePlayer(w, att, p, m.damage, ub !== 'none' || m.damage >= 20);
}

export function damagePlayer(w: World, att: Fighter, p: Fighter, damage: number, heavy: boolean): void {
  const dmg = damage * w.settings.enemyDamage;
  if (!w.settings.invincible) p.hp -= dmg;
  w.stats.damageTaken += dmg;
  p.hitFlash = 8;
  w.ps.combo = 0;
  w.ps.draw = 0;
  w.ps.focusing = false;
  const away = norm(sub(p.pos, att.pos));
  w.emit({ type: 'hit', attacker: att.id, target: p.id, pos: p.pos, dmg, result: 'normal', atkType: 'slash', lethal: p.hp <= 0, heavy });
  if (p.hp <= 0) {
    p.hp = 0;
    p.set('dead', Infinity);
    w.pushBack(p, away, 1.2);
    w.mode = 'defeat';
    w.slowmo(0.3, 1.6);
    w.emit({ type: 'defeat' });
    return;
  }
  p.set(heavy ? 'stagger' : 'hitstun', heavy ? T.stagger : T.hitstun);
  w.pushBack(p, away, heavy ? 1.2 : 0.45);
  w.freeze(heavy ? HITSTOP.heavy : HITSTOP.light);
}

function doBlock(w: World, p: Fighter, att: Fighter, m: MoveDef): void {
  const broke = p.addPosture(m.posture * T.blockPostureMul);
  w.emit({ type: 'block', defender: p.id, attacker: att.id, pos: midpoint(p, att), enemy: false });
  if (broke) {
    p.set('guardbreak', T.guardBreakStun);
    p.posture = p.maxPosture * 0.6;
    w.pushBack(p, sub(p.pos, att.pos), 0.8);
    w.emit({ type: 'guardBreak', id: p.id, pos: p.pos });
    w.emit({ type: 'text', text: '방패가 밀렸다', sub: '체간 붕괴', style: 'bad', id: p.id });
    w.freeze(HITSTOP.heavy);
    return;
  }
  p.set('blockstun', 10);
  w.pushBack(p, sub(p.pos, att.pos), 0.3);
  w.freeze(HITSTOP.block);
}

/** 튕기기 (Hajiki): perfect buckler deflect. Attacker's blade is knocked away. */
export function doDeflect(w: World, p: Fighter, att: Fighter): void {
  const ps = w.ps;
  const broke = att.addPosture(T.deflectPostureDmg * (att.arch?.isBoss ? 0.8 : 1));
  if (broke) breakPosture(w, att);
  else att.set('recoil', T.deflectRecoil);
  w.pushBack(att, sub(att.pos, p.pos), 0.5);
  if (att.brain) att.brain.token = false;
  p.set('deflect', 14, { targetId: att.id });
  p.yaw = p.yawTo(att.pos);
  ps.hajikiTarget = att.id;
  ps.hajikiUntil = w.tick + w.win(T.hajikiIssenWindow);
  ps.riposteTarget = att.id;
  ps.riposteUntil = w.tick + T.riposteWindow;
  w.stats.deflects++;
  w.gainResolve(T.resolveGain.deflect);
  w.freeze(HITSTOP.deflect);
  w.slowmo(0.55, 0.15);
  w.emit({ type: 'deflect', defender: p.id, attacker: att.id, pos: midpoint(p, att) });
  w.emit({ type: 'text', text: '튕기기', sub: '弾き', style: 'deflect', id: p.id });
}

/** 흘리기 (Nagashi): slide off the blow; attacker stumbles past with its back exposed. */
export function doFlow(w: World, p: Fighter, att: Fighter, side: -1 | 1): void {
  const ps = w.ps;
  const pr = rightOf(p.yaw);
  const to = add(p.pos, add(scale(pr, side * T.flowSideStep), scale(p.forward(), 0.2)));
  p.set('flow', T.flowAnimDur, { targetId: att.id, from: { ...p.pos }, to, travel: 8, side });
  const af = att.forward();
  att.set('overextended', T.overextendDur, { from: { ...att.pos }, to: add(att.pos, scale(af, 1.7)), travel: 18 });
  att.addPosture(20);
  if (att.brain) att.brain.token = false;
  ps.flowTarget = att.id;
  ps.flowUntil = w.tick + T.overextendDur;
  w.stats.flows++;
  w.gainResolve(T.resolveGain.flow);
  w.freeze(HITSTOP.flow);
  w.slowmo(0.35, 0.35);
  w.emit({ type: 'flow', defender: p.id, attacker: att.id, pos: midpoint(p, att), side });
  w.emit({ type: 'text', text: '흘리기', sub: '流し', style: 'flow', id: p.id });
}

/** 일섬 (Issen): counter-kill at the instant the enemy strikes. Also used by 튕기기 일섬 & standoff. */
export function doIssen(w: World, p: Fighter, att: Fighter, hajiki: boolean, standoff = false): void {
  const ps = w.ps;
  const chain = !hajiki && !standoff && w.tick <= ps.issenChainUntil ? ps.issenChain + 1 : 1;
  if (!hajiki && !standoff) {
    ps.issenChain = chain;
    ps.issenChainUntil = w.tick + T.issenChainTime;
    w.stats.maxIssenChain = Math.max(w.stats.maxIssenChain, chain);
  }
  const dir = norm(sub(att.pos, p.pos));
  const to = add(att.pos, scale(dir, att.radius + 1.1));
  const kind: FinisherKind = standoff ? 'standoff' : hajiki ? 'hajiki' : 'issen';
  p.set('issen', T.issenDur, { targetId: att.id, from: { ...p.pos }, to, travel: 5, finisher: kind });
  p.yaw = toYaw(dir);
  ps.hajikiTarget = -1;
  if (att.brain) att.brain.token = false;

  if (att.arch?.isBoss) {
    att.hp = Math.max(0, att.hp - att.maxHp * T.bossIssenFrac);
    att.addPosture(40);
    att.set('finished', 40, { finisher: kind, targetId: p.id });
    if (att.hp <= 0) killBookkeeping(w, att, kind);
    else checkBossPhase(w, att);
  } else {
    att.hp = 0;
    att.set('finished', 56, { finisher: kind, targetId: p.id });
    att.deathKind = kind;
    killBookkeeping(w, att, kind);
  }
  if (standoff) w.stats.standoffKills++;
  else w.stats.issens++;
  w.gainResolve(T.resolveGain.issen);
  w.freeze(HITSTOP.issen);
  w.slowmo(0.18, chain > 1 ? 0.45 : 0.7);
  w.emit({ type: 'issen', performer: p.id, victim: att.id, pos: midpoint(p, att), chain, hajiki });
  const text = standoff ? '대치 참' : hajiki ? '튕기기 일섬' : chain > 1 ? `연쇄 일섬 ×${chain}` : '일섬';
  const sub2 = standoff ? '対峙斬り' : hajiki ? '弾き一閃' : chain > 1 ? '連鎖一閃' : '一閃';
  w.emit({ type: 'text', text, sub: sub2, style: 'issen', id: p.id });
}

// ─────────────────────────────────────────────────────────────────────────────
// Player → Enemy
// ─────────────────────────────────────────────────────────────────────────────
export function resolveOnEnemy(w: World, p: Fighter, e: Fighter, m: MoveDef): void {
  if (!e.targetable || e.is('evade')) return;
  const a = p.act;
  const frontal = e.angleTo(p.pos) <= ENEMY_FRONT_ARC;
  let rule = m.trueStrike ? NORMAL : defenseOf(e, m.type);
  if (rule.frontalOnly && !frontal) rule = NORMAL;
  if (e.arch?.id === 'shield' && e.shieldOpen > 0 && rule.result === 'bounce') rule = NORMAL;
  const soft = rule.result === 'bounce' || rule.result === 'evade' || rule.result === 'haft';
  if (soft && e.defenseless) rule = NORMAL;

  if (rule.result === 'evade') {
    const committed = e.attacking || e.is('hitstun', 'stagger', 'blockstun', 'finished');
    if (committed) rule = NORMAL;
    else return doEvade(w, e, p);
  }
  if (rule.result === 'bounce') return doBounce(w, p, e, m, rule);
  if (rule.result === 'haft') return doHaft(w, p, e, m, rule);

  // Enemy guard stance (ronin / boss). Heavy & bash break it.
  if (e.act.kind === 'guard' && frontal && !m.trueStrike) {
    if (m.heavy || m.interrupt) {
      e.set('guardbreak', 50);
      e.addPosture(m.posture * 0.5);
      w.pushBack(e, sub(e.pos, p.pos), 0.6);
      w.emit({ type: 'guardBreak', id: e.id, pos: e.pos });
      w.emit({ type: 'text', text: '가드 붕괴', sub: '崩し', style: 'effective', id: e.id });
      w.freeze(HITSTOP.heavy);
      return;
    }
    const broke = e.addPosture(m.posture * 0.6 * rule.postureMul);
    w.emit({ type: 'block', defender: e.id, attacker: p.id, pos: midpoint(p, e), enemy: true });
    w.freeze(HITSTOP.block);
    if (broke) breakPosture(w, e);
    else if (e.brain && w.rng.chance(0.35)) e.brain.counter = true;
    return;
  }

  if (m.shieldBreak && e.arch?.id === 'shield' && e.shieldOpen <= 0) {
    e.shieldOpen = 150;
    w.emit({ type: 'shieldOpen', id: e.id });
    w.emit({ type: 'text', text: '방패 걷어냄', sub: '盾崩し', style: 'effective', id: e.id });
  }

  const chargeMul = a.kind === 'attack' && m.heavy ? 1 + 0.3 * (a.value ?? 0) : 1;
  let dmg = m.damage * rule.dmgMul * (a.dmgBonus ?? 1) * chargeMul;
  let post = m.posture * rule.postureMul * (a.postureBonus ?? 1) * chargeMul;
  if (e.is('fear')) post *= 1.5;
  if (e.is('overextended')) dmg *= 1.5;
  applyHitToEnemy(w, p, e, dmg, post, { heavy: !!(m.heavy || m.finale), interrupt: !!m.interrupt, result: rule.result, atkType: m.type, knockback: m.knockback ?? 0 });
}

export interface EnemyHitOpts {
  heavy: boolean;
  interrupt: boolean;
  result: DefenseRule['result'];
  atkType: AttackType;
  knockback: number;
  arrow?: boolean;
}

export function applyHitToEnemy(w: World, p: Fighter, e: Fighter, dmg: number, post: number, o: EnemyHitOpts): void {
  e.hp -= dmg;
  e.hitFlash = 6;
  if (o.result === 'effective') w.stats.effectiveHits++;
  if (o.result === 'glance') {
    w.stats.badHits++;
    w.emit({ type: 'glance', attacker: p.id, target: e.id, pos: midpoint(p, e) });
    w.emit({ type: 'text', text: '미끄러짐', sub: e.arch?.weakness === 'thrust' ? '갑옷 틈을 찔러라' : '', style: 'bad', id: e.id });
  }
  w.ps.combo++;
  w.ps.comboTimer = 120;
  const lethal = e.hp <= 0;
  const away = norm(sub(e.pos, p.pos));
  w.emit({ type: 'hit', attacker: p.id, target: e.id, pos: midpoint(p, e), dmg, result: o.result, atkType: o.atkType, lethal, heavy: o.heavy });

  if (lethal) {
    e.hp = 0;
    e.set('dead', Infinity);
    e.deathKind = o.arrow ? 'arrow' : o.atkType;
    w.pushBack(e, away, o.heavy ? 1.4 : 0.7);
    killBookkeeping(w, e, o.arrow ? 'arrow' : o.atkType);
    w.freeze(HITSTOP.heavy);
    return;
  }

  const broke = e.addPosture(post);
  checkBossPhase(w, e);
  if (e.is('finished')) return;
  if (broke && !e.is('broken')) {
    breakPosture(w, e);
    w.freeze(HITSTOP.heavy);
    return;
  }
  if (!e.is('broken', 'overextended')) {
    const armored = !!e.arch?.heavyBody || (e.attacking && !!e.act.move?.hyperArmor);
    if (o.interrupt && e.attackPhase === 'startup') {
      e.set('hitstun', T.hitstun);
      w.pushBack(e, away, 0.5);
    } else if (o.result === 'glance' || armored) {
      if (o.heavy && !e.attacking && !e.arch?.isBoss) {
        e.set('stagger', 26);
        w.pushBack(e, away, 0.4 + o.knockback * 0.5);
      }
    } else if (o.heavy) {
      e.set('stagger', T.stagger);
      w.pushBack(e, away, 0.6 + o.knockback);
    } else {
      e.set('hitstun', T.hitstun);
      w.pushBack(e, away, 0.35);
    }
    if (e.brain) {
      e.brain.token = e.brain.token && !e.is('hitstun', 'stagger');
      if (e.arch && w.rng.chance(e.arch.ai.guardChance)) e.brain.pendingGuard = true;
    }
  }
  w.freeze(o.result === 'effective' ? HITSTOP.effective : o.heavy ? HITSTOP.heavy : HITSTOP.light);
}

function doEvade(w: World, e: Fighter, p: Fighter): void {
  const side: -1 | 1 = w.rng.chance(0.5) ? 1 : -1;
  const dir = rightOf(e.yawTo(p.pos));
  const back = norm(sub(e.pos, p.pos));
  e.set('evade', 20, { from: { ...e.pos }, to: add(e.pos, add(scale(dir, 1.7 * side), scale(back, 0.4))), travel: 10, side });
  if (e.brain) e.brain.counter = true;
  w.stats.badHits++;
  w.emit({ type: 'evade', id: e.id, attacker: p.id });
  w.emit({ type: 'text', text: '회피당함', sub: '넓게 베어라', style: 'bad', id: e.id });
}

function doBounce(w: World, p: Fighter, e: Fighter, m: MoveDef, rule: DefenseRule): void {
  p.set('recoil', m.heavy ? 30 : 24);
  w.pushBack(p, sub(p.pos, e.pos), 0.5);
  const broke = e.addPosture(m.posture * rule.postureMul);
  if (broke) breakPosture(w, e);
  else if (e.brain) e.brain.counter = true;
  w.stats.badHits++;
  w.freeze(HITSTOP.bounce);
  w.emit({ type: 'bounce', attacker: p.id, target: e.id, pos: midpoint(p, e) });
  w.emit({ type: 'text', text: '튕겨남', sub: '방패엔 찌르기', style: 'bad', id: e.id });
}

function doHaft(w: World, p: Fighter, e: Fighter, m: MoveDef, rule: DefenseRule): void {
  p.set('recoil', 14);
  w.pushBack(p, sub(p.pos, e.pos), 0.8);
  e.hp -= m.damage * rule.dmgMul;
  const broke = e.addPosture(m.posture * rule.postureMul);
  if (broke) breakPosture(w, e);
  w.stats.badHits++;
  w.freeze(HITSTOP.block);
  w.emit({ type: 'haft', attacker: p.id, target: e.id, pos: midpoint(p, e) });
  w.emit({ type: 'text', text: '창대에 막힘', sub: '창병엔 베기', style: 'bad', id: e.id });
}

// ─────────────────────────────────────────────────────────────────────────────
// Posture, death, finishers
// ─────────────────────────────────────────────────────────────────────────────
export function breakPosture(w: World, e: Fighter): void {
  e.set('broken', T.brokenDur);
  e.posture = e.maxPosture;
  e.glint = null;
  if (e.brain) e.brain.token = false;
  w.emit({ type: 'postureBreak', id: e.id, pos: e.pos });
  w.emit({ type: 'text', text: '체간 붕괴', sub: '피니쉬!', style: 'finisher', id: e.id });
}

export function killBookkeeping(w: World, e: Fighter, cause: string): void {
  w.stats.kills++;
  // Arrows are recovered from the fallen.
  w.ps.arrows.standard = Math.min(T.maxArrows.standard, w.ps.arrows.standard + 1);
  w.gainResolve(T.resolveGain.kill);
  if (e.brain) e.brain.token = false;
  e.glint = null;
  w.emit({ type: 'kill', victim: e.id, killer: w.player.id, cause });
  if (w.liveEnemies().length === 0 && w.mode === 'combat') w.slowmo(0.22, 1.2);
}

export function checkBossPhase(w: World, e: Fighter): void {
  if (!e.arch?.isBoss || e.phase !== 1 || e.hp > e.maxHp * 0.55) return;
  e.phase = 2;
  e.posture = 0;
  if (!e.is('finished')) e.set('stagger', 60);
  w.emit({ type: 'armorShatter', id: e.id, pos: e.pos });
  w.emit({ type: 'text', text: '갑옷 파쇄', sub: '이제 베기가 통한다', style: 'warn', id: e.id });
  w.slowmo(0.3, 0.8);
}

export interface FinisherCandidate {
  target: Fighter;
  kind: 'finisher' | 'flow' | 'hajiki';
}

/** What would an attack press do right now? (finisher > flow riposte > hajiki issen) */
export function findFinisherTarget(w: World, p: Fighter, exclude = -1): FinisherCandidate | null {
  const ps = w.ps;
  const ft = w.get(ps.flowTarget);
  if (ft && ft.id !== exclude && ft.targetable && ft.is('overextended') && w.tick <= ps.flowUntil && p.distTo(ft) <= 4) return { target: ft, kind: 'flow' };
  const ht = w.get(ps.hajikiTarget);
  if (ht && ht.id !== exclude && ht.targetable && ht.is('recoil') && w.tick <= ps.hajikiUntil && p.distTo(ht) <= 4.2) return { target: ht, kind: 'hajiki' };
  let best: Fighter | null = null;
  let bestScore = Infinity;
  for (const e of w.fighters) {
    if (e.team !== 'enemy' || e.id === exclude || !e.targetable) continue;
    const lowHp = !e.arch?.isBoss && e.hp <= e.maxHp * T.finishHpFrac && e.is('stagger', 'guardbreak', 'fear', 'hitstun');
    if (!e.is('broken') && !lowHp) continue;
    const d = p.distTo(e) - e.radius;
    const range = exclude >= 0 ? T.finisherChainRange : T.finisherRange;
    if (d > range) continue;
    const score = d + p.angleTo(e.pos) * 0.8;
    if (score < bestScore) {
      bestScore = score;
      best = e;
    }
  }
  return best ? { target: best, kind: 'finisher' } : null;
}

export function startFinisher(w: World, p: Fighter, e: Fighter, kind: 'slash' | 'thrust' | 'flow'): void {
  const dur = kind === 'slash' ? T.finisherSlashDur : kind === 'thrust' ? T.finisherThrustDur : T.finisherFlowDur;
  const dir = norm(sub(e.pos, p.pos));
  const stand = (kind === 'flow' ? 0.85 : 1.05) + e.radius * 0.6;
  const to = sub(e.pos, scale(dir, stand));
  p.set('finisher', dur, { finisher: kind, targetId: e.id, from: { ...p.pos }, to, travel: 7 });
  p.yaw = toYaw(dir);
  e.set('finished', dur + 6, { finisher: kind, targetId: p.id });
  e.glint = null;
  if (kind !== 'flow') e.yaw = toYaw(scale(dir, -1));
  if (e.brain) e.brain.token = false;
  const weakness = kind !== 'flow' && e.arch?.weakness === kind;
  w.ps.flowTarget = -1;
  w.emit({ type: 'finisherStart', performer: p.id, victim: e.id, kind, weakness });
}

export function applyFinisherImpact(w: World, p: Fighter, e: Fighter, kind: FinisherKind): void {
  const weakness = e.arch?.weakness === kind;
  if (e.arch?.isBoss) {
    e.hp = Math.max(0, e.hp - e.maxHp * T.bossFinisherFrac * (weakness ? 1.2 : 1));
    e.posture = 0;
    if (e.hp <= 0) {
      e.deathKind = kind;
      killBookkeeping(w, e, kind);
    } else checkBossPhase(w, e);
  } else {
    e.hp = 0;
    e.deathKind = kind;
    killBookkeeping(w, e, kind);
  }
  w.stats.finishers++;
  w.gainResolve(T.resolveGain.finisher + (weakness ? 0.25 : 0));
  w.freeze(HITSTOP.finisher);
  w.slowmo(0.3, 0.5);
  w.emit({ type: 'finisherImpact', performer: p.id, victim: e.id, kind, pos: e.pos });
  const name = kind === 'slash' ? ['일도양단', '一刀両断'] : kind === 'thrust' ? ['심장 관통', '心突'] : ['흘려베기', '流し斬り'];
  w.emit({ type: 'text', text: name[0], sub: weakness ? `${name[1]} · 약점 마무리` : name[1], style: 'finisher', id: p.id });
  terrify(w, e.pos, weakness);
}

/** GoT-style intimidation: a brutal finisher can make nearby enemies falter. */
export function terrify(w: World, center: Vec2, weakness: boolean): void {
  for (const e of w.fighters) {
    if (e.team !== 'enemy' || !e.targetable || e.arch?.isBoss || e.is('broken', 'fear')) continue;
    if (dist(e.pos, center) > T.terrifyRadius) continue;
    const chance = T.terrifyChance * (1 - (e.arch?.ai.courage ?? 0.5) * 0.6) + (weakness ? T.terrifyWeaknessBonus : 0);
    if (!w.rng.chance(chance)) continue;
    e.set('fear', T.fearDur);
    if (e.brain) e.brain.token = false;
    w.emit({ type: 'fear', id: e.id });
    w.emit({ type: 'text', text: '겁먹음', sub: '怯え', style: 'info', id: e.id });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 질풍참 (Gale strike, resolve special)
// ─────────────────────────────────────────────────────────────────────────────
export const GALE_SEG = 15;

function galeMotion(w: World, f: Fighter): Vec2 {
  const a = f.act;
  const seg = Math.floor((a.t - 1) / GALE_SEG);
  const local = (a.t - 1) % GALE_SEG;
  const tgt = w.get(w.ps.galeTargets[seg]);
  if (!tgt) return { x: 0, z: 0 };
  if (local === 0) {
    const dir = norm(sub(tgt.pos, f.pos));
    a.from = { ...f.pos };
    a.to = add(tgt.pos, scale(dir, tgt.radius + 0.9));
    f.yaw = toYaw(dir);
  }
  if (!a.from || !a.to || local > 5) return { x: 0, z: 0 };
  const e0 = easeOut(local / 5);
  const e1 = easeOut((local + 1) / 5);
  return scale(sub(a.to, a.from), e1 - e0);
}

export function stepGale(w: World, f: Fighter): void {
  const a = f.act;
  const seg = Math.floor((a.t - 1) / GALE_SEG);
  const local = (a.t - 1) % GALE_SEG;
  const tgt = w.get(w.ps.galeTargets[seg]);
  if (local === 3 && tgt && tgt.targetable) {
    w.emit({ type: 'swing', id: f.id, move: MOVES.r_gale });
    resolveOnEnemy(w, f, tgt, MOVES.r_gale);
  }
}

function midpoint(a: Fighter, b: Fighter): Vec2 {
  return scale(add(a.pos, b.pos), 0.5);
}

