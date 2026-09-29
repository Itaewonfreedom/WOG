import { ARCHETYPES } from './archetypes';
import { add, clamp, fromYaw, len, scale, type Vec2 } from './math';
import { T } from './tuning';
import type { ArchetypeId } from './types';
import type { World } from './world';

export interface WaveDef {
  title: string;
  subtitle: string;
  spawns: [ArchetypeId, number][];
  /** A standoff (대치) can be called while the enemies walk in. */
  standoff: boolean;
}

export const WAVES: WaveDef[] = [
  { title: '一 · 첫 대면', subtitle: '낭인 검사 — 베기와 찌르기, 튕기기를 익혀라', spawns: [['ronin', 2]], standoff: true },
  { title: '二 · 방패의 벽', subtitle: '방패 무사 — 베기는 튕겨난다. 찔러라', spawns: [['shield', 2], ['ronin', 1]], standoff: true },
  { title: '三 · 창과 그림자', subtitle: '창병은 베고, 시노비는 넓게 베어라', spawns: [['spear', 2], ['duelist', 1]], standoff: true },
  { title: '四 · 철갑과 활', subtitle: '갑주는 찌르고, 궁수는 활로', spawns: [['armored', 1], ['archer', 2], ['ronin', 1]], standoff: true },
  { title: '五 · 결투', subtitle: '철갑 대장 카게토라', spawns: [['boss', 1]], standoff: true },
];

export type WaveState = 'intro' | 'approach' | 'fight' | 'clear' | 'done';

export class WaveDirector {
  index = -1;
  state: WaveState = 'intro';
  timer = 0;
  standoffAvailable = false;

  constructor(readonly waves: WaveDef[] = WAVES) {}

  get current(): WaveDef | null {
    return this.waves[this.index] ?? null;
  }

  start(w: World): void {
    this.next(w);
  }

  update(w: World): void {
    if (w.mode === 'standoff' || w.mode === 'defeat' || w.mode === 'victory') return;
    this.timer++;
    switch (this.state) {
      case 'intro':
        if (this.timer >= 100) this.spawnWave(w);
        break;
      case 'approach': {
        const live = w.liveEnemies();
        const close = live.some((e) => e.distTo(w.player) < 5.5);
        const touched = live.some((e) => e.hp < e.maxHp || !e.is('free'));
        if (this.timer >= 330 || close || touched || w.player.is('aim', 'attack', 'quickshot')) this.engage(w);
        break;
      }
      case 'fight':
        if (w.liveEnemies().length === 0) {
          this.state = 'clear';
          this.timer = 0;
          const a = w.ps.arrows;
          a.standard = Math.min(T.maxArrows.standard, a.standard + 8);
          a.heavy = Math.min(T.maxArrows.heavy, a.heavy + 2);
          a.fire = Math.min(T.maxArrows.fire, a.fire + 1);
          w.player.hp = Math.min(w.player.maxHp, w.player.hp + w.player.maxHp * 0.25);
          w.emit({ type: 'waveClear', index: this.index });
        }
        break;
      case 'clear':
        if (this.timer >= 210) this.next(w);
        break;
      default:
        break;
    }
  }

  engage(w: World): void {
    this.standoffAvailable = false;
    this.state = 'fight';
    this.timer = 0;
    for (const e of w.liveEnemies()) if (e.brain) e.brain.aware = true;
  }

  private next(w: World): void {
    this.index++;
    w.removeCorpses();
    if (this.index >= this.waves.length) {
      this.state = 'done';
      w.mode = 'victory';
      w.emit({ type: 'victory' });
      return;
    }
    this.state = 'intro';
    this.timer = 0;
    const wd = this.waves[this.index];
    w.emit({ type: 'wave', index: this.index, title: wd.title, subtitle: wd.subtitle });
  }

  private spawnWave(w: World): void {
    const wd = this.waves[this.index];
    const p = w.player;
    // Spawn in front of the player, biased toward the arena centre.
    const toCenter = len(p.pos) > 3 ? Math.atan2(-p.pos.x, -p.pos.z) : p.yaw;
    const list: ArchetypeId[] = [];
    for (const [id, n] of wd.spawns) for (let i = 0; i < n; i++) list.push(id);
    list.forEach((id, i) => {
      const spread = (i - (list.length - 1) / 2) * 0.42;
      const r = id === 'archer' ? 17 : 12.5;
      let pos: Vec2 = add(p.pos, scale(fromYaw(toCenter + spread), r));
      const l = len(pos);
      if (l > T.arenaRadius - 2) pos = scale(pos, (T.arenaRadius - 2) / l);
      const e = w.spawn(id, pos);
      if (e.brain) {
        e.brain.aware = false;
        e.brain.cooldown = Math.round(clamp(e.brain.cooldown, 20, 90));
      }
      if (!w.seen.has(id)) {
        w.seen.add(id);
        w.emit({ type: 'text', text: ARCHETYPES[id].name, sub: ARCHETYPES[id].tip, style: 'info', id: e.id });
      }
    });
    this.state = wd.standoff ? 'approach' : 'fight';
    this.standoffAvailable = wd.standoff;
    this.timer = 0;
    if (!wd.standoff) this.engage(w);
  }
}
