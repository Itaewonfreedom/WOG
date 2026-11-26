import { describe, expect, it } from 'vitest';
import { startEnemyAttack } from '../src/core/ai';
import { getMove } from '../src/core/moves';
import { duel, enemyAttack, Driver } from './helpers';
import { T } from '../src/core/tuning';
import { World } from '../src/core/world';

describe('연격 (combo strings)', () => {
  it('베기 연타 = 역베기 → 가사베기 → 횡베기 → 회전베기', () => {
    const { d, p } = duel('dummy', 2.0);
    const seen: string[] = [];
    for (let i = 0; i < 80; i++) {
      if (i % 6 === 0) d.tap('slash');
      else d.tick();
      const id = p.act.move?.id;
      if (p.act.kind === 'attack' && id && seen[seen.length - 1] !== id) seen.push(id);
    }
    expect(seen.slice(0, 4)).toEqual(['r_s1', 'r_s2', 'r_s3', 'r_s4']);
  });

  it('베기 중 찌르기 = 되돌려 찌르기로 분기, 찌르기 중 베기 = 뽑아베기', () => {
    const a = duel('dummy', 2.0);
    a.d.tap('slash');
    a.d.tick(4);
    a.d.tap('thrust');
    a.d.tick(12);
    expect(a.p.act.move?.id).toBe('r_st');

    const b = duel('dummy', 2.0);
    b.d.tap('thrust');
    b.d.tick(4);
    b.d.tap('slash');
    b.d.tick(10);
    expect(b.p.act.move?.id).toBe('r_ts');
  });

  it('누르고 있으면 강베기로 차지된다 (탭은 지연 없이 즉시 나감)', () => {
    const { d, p } = duel('dummy', 2.0);
    d.press('slash');
    expect(p.act.kind).toBe('attack'); // no latency on the light hit
    d.tick(20);
    expect(p.act.kind).toBe('charge');
    d.tick(10);
    d.release('slash');
    d.tick(2);
    expect(p.act.move?.id).toBe('r_hs');
  });

  it('소프트 타깃: 공격이 적을 향해 돌진한다', () => {
    const { d, p } = duel('dummy', 4.5);
    p.yaw = 0.6; // not facing the enemy
    d.tap('thrust');
    d.tick(10);
    expect(p.pos.z).toBeGreaterThan(1.0);
    expect(Math.abs(p.yaw)).toBeLessThan(0.1);
  });
});

