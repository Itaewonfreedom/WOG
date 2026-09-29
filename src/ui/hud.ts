import * as THREE from 'three';
import type { World } from '../core/world';
import type { CombatEvent, AttackType } from '../core/types';
import type { Fighter } from '../core/fighter';
import { drawInfo } from '../core/bow';
import { T } from '../core/tuning';
import { defenseOf } from '../core/combat';

type Device = 'kbm' | 'pad' | 'touch';

const KEY_LABEL: Record<Device, Record<string, string>> = {
  kbm: { slash: '좌클릭/J', thrust: '우클릭/K', guard: 'Shift', dodge: 'Space', aim: 'Q', quick: 'E', heal: 'R', gale: 'F', standoff: 'T', lock: 'Tab' },
  pad: { slash: '□', thrust: '△', guard: 'L1', dodge: '○', aim: 'L2', quick: 'R1', heal: '↓', gale: '↑', standoff: '×', lock: 'R3' },
  touch: { slash: '斬', thrust: '突', guard: '盾', dodge: '避', aim: '弓', quick: '속사', heal: '회복', gale: '질풍', standoff: '대치', lock: '락온' },
};

const ARROW_INFO = [
  { type: 'standard', kan: '矢', name: '일반' },
  { type: 'heavy', kan: '貫', name: '관통' },
  { type: 'fire', kan: '火', name: '화전' },
] as const;

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', html = ''): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

interface Tag {
  root: HTMLDivElement;
  hp: HTMLElement;
  po: HTMLElement;
  nm: HTMLElement;
  weak: HTMLElement;
  glint: HTMLElement;
  fin: HTMLElement;
  lastWeak: string;
}

/** Weakness shown above an enemy (boss changes with its armor phase). */
export function currentWeakness(f: Fighter): AttackType | null {
  if (!f.arch) return null;
  if (f.arch.isBoss) return defenseOf(f, 'slash').result === 'effective' ? 'slash' : 'thrust';
  return f.arch.weakness;
}

export class Hud {
  readonly root = el('div');
  private readonly hpFill: HTMLElement;
  private readonly hpLag: HTMLElement;
  private readonly poFill: HTMLElement;
  private readonly pips: HTMLElement[] = [];
  private readonly arrowSlots: HTMLElement[] = [];
  private readonly reticle: HTMLElement;
  private readonly ring: SVGCircleElement;
  private readonly reticleLabel: HTMLElement;
  private readonly tags = new Map<number, Tag>();
  private readonly layer = el('div');
  private readonly waveEl: HTMLElement;
  private readonly promptEl: HTMLElement;
  private readonly tipEl: HTMLElement;
  private readonly comboEl: HTMLElement;
  private readonly helpEl: HTMLElement;
  private readonly flashEl: HTMLElement;
  private readonly vignetteEl: HTMLElement;
  private readonly fpsEl: HTMLElement;
  private flash = 0;
  private hurt = 0;
  private waveTimer = 0;
  private tipTimer = 0;
  private recent = new Map<string, number>();
  private time = 0;
  private fpsAcc = 0;
  private fpsN = 0;
  device: Device = 'kbm';

