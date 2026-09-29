import { describe, expect, it } from 'vitest';
import { Driver } from './helpers';
import { World } from '../src/core/world';
import { WaveDirector } from '../src/core/waves';
import { defenseOf } from '../src/core/combat';
import type { Fighter } from '../src/core/fighter';
import type { Button } from '../src/core/input';

/**
 * A simple "expert" bot that plays the campaign through the real input layer:
 * deflects blue/white attacks, dodges red ones, answers deflects with 튕기기 일섬,
 * finishes broken enemies and always uses the button the enemy is weak to.
 */
function weaknessButton(e: Fighter): 'slash' | 'thrust' {
  return defenseOf(e, 'thrust').result === 'effective' ? 'thrust' : defenseOf(e, 'slash').result === 'effective' ? 'slash' : 'thrust';
}

function playCampaign(seed: number, invincible: boolean, maxTicks: number) {
  const w = new World(seed);
  w.settings.invincible = invincible;
  w.waves = new WaveDirector();
  w.waves.start(w);
  const d = new Driver(w);
  let guardHold = 0;
  let cooldown = 0;
  const actions = { deflectTries: 0 };
  for (let i = 0; i < maxTicks && w.mode !== 'victory' && w.mode !== 'defeat'; i++) {
    const p = w.player;
    const press: Button[] = [];
    const release: Button[] = [];
    d.move = { x: 0, z: 0 };
    if (guardHold > 0 && --guardHold === 0) {
      d.held.delete('guard');
      release.push('guard');
    }
    // Defend first: read wind-ups (a skilled player stops swinging when a blow is coming).
    let threatened = false;
    for (const e of w.liveEnemies()) {
      const m = e.act.move;
      if (!e.is('attack') || !m || m.feint || m.projectile) continue;
      const until = m.startup - e.act.t;
      if (until < 0 || e.distTo(p) > m.shape.range + m.lunge + 2) continue;
      if (until <= 16) threatened = true;
      if (until !== 3) continue;
      if (m.unblockable === 'red') press.push('dodge');
      else if (!d.held.has('guard')) {
        d.held.add('guard');
        press.push('guard');
        guardHold = 8;
        actions.deflectTries++;
      }
    }
    if (!threatened && guardHold === 0) {
      if (w.ps.finisherTarget !== null && cooldown <= 0) {
        const t = w.get(w.ps.finisherTarget)!;
        press.push(weaknessButton(t));
        cooldown = 6;
      } else {
        const live = w.liveEnemies().filter((e) => e.targetable).sort((a, b) => a.distTo(p) - b.distTo(p));
        const tgt = live[0];
        if (tgt) {
          const gap = tgt.gapTo(p);
          if (tgt.arch?.ai.ranged && gap > 5 && w.ps.arrows.standard > 0 && cooldown <= 0) {
            press.push('quickshot');
            cooldown = 24;
          } else if (gap > 1.6) {
            const dx = tgt.pos.x - p.pos.x;
            const dz = tgt.pos.z - p.pos.z;
            const l = Math.hypot(dx, dz);
            d.move = { x: dx / l, z: dz / l };
          } else if (cooldown <= 0) {
            press.push(weaknessButton(tgt));
            cooldown = 9;
          }
        }
      }
    }
    cooldown--;
    for (const b of press) d.held.add(b);
    d.step(press, release);
    for (const b of press) if (b !== 'guard') {
      d.held.delete(b);
    }
    while (w.hitstop > 0) d.step();
  }
  return { w, d, actions };
}

describe('캠페인 엔드투엔드 (봇)', () => {
  it('봇이 실제 입력만으로 5막 전체를 끝까지 진행할 수 있다 (막힘 상태 없음)', () => {
    const { w, d } = playCampaign(2026, true, 60 * 60 * 12);
    expect(w.mode).toBe('victory');
    expect(w.stats.deflects).toBeGreaterThan(5);
    expect(w.stats.finishers + w.stats.issens).toBeGreaterThan(3);
    expect(d.has('armorShatter')).toBe(true);
  });

  it('무적 없이도 상성·튕기기를 쓰는 봇은 여러 막을 돌파한다', () => {
    const { w } = playCampaign(7, false, 60 * 60 * 12);
    // Not a balance guarantee — the bot must at least clear the first acts using the systems.
    expect(w.waves!.index).toBeGreaterThanOrEqual(2);
    expect(w.stats.deflects).toBeGreaterThan(0);
  });
});
