import type { Stats } from '../core/world';
import type { ArchetypeId } from '../core/types';

export interface Settings {
  difficulty: 'easy' | 'normal' | 'hard';
  kurosawa: boolean;
  blood: boolean;
  sensitivity: number;
  volume: number;
  quality: 'low' | 'high';
}

export const DEFAULT_SETTINGS: Settings = { difficulty: 'normal', kurosawa: false, blood: true, sensitivity: 1, volume: 0.8, quality: 'high' };

export interface MenuHandlers {
  start(mode: 'campaign' | 'practice'): void;
  resume(): void;
  restart(): void;
  title(): void;
  settingsChanged(s: Settings): void;
  spawn(id: ArchetypeId): void;
  clearEnemies(): void;
  toggleInvincible(): boolean;
  click(): void;
}

function el(html: string): HTMLElement {
  const d = document.createElement('div');
  d.innerHTML = html.trim();
  return d.firstElementChild as HTMLElement;
}

const CONTROLS = `
<table class="controls-table">
<tr><th>동작</th><th>키보드 · 마우스</th><th>게임패드</th></tr>
<tr><td>이동 / 카메라</td><td>WASD / 마우스·방향키</td><td>L스틱 / R스틱</td></tr>
<tr><td>베기 (길게: 강베기)</td><td>좌클릭 · J</td><td>□ / X</td></tr>
<tr><td>찌르기 (길게: 강찌르기)</td><td>우클릭 · K</td><td>△ / Y</td></tr>
<tr><td>방패 막기 · 튕기기</td><td>Shift · L</td><td>L1 / LB</td></tr>
<tr><td>흘리기</td><td>방패 + Space (타이밍)</td><td>L1 + ○</td></tr>
<tr><td>방패 치기</td><td>방패 + 베기</td><td>L1 + □</td></tr>
<tr><td>회피 / 구르기</td><td>Space / 두 번</td><td>○ / B</td></tr>
<tr><td>활 조준 · 당기기</td><td>Q 누른 채 · 좌클릭 누르고 떼기</td><td>L2 · R2</td></tr>
<tr><td>집중 조준 (슬로우)</td><td>조준 중 Shift</td><td>조준 중 L1</td></tr>
<tr><td>속사 · 화살 종류</td><td>E · 1/2/3·휠</td><td>R1 · 십자키 →</td></tr>
<tr><td>질풍참 · 회복</td><td>F (또는 베기+찌르기) · R</td><td>십자키 ↑ · ↓</td></tr>
<tr><td>대치 · 락온 · 일시정지</td><td>T · Tab · Esc</td><td>× · R3 · Start</td></tr>
</table>`;

export const SYSTEM_PRIMER = `
<div class="sub" style="text-align:left;max-width:620px;margin:0 auto 18px">
<b>튕기기(弾き)</b> — 적의 칼이 닿기 직전 방패를 올려라. 적의 칼이 튕겨나고, 곧바로 공격하면 <b>튕기기 일섬</b>.<br>
<b>흘리기(流し)</b> — 방패를 든 채 타이밍 맞춰 회피. 빨간 섬광 공격까지 흘려내고 등을 벤다.<br>
<b>일섬(一閃)</b> — 적의 타격 직전, 단 한 번의 공격. 연타하면 나가지 않는다. 이어가면 <b>연쇄 일섬</b>.<br>
<b>상성</b> — 방패·갑주엔 찌르기, 창·시노비엔 베기. 체간을 무너뜨리면 <b>피니쉬</b>.
</div>`;

export class Menus {
  private readonly title: HTMLElement;
  private readonly pause: HTMLElement;
  private readonly settingsEl: HTMLElement;
  private readonly over: HTMLElement;
  private readonly victory: HTMLElement;
  private readonly controls: HTMLElement;
  readonly practice: HTMLElement;
  private settingsBack: () => void = () => undefined;
  settings: Settings;