  constructor(parent: HTMLElement) {
    this.root.id = 'hud';
    parent.appendChild(this.root);
    this.root.appendChild(el('div', 'letterbox top'));
    this.root.appendChild(el('div', 'letterbox bottom'));
    this.flashEl = el('div');
    this.flashEl.id = 'flash';
    this.vignetteEl = el('div');
    this.vignetteEl.id = 'vignette';
    this.root.append(this.flashEl, this.vignetteEl, this.layer);

    const pp = el('div', 'player-panel');
    pp.appendChild(el('div', 'name-row', '레인저 <small>숏소드 · 버클러 · 활</small>'));
    const hp = el('div', 'bar');
    this.hpLag = el('b');
    this.hpFill = el('i');
    hp.append(this.hpLag, this.hpFill);
    const po = el('div', 'bar posture');
    this.poFill = el('i');
    po.appendChild(this.poFill);
    const rs = el('div', 'resolve');
    for (let i = 0; i < T.resolveMax; i++) {
      const p = el('div', 'pip');
      this.pips.push(p);
      rs.appendChild(p);
    }
    rs.appendChild(el('small', '', '결의'));
    pp.append(hp, po, rs);
    this.root.appendChild(pp);

    const ap = el('div', 'arrow-panel');
    ARROW_INFO.forEach((a, i) => {
      const s = el('div', 'arrow-slot', `<b>${a.kan}</b>${i + 1} ${a.name} <span class="n">0</span>`);
      this.arrowSlots.push(s);
      ap.appendChild(s);
    });
    this.root.appendChild(ap);

    this.reticle = el('div');
    this.reticle.id = 'reticle';
    this.reticle.innerHTML = `<svg viewBox="0 0 70 70"><circle class="ring" cx="35" cy="35" r="30"/><circle class="dot" cx="35" cy="35" r="2"/><path d="M35 8v8M35 54v8M8 35h8M54 35h8" stroke="rgba(239,230,210,.6)" stroke-width="1.5"/></svg><div class="label"></div>`;
    this.ring = this.reticle.querySelector('.ring') as SVGCircleElement;
    this.reticleLabel = this.reticle.querySelector('.label') as HTMLElement;
    this.root.appendChild(this.reticle);

    this.waveEl = el('div', '', '<div class="t"></div><div class="s"></div>');
    this.waveEl.id = 'wave';
    this.promptEl = el('div');
    this.promptEl.id = 'prompt';
    this.tipEl = el('div');
    this.tipEl.id = 'tip';
    this.comboEl = el('div');
    this.comboEl.id = 'combo';
    this.helpEl = el('div');
    this.helpEl.id = 'help';
    this.fpsEl = el('div');
    this.fpsEl.id = 'fps';
    this.root.append(this.waveEl, this.promptEl, this.tipEl, this.comboEl, this.helpEl, this.fpsEl);
    this.renderHelp();
  }

  private k(name: string): string {
    return `<span class="k">${KEY_LABEL[this.device][name]}</span>`;
  }

  renderHelp(): void {
    const k = (n: string) => this.k(n);
    this.helpEl.innerHTML = `<h4>조작 <small style="font-size:12px;opacity:.6">H: 숨기기</small></h4>
      <table>
      <tr><td>${k('slash')}</td><td>베기 (누르고 있으면 강베기)</td></tr>
      <tr><td>${k('thrust')}</td><td>찌르기 (누르고 있으면 강찌르기)</td></tr>
      <tr><td>${k('guard')}</td><td>방패 막기 · <b>타이밍 = 튕기기</b></td></tr>
      <tr><td>${k('guard')}+${k('dodge')}</td><td><b>흘리기</b> (빨간 공격도)</td></tr>
      <tr><td>${k('guard')}+${k('slash')}</td><td>방패 치기</td></tr>
      <tr><td>적 타격 직전 공격</td><td><b>일섬</b></td></tr>
      <tr><td>${k('dodge')}</td><td>회피 (두 번: 구르기)</td></tr>
      <tr><td>${k('aim')} 누른 채 ${k('slash')}</td><td>활 당기기 → 만작에 놓기</td></tr>
      <tr><td>${k('quick')} · 1/2/3</td><td>속사 · 화살 종류</td></tr>
      <tr><td>${k('gale')} · ${k('heal')}</td><td>질풍참(결의2) · 회복(결의1)</td></tr>
      <tr><td>${k('standoff')} · ${k('lock')}</td><td>대치 · 락온</td></tr>
      </table>`;
  }

  toggleHelp(): void {
    this.helpEl.classList.toggle('off');
  }

  setHelpVisible(v: boolean): void {
    this.helpEl.classList.toggle('off', !v);
  }

  /** Screen flash (issen) and hurt vignette. */
  pulse(kind: 'flash' | 'hurt', amount = 1): void {
    if (kind === 'flash') this.flash = Math.max(this.flash, amount);
    else this.hurt = Math.max(this.hurt, amount);
  }

  showWave(title: string, sub: string, seconds = 3.2): void {
    (this.waveEl.querySelector('.t') as HTMLElement).textContent = title;
    (this.waveEl.querySelector('.s') as HTMLElement).textContent = sub;
    this.waveEl.classList.add('on');
    this.waveTimer = seconds;
  }

  showTip(title: string, body: string, seconds = 7): void {
    this.tipEl.innerHTML = `<b>${title}</b>${body}`;
    this.tipEl.classList.add('on');
    this.tipTimer = seconds;
  }

  clear(): void {
    this.layer.innerHTML = '';
    this.tags.clear();
    this.waveEl.classList.remove('on');
    this.tipEl.classList.remove('on');
  }

  private project(v: THREE.Vector3, cam: THREE.Camera, w: number, h: number): { x: number; y: number; ok: boolean } {
    const p = v.clone().project(cam);
    return { x: ((p.x + 1) / 2) * w, y: ((1 - p.y) / 2) * h, ok: p.z < 1 && p.z > -1 };
  }

