// Regression tests for bugs found in code review of the combat core.
import { describe, expect, it } from 'vitest';
import { Driver, duel, enemyAttack } from './helpers';
import { World } from '../src/core/world';
import { WaveDirector } from '../src/core/waves';
import { getMove } from '../src/core/moves';
import { startEnemyAttack } from '../src/core/ai';
import { T } from '../src/core/tuning';

function standoffWorld(spawns: [import('../src/core/types').ArchetypeId, number][]) {
  const w = new World(11);
  w.settings.invincible = true;
  w.waves = new WaveDirector([{ title: 't', subtitle: 's', spawns, standoff: true }]);
  w.waves.start(w);
  const d = new Driver(w);
  d.tick(110);
  return { w, d };
}

describe('회귀: 대치', () => {
  it('타이밍을 놓치고 계속 누르고 있어도 대치가 끝나고 전투로 넘어간다 (무한 잠김 없음)', () => {
    const { w, d } = standoffWorld([['ronin', 2]]);
    d.tap('standoff');
    d.press('slash');
    d.tick(900); // never release
    expect(w.mode).toBe('combat');
    expect(w.stats.damageTaken).toBeGreaterThan(0);
  });

  it('연쇄 대치에서 두 번째 적에게 입력하지 않아도 잠기지 않는다', () => {
    const { w, d } = standoffWorld([['ronin', 3]]);
    d.tap('standoff');
    d.press('slash');
    for (let i = 0; i < 600 && !(w.standoff.phase === 'strike' && w.standoff.t >= w.standoff.impact - 5); i++) d.tick();
    d.release('slash');
    d.tick(400);
    expect(w.stats.standoffKills).toBe(1);
    expect(w.mode).toBe('combat');
  });

  it('대장은 한 대치에서 한 번만 베인다', () => {
    const { w, d } = standoffWorld([['boss', 1]]);
    d.tap('standoff');
    d.press('slash');
    for (let i = 0; i < 600 && !(w.standoff.phase === 'strike' && w.standoff.t >= w.standoff.impact - 5); i++) d.tick();
    d.release('slash');
    for (let i = 0; i < 400; i++) {
      if (w.standoff.phase === 'strike') d.tap('slash');
      else d.tick();
    }
    expect(w.stats.standoffKills).toBe(1);
    expect(w.mode).toBe('combat');
  });
});

