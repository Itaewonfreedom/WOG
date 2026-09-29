import type { Button } from '../core/input';

interface Pad {
  id: number;
  x0: number;
  y0: number;
  x: number;
  y: number;
}

/** On-screen controls for phones / tablets: a floating stick, drag-to-look, and action buttons. */
export class TouchControls {
  readonly root: HTMLDivElement;
  readonly held: Partial<Record<Button, boolean>> = {};
  private readonly taps = new Set<Button>();
  private stick: Pad | null = null;
  private look: Pad | null = null;
  private readonly knob: HTMLDivElement;
  private readonly base: HTMLDivElement;
  private aimLatched = false;
  private lookDX = 0;
  private lookDY = 0;
  active = false;

  constructor(parent: HTMLElement, private readonly onActivate: () => void) {
    this.root = document.createElement('div');
    this.root.className = 'touch';
    this.root.innerHTML = `
      <div class="t-zone left"></div><div class="t-zone right"></div>
      <div class="t-stick"><div class="t-knob"></div></div>
      <div class="t-btns">
        <button class="t-b big" data-b="slash">斬<small>베기</small></button>
        <button class="t-b big" data-b="thrust">突<small>찌르기</small></button>
        <button class="t-b" data-b="guard">盾<small>방패</small></button>
        <button class="t-b" data-b="dodge">避<small>회피</small></button>
        <button class="t-b" data-b="aim" data-latch="1">弓<small>조준</small></button>
      </div>
      <div class="t-row">
        <button class="t-s" data-b="quickshot">속사</button>
        <button class="t-s" data-b="gale">질풍</button>
        <button class="t-s" data-b="heal">회복</button>
        <button class="t-s" data-b="standoff">대치</button>
        <button class="t-s" data-b="lock">락온</button>
        <button class="t-s" data-b="arrowNext">화살</button>
      </div>`;
    parent.appendChild(this.root);
    this.base = this.root.querySelector('.t-stick') as HTMLDivElement;
    this.knob = this.root.querySelector('.t-knob') as HTMLDivElement;

    const zoneL = this.root.querySelector('.t-zone.left') as HTMLElement;
    const zoneR = this.root.querySelector('.t-zone.right') as HTMLElement;
    zoneL.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const t = e.changedTouches[0];
      this.stick = { id: t.identifier, x0: t.clientX, y0: t.clientY, x: t.clientX, y: t.clientY };
      this.base.style.left = `${t.clientX}px`;
      this.base.style.top = `${t.clientY}px`;
      this.base.classList.add('on');
    }, { passive: false });
    zoneR.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const t = e.changedTouches[0];
      this.look = { id: t.identifier, x0: t.clientX, y0: t.clientY, x: t.clientX, y: t.clientY };
    }, { passive: false });
    window.addEventListener('touchmove', (e) => {
      for (const t of Array.from(e.changedTouches)) {
        if (this.stick && t.identifier === this.stick.id) {
          this.stick.x = t.clientX;
          this.stick.y = t.clientY;
        } else if (this.look && t.identifier === this.look.id) {
          this.lookDX += (t.clientX - this.look.x) * 1.6;
          this.lookDY += (t.clientY - this.look.y) * 1.2;
          this.look.x = t.clientX;
          this.look.y = t.clientY;
        }
      }
    }, { passive: true });
    const end = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) {
        if (this.stick && t.identifier === this.stick.id) {
          this.stick = null;
          this.base.classList.remove('on');
          this.knob.style.transform = '';
        }
        if (this.look && t.identifier === this.look.id) this.look = null;
      }
    };
    window.addEventListener('touchend', end);
    window.addEventListener('touchcancel', end);

    this.root.querySelectorAll<HTMLButtonElement>('[data-b]').forEach((btn) => {
      const b = btn.dataset.b as Button;
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (btn.dataset.latch) {
          this.aimLatched = !this.aimLatched;
          btn.classList.toggle('on', this.aimLatched);
          this.held.aim = this.aimLatched;
          if (this.aimLatched) this.taps.add('aim');
          return;
        }
        this.held[b] = true;
        this.taps.add(b);
        btn.classList.add('on');
      }, { passive: false });
      const up = (e: Event) => {
        e.preventDefault();
        if (btn.dataset.latch) return;
        this.held[b] = false;
        btn.classList.remove('on');
      };
      btn.addEventListener('touchend', up);
      btn.addEventListener('touchcancel', up);
    });

    window.addEventListener('touchstart', () => this.activate(), { passive: true, capture: true });
  }

  private activate(): void {
    if (this.active) return;
    this.active = true;
    document.body.classList.add('touch-ui');
    this.onActivate();
  }

  setVisible(v: boolean): void {
    this.root.style.display = v && this.active ? '' : 'none';
  }

  /** Stick vector in screen space: x right, y forward (up). */
  sample(): { mx: number; my: number; lookDX: number; lookDY: number; taps: Set<Button> } {
    let mx = 0;
    let my = 0;
    if (this.stick) {
      const dx = this.stick.x - this.stick.x0;
      const dy = this.stick.y - this.stick.y0;
      const l = Math.hypot(dx, dy);
      const r = 56;
      const k = Math.min(1, l / r);
      if (l > 6) {
        mx = (dx / l) * k;
        my = (-dy / l) * k;
      }
      const cx = l > r ? (dx / l) * r : dx;
      const cy = l > r ? (dy / l) * r : dy;
      this.knob.style.transform = `translate(${cx}px, ${cy}px)`;
    }
    const out = { mx, my, lookDX: this.lookDX, lookDY: this.lookDY, taps: new Set(this.taps) };
    this.lookDX = 0;
    this.lookDY = 0;
    this.taps.clear();
    return out;
  }
}
