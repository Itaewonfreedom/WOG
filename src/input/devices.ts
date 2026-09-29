import { BUTTONS, emptyInput, type Button, type InputFrame } from '../core/input';

/** Keyboard + mouse bindings. */
const KEYS: Partial<Record<Button, string[]>> = {
  slash: ['KeyJ'],
  thrust: ['KeyK'],
  guard: ['ShiftLeft', 'ShiftRight', 'KeyL'],
  dodge: ['Space'],
  aim: ['KeyQ'],
  quickshot: ['KeyE'],
  focus: ['KeyV'],
  heal: ['KeyR'],
  gale: ['KeyF'],
  standoff: ['KeyT'],
  lock: ['Tab', 'KeyC'],
  arrow1: ['Digit1'],
  arrow2: ['Digit2'],
  arrow3: ['Digit3'],
};

const MOUSE: Partial<Record<Button, number[]>> = {
  slash: [0],
  thrust: [2],
  lock: [1],
};

/** Standard-mapping gamepad (Xbox / DualSense). */
const PAD: Partial<Record<Button, number[]>> = {
  slash: [2], // □ / X
  thrust: [3], // △ / Y
  dodge: [1], // ○ / B
  standoff: [0], // × / A
  guard: [4], // L1 / LB
  quickshot: [5], // R1 / RB
  aim: [6], // L2 / LT
  fire: [7], // R2 / RT
  focus: [10], // L3
  lock: [11], // R3
  heal: [13], // d-pad ↓
  gale: [12], // d-pad ↑
  arrowNext: [15], // d-pad →
};

export class InputDevices {
  private readonly keys = new Set<string>();
  private readonly mouse = new Set<number>();
  private prevHeld: Partial<Record<Button, boolean>> = {};
  private wheelSteps = 0;
  private lookDX = 0;
  private lookDY = 0;
  /** Buttons pressed and released between two samples (fast taps). */
  private tapped = new Set<Button>();
  private prevPad = new Set<number>();
  readonly pausePressed = { v: false };
  locked = false;
  lastDevice: 'kbm' | 'pad' = 'kbm';

  constructor(private readonly el: HTMLElement) {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab' || e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      this.lastDevice = 'kbm';
      if (e.code === 'Escape' || e.code === 'KeyP') this.pausePressed.v = true;
      this.noteTap(e.code, null);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.mouse.clear();
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('mousedown', (e) => {
      if (!this.locked && document.pointerLockElement !== el) {
        // First click only captures the mouse.
        try {
          const r = el.requestPointerLock?.() as unknown;
          if (r && typeof (r as Promise<void>).catch === 'function') (r as Promise<void>).catch(() => undefined);
        } catch {
          /* pointer lock unavailable (e.g. sandboxed iframe) – mouse still works for buttons */
        }
        if (e.button !== 0) this.addMouse(e.button);
        return;
      }
      this.addMouse(e.button);
    });
    window.addEventListener('mouseup', (e) => this.mouse.delete(e.button));
    window.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === el) {
        this.lookDX += e.movementX;
        this.lookDY += e.movementY;
      } else if (this.mouse.size > 0 || e.buttons & 4) {
        // Without pointer lock, dragging still turns the camera.
        this.lookDX += e.movementX * 0.6;
        this.lookDY += e.movementY * 0.6;
      }
    });
    window.addEventListener(
      'wheel',
      (e) => {
        this.wheelSteps += Math.sign(e.deltaY);
      },
      { passive: true },
    );
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === el;
    });
  }

  private addMouse(b: number): void {
    this.mouse.add(b);
    this.lastDevice = 'kbm';
    this.noteTap(null, b);
  }

  private noteTap(code: string | null, mouseBtn: number | null): void {
    for (const b of BUTTONS) {
      if (code && KEYS[b]?.includes(code)) this.tapped.add(b);
      if (mouseBtn !== null && MOUSE[b]?.includes(mouseBtn)) this.tapped.add(b);
    }
  }

  releasePointer(): void {
    if (document.pointerLockElement === this.el) document.exitPointerLock();
  }

  /** Build this frame's input. `camYaw` converts WASD/stick into world space. */
  sample(camYaw: number): { frame: InputFrame; lookDX: number; lookDY: number } {
    const f = emptyInput();
    f.camYaw = camYaw;
    const held: Partial<Record<Button, boolean>> = {};
    for (const b of BUTTONS) {
      held[b] = !!(KEYS[b]?.some((k) => this.keys.has(k)) || MOUSE[b]?.some((m) => this.mouse.has(m)));
    }
    let mx = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    let mz = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    let lookDX = this.lookDX + ((this.keys.has('ArrowRight') ? 1 : 0) - (this.keys.has('ArrowLeft') ? 1 : 0)) * 14;
    let lookDY = this.lookDY + ((this.keys.has('ArrowDown') ? 1 : 0) - (this.keys.has('ArrowUp') ? 1 : 0)) * 8;
    this.lookDX = 0;
    this.lookDY = 0;

    // Gamepad
    const pads = navigator.getGamepads?.() ?? [];
    const pad = Array.from(pads).find((p) => p && p.connected) ?? null;
    const padNow = new Set<number>();
    if (pad) {
      pad.buttons.forEach((b, i) => {
        if (b.pressed || b.value > 0.5) padNow.add(i);
      });
      for (const b of BUTTONS) if (PAD[b]?.some((i) => padNow.has(i))) held[b] = true;
      const dz = (v: number) => (Math.abs(v) < 0.18 ? 0 : v);
      const ax = dz(pad.axes[0] ?? 0);
      const az = -dz(pad.axes[1] ?? 0);
      if (ax || az) {
        mx = ax;
        mz = az;
        this.lastDevice = 'pad';
      }
      lookDX += dz(pad.axes[2] ?? 0) * 18;
      lookDY += dz(pad.axes[3] ?? 0) * 10;
      if (padNow.has(9) && !this.prevPad.has(9)) this.pausePressed.v = true;
      if (padNow.size) this.lastDevice = 'pad';
      // d-pad ← cycles arrows backwards (as two "next" presses).
      if (padNow.has(14) && !this.prevPad.has(14)) this.wheelSteps -= 1;
      for (const b of BUTTONS) if (PAD[b]?.some((i) => padNow.has(i) && !this.prevPad.has(i))) this.tapped.add(b);
    }
    this.prevPad = padNow;

    // Camera-relative movement. Camera looks along (sin yaw, cos yaw); its right is (-cos, sin).
    const len = Math.hypot(mx, mz);
    if (len > 1) {
      mx /= len;
      mz /= len;
    }
    const fx = Math.sin(camYaw);
    const fz = Math.cos(camYaw);
    const rx = -Math.cos(camYaw);
    const rz = Math.sin(camYaw);
    f.move = { x: fx * mz + rx * mx, z: fz * mz + rz * mx };

    if (this.wheelSteps !== 0) {
      if (this.wheelSteps > 0) this.tapped.add('arrowNext');
      else {
        // Cycling backwards = two steps forward in a 3-cycle.
        this.tapped.add('arrowNext');
        f.pressed.arrowNext = true;
      }
      this.wheelSteps = 0;
    }

    for (const b of BUTTONS) {
      const now = !!held[b];
      const was = !!this.prevHeld[b];
      const tap = this.tapped.has(b);
      if ((now && !was) || tap) f.pressed[b] = true;
      if ((!now && was) || (tap && !now)) f.released[b] = true;
      // A tap that was already released still reads as held for this one frame.
      f.held[b] = now || (tap && !was);
    }
    this.prevHeld = held;
    this.tapped.clear();
    return { frame: f, lookDX, lookDY };
  }
}