  popup(ev: Extract<CombatEvent, { type: 'text' }>, world: World, cam: THREE.Camera, w: number, h: number): void {
    const key = ev.text + (ev.id ?? '');
    const last = this.recent.get(key) ?? -9;
    if (this.time - last < 0.5) return;
    this.recent.set(key, this.time);
    // Long enemy tips go to the tip panel.
    if (ev.style === 'info' && ev.sub && ev.sub.length > 25) {
      this.showTip(ev.text, ev.sub, 9);
      return;
    }
    const big = ev.style === 'deflect' || ev.style === 'flow' || ev.style === 'issen' || ev.style === 'finisher' || ev.style === 'warn';
    const d = el('div', `popup ${ev.style}${big ? '' : ' small'}`);
    d.innerHTML = `<div class="big">${ev.text}</div>${ev.sub ? `<div class="kan">${ev.sub}</div>` : ''}`;
    let x = w / 2;
    let y = h * 0.36;
    if (!big) {
      const f = world.get(ev.id);
      if (f) {
        const pos = new THREE.Vector3(f.pos.x, 2.25 * f.size, f.pos.z);
        const s = this.project(pos, cam, w, h);
        if (s.ok) {
          x = s.x;
          y = s.y - 30;
        }
      } else y = h * 0.3;
    } else if (ev.style === 'deflect' || ev.style === 'flow') {
      y = h * 0.3;
    }
    d.style.left = `${x}px`;
    d.style.top = `${y}px`;
    this.layer.appendChild(d);
    setTimeout(() => d.remove(), 1300);
  }

