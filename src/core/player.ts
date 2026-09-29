// Ranger controller: turns buffered input into actions.
//
// Design goals (Ghost of Tsushima-like flow):
//  - Inputs are buffered; the next hit comes out on the first legal tick.
//  - Soft targeting: every swing picks the best enemy in the stick direction and lunges to it.
//  - Any string can branch between 베기 / 찌르기 at every step.
//  - Recovery can be cancelled into dodge / guard / bow, and into a finisher whenever one is available.

import type { Fighter } from './fighter';
import type { InputFrame } from './input';
import { dist, len, norm, scale, sub, toYaw, turnToward, type Vec2 } from './math';
import { getMove, PLAYER_HEAVY, PLAYER_OPENERS } from './moves';
import { T } from './tuning';
import type { ArrowType, MoveDef } from './types';
import type { World } from './world';
import { doIssen, findFinisherTarget, GALE_SEG, rightOf, startFinisher } from './combat';
import { fireArrow } from './bow';

type AtkBtn = 'slash' | 'thrust';

export function updatePlayer(w: World, inp: InputFrame): void {
  const p = w.player;
  const ps = w.ps;
  const buf = w.buffer;
  const tick = w.tick;

  if (inp.pressed.slash || inp.pressed.thrust) {
    ps.prevAttackPressTick = ps.attackPressTick;
    ps.attackPressTick = tick;
  }
  if (inp.pressed.arrow1) ps.arrowType = 'standard';
  if (inp.pressed.arrow2) ps.arrowType = 'heavy';
  if (inp.pressed.arrow3) ps.arrowType = 'fire';
  if (inp.pressed.arrowNext) {
    const order: ArrowType[] = ['standard', 'heavy', 'fire'];
    ps.arrowType = order[(order.indexOf(ps.arrowType) + 1) % order.length];
  }
  if (inp.pressed.lock) {
    const cur = w.get(ps.lockTarget);
    if (cur && cur.targetable) ps.lockTarget = null;
    else ps.lockTarget = pickTarget(w, p, inp, 14)?.id ?? null;
  }
  if (ps.lockTarget !== null && !w.get(ps.lockTarget)?.targetable) ps.lockTarget = null;

  if (!p.alive || w.mode === 'victory') {
    p.vel = { x: 0, z: 0 };
    return;
  }

  // HUD hints
  const fin = findFinisherTarget(w, p);
  ps.finisherTarget = fin?.target.id ?? null;
  ps.finisherKindHint = fin?.kind ?? null;
  ps.softTarget = pickTarget(w, p, inp, T.softTargetRange)?.id ?? null;

  const B = T.inputBuffer;
  const a = p.act;
  p.vel = { x: 0, z: 0 };

  switch (a.kind) {
    case 'free':
      if (inp.pressed.standoff && w.waves?.standoffAvailable && w.standoff.begin(w)) return;
      if (tryFinisherOrCounter(w, p)) return;
      if (tryGale(w, p, inp)) return;
      if (inp.held.heal && ps.resolve >= T.healCost && p.hp < p.maxHp) {
        p.set('heal', T.healDur);
        return;
      }
      if (inp.held.aim) return enterAim(w, p);
      if (buf.consume('quickshot', tick, B) && tryQuickshot(w, p)) return;
      if (buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
      if (inp.held.guard) return enterGuard(w, p, inp.pressed.guard || buf.consume('guard', tick, B));
      if (buf.peek('slash', tick, B) || buf.peek('thrust', tick, B)) return startOpener(w, p, inp);
      locomotion(w, p, inp, T.runSpeed);
      return;

    case 'guard': {
      if (inp.pressed.guard) {
        ps.prevGuardStartTick = ps.guardStartTick;
        ps.guardStartTick = tick;
      }
      if (tryFinisherOrCounter(w, p)) return;
      if (!inp.held.guard) {
        p.set('free', Infinity);
        locomotion(w, p, inp, T.runSpeed);
        return;
      }
      if (buf.consume('dodge', tick, B)) return startFlowStep(p, inp);
      if (buf.consume('slash', tick, B)) return startAttack(w, p, inp, getMove('r_bash'), 'slash', false);
      if (buf.peek('thrust', tick, B)) {
        buf.consume('thrust', tick, B);
        return startAttack(w, p, inp, getMove(PLAYER_OPENERS.thrust), 'thrust', true);
      }
      if (inp.held.aim) return enterAim(w, p);
      locomotion(w, p, inp, T.guardMoveSpeed, true);
      return;
    }

    case 'deflect':
      // Right after a deflect: attack → 튕기기 일섬, guard re-press → chain deflects.
      if (tryFinisherOrCounter(w, p)) return;
      if (inp.pressed.guard) {
        ps.prevGuardStartTick = ps.guardStartTick;
        ps.guardStartTick = tick;
        p.set('guard', Infinity);
        return;
      }
      if (a.t >= 6 && buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
      if (a.t >= 8 && (buf.peek('slash', tick, B) || buf.peek('thrust', tick, B))) return startOpener(w, p, inp);
      return;

    case 'blockstun':
      if (inp.pressed.guard) {
        ps.prevGuardStartTick = ps.guardStartTick;
        ps.guardStartTick = tick;
        p.set('guard', Infinity);
      }
      return;

    case 'flow':
      if (a.t >= 6 && tryFinisherOrCounter(w, p)) return;
      if (a.t >= 14 && buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
      return;

    case 'flowStep':
      if (a.t > w.win(T.flowWindow) + 4) {
        if (buf.peek('slash', tick, B) || buf.peek('thrust', tick, B)) return startOpener(w, p, inp);
        if (inp.pressed.guard) {
          ps.prevGuardStartTick = ps.guardStartTick;
          ps.guardStartTick = tick;
          p.set('guard', Infinity);
        }
      }
      return;

    case 'attack':
      return updateAttack(w, p, inp);

    case 'charge': {
      const btn = a.button ?? 'slash';
      const target = pickTarget(w, p, inp, T.softTargetRange);
      if (target) a.targetId = target.id;
      else if (len(inp.move) > 0.2) p.yaw = turnToward(p.yaw, toYaw(inp.move), 0.1);
      if (buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
      if ((!inp.held[btn] && a.t >= T.chargeMin) || a.t >= T.chargeMax) {
        const ratio = Math.min(1, a.t / T.chargeMax);
        const move = getMove(PLAYER_HEAVY[btn]);
        startAttack(w, p, inp, move, btn, false, ratio);
      }
      return;
    }

    case 'dodge':
      if (a.value !== 1 && a.t >= 3 && a.t <= 14 && buf.consume('dodge', tick, B)) {
        // Double tap: dodge → roll
        p.set('dodge', T.rollDur, { dir: a.dir, value: 1 });
        return;
      }
      if (a.t >= (a.value === 1 ? 22 : T.dodgeCancelFrom)) {
        if (tryFinisherOrCounter(w, p)) return;
        if (inp.held.aim) return enterAim(w, p);
        if (buf.peek('slash', tick, B) || buf.peek('thrust', tick, B)) return startOpener(w, p, inp);
        if (inp.held.guard && inp.pressed.guard) return enterGuard(w, p, true);
      }
      return;

    case 'aim':
      return updateAim(w, p, inp);

    case 'quickshot':
      if (a.t >= 12) {
        if (buf.peek('slash', tick, B) || buf.peek('thrust', tick, B)) return startOpener(w, p, inp);
        if (buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
      }
      return;

    case 'finisher':
      // Chain finishers: the next broken enemy is executed without a break in the flow.
      if (a.t >= T.finisherChainFrom) {
        const next = findFinisherTarget(w, p, a.targetId ?? -1);
        if (next && (buf.peek('slash', tick, B) || buf.peek('thrust', tick, B))) {
          const btn = consumeAttack(w);
          if (next.kind === 'hajiki') doIssen(w, p, next.target, true);
          else startFinisher(w, p, next.target, next.kind === 'flow' ? 'flow' : btn);
          w.emit({ type: 'text', text: '연쇄 피니쉬', sub: '連殺', style: 'finisher', id: p.id });
          return;
        }
        if (a.t >= a.dur - 12 && buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
      }
      return;

    case 'issen':
      if (a.t >= a.dur - 12) {
        if (tryFinisherOrCounter(w, p)) return;
        if (buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
        if (inp.pressed.guard) return enterGuard(w, p, true);
      }
      return;

    case 'recoil':
      // Knocked-away blade: recover in time to deflect or dodge the counter.
      if (a.t >= 12) {
        if (inp.pressed.guard || (inp.held.guard && buf.consume('guard', tick, B))) return enterGuard(w, p, true);
        if (buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
      }
      return;

    case 'hitstun':
      // Recovery roll out of light hit-stun keeps the flow going.
      if (a.t >= 10 && buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
      return;

    case 'heal':
      if (inp.pressed.dodge || inp.pressed.guard) p.set('free', Infinity);
      return;

    default:
      return;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
function locomotion(w: World, p: Fighter, inp: InputFrame, speed: number, guarding = false): void {
  const m = inp.move;
  const mag = Math.min(1, len(m));
  p.vel = scale(m, speed * mag);
  const lock = w.get(w.ps.lockTarget);
  if (lock && lock.targetable) {
    w.faceToward(p, lock.pos, T.playerTurnRate);
  } else if (guarding) {
    const tgt = w.get(w.ps.softTarget);
    if (tgt) w.faceToward(p, tgt.pos, 0.2);
    else if (mag > 0.1) p.yaw = turnToward(p.yaw, toYaw(m), 0.15);
  } else if (mag > 0.1) {
    p.yaw = turnToward(p.yaw, toYaw(m), T.playerTurnRate);
  }
}

/** Best enemy in the input direction (or facing), for soft-lock lunges. */
export function pickTarget(w: World, p: Fighter, inp: InputFrame, range: number): Fighter | null {
  const lock = w.get(w.ps.lockTarget);
  if (lock && lock.targetable && p.distTo(lock) < range + 4) return lock;
  const dir: Vec2 = len(inp.move) > 0.25 ? norm(inp.move) : p.forward();
  let best: Fighter | null = null;
  let bestScore = Infinity;
  for (const e of w.fighters) {
    if (e.team !== 'enemy' || !e.targetable) continue;
    const to = sub(e.pos, p.pos);
    const d = len(to) - e.radius;
    if (d > range) continue;
    const ang = Math.abs(Math.atan2(dir.x * to.z - dir.z * to.x, dir.x * to.x + dir.z * to.z));
    if (ang > Math.PI * 0.6 && d > 1.8) continue;
    const score = d * (1 + ang * 1.3);
    if (score < bestScore) {
      bestScore = score;
      best = e;
    }
  }
  return best;
}

function consumeAttack(w: World): AtkBtn {
  const B = T.inputBuffer;
  const s = w.buffer.pressTick.get('slash') ?? -1;
  const t = w.buffer.pressTick.get('thrust') ?? -1;
  const slashFresh = w.buffer.peek('slash', w.tick, B);
  const thrustFresh = w.buffer.peek('thrust', w.tick, B);
  const btn: AtkBtn = slashFresh && thrustFresh ? (t > s ? 'thrust' : 'slash') : thrustFresh ? 'thrust' : 'slash';
  w.buffer.consume('slash', w.tick, B);
  w.buffer.consume('thrust', w.tick, B);
  return btn;
}

/** Finisher / flow riposte / hajiki issen take priority over normal attacks. */
function tryFinisherOrCounter(w: World, p: Fighter): boolean {
  const B = T.inputBuffer;
  if (!w.buffer.peek('slash', w.tick, B) && !w.buffer.peek('thrust', w.tick, B)) return false;
  const c = findFinisherTarget(w, p);
  if (!c) return false;
  const btn = consumeAttack(w);
  if (c.kind === 'hajiki') doIssen(w, p, c.target, true);
  else if (c.kind === 'flow') startFinisher(w, p, c.target, 'flow');
  else startFinisher(w, p, c.target, btn);
  return true;
}

function tryGale(w: World, p: Fighter, inp: InputFrame): boolean {
  const ps = w.ps;
  const both = Math.abs((w.buffer.pressTick.get('slash') ?? -99) - (w.buffer.pressTick.get('thrust') ?? -999)) <= 3 && w.buffer.peek('slash', w.tick, 4) && w.buffer.peek('thrust', w.tick, 4);
  if (!(inp.pressed.gale || both)) return false;
  if (ps.resolve < T.galeCost) {
    if (inp.pressed.gale) w.emit({ type: 'text', text: '결의 부족', style: 'bad', id: p.id });
    return false;
  }
  const targets = w.fighters
    .filter((e) => e.team === 'enemy' && e.targetable && p.distTo(e) < 10)
    .sort((a, b) => p.distTo(a) - p.distTo(b))
    .slice(0, 3);
  if (targets.length === 0) return false;
  w.buffer.clear('slash');
  w.buffer.clear('thrust');
  ps.resolve -= T.galeCost;
  ps.galeTargets = targets.map((e) => e.id);
  p.set('gale', GALE_SEG * targets.length + 12);
  w.slowmo(0.5, 0.6);
  w.emit({ type: 'gale', id: p.id });
  w.emit({ type: 'text', text: '질풍참', sub: '疾風斬', style: 'issen', id: p.id });
  return true;
}

function startOpener(w: World, p: Fighter, inp: InputFrame): void {
  const btn = consumeAttack(w);
  startAttack(w, p, inp, getMove(PLAYER_OPENERS[btn]), btn, true);
}

export function startAttack(w: World, p: Fighter, inp: InputFrame, move: MoveDef, btn: AtkBtn, opener: boolean, chargeRatio = 0): void {
  const ps = w.ps;
  const target = pickTarget(w, p, inp, T.softTargetRange);
  let lunge = move.lunge * 0.3;
  if (target) {
    p.yaw = p.yawTo(target.pos);
    const range = move.shape.range;
    const gap = dist(p.pos, target.pos) - p.radius - target.radius;
    lunge = Math.max(0, Math.min(move.lunge, gap - range * 0.45 + 0.2));
  } else if (len(inp.move) > 0.2) {
    p.yaw = toYaw(inp.move);
  }
  let postureBonus = 1;
  let dmgBonus = 1;
  if (w.tick <= ps.dodgeCounterUntil) {
    postureBonus *= 1.6;
    dmgBonus *= 1.25;
    ps.dodgeCounterUntil = -1;
    w.emit({ type: 'text', text: '회피 반격', style: 'info', id: p.id });
  }
  if (target && target.id === ps.riposteTarget && w.tick <= ps.riposteUntil) {
    postureBonus *= 2;
    ps.riposteUntil = -1;
  }
  p.set('attack', move.startup + move.active + move.recovery, {
    move,
    hit: new Set(),
    targetId: target?.id,
    lunge,
    opener,
    button: btn,
    value: chargeRatio,
    postureBonus,
    dmgBonus,
  });
}

function updateAttack(w: World, p: Fighter, inp: InputFrame): void {
  const a = p.act;
  const m = a.move!;
  const buf = w.buffer;
  const tick = w.tick;
  const B = T.inputBuffer;

  // Keep holding after the light hit → wind up a charged heavy strike.
  if (a.button && !m.heavy && m.id !== 'r_bash' && a.t === m.startup + m.active + T.chargeCheck && inp.held[a.button] && !buf.peek(a.button, tick, B)) {
    p.set('charge', Infinity, { button: a.button, targetId: a.targetId });
    return;
  }

  if (a.t >= m.chainFrom) {
    if (tryFinisherOrCounter(w, p)) return;
    if (tryGale(w, p, inp)) return;
    const wantS = buf.peek('slash', tick, B);
    const wantT = buf.peek('thrust', tick, B);
    if (wantS || wantT) {
      const btn = wantS && wantT ? consumeAttack(w) : wantS ? 'slash' : 'thrust';
      const nextId = m.next?.[btn];
      if (nextId) {
        buf.consume(btn, tick, B);
        startAttack(w, p, inp, getMove(nextId), btn, false);
        return;
      }
      if (a.t >= m.cancelFrom + 4) {
        buf.consume(btn, tick, B);
        startAttack(w, p, inp, getMove(PLAYER_OPENERS[btn]), btn, true);
        return;
      }
    }
  }
  if (a.t >= m.cancelFrom) {
    if (buf.consume('dodge', tick, B)) return startDodge(w, p, inp);
    if (inp.pressed.guard || (buf.peek('guard', tick, B) && inp.held.guard)) {
      buf.consume('guard', tick, B);
      return enterGuard(w, p, true);
    }
    if (inp.held.aim) return enterAim(w, p);
    if (buf.consume('quickshot', tick, B) && tryQuickshot(w, p)) return;
  }
}

function enterGuard(w: World, p: Fighter, fresh: boolean): void {
  const ps = w.ps;
  ps.prevGuardStartTick = ps.guardStartTick;
  ps.guardStartTick = fresh ? w.tick : -9999;
  p.set('guard', Infinity);
}

function startDodge(w: World, p: Fighter, inp: InputFrame): void {
  const dir = len(inp.move) > 0.2 ? norm(inp.move) : scale(p.forward(), -1);
  w.ps.dodgePressTick = w.tick;
  p.set('dodge', T.dodgeDur, { dir });
  w.ps.draw = 0;
}

/** 흘리기 input: guard held + dodge. Side comes from the stick (default: right). */
function startFlowStep(p: Fighter, inp: InputFrame): void {
  const r = rightOf(p.yaw);
  const lateral = inp.move.x * r.x + inp.move.z * r.z;
  const side: -1 | 1 = lateral < -0.2 ? -1 : 1;
  p.set('flowStep', T.flowStepDur, { side, dir: scale(r, side) });
}

function enterAim(w: World, p: Fighter): void {
  const ps = w.ps;
  if (w.tick - ps.lastDodgeEnd < 20 || p.is('dodge')) ps.dodgeAimSlowmo = T.dodgeAimSlowmoSec;
  ps.draw = 0;
  p.set('aim', Infinity);
}

function updateAim(w: World, p: Fighter, inp: InputFrame): void {
  const ps = w.ps;
  if (!inp.held.aim) {
    ps.draw = 0;
    ps.focusing = false;
    ps.dodgeAimSlowmo = 0;
    p.set('free', Infinity);
    return;
  }
  if (w.buffer.consume('dodge', w.tick, T.inputBuffer)) {
    ps.focusing = false;
    return startDodge(w, p, inp);
  }
  p.yaw = inp.camYaw;
  p.vel = scale(inp.move, T.aimMoveSpeed * Math.min(1, len(inp.move)));
  ps.focusing = !!(inp.held.focus || inp.held.guard) && ps.resolve > 0.02;
  const drawing = !!(inp.held.slash || inp.held.fire);
  if (drawing) {
    if (ps.arrows[ps.arrowType] > 0) ps.draw++;
    else if (inp.pressed.slash || inp.pressed.fire) w.emit({ type: 'text', text: '화살이 없다', style: 'bad', id: p.id });
  } else if (ps.draw > 0) {
    if (ps.draw >= 8) fireArrow(w, p, inp, ps.draw);
    ps.draw = 0;
  }
}

function tryQuickshot(w: World, p: Fighter): boolean {
  if (w.ps.arrows.standard <= 0) {
    w.emit({ type: 'text', text: '화살이 없다', style: 'bad', id: p.id });
    return false;
  }
  const tgt = pickTarget(w, p, w.input, 28);
  if (tgt) p.yaw = p.yawTo(tgt.pos);
  p.set('quickshot', T.quickshotDur, { targetId: tgt?.id });
  return true;
}