describe('튕기기 (Hajiki)', () => {
  it('타격 직전 방패 = 튕기기 → 적 반동, 이어서 공격 = 튕기기 일섬', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_cut2');
    d.tick(s - 4);
    d.press('guard');
    d.tick(6);
    expect(d.has('deflect')).toBe(true);
    expect(e.act.kind).toBe('recoil');
    expect(w.player.hp).toBe(100);
    d.release('guard');
    d.tap('slash');
    d.tick(3);
    expect(d.events.some((ev) => ev.type === 'issen' && ev.hajiki)).toBe(true);
    expect(e.alive).toBe(false);
  });

  it('방패를 오래 들고 있으면 튕기기가 아니라 막기 (체간만 깎임)', () => {
    const { w, d, e } = duel('ronin', 2.2);
    d.press('guard');
    d.tick(30);
    const s = enemyAttack(w, e, 'ro_cut2');
    d.tick(s + 2);
    expect(d.has('deflect')).toBe(false);
    expect(d.has('block')).toBe(true);
    expect(w.player.hp).toBe(100);
    expect(w.player.posture).toBeGreaterThan(0);
  });

  it('파란 섬광 공격은 막을 수 없지만 튕길 수는 있다', () => {
    const blocked = duel('ronin', 2.4);
    blocked.d.press('guard');
    blocked.d.tick(30);
    const s1 = enemyAttack(blocked.w, blocked.e, 'ro_lunge');
    blocked.d.tick(s1 + 3);
    expect(blocked.w.player.hp).toBeLessThan(100);

    const deflected = duel('ronin', 2.4);
    const s2 = enemyAttack(deflected.w, deflected.e, 'ro_lunge');
    deflected.d.tick(s2 - 3);
    deflected.d.press('guard');
    deflected.d.tick(5);
    expect(deflected.d.has('deflect')).toBe(true);
    expect(deflected.w.player.hp).toBe(100);
  });

  it('빨간 섬광 공격은 튕기기로도 막을 수 없다', () => {
    const { w, d, e } = duel('spear', 2.5);
    const s = enemyAttack(w, e, 'sp_sweep');
    d.tick(s - 3);
    d.press('guard');
    d.tick(6);
    expect(d.has('deflect')).toBe(false);
    expect(w.player.hp).toBeLessThan(100);
  });

  it('방패 연타(스팸)는 튕기기 판정이 좁아진다', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_cut2');
    // Three presses in quick succession, the last one well inside the deflect window: mashing.
    d.tick(s - 14);
    d.tap('guard'); // 2 ticks
    d.tick(2);
    d.tap('guard');
    d.tick(2);
    d.press('guard'); // 5 ticks before contact
    d.tick(8);
    expect(d.has('deflect')).toBe(false);
    expect(d.has('block')).toBe(true);
    expect(d.texts()).toContain('방패 연타');
  });

  it('긴장해서 두 번 누른 방패(더블 탭)는 연타가 아니다 — 두 번째가 띠 안이면 튕긴다', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_cut1');
    d.tick(s - 22);
    d.tap('guard'); // too early
    d.tick(10);
    d.press('guard'); // in the band
    d.tick(12);
    expect(d.has('deflect')).toBe(true);
  });

  it('리듬 없이 방패만 계속 두드려서는 절반 남짓밖에 튕기지 못한다 (어떤 주기든, 쉬움 난이도 포함)', () => {
    for (const scale of [1, 1.6]) {
      for (const period of [4, 6, 8, 10, 14, 18, 22, 24, 27, 30, 35, 40]) {
        let deflects = 0;
        const trials = 30;
        for (let phase = 0; phase < trials; phase++) {
          const { w, d, e } = duel('ronin', 2.2);
          w.settings.windowScale = scale;
          w.settings.invincible = true;
          // Sustained blind tapping at a fixed period (press one tick, release the next); the
          // attack arrives at an arbitrary phase once the tapping has gone on for a while.
          const tapStep = (i: number) => {
            if (i % period === 0) d.press('guard');
            else if (i % period === 1 || period === 1) d.release('guard');
            else d.step();
          };
          const warm = 600 + phase;
          for (let i = 0; i < warm; i++) tapStep(i);
          const s = enemyAttack(w, e, 'ro_cut2');
          for (let i = warm; i < warm + s + 6; i++) tapStep(i);
          if (d.has('deflect')) deflects++;
        }
        // (Easy mode's wider window lets a slow steady tap cover a little more.)
        expect(deflects / trials, `scale ${scale} period ${period}`).toBeLessThanOrEqual(scale > 1 ? 0.66 : 0.6);
      }
    }
  });

  it('타격마다 한 번씩 누르는 방패는 계속 실패해도 연타가 아니다 (쉬움 난이도, 3연타 끝을 제때 누르면 튕긴다)', () => {
    for (const scale of [1, 1.6]) {
      const { w, d, e } = duel('duelist', 2.0);
      w.settings.windowScale = scale;
      w.settings.invincible = true;
      // Three blows 27 ticks apart; the first two presses are 3 ticks late, the third is on time.
      let contact = enemyAttack(w, e, 'du_f1');
      let now = 0;
      const until = (t: number) => {
        while (now < t) {
          d.step();
          if (w.hitstop === 0) now++;
        }
      };
      for (const id of ['du_f1', 'du_f2', 'du_f3'] as const) {
        if (id !== 'du_f1') {
          until(contact + 5);
          startEnemyAttack(w, e, getMove(id));
          contact = now + getMove(id).startup;
        }
        if (id === 'du_f3') {
          until(contact - 6);
          d.press('guard');
          now++;
        } else {
          until(contact + 3);
          d.tap('guard');
          now += 2;
        }
      }
      until(contact + 4);
      expect(d.texts(), `scale ${scale}`).not.toContain('방패 연타');
      expect(d.has('deflect'), `scale ${scale}`).toBe(true);
    }
  });

  it('방패 치기에 쓴 방패 입력은 연타로 세지 않는다 (치기 두 번 뒤의 정확한 방패는 튕긴다)', () => {
    const { w, d, e } = duel('ronin', 2.2);
    e.hp = e.maxHp = 9999;
    e.maxPosture = 9999;
    for (let k = 0; k < 2; k++) {
      d.press('guard');
      d.tap('slash'); // shield bash
      d.release('guard');
      d.tick(22);
    }
    expect(d.events.filter((ev) => ev.type === 'swing').length).toBeGreaterThanOrEqual(2);
    d.tick(30);
    const s = enemyAttack(w, e, 'ro_cut2');
    d.tick(s - 6);
    d.press('guard');
    d.tick(8);
    expect(d.texts()).not.toContain('방패 연타');
    expect(d.has('deflect')).toBe(true);
  });

  it('침착한 한 번의 방패는 타격 12틱 전에 눌러도 튕긴다 (넉넉한 판정)', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_cut1');
    d.tick(s - T.deflectWindow);
    d.press('guard');
    d.tick(T.deflectWindow + 1);
    expect(d.has('deflect')).toBe(true);
  });
});