  update(world: World, cam: THREE.Camera, w: number, h: number, dt: number): void {
    this.time += dt;
    this.fpsAcc += dt;
    this.fpsN++;
    if (this.fpsAcc > 0.5) {
      this.fpsEl.textContent = `${Math.round(this.fpsN / this.fpsAcc)} fps`;
      this.fpsAcc = 0;
      this.fpsN = 0;
    }
    const p = world.player;
    const ps = world.ps;
    const hpPct = `${(Math.max(0, p.hp) / p.maxHp) * 100}%`;
    this.hpFill.style.width = hpPct;
    this.hpLag.style.width = hpPct;
    this.poFill.style.width = `${(p.posture / p.maxPosture) * 100}%`;
    this.pips.forEach((pip, i) => pip.style.setProperty('--f', `${Math.max(0, Math.min(1, ps.resolve - i))}`));
    ARROW_INFO.forEach((a, i) => {
      const s = this.arrowSlots[i];
      s.classList.toggle('on', ps.arrowType === a.type);
      (s.querySelector('.n') as HTMLElement).textContent = `${ps.arrows[a.type]}`;
    });

    // Reticle & draw ring.
    const aiming = p.is('aim');
    this.reticle.classList.toggle('on', aiming);
    if (aiming) {
      const info = drawInfo(ps.draw, ps.arrowType, world.settings.windowScale);
      this.ring.style.strokeDashoffset = `${188.5 * (1 - info.amount)}`;
      this.reticle.classList.toggle('perfect', info.perfect);
      this.reticle.classList.toggle('tired', info.fatigue > 0.05);
      const sh = Math.min(1, info.fatigue) * 5;
      this.reticle.style.transform = sh > 0 ? `translate(${Math.sin(this.time * 40) * sh}px, ${Math.cos(this.time * 33) * sh}px)` : '';
      this.reticleLabel.textContent = info.perfect ? '만작 — 놓아라' : info.fatigue > 0.05 ? '팔이 떨린다' : ps.focusing ? '집중' : '';
    }

    // Enemy tags.
    const seen = new Set<number>();
    for (const f of world.fighters) {
      if (f.team !== 'enemy' || !f.alive) continue;
      const pos = new THREE.Vector3(f.pos.x, 2.05 * f.size + (f.arch?.id === 'ronin' || f.arch?.id === 'spear' || f.arch?.id === 'shield' ? 0.12 : 0), f.pos.z);
      const s = this.project(pos, cam, w, h);
      const dist = Math.hypot(f.pos.x - p.pos.x, f.pos.z - p.pos.z);
      let tag = this.tags.get(f.id);
      if (!tag) tag = this.makeTag(f);
      seen.add(f.id);
      const visible = s.ok && dist < 26 && !f.is('finished');
      tag.root.style.opacity = visible ? '1' : '0';
      if (!visible) continue;
      tag.root.style.left = `${s.x}px`;
      tag.root.style.top = `${s.y}px`;
      tag.hp.style.width = `${(f.hp / f.maxHp) * 100}%`;
      tag.po.style.width = `${(f.posture / f.maxPosture) * 100}%`;
      tag.root.classList.toggle('broken', f.is('broken'));
      tag.root.classList.toggle('target', ps.softTarget === f.id || ps.lockTarget === f.id);
      tag.glint.className = `glint-mark ${f.glint ? f.glint.color : ''}`;
      const weak = currentWeakness(f);
      const wk = weak ?? '';
      if (wk !== tag.lastWeak) {
        tag.lastWeak = wk;
        tag.weak.style.display = weak ? '' : 'none';
        tag.weak.className = `weak ${wk}`;
        tag.weak.innerHTML = weak === 'slash' ? '약점 <b>斬</b> 베기' : weak === 'thrust' ? '약점 <b>突</b> 찌르기' : '';
      }
      tag.root.classList.toggle('parry', f.is('guard') && f.act.value === 1);
      const fin = ps.finisherTarget === f.id;
      tag.fin.style.display = fin ? 'block' : 'none';
      if (fin) {
        const kind = ps.finisherKindHint;
        tag.fin.innerHTML =
          kind === 'hajiki' ? `튕기기 일섬 ${this.k('slash')}` : kind === 'flow' ? `흘려베기 ${this.k('slash')}` : `피니쉬 ${this.k('slash')}<span style="font-size:14px">일도양단</span> ${this.k('thrust')}<span style="font-size:14px">관통</span>`;
      }
    }
    for (const [id, tag] of this.tags) {
      if (!seen.has(id)) {
        tag.root.remove();
        this.tags.delete(id);
      }
    }

    // Context prompt.
    let prompt = '';
    if (world.mode === 'standoff') {
      const so = world.standoff;
      prompt = so.phase === 'tension' || so.phase === 'approach' ? `${this.k('slash')}를 누른 채 — 적이 <b>진짜로</b> 달려드는 순간 떼라` : so.phase === 'between' || (so.phase === 'strike' && so.kills > 0) ? `다음 적이 달려든다 — ${this.k('slash')}` : '';
    } else if (world.waves?.standoffAvailable) {
      prompt = `${this.k('standoff')} <span class="hot">대치</span> — 적이 다가온다`;
    } else if (ps.finisherKindHint === 'hajiki') {
      prompt = `<span class="hot">튕기기 일섬</span> — 지금 공격`;
    } else if (ps.finisherKindHint === 'flow') {
      prompt = `<span class="hot">흘려베기</span> — 등이 열렸다`;
    } else if (p.hp < p.maxHp * 0.35 && ps.resolve >= T.healCost && p.alive) {
      prompt = `${this.k('heal')} 결의로 회복`;
    }
    if (this.promptEl.innerHTML !== prompt) this.promptEl.innerHTML = prompt;

    // Combo counter.
    this.comboEl.classList.toggle('on', ps.combo >= 3);
    if (ps.combo >= 3) this.comboEl.innerHTML = `${ps.combo}<small>연격</small>`;

    // Timers.
    this.flash *= Math.pow(0.02, dt);
    this.flashEl.style.opacity = `${Math.min(0.85, this.flash)}`;
    this.hurt = Math.max(0, this.hurt - dt * 1.6);
    const low = p.alive && p.hp < p.maxHp * 0.3 ? 0.35 + Math.sin(this.time * 5) * 0.1 : 0;
    this.vignetteEl.style.opacity = `${Math.max(low, this.hurt)}`;
    if (this.waveTimer > 0 && (this.waveTimer -= dt) <= 0) this.waveEl.classList.remove('on');
    if (this.tipTimer > 0 && (this.tipTimer -= dt) <= 0) this.tipEl.classList.remove('on');
  }

  private makeTag(f: Fighter): Tag {
    const root = el('div', 'enemy-tag');
    const glint = el('div', 'glint-mark');
    const nm = el('div', 'nm', f.arch ? `${f.arch.name}` : '');
    const hpBar = el('div', 'hp');
    const hp = el('i');
    hpBar.appendChild(hp);
    const poBar = el('div', 'po');
    const po = el('i');
    poBar.appendChild(po);
    const weak = el('div', 'weak');
    const fin = el('div', 'fin-prompt');
    root.append(glint, nm, hpBar, poBar, weak, fin);
    this.layer.appendChild(root);
    const tag: Tag = { root, hp, po, nm, weak, glint, fin, lastWeak: '-' };
    this.tags.set(f.id, tag);
    return tag;
  }
}
