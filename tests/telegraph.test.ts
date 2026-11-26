// 타이밍 링 · 박자 규칙: the readable-timing rules of the defense system.
import { describe, expect, it } from 'vitest';
import { World } from '../src/core/world';
import { emptyInput } from '../src/core/input';
import { attackTelegraph } from '../src/core/telegraph';
import { contactClear, startEnemyAttack } from '../src/core/ai';
import { getMove, MOVES } from '../src/core/moves';
import { ARCHETYPES } from '../src/core/archetypes';
import { T } from '../src/core/tuning';
import { duel } from './helpers';

describe('타이밍 링 (telegraph)', () => {
  it('모든 근접 공격의 링은 같은 속도로 닫히고 타격 틱에 0이 된다', () => {
    for (const id of ['ro_cut1', 'ro_cut2', 'ro_lunge', 'ar_crush', 'du_f2', 'bo_red']) {
      const { w, d, e } = duel('ronin', 9); // out of reach: nothing interrupts the swing
      const m = getMove(id);
      startEnemyAttack(w, e, m);
      let last = -1;
      let seen = 0;
      for (let i = 0; i < m.startup; i++) {
        d.tick(1);
        const tg = attackTelegraph(w, e);
        if (m.startup - e.act.t > T.telegraphLead) {
          expect(tg, id).toBeNull();
          continue;
        }
        expect(tg, id).not.toBeNull();
        seen++;
        expect(tg!.left).toBe(m.startup - e.act.t);
        // Constant pace: exactly 1 / telegraphLead per tick.
        if (last >= 0) expect(last - tg!.open, id).toBeCloseTo(1 / T.telegraphLead, 6);
        last = tg!.open;
      }
      expect(seen, id).toBeGreaterThanOrEqual(Math.min(m.startup, T.telegraphLead) - 1);
      expect(last, id).toBe(0);
      expect(e.act.t).toBe(m.startup);
    }
  });

  it('링 색 = 대응법: 일반 흰색, 파랑, 빨강(띠 = 흘리기 창) · 허초와 투사체는 링이 없다', () => {
    const grade = (id: string) => {
      const { w, d, e } = duel('ronin', 9);
      startEnemyAttack(w, e, getMove(id));
      d.tick(Math.max(1, getMove(id).startup - 4));
      return attackTelegraph(w, e);
    };
    expect(grade('ro_cut1')!.grade).toBe('white');
    expect(grade('ro_lunge')!.grade).toBe('blue');
    expect(grade('ar_crush')!.grade).toBe('red');
    expect(grade('ar_crush')!.band).toBeCloseTo(T.flowWindow / T.telegraphLead, 6);
    expect(grade('ro_cut1')!.band).toBeCloseTo(T.deflectWindow / T.telegraphLead, 6);
    expect(grade('ro_feint')).toBeNull();
    expect(grade('ac_shot')).toBeNull();
  });

  it('cue 이벤트는 대응 창이 열리는 틱에 한 번 나온다 (그 틱에 방패를 누르면 튕긴다)', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const m = getMove('ro_cut1');
    startEnemyAttack(w, e, m);
    let cueTick = -1;
    for (let i = 0; i < m.startup + 2 && cueTick < 0; i++) {
      d.tick(1);
      if (d.has('cue')) cueTick = e.act.t;
    }
    expect(cueTick).toBe(m.startup - T.deflectWindow);
    d.press('guard');
    d.tick(T.deflectWindow + 2);
    expect(d.count('cue')).toBe(1);
    expect(d.has('deflect')).toBe(true);
  });

  it('적 근접 공격은 읽을 수 있는 속도다: 첫 타 ≥ 24틱, 연속타 ≥ 20틱', () => {
    const followUps = new Set<string>();
    for (const m of Object.values(MOVES)) if (!m.id.startsWith('r_') && m.next?.slash) followUps.add(m.next.slash);
    for (const arch of Object.values(ARCHETYPES)) {
      for (const c of arch.moves) {
        const m = getMove(c.move);
        if (m.feint || m.projectile) continue;
        expect(m.startup, m.id).toBeGreaterThanOrEqual(24);
      }
    }
    for (const id of followUps) expect(getMove(id).startup, id).toBeGreaterThanOrEqual(20);
  });
});