describe('흘리기 (Nagashi)', () => {
  it('빨간 공격도 방패+회피 타이밍으로 흘린다 → 적 등 노출 → 흘려베기 피니쉬', () => {
    const { w, d, e } = duel('armored', 2.6);
    const s = enemyAttack(w, e, 'ar_crush');
    d.press('guard');
    d.tick(s - 5);
    d.tap('dodge');
    d.tick(6);
    expect(d.has('flow')).toBe(true);
    expect(e.act.kind).toBe('overextended');
    expect(w.player.hp).toBe(100);
    d.release('guard');
    d.tick(8);
    d.tap('thrust');
    d.tick(T.finisherFlowDur);
    expect(d.events.some((ev) => ev.type === 'finisherStart' && ev.kind === 'flow')).toBe(true);
    expect(e.alive).toBe(false);
  });

  it('너무 이르게 흘리면 그냥 옆걸음 — 맞는다', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_lunge');
    d.press('guard');
    d.tick(2);
    d.tap('dodge');
    d.tick(s + 4);
    expect(d.has('flow')).toBe(false);
    expect(w.player.hp).toBeLessThan(100);
  });
});

describe('일섬 (Issen)', () => {
  it('적의 타격 직전에 공격 = 일섬 즉사', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_cut2');
    d.tick(s - 3);
    d.tap('slash');
    d.tick(4);
    expect(d.has('issen')).toBe(true);
    expect(e.alive).toBe(false);
    expect(w.player.hp).toBe(100);
  });

  it('연타(매싱)로는 일섬이 나가지 않는다', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_cut2');
    d.tick(s - 12);
    d.tap('slash'); // mash...
    d.tick(5);
    d.tap('slash'); // ...press again right before impact
    d.tick(8);
    expect(d.has('issen')).toBe(false);
  });

  it('연쇄 일섬: 일섬 직후 다음 적도 일섬하면 체인이 오른다', () => {
    const w = new World(7);
    const d = new Driver(w);
    const e1 = w.spawn('ronin', { x: 0, z: 2.2 }, Math.PI);
    const e2 = w.spawn('ronin', { x: -2.5, z: 3.5 });
    for (const e of [e1, e2]) {
      e.brain!.aware = false;
      e.brain!.cooldown = 99999;
    }
    const s = enemyAttack(w, e1, 'ro_cut2');
    d.tick(s - 3);
    d.tap('slash');
    d.tick(T.issenDur + 2);
    expect(e1.alive).toBe(false);
    e2.pos = { x: w.player.pos.x, z: w.player.pos.z + 2.3 };
    w.player.yaw = 0;
    const s2 = enemyAttack(w, e2, 'ro_cut2');
    d.tick(s2 - 4);
    d.tap('slash');
    d.tick(4);
    expect(d.events.filter((ev) => ev.type === 'issen').map((ev) => (ev as { chain: number }).chain)).toEqual([1, 2]);
  });
});

