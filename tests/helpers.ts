import { World } from '../src/core/world';
import { emptyInput, type Button, type InputFrame } from '../src/core/input';
import type { ArchetypeId, CombatEvent } from '../src/core/types';
import type { Fighter } from '../src/core/fighter';
import { getMove } from '../src/core/moves';
import { startEnemyAttack } from '../src/core/ai';

/** Drives a World tick by tick with keyboard-like held/pressed/released edges. */
export class Driver {
  held = new Set<Button>();
  move = { x: 0, z: 0 };
  events: CombatEvent[] = [];
  camYaw = 0;
  aimDir = { x: 0, y: 0, z: 1 };
  aimOrigin = { x: 0, y: 1.6, z: -3 };

  constructor(public w: World) {}

  private frame(pressed: Button[] = [], released: Button[] = []): InputFrame {
    const f = emptyInput();
    f.move = this.move;
    f.camYaw = this.camYaw;
    f.aimDir = this.aimDir;
    f.aimOrigin = this.aimOrigin;
    for (const b of this.held) f.held[b] = true;
    for (const b of pressed) f.pressed[b] = true;
    for (const b of released) f.released[b] = true;
    return f;
  }

  step(pressed: Button[] = [], released: Button[] = []): void {
    this.w.step(this.frame(pressed, released));
    this.events.push(...this.w.drainEvents());
  }

  /** Run n ticks (skips over hit-stop so n counts gameplay ticks). */
  tick(n = 1): void {
    for (let i = 0; i < n; i++) {
      this.step();
      while (this.w.hitstop > 0) this.step();
    }
  }

  press(b: Button): void {
    this.held.add(b);
    this.step([b]);
  }

  release(b: Button): void {
    this.held.delete(b);
    this.step([], [b]);
  }

  tap(b: Button): void {
    this.press(b);
    this.release(b);
  }

  has(type: CombatEvent['type']): boolean {
    return this.events.some((e) => e.type === type);
  }

  count(type: CombatEvent['type']): number {
    return this.events.filter((e) => e.type === type).length;
  }

  texts(): string[] {
    return this.events.filter((e): e is Extract<CombatEvent, { type: 'text' }> => e.type === 'text').map((e) => e.text);
  }
}

/** World with the player at origin facing +z and one enemy `dist` meters ahead, AI passive. */
export function duel(arch: ArchetypeId, dist = 2.2): { w: World; d: Driver; p: Fighter; e: Fighter } {
  const w = new World(42);
  const p = w.player;
  p.pos = { x: 0, z: 0 };
  p.yaw = 0;
  const e = w.spawn(arch, { x: 0, z: dist }, Math.PI);
  e.brain!.aware = false; // passive: tests script the enemy
  e.brain!.cooldown = 99999;
  const d = new Driver(w);
  return { w, d, p, e };
}

/** Make the enemy start `moveId` and return the number of ticks until its first active frame. */
export function enemyAttack(w: World, e: Fighter, moveId: string): number {
  const m = getMove(moveId);
  startEnemyAttack(w, e, m);
  e.brain!.aware = false;
  return m.startup;
}