describe('박자 규칙 (attack spacing)', () => {
  it('다른 적의 타격과 26틱 이내로 겹치는 공격은 시작하지 않는다', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const e2 = w.spawn('ronin', { x: 1.5, z: 2 }, Math.PI);
    e2.brain!.aware = false;
    e2.brain!.cooldown = 99999;
    const m = getMove('ro_cut1');
    startEnemyAttack(w, e, m);
    // Same move started right away would land on the same tick.
    expect(contactClear(w, e2, m)).toBe(false);
    d.tick(m.startup - 4);
    // 4 ticks left on the first blow: a 28-tick startup now lands 24 ticks later — still too close.
    expect(contactClear(w, e2, m)).toBe(false);
    expect(contactClear(w, e2, getMove('ro_lunge'))).toBe(true); // 38 − 4 = 34 ≥ spacing
    d.tick(5);
    // The first blow has landed: free to go.
    expect(contactClear(w, e2, m)).toBe(true);
  });

  it('전투 시뮬레이션: 서로 다른 적의 타격 틱이 박자 간격보다 가깝게 겹치지 않는다 (여러 시드, 시노비 포함)', () => {
    let total = 0;
    let closest = Infinity;
    for (const seed of [7, 11, 2026]) {
      const w = new World(seed);
      w.mode = 'combat';
      w.settings.invincible = true;
      for (let i = 0; i < 4; i++) {
        // (The duelist's 24-tick opener is shorter than the spacing: the hard case.)
        const e = w.spawn(i === 0 ? 'duelist' : i % 2 ? 'ronin' : 'spear', { x: Math.cos(i * 1.6) * 5, z: Math.sin(i * 1.6) * 5 }, 0);
        e.brain!.aware = true;
        e.hp = e.maxHp = 99999;
      }
      let last = { tick: -9999, id: -1 };
      for (let i = 0; i < 6000; i++) {
        w.step(emptyInput());
        w.drainEvents();
        if (w.hitstop > 0) continue;
        for (const f of w.enemies()) {
          const m = f.act.move;
          if (f.act.kind !== 'attack' || !m || m.feint || m.projectile || f.act.t !== m.startup) continue;
          total++;
          if (last.id !== f.id) closest = Math.min(closest, w.tick - last.tick);
          last = { tick: w.tick, id: f.id };
        }
      }
    }
    expect(total).toBeGreaterThan(60);
    expect(closest).toBeGreaterThanOrEqual(T.attackSpacing);
  });
});

describe('링 띠 = 실제 판정 창', () => {
  it('띠에 들어온 틱에 누르면 성공, 띠 밖(더 이른) 틱에 누르면 실패한다 — 흰 링 튕기기 / 빨간 링 흘리기', () => {
    const run = (id: string, arch: 'ronin' | 'armored', dist: number, early: number) => {
      const { w, d, e } = duel(arch, dist);
      const m = getMove(id);
      startEnemyAttack(w, e, m);
      const red = m.unblockable === 'red';
      if (red) d.press('guard'); // flow = buckler held + dodge
      let pressed = false;
      for (let i = 0; i < m.startup + 6; i++) {
        const tg = attackTelegraph(w, e);
        // Press on the first tick the ring is inside the band (or `early` ticks before that).
        if (!pressed && tg && tg.open <= tg.band + early / T.telegraphLead + 1e-9) {
          pressed = true;
          if (red) d.tap('dodge');
          else d.press('guard');
        } else d.tick(1);
      }
      return { ok: d.has(red ? 'flow' : 'deflect'), hp: w.player.hp };
    };
    expect(run('ro_cut1', 'ronin', 2.2, 0).ok).toBe(true);
    expect(run('ro_cut1', 'ronin', 2.2, 4).ok).toBe(false);
    expect(run('ar_crush', 'armored', 2.6, 0).ok).toBe(true);
    expect(run('ar_crush', 'armored', 2.6, 6).ok).toBe(false);
  });
});

describe('타이밍 피드백 (빨랐다 / 늦었다)', () => {
  it('방패를 너무 일찍 눌러 막기가 되면 "빨랐다"와 몇 틱 일렀는지 알려준다', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyStart(w, e, 'ro_cut1');
    d.tick(s - T.deflectWindow - 5);
    d.press('guard');
    d.tick(T.deflectWindow + 8);
    expect(d.has('deflect')).toBe(false);
    expect(d.has('block')).toBe(true);
    const t = d.events.find((ev) => ev.type === 'text' && ev.text === '빨랐다');
    expect(t).toBeTruthy();
    expect((t as { sub?: string }).sub).toMatch(/^\d+틱 일찍/);
  });

  it('방패를 계속 들고 막은 것은 의도한 막기다 — 피드백 없음', () => {
    const { w, d, e } = duel('ronin', 2.2);
    d.press('guard');
    d.tick(60);
    const s = enemyStart(w, e, 'ro_cut1');
    d.tick(s + 4);
    expect(d.has('block')).toBe(true);
    expect(d.texts()).not.toContain('빨랐다');
  });

  it('맞은 직후(히트스톱 포함)에 누른 방패는 "늦었다"', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyStart(w, e, 'ro_cut2') // no follow-up;
    // Stop exactly on the tick the blow lands (do not skip its hit-stop).
    for (let i = 0; i < s + 2 && !d.has('hit'); i++) d.step();
    expect(d.has('hit')).toBe(true);
    expect(w.hitstop).toBeGreaterThan(0);
    d.step(['guard']); // pressed during the hit-stop of the blow
    expect(d.texts()).toContain('늦었다');
    // Only once, and not for a press long after.
    d.tick(40);
    d.step(['guard']);
    expect(d.texts().filter((x) => x === '늦었다').length).toBe(1);
  });

  it('맞은 뒤 한참 지나 누른 방패에는 "늦었다"가 뜨지 않는다', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyStart(w, e, 'ro_cut1');
    d.tick(s + 30);
    expect(d.has('hit')).toBe(true);
    d.step(['guard']);
    expect(d.texts()).not.toContain('늦었다');
  });
});

