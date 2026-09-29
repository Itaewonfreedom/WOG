import type { Vec2 } from './math';

export type Button =
  | 'slash' // 베기 (조준 중에는 활 당기기)
  | 'thrust' // 찌르기
  | 'guard' // 방패: 막기 / 튕기기
  | 'dodge' // 회피 (방패 중: 흘리기)
  | 'aim' // 활 조준
  | 'fire' // 활 당기기/발사 (게임패드 R2)
  | 'quickshot' // 속사
  | 'focus' // 집중 조준 (슬로우)
  | 'heal' // 결의 회복
  | 'gale' // 질풍참
  | 'standoff' // 대치
  | 'lock' // 락온
  | 'arrowNext'
  | 'arrow1'
  | 'arrow2'
  | 'arrow3';

export const BUTTONS: Button[] = ['slash', 'thrust', 'guard', 'dodge', 'aim', 'fire', 'quickshot', 'focus', 'heal', 'gale', 'standoff', 'lock', 'arrowNext', 'arrow1', 'arrow2', 'arrow3'];

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/** One tick worth of player intent, already converted to world space by the device layer. */
export interface InputFrame {
  /** Desired planar move direction in world space, length 0..1. */
  move: Vec2;
  /** Camera yaw: default attack/aim direction when there is no stick input. */
  camYaw: number;
  /** Camera ray used for bow aiming. */
  aimOrigin: Vec3;
  aimDir: Vec3;
  held: Partial<Record<Button, boolean>>;
  pressed: Partial<Record<Button, boolean>>;
  released: Partial<Record<Button, boolean>>;
}

export const emptyInput = (): InputFrame => ({
  move: { x: 0, z: 0 },
  camYaw: 0,
  aimOrigin: { x: 0, y: 1.6, z: 0 },
  aimDir: { x: 0, y: 0, z: 1 },
  held: {},
  pressed: {},
  released: {},
});

/**
 * Remembers when each button was last pressed so actions can be queued
 * (press slash during recovery → next hit comes out on the first legal tick).
 */
export class InputBuffer {
  private last = new Map<Button, number>();
  private consumed = new Map<Button, number>();
  /** Most recent press tick per button, never cleared (used for timing windows). */
  readonly pressTick = new Map<Button, number>();
  /** Press tick before the most recent one (used for anti-mash checks). */
  readonly prevPressTick = new Map<Button, number>();

  record(frame: InputFrame, tick: number): void {
    for (const k of Object.keys(frame.pressed) as Button[]) {
      if (!frame.pressed[k]) continue;
      this.last.set(k, tick);
      this.prevPressTick.set(k, this.pressTick.get(k) ?? -9999);
      this.pressTick.set(k, tick);
    }
  }

  /** True if `b` was pressed within `window` ticks and has not been consumed yet. */
  peek(b: Button, tick: number, window: number): boolean {
    const t = this.last.get(b);
    if (t === undefined) return false;
    if ((this.consumed.get(b) ?? -1) >= t) return false;
    return tick - t <= window;
  }

  consume(b: Button, tick: number, window: number): boolean {
    if (!this.peek(b, tick, window)) return false;
    this.consumed.set(b, this.last.get(b)!);
    return true;
  }

  clear(b?: Button): void {
    if (b) this.consumed.set(b, this.last.get(b) ?? -1);
    else for (const [k, t] of this.last) this.consumed.set(k, t);
  }
}
