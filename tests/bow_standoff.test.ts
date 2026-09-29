import { describe, expect, it } from 'vitest';
import { Driver, duel } from './helpers';
import { drawInfo } from '../src/core/bow';
import { T } from '../src/core/tuning';
import { World } from '../src/core/world';
import { WaveDirector } from '../src/core/waves';
import { startEnemyAttack } from '../src/core/ai';
import { getMove } from '../src/core/moves';

function aimAtHead(d: Driver, target: { x: number; z: number }, headY = 1.62) {
  const o = { x: 0, y: 1.6, z: -2 };
  const dx = target.x - o.x;
  const dy = headY - o.y;
  const dz = target.z - o.z;
  const l = Math.hypot(dx, dy, dz);
  d.aimOrigin = o;
  d.aimDir = { x: dx / l, y: dy / l, z: dz / l };
  d.camYaw = Math.atan2(dx, dz);
}

describe('활 (bow)', () => {
  it('만작 직후에 놓으면 정사(perfect), 너무 오래 버티면 팔이 떨린다', () => {
    const full = T.drawTicks.standard;
    expect(drawInfo(full - 10, 'standard').perfect).toBe(false);
    expect(drawInfo(full + 2, 'standard').perfect).toBe(true);
    expect(drawInfo(full + 2, 'standard').spread).toBe(0);
    const tired = drawInfo(full + T.perfectDrawWindow + 90, 'standard');
    expect(tired.perfect).toBe(false);
    expect(tired.spread).toBeGreaterThan(drawInfo(full - 1, 'standard').spread);
  });

  it('정사 헤드샷은 낭인을 한 발에 쓰러뜨린다', () => {
    const { w, d, e } = duel('ronin', 14);
    aimAtHead(d, e.pos);
    d.press('aim');
    d.tick(2);
    d.press('slash');
    d.tick(T.drawTicks.standard + 3);
    d.release('slash');
    d.tick(40);
    expect(d.events.some((ev) => ev.type === 'arrowHit' && ev.headshot)).toBe(true);
    expect(e.alive).toBe(false);
    expect(w.stats.headshots).toBe(1);
  });

  it('방패 무사 정면: 일반 화살은 막히고, 관통 화살은 방패를 걷어낸다', () => {
    const a = duel('shield', 12);
    aimAtHead(a.d, a.e.pos, 1.1);
    a.d.press('aim');
    a.d.press('slash');
    a.d.tick(T.drawTicks.standard);
    a.d.release('slash');
    a.d.tick(30);
    expect(a.e.hp).toBe(a.e.maxHp);
    expect(a.e.shieldOpen).toBe(0);

    const b = duel('shield', 12);
    b.w.ps.arrowType = 'heavy';
    aimAtHead(b.d, b.e.pos, 1.1);
    b.d.press('aim');
    b.d.press('slash');
    b.d.tick(T.drawTicks.heavy);
    b.d.release('slash');
    b.d.tick(30);
    expect(b.d.has('shieldOpen')).toBe(true);
  });

  it('적 화살은 방패 튕기기로 쳐낼 수 있다', () => {
    const { w, d, e } = duel('archer', 14);
    startEnemyAttack(w, e, getMove('ac_shot'));
    e.brain!.aware = false;
    // Wait until the arrow is ~4 m away, then raise the buckler.
    for (let i = 0; i < 200; i++) {
      d.tick();
      const pr = w.projectiles.find((x) => x.team === 'enemy' && !x.stuck);
      if (pr && pr.pos.z < 4.5) break;
    }
    d.press('guard');
    d.tick(12);
    expect(d.events.some((ev) => ev.type === 'deflect' && ev.arrow)).toBe(true);
    expect(w.player.hp).toBe(100);
  });
});

describe('대치 (standoff)', () => {
  function standoffWorld() {
    const w = new World(11);
    w.waves = new WaveDirector([{ title: 't', subtitle: 's', spawns: [['ronin', 2]], standoff: true }]);
    w.waves.start(w);
    const d = new Driver(w);
    d.tick(110); // intro → enemies spawn and walk in
    return { w, d };
  }

  it('누르고 기다렸다가 달려드는 순간 떼면 일격에 벤다', () => {
    const { w, d } = standoffWorld();
    expect(w.waves!.standoffAvailable).toBe(true);
    d.tap('standoff');
    expect(w.mode).toBe('standoff');
    d.press('slash');
    let released = false;
    for (let i = 0; i < 600 && !released; i++) {
      d.tick();
      if (w.standoff.phase === 'strike' && w.standoff.t >= w.standoff.impact - 5) {
        d.release('slash');
        released = true;
      }
    }
    expect(released).toBe(true);
    expect(w.stats.standoffKills).toBe(1);
    expect(w.player.hp).toBe(100);
  });

  it('허초에 속아 먼저 떼면 실패하고 베인다', () => {
    const { w, d } = standoffWorld();
    d.tap('standoff');
    d.press('slash');
    for (let i = 0; i < 200 && w.standoff.phase !== 'tension'; i++) d.tick();
    expect(w.standoff.phase).toBe('tension');
    d.tick(20);
    d.release('slash');
    d.tick(40);
    expect(d.events.some((ev) => ev.type === 'standoff' && ev.phase === 'fail')).toBe(true);
    expect(w.player.hp).toBeLessThan(100);
    expect(w.mode).toBe('combat');
  });
});

describe('웨이브 & AI 스모크', () => {
  it('AI끼리 싸움이 진행되고 예외 없이 수천 틱을 돈다 (공격 토큰 ≤ 2)', () => {
    const w = new World(5);
    w.settings.invincible = true;
    w.waves = new WaveDirector();
    w.waves.start(w);
    const d = new Driver(w);
    let maxAttackers = 0;
    for (let i = 0; i < 3000; i++) {
      // Crude bot: guard on glints, otherwise attack.
      if (i % 25 === 0) d.tap(i % 50 === 0 ? 'slash' : 'thrust');
      else d.tick();
      const attackers = w.enemies().filter((e) => e.alive && e.is('attack') && !e.arch?.ai.ranged).length;
      maxAttackers = Math.max(maxAttackers, attackers);
    }
    expect(maxAttackers).toBeLessThanOrEqual(T.maxAttackers);
    expect(w.stats.kills).toBeGreaterThan(0);
  });
});