function enemyStart(w: World, e: import('../src/core/fighter').Fighter, id: string): number {
  const m = getMove(id);
  startEnemyAttack(w, e, m);
  return m.startup;
}

describe('리뷰 회귀 7 (코어)', () => {
  it('화살을 튕긴 직후의 더블 탭도 연타가 아니다 (성공한 방어는 방패 열을 식힌다)', () => {
    const { w, d, e } = duel('ronin', 2.2);
    // Heat the buckler a little, then succeed once: the heat is gone.
    d.tap('guard');
    d.tick(3);
    d.tap('guard');
    expect(w.ps.guardHeat).toBeGreaterThan(1);
    const s0 = enemyStart(w, e, 'ro_cut2');
    d.tick(s0 - 8);
    d.tick(20); // (blocked or hit — no matter)
    w.ps.guardHeat = 2;
    w.ps.guardHeatTick = w.tick;
    // A successful deflect clears it …
    d.tick(40);
    w.ps.guardHeat = 1.2;
    w.ps.guardHeatTick = w.tick;
    const s1 = enemyStart(w, e, 'ro_cut2');
    d.tick(s1 - 5);
    d.press('guard');
    d.tick(8);
    expect(d.has('deflect')).toBe(true);
    expect(w.ps.guardHeat).toBe(0);
    d.release('guard');
    // … so a double tap for the very next blow deflects.
    d.tick(30);
    const s2 = enemyStart(w, e, 'ro_cut2');
    d.tick(s2 - 16);
    d.tap('guard');
    d.tick(6);
    d.press('guard');
    d.tick(10);
    expect(d.count('deflect')).toBe(2);
    expect(d.texts()).not.toContain('방패 연타');
  });

  it('맞은 직후의 방패가 이미 오고 있는 다음 타격을 받아낼 수 있으면 "늦었다"고 하지 않는다 (쉬움)', () => {
    const { w, d, e } = duel('duelist', 2.0);
    w.settings.windowScale = 1.6;
    const first = getMove('du_f1');
    startEnemyAttack(w, e, first);
    for (let i = 0; i < first.startup + 2 && !d.has('hit'); i++) d.step();
    expect(d.has('hit')).toBe(true);
    while (w.hitstop > 0) d.step();
    // The follow-up is already on its way and lands within the (easy) deflect window of this press.
    startEnemyAttack(w, e, getMove('du_f2'));
    d.tick(getMove('du_f2').startup - 18);
    d.step(['guard']);
    expect(d.texts()).not.toContain('늦었다');
  });

  it('박자 규칙: 튕겨져 반동 중인 적의 타격 뒤에도 다음 적의 타격은 26틱 이상 떨어진다 (발동 24틱 공격)', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const e2 = w.spawn('duelist', { x: 1.5, z: 2 }, Math.PI);
    e2.brain!.aware = false;
    e2.brain!.cooldown = 99999;
    const first = getMove('ro_cut1');
    const fast = getMove('du_f1');
    startEnemyAttack(w, e, first);
    d.tick(first.startup - 6);
    d.press('guard');
    let contactTick = -1;
    let startedTick = -1;
    for (let i = 0; i < 60 && startedTick < 0; i++) {
      d.tick(1);
      if (contactTick < 0 && d.has('deflect')) contactTick = w.tick;
      // Ask exactly as the AI does (before this tick's actions advance): try to start it now.
      if (contactTick >= 0 && contactClear(w, e2, fast)) {
        startEnemyAttack(w, e2, fast);
        startedTick = w.tick;
      }
    }
    expect(contactTick).toBeGreaterThan(0);
    expect(e.act.kind).not.toBe('attack'); // the first attacker is in recoil: only the record remains
    let landed = -1;
    for (let i = 0; i < fast.startup + 4 && landed < 0; i++) {
      d.tick(1);
      if (e2.act.kind === 'attack' && e2.act.t === fast.startup) landed = w.tick;
    }
    expect(landed - contactTick).toBeGreaterThanOrEqual(T.attackSpacing);
  });
});