describe('적 상성 (베기 / 찌르기)', () => {
  it('방패 무사: 정면 베기는 튕겨나고, 찌르기는 유효', () => {
    const a = duel('shield', 2.0);
    a.d.tap('slash');
    a.d.tick(10);
    expect(a.d.has('bounce')).toBe(true);
    expect(a.e.hp).toBe(a.e.maxHp);
    expect(a.p.act.kind).toBe('recoil');

    const b = duel('shield', 2.0);
    b.d.tap('thrust');
    b.d.tick(10);
    const hit = b.d.events.find((ev) => ev.type === 'hit' && ev.target === b.e.id);
    expect(hit && hit.type === 'hit' && hit.result).toBe('effective');
    expect(b.e.hp).toBeLessThan(b.e.maxHp);
  });

  it('방패 무사: 방패 치기로 방패를 걷어내면 베기도 들어간다', () => {
    const { d, e } = duel('shield', 1.8);
    d.press('guard');
    d.tap('slash'); // guard + slash = bash
    d.release('guard');
    d.tick(8);
    expect(d.has('shieldOpen')).toBe(true);
    d.tick(20);
    const hp = e.hp;
    d.tap('slash');
    d.tick(12);
    expect(e.hp).toBeLessThan(hp);
  });

  it('창병: 정면 찌르기는 창대에 막히고, 베기는 유효', () => {
    const a = duel('spear', 2.0);
    a.d.tap('thrust');
    a.d.tick(10);
    expect(a.d.has('haft')).toBe(true);

    const b = duel('spear', 2.0);
    b.d.tap('slash');
    b.d.tick(12);
    const hit = b.d.events.find((ev) => ev.type === 'hit' && ev.target === b.e.id);
    expect(hit && hit.type === 'hit' && hit.result).toBe('effective');
  });

  it('갑주 무사: 베기는 미끄러지고(피해 25%), 찌르기는 갑옷 틈을 찌른다(160%)', () => {
    const a = duel('armored', 2.0);
    a.d.tap('slash');
    a.d.tick(12);
    const slashDmg = a.e.maxHp - a.e.hp;
    const b = duel('armored', 2.0);
    b.d.tap('thrust');
    b.d.tick(12);
    const thrustDmg = b.e.maxHp - b.e.hp;
    expect(a.d.has('glance')).toBe(true);
    expect(thrustDmg).toBeGreaterThan(slashDmg * 4);
  });

  it('쌍검 시노비: 찌르기는 피하고, 넓은 베기는 맞는다', () => {
    const a = duel('duelist', 2.0);
    a.d.tap('thrust');
    a.d.tick(10);
    expect(a.d.has('evade')).toBe(true);
    expect(a.e.hp).toBe(a.e.maxHp);

    const b = duel('duelist', 2.0);
    b.d.tap('slash');
    b.d.tick(12);
    expect(b.e.hp).toBeLessThan(b.e.maxHp);
  });

  it('상성은 방향을 탄다: 방패 무사의 등 뒤에서는 베기도 통한다', () => {
    const { d, e } = duel('shield', 2.0);
    e.yaw = 0; // facing away from the player
    d.tap('slash');
    d.tick(12);
    expect(d.has('bounce')).toBe(false);
    expect(e.hp).toBeLessThan(e.maxHp);
  });
});

describe('체간 붕괴 → 피니쉬', () => {
  it('체간이 무너지면 베기/찌르기 버튼으로 각각 다른 피니쉬가 나간다', () => {
    for (const btn of ['slash', 'thrust'] as const) {
      const { d, e } = duel('ronin', 2.0);
      e.posture = e.maxPosture - 1;
      d.tap('thrust');
      d.tick(10);
      expect(e.act.kind).toBe('broken');
      expect(d.has('postureBreak')).toBe(true);
      d.tick(18);
      d.tap(btn);
      d.tick(80);
      const start = d.events.find((ev) => ev.type === 'finisherStart');
      expect(start && start.type === 'finisherStart' && start.kind).toBe(btn);
      expect(d.has('finisherImpact')).toBe(true);
      expect(e.alive).toBe(false);
    }
  });

  it('연쇄 피니쉬: 피니쉬 도중 다른 무너진 적에게 이어간다', () => {
    const w = new World(3);
    const d = new Driver(w);
    const a = w.spawn('ronin', { x: 0, z: 1.8 }, Math.PI);
    const b = w.spawn('ronin', { x: 2.0, z: 2.2 });
    for (const e of [a, b]) {
      e.brain!.aware = false;
      e.brain!.cooldown = 99999;
      e.set('broken', 400);
    }
    d.tap('slash');
    d.tick(T.finisherChainFrom + 2);
    d.tap('thrust');
    d.tick(90);
    expect(d.count('finisherImpact')).toBe(2);
    expect(a.alive || b.alive).toBe(false);
    expect(a.alive).toBe(false);
    expect(b.alive).toBe(false);
  });
});

describe('회피', () => {
  it('회피 무적 프레임 안의 공격은 빗나가고, 이르면 완벽 회피', () => {
    const { w, d, e } = duel('ronin', 2.2);
    const s = enemyAttack(w, e, 'ro_cut2');
    d.tick(s - 4);
    d.tap('dodge');
    d.tick(8);
    expect(w.player.hp).toBe(100);
    expect(d.has('perfectDodge')).toBe(true);
  });
});
