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

  it('링 색 = 대응법: 일반 흰색, 파랑, 빨강(튕기기 띠 없음) · 허초와 투사체는 링이 없다', () => {
    const grade = (id: string) => {
      const { w, d, e } = duel('ronin', 9);
      startEnemyAttack(w, e, getMove(id));
      d.tick(Math.max(1, getMove(id).startup - 4));
      return attackTelegraph(w, e);
    };
    expect(grade('ro_cut1')!.grade).toBe('white');
    expect(grade('ro_lunge')!.grade).toBe('blue');
    expect(grade('ar_crush')!.grade).toBe('red');
    expect(grade('ar_crush')!.deflectBand).toBe(0);
    expect(grade('ro_cut1')!.deflectBand).toBeCloseTo(T.deflectWindow / T.telegraphLead, 6);
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

  it('전투 시뮬레이션: 두 적의 타격 틱이 박자 간격보다 가깝게 겹치지 않는다', () => {
    const w = new World(7);
    w.mode = 'combat';
    w.settings.invincible = true;
    for (let i = 0; i < 4; i++) {
      const e = w.spawn(i % 2 ? 'ronin' : 'spear', { x: Math.cos(i * 1.6) * 5, z: Math.sin(i * 1.6) * 5 }, 0);
      e.brain!.aware = true;
      e.hp = e.maxHp = 99999;
    }
    const contacts: number[] = [];
    for (let i = 0; i < 6000; i++) {
      w.step(emptyInput());
      w.drainEvents();
      if (w.hitstop > 0) continue;
      for (const f of w.enemies()) {
        const m = f.act.move;
        if (f.act.kind === 'attack' && m && !m.feint && !m.projectile && f.act.t === m.startup) contacts.push(w.tick);
      }
    }
    expect(contacts.length).toBeGreaterThan(20);
    let closest = Infinity;
    for (let i = 1; i < contacts.length; i++) closest = Math.min(closest, contacts[i] - contacts[i - 1]);
    // Follow-ups of one enemy's own string are ≥ 20 + recovery apart; different enemies ≥ spacing.
    expect(closest).toBeGreaterThanOrEqual(T.attackSpacing);
  });
});