  constructor(parent: HTMLElement, private readonly h: MenuHandlers, initial: Settings) {
    this.settings = { ...initial };
    this.title = el(`<div class="menu on"><div class="box">
      <div class="kanji-bg">剣 ・ 盾 ・ 弓</div>
      <h1>W<span class="red">O</span>G</h1>
      <div class="sub">레인저 찬바라 — 숏소드와 버클러, 그리고 활<br><small style="opacity:.7">튕기기 · 흘리기 · 일섬 · 피니쉬</small></div>
      <div class="btns">
        <button class="btn primary" data-a="campaign">전투 시작</button>
        <button class="btn" data-a="practice">수련장</button>
        <button class="btn" data-a="controls">조작법 · 시스템</button>
        <button class="btn" data-a="settings">설정</button>
      </div></div></div>`);
    this.pause = el(`<div class="menu"><div class="box"><h2>일시정지</h2><div class="btns">
      <button class="btn primary" data-a="resume">계속</button>
      <button class="btn" data-a="restart">다시 시작</button>
      <button class="btn" data-a="controls">조작법 · 시스템</button>
      <button class="btn" data-a="settings">설정</button>
      <button class="btn" data-a="title">타이틀로</button></div></div></div>`);
    this.settingsEl = el(`<div class="menu"><div class="box"><h2>설정</h2>
      <div class="settings">
        <label>난이도 (판정 시간)</label><select data-s="difficulty"><option value="easy">쉬움 — 넉넉한 튕기기·일섬</option><option value="normal">보통</option><option value="hard">어려움 — 칼날 위의 타이밍</option></select>
        <label>흑백 영화 모드</label><input type="checkbox" data-s="kurosawa">
        <label>피 효과</label><input type="checkbox" data-s="blood">
        <label>그래픽 품질</label><select data-s="quality"><option value="high">높음</option><option value="low">낮음</option></select>
        <label>카메라 감도</label><input type="range" min="0.3" max="2.5" step="0.1" data-s="sensitivity">
        <label>음량</label><input type="range" min="0" max="1" step="0.05" data-s="volume">
      </div>
      <div class="btns"><button class="btn primary" data-a="back">확인</button></div></div></div>`);
    this.controls = el(`<div class="menu"><div class="box"><h2>조작법 · 시스템</h2>${CONTROLS}${SYSTEM_PRIMER}<div class="btns"><button class="btn primary" data-a="back">확인</button></div></div></div>`);
    this.over = el(`<div class="menu"><div class="box"><h2 style="color:var(--red)">패배</h2><div class="sub">칼끝은 한 치 차이로 갈린다.</div><div class="stats"></div><div class="btns">
      <button class="btn primary" data-a="restart">다시 도전</button><button class="btn" data-a="title">타이틀로</button></div></div></div>`);
    this.victory = el(`<div class="menu"><div class="box"><h2 style="color:var(--gold)">승리</h2><div class="sub">철갑 대장 카게토라가 쓰러졌다.</div><div class="stats"></div><div class="btns">
      <button class="btn primary" data-a="restart">다시 싸우기</button><button class="btn" data-a="title">타이틀로</button></div></div></div>`);
    this.practice = el(`<div class="practice">
      <button class="btn" data-p="ronin">+ 낭인 검사</button>
      <button class="btn" data-p="shield">+ 방패 무사</button>
      <button class="btn" data-p="spear">+ 창병</button>
      <button class="btn" data-p="armored">+ 갑주 무사</button>
      <button class="btn" data-p="duelist">+ 쌍검 시노비</button>
      <button class="btn" data-p="archer">+ 궁수</button>
      <button class="btn" data-p="boss">+ 대장</button>
      <button class="btn" data-p="dummy">+ 허수아비</button>
      <button class="btn" data-p="clear">모두 제거</button>
      <button class="btn" data-p="inv">무적: 끔</button>
    </div>`);
    for (const m of [this.title, this.pause, this.settingsEl, this.controls, this.over, this.victory, this.practice]) parent.appendChild(m);

    const on = (root: HTMLElement, fn: (a: string, t: HTMLElement) => void) =>
      root.addEventListener('click', (e) => {
        const t = (e.target as HTMLElement).closest('[data-a],[data-p]') as HTMLElement | null;
        if (!t) return;
        e.stopPropagation();
        this.h.click();
        fn(t.dataset.a ?? t.dataset.p ?? '', t);
      });
    on(this.title, (a) => {
      if (a === 'campaign' || a === 'practice') this.h.start(a);
      else if (a === 'settings') this.openSettings(this.title);
      else if (a === 'controls') this.openControls(this.title);
    });
    on(this.pause, (a) => {
      if (a === 'resume') this.h.resume();
      else if (a === 'restart') this.h.restart();
      else if (a === 'title') this.h.title();
      else if (a === 'settings') this.openSettings(this.pause);
      else if (a === 'controls') this.openControls(this.pause);
    });
    on(this.settingsEl, (a) => a === 'back' && this.settingsBack());
    on(this.controls, (a) => a === 'back' && this.settingsBack());
    for (const m of [this.over, this.victory])
      on(m, (a) => {
        if (a === 'restart') this.h.restart();
        else if (a === 'title') this.h.title();
      });
    on(this.practice, (a, t) => {
      if (a === 'clear') this.h.clearEnemies();
      else if (a === 'inv') {
        const v = this.h.toggleInvincible();
        t.textContent = `무적: ${v ? '켬' : '끔'}`;
        t.classList.toggle('on', v);
      } else this.h.spawn(a as ArchetypeId);
    });

    this.settingsEl.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[data-s]').forEach((input) => {
      const key = input.dataset.s as keyof Settings;
      const v = this.settings[key];
      if (input instanceof HTMLInputElement && input.type === 'checkbox') input.checked = !!v;
      else input.value = String(v);
      input.addEventListener('input', () => {
        const s = this.settings as unknown as Record<string, unknown>;
        if (input instanceof HTMLInputElement && input.type === 'checkbox') s[key] = input.checked;
        else if (input instanceof HTMLInputElement && input.type === 'range') s[key] = parseFloat(input.value);
        else s[key] = input.value;
        this.h.settingsChanged(this.settings);
      });
    });
  }

  private hideAll(): void {
    for (const m of [this.title, this.pause, this.settingsEl, this.controls, this.over, this.victory]) m.classList.remove('on');
  }

  private openSettings(from: HTMLElement): void {
    this.hideAll();
    this.settingsEl.classList.add('on');
    this.settingsBack = () => {
      this.hideAll();
      from.classList.add('on');
    };
  }

  private openControls(from: HTMLElement): void {
    this.hideAll();
    this.controls.classList.add('on');
    this.settingsBack = () => {
      this.hideAll();
      from.classList.add('on');
    };
  }

  get anyOpen(): boolean {
    return [this.title, this.pause, this.settingsEl, this.controls, this.over, this.victory].some((m) => m.classList.contains('on'));
  }

  showTitle(): void {
    this.hideAll();
    this.title.classList.add('on');
    this.practice.classList.remove('on');
  }

  showPause(): void {
    this.hideAll();
    this.pause.classList.add('on');
  }

  hide(): void {
    this.hideAll();
  }

  showPractice(on: boolean): void {
    this.practice.classList.toggle('on', on);
  }

  showResult(win: boolean, s: Stats): void {
    this.hideAll();
    const box = win ? this.victory : this.over;
    const rows: [string, string | number][] = [
      ['시간', `${Math.floor(s.time / 60)}:${String(Math.floor(s.time % 60)).padStart(2, '0')}`],
      ['처치', s.kills],
      ['튕기기', s.deflects],
      ['흘리기', s.flows],
      ['일섬 (최대 연쇄)', `${s.issens} (${s.maxIssenChain})`],
      ['피니쉬', s.finishers],
      ['대치 참', s.standoffKills],
      ['헤드샷', s.headshots],
      ['완벽 회피', s.perfectDodges],
      ['유효타 / 상성 실수', `${s.effectiveHits} / ${s.badHits}`],
      ['받은 피해', Math.round(s.damageTaken)],
    ];
    (box.querySelector('.stats') as HTMLElement).innerHTML = rows.map(([a, b]) => `<span>${a}</span><span>${b}</span>`).join('');
    box.classList.add('on');
  }
}
