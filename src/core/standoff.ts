// 대치 (Standoff): Ghost of Tsushima's duel opener.
//
//  1) 적이 다가오는 동안 대치를 건다 → 우두머리가 앞으로 나선다.
//  2) 베기 버튼을 누른 채 기다린다. 우두머리는 허초(움찔)로 속인다 — 이때 떼면 실패.
//  3) 진짜로 달려드는 순간 버튼을 떼면 일격에 벤다.
//  4) 연쇄: 다음 적이 달려들 때 베기를 눌러 이어서 벤다 (최대 T.standoffChainMax 명).

import type { Fighter } from './fighter';
import type { InputFrame } from './input';
import { norm, scale, sub } from './math';
import { T } from './tuning';
import type { World } from './world';
import { damagePlayer, doIssen } from './combat';

export type StandoffPhase = 'approach' | 'tension' | 'strike' | 'between' | 'punish' | 'done';

const STRIKE_TRAVEL = 18;

export class Standoff {
  phase: StandoffPhase = 'done';
  leaderId = -1;
  t = 0;
  strikeAt = 0;
  feints: number[] = [];
  held = false;
  everHeld = false;
  kills = 0;
  /** Enemies already struck in this standoff (a surviving boss can't be struck twice). */
  private readonly struck = new Set<number>();
  /** Tick (in strike phase) when the charging enemy arrives. */
  readonly impact = STRIKE_TRAVEL;

  get active(): boolean {
    return this.phase !== 'done';
  }

  begin(w: World): boolean {
    const p = w.player;
    const melee = w.liveEnemies().filter((e) => !e.arch?.ai.ranged);
    if (melee.length === 0 || !p.free) return false;
    melee.sort((a, b) => a.distTo(p) - b.distTo(p));
    const leader = melee[0];
    this.leaderId = leader.id;
    this.phase = 'approach';
    this.t = 0;
    this.kills = 0;
    this.struck.clear();
    this.held = false;
    this.everHeld = false;
    w.mode = 'standoff';
    if (w.waves) w.waves.standoffAvailable = false;
    p.set('standoff', Infinity);
    p.yaw = p.yawTo(leader.pos);
    for (const e of w.liveEnemies()) {
      e.set('free', Infinity);
      e.vel = { x: 0, z: 0 };
    }
    w.emit({ type: 'standoff', phase: 'begin', id: leader.id });
    w.emit({ type: 'text', text: '대치', sub: '베기를 누른 채 기다려라 — 달려드는 순간 떼라', style: 'info', id: p.id });
    return true;
  }

  update(w: World, inp: InputFrame): void {
    const p = w.player;
    const L = w.get(this.leaderId);
    this.t++;
    p.vel = { x: 0, z: 0 };
    if ((!L || !L.alive) && this.phase !== 'between') return this.end(w);
    if (inp.held.slash) {
      this.held = true;
      this.everHeld = true;
    }

    switch (this.phase) {
      case 'approach': {
        const leader = L!;
        const toP = sub(p.pos, leader.pos);
        const d = Math.hypot(toP.x, toP.z);
        p.yaw = p.yawTo(leader.pos);
        leader.yaw = leader.yawTo(p.pos);
        if (d > 6.5) leader.vel = scale(norm(toP), 4.2);
        else leader.vel = { x: 0, z: 0 };
        leader.act = { kind: 'free', t: 0, dur: Infinity };
        if (d <= 6.6 || this.t > 90) {
          leader.vel = { x: 0, z: 0 };
          this.phase = 'tension';
          this.t = 0;
          this.strikeAt = Math.round(w.rng.range(110, 260));
          this.feints = [];
          const nf = w.rng.chance(0.4) ? 2 : w.rng.chance(0.7) ? 1 : 0;
          for (let i = 0; i < nf; i++) this.feints.push(Math.round(w.rng.range(45, this.strikeAt - 30)));
        }
        return;
      }
      case 'tension': {
        const leader = L!;
        leader.vel = { x: 0, z: 0 };
        if (this.feints.includes(this.t)) {
          leader.set('standoff', 22, { value: 2 });
          w.emit({ type: 'standoff', phase: 'feint', id: leader.id });
        }
        if (inp.released.slash && this.everHeld) return this.fail(w, leader, '성급했다');
        if (this.t >= this.strikeAt) {
          if (!this.held || !inp.held.slash) return this.fail(w, leader, '베기를 누르고 있어야 한다');
          this.charge(w, leader);
        }
        return;
      }
      case 'strike': {
        const leader = L!;
        const release = this.kills === 0 ? inp.released.slash : inp.pressed.slash;
        if (release) {
          if (this.t >= this.impact - w.win(T.standoffStrikeWindow) && this.t <= this.impact + 2) return this.win(w, leader);
          return this.fail(w, leader, '너무 일렀다');
        }
        if (this.t > this.impact + 2) return this.fail(w, leader, '늦었다');
        return;
      }
      case 'punish': {
        if (this.t >= this.impact && L) {
          this.end(w);
          damagePlayer(w, L, p, T.standoffFailDamage, true);
        }
        return;
      }
      case 'between': {
        if (this.t < 46) return;
        if (this.kills >= T.standoffChainMax) return this.end(w);
        const next = w
          .liveEnemies()
          .filter((e) => !e.arch?.ai.ranged && !e.arch?.isBoss && !this.struck.has(e.id) && e.distTo(p) < 14)
          .sort((a, b) => a.distTo(p) - b.distTo(p))[0];
        if (!next) return this.end(w);
        this.leaderId = next.id;
        p.yaw = p.yawTo(next.pos);
        this.charge(w, next);
        return;
      }
      default:
        return;
    }
  }

  private charge(w: World, e: Fighter, phase: 'strike' | 'punish' = 'strike'): void {
    const p = w.player;
    const dir = norm(sub(p.pos, e.pos));
    const to = sub(p.pos, scale(dir, 1.5));
    e.yaw = e.yawTo(p.pos);
    e.set('standoff', STRIKE_TRAVEL + 30, { value: 1, from: { ...e.pos }, to, travel: STRIKE_TRAVEL });
    e.glint = { color: 'blue', t: 0 };
    this.phase = phase;
    this.t = 0;
    if (phase === 'strike') w.emit({ type: 'standoff', phase: 'strike', id: e.id });
  }

  private win(w: World, e: Fighter): void {
    const p = w.player;
    doIssen(w, p, e, false, true);
    this.kills++;
    this.struck.add(e.id);
    // A boss survives the cut: the duel proper begins.
    if (e.arch?.isBoss) this.kills = T.standoffChainMax;
    this.phase = 'between';
    this.t = 0;
    w.emit({ type: 'standoff', phase: 'win', id: e.id });
  }

  /** Wrong timing: the enemy's strike lands. */
  private fail(w: World, e: Fighter, why: string): void {
    w.emit({ type: 'standoff', phase: 'fail', id: e.id });
    w.emit({ type: 'text', text: '대치 실패', sub: why, style: 'bad', id: w.player.id });
    if (this.phase === 'strike') {
      this.phase = 'punish';
      return;
    }
    this.charge(w, e, 'punish');
  }

  end(w: World): void {
    this.phase = 'done';
    if (w.mode === 'standoff') w.mode = 'combat';
    const p = w.player;
    if (p.is('standoff')) p.set('free', Infinity);
    for (const e of w.liveEnemies()) {
      if (e.is('standoff')) e.set('free', Infinity);
      if (e.brain) {
        e.brain.aware = true;
        e.brain.cooldown = Math.min(e.brain.cooldown, 40);
      }
    }
    w.waves?.engage(w);
  }
}