describe('회귀: 판정', () => {
  it('창대에 막힌 공격이 막타면 창병은 제대로 죽는다 (시체가 계속 공격하지 않음)', () => {
    const { w, d, e, p } = duel('spear', 2.2);
    e.hp = 2;
    startEnemyAttack(w, e, getMove('sp_thrust'));
    e.brain!.aware = false;
    d.tick(getMove('sp_thrust').startup - 6);
    d.tap('thrust');
    d.tick(120);
    expect(e.alive).toBe(false);
    expect(d.count('kill')).toBe(1);
    expect(p.hp).toBe(100);
  });

  it('막기 경직 중에 온 두 번째 공격도 막힌다', () => {
    const w = new World(3);
    const d = new Driver(w);
    const a = w.spawn('ronin', { x: 0, z: 2.2 }, Math.PI);
    const b = w.spawn('ronin', { x: 0.6, z: 2.3 }, Math.PI);
    for (const e of [a, b]) {
      e.brain!.aware = false;
      e.brain!.cooldown = 99999;
    }
    d.press('guard');
    d.tick(30);
    startEnemyAttack(w, a, getMove('ro_cut2'));
    d.tick(4);
    startEnemyAttack(w, b, getMove('ro_cut2'));
    for (const e of [a, b]) e.brain!.aware = false;
    d.tick(getMove('ro_cut2').startup + 4);
    expect(d.count('block')).toBe(2);
    expect(w.player.hp).toBe(100);
  });

  it('경직이 끝나기 직전에 누른 방패도 튕기기가 된다', () => {
    const { w, d, e, p } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_cut2');
    p.set('hitstun', s - 2);
    d.tick(s - 5);
    d.press('guard'); // pressed while still stunned, 5 ticks before impact
    d.tick(6);
    expect(d.has('deflect')).toBe(true);
    expect(p.hp).toBe(100);
  });

  it('히트스톱 중에 누른 방패 입력도 버려지지 않는다', () => {
    const { w, d, e } = duel('ronin', 2.2);
    w.hitstop = 3;
    d.step(['guard']); // frozen tick
    d.held.add('guard');
    const s = enemyAttack(w, e, 'ro_lunge');
    expect(s).toBeGreaterThan(0);
    // The press was consumed into a fresh guard once the freeze ended.
    d.tick(2);
    expect(w.player.is('guard')).toBe(true);
    expect(w.ps.guardStartTick).toBeGreaterThan(-1);
  });

  it('연속 튕기기(튕긴 직후 재입력)는 스팸 페널티를 받지 않는다 · 방패는 탭해도 튕기기 창 동안 유지', () => {
    const w = new World(4);
    const d = new Driver(w);
    const a = w.spawn('ronin', { x: 0, z: 2.2 }, Math.PI);
    const b = w.spawn('ronin', { x: 0.7, z: 2.2 }, Math.PI);
    for (const e of [a, b]) {
      e.brain!.aware = false;
      e.brain!.cooldown = 99999;
    }
    const s = getMove('ro_cut2').startup; // a lands at tick s, b at s + 10
    startEnemyAttack(w, a, getMove('ro_cut2'));
    d.tick(10);
    startEnemyAttack(w, b, getMove('ro_cut2'));
    for (const e of [a, b]) e.brain!.aware = false;
    d.tick(s - 10 - 4);
    d.tap('guard'); // 4 ticks before a's blow (then released)
    d.tick(8);
    d.tap('guard'); // re-press ~4 ticks before b's blow, inside the spam gap
    d.tick(10);
    expect(d.count('deflect')).toBe(2);
    expect(w.player.hp).toBe(100);
  });

  it('연쇄 일섬 창(8틱)이 자기 공격 발동 시간에 잘리지 않는다', () => {
    const { w, d, e, p } = duel('boss', 2.4);
    w.ps.issenChainUntil = 1e9;
    w.ps.issenChain = 1;
    const s = enemyAttack(w, e, 'bo_c1');
    d.tick(s - 7);
    d.tap('slash');
    d.tick(10);
    expect(d.has('issen')).toBe(true);
    expect(p.hp).toBe(100);
  });

  it('베기·찌르기를 1틱 차이로 눌러도 질풍참이 나간다', () => {
    const { w, d } = duel('ronin', 2.5);
    w.ps.resolve = 3;
    d.tap('slash');
    d.tap('thrust');
    d.tick(2);
    expect(d.has('gale')).toBe(true);
  });

  it('화상 사망도 처치로 집계되고, 피니쉬 도중 이중 집계되지 않는다', () => {
    const { w, d, e } = duel('ronin', 2.0);
    e.hp = 1;
    e.burning = 21;
    d.tick(5);
    expect(e.alive).toBe(false);
    expect(w.stats.kills).toBe(1);

    const b = duel('ronin', 2.0);
    b.e.set('broken', 400);
    b.e.hp = 1;
    b.e.burning = 30;
    b.d.tap('slash');
    b.d.tick(90);
    expect(b.w.stats.kills).toBe(1);
    expect(b.d.count('kill')).toBe(1);
  });

  it('화살은 슈퍼아머 예비동작(대장 귀신베기)을 끊지 못한다', () => {
    const { w, d, e } = duel('boss', 9);
    startEnemyAttack(w, e, getMove('bo_red'));
    e.brain!.aware = false;
    d.tick(2);
    d.tap('quickshot');
    d.tick(18);
    expect(d.events.some((ev) => ev.type === 'arrowHit')).toBe(true);
    expect(e.is('attack')).toBe(true);
  });

  it('쌍검 시노비는 연격 후딜 중에는 찌르기를 피하지 못한다', () => {
    const { w, d, e } = duel('duelist', 2.0);
    const m = getMove('du_f3');
    // Already in the recovery of its string (the blow has been spent on the player).
    e.set('attack', m.startup + m.active + m.recovery, { move: m, hit: new Set([w.player.id]), lunge: 0 });
    e.act.t = m.startup + m.active + 2;
    d.tap('thrust');
    d.tick(10);
    expect(d.has('evade')).toBe(false);
    expect(e.hp).toBeLessThan(e.maxHp);
  });
});

describe('회귀: AI', () => {
  it('반격·돌파 경로를 포함해도 동시에 휘두르는 근접 적은 2명 이하 (연타 봇, 여러 시드)', () => {
    let worst = 0;
    for (const seed of [1, 2, 3, 4, 5, 6]) {
      const w = new World(seed);
      w.settings.invincible = true;
      w.waves = new WaveDirector([
        { title: 'a', subtitle: '', spawns: [['shield', 2], ['ronin', 1]], standoff: false },
        { title: 'b', subtitle: '', spawns: [['spear', 2], ['duelist', 1]], standoff: false },
      ]);
      w.waves.start(w);
      const d = new Driver(w);
      for (let i = 0; i < 4000 && w.mode === 'combat'; i++) {
        const p = w.player;
        const t = w.liveEnemies().sort((a, b) => a.distTo(p) - b.distTo(p))[0];
        d.move = t && t.gapTo(p) > 1.5 ? { x: (t.pos.x - p.pos.x) / t.distTo(p), z: (t.pos.z - p.pos.z) / t.distTo(p) } : { x: 0, z: 0 };
        if (i % 7 === 0) d.tap(i % 14 === 0 ? 'slash' : 'thrust');
        else d.tick();
        const swinging = w.liveEnemies().filter((e) => !e.arch!.ai.ranged && e.attacking && !e.act.move!.feint).length;
        worst = Math.max(worst, swinging);
      }
    }
    expect(worst).toBeLessThanOrEqual(T.maxAttackers);
  });

  it('쿠나이는 사거리에서 던진다 (코앞까지 걸어오지 않음)', () => {
    const { w, d, e } = duel('duelist', 7);
    e.brain!.aware = true;
    e.brain!.cooldown = 0;
    e.brain!.token = true;
    e.brain!.plan = 'du_kunai';
    let gapAtThrow = -1;
    for (let i = 0; i < 200 && gapAtThrow < 0; i++) {
      d.tick();
      if (e.is('attack') && e.act.move?.id === 'du_kunai') gapAtThrow = e.gapTo(w.player);
    }
    expect(gapAtThrow).toBeGreaterThan(3);
  });
});
