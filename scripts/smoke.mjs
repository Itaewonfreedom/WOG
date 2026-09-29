// Browser smoke test through the REAL input path (keyboard + mouse events).
//   npm run build && node scripts/smoke.mjs [outDir]
// Starts `vite preview`, plays the campaign opening with key presses (standoff, lock-on,
// attacks, guard), takes screenshots and fails on any page error.
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require('/opt/node22/lib/node_modules/playwright'));
}
const out = process.argv[2] || 'screenshots';
const PORT = 4173;
const URL = `http://localhost:${PORT}/`;

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'pipe' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(URL);
      if (r.ok) return;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  throw new Error('preview server did not start');
}

let failed = false;
try {
  const { mkdirSync } = await import('node:fs');
  mkdirSync(out, { recursive: true });
  await waitForServer();
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.addInitScript(() => localStorage.setItem('wog.settings', JSON.stringify({ quality: 'low', difficulty: 'easy' })));
  const errors = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => {
    if (m.type() === 'error' && !/ERR_CERT|fonts\.g/.test(m.text())) errors.push(`console: ${m.text()}`);
  });
  await page.goto(URL, { waitUntil: 'load' });
  await sleep(1500);
  const state = () => page.evaluate(() => {
    const g = window.__game;
    const w = g.world;
    const p = w.player;
    const threats = w.liveEnemies().filter((e) => e.is('attack') && e.act.move && !e.act.move.projectile && e.act.move.startup - e.act.t <= 10 && e.act.move.startup - e.act.t >= 2 && e.distTo(p) < 5).length;
    const touched = w.enemies().some((e) => e.hp < e.maxHp || e.posture > 0);
    return { touched, mode: w.mode, wave: w.waves?.index ?? -1, waveState: w.waves?.state, so: w.standoff.phase, soT: w.standoff.t, impact: w.standoff.impact, hp: p.hp, act: p.act.kind, tick: w.tick, threats, live: w.liveEnemies().length, fin: w.ps.finisherTarget, lock: w.ps.lockTarget, stats: { ...w.stats } };
  });

  await page.click('[data-a="campaign"]');
  await page.mouse.click(640, 400); // first click captures the mouse (or is swallowed if lock is unavailable)
  for (let i = 0; i < 80; i++) {
    const s = await state();
    if (s.waveState === 'approach') break;
    await sleep(150);
  }
  await page.screenshot({ path: `${out}/smoke_1_approach.png` });

  // Standoff: T, hold J, release when the leader charges.
  await page.keyboard.press('KeyT');
  await sleep(200);
  let s = await state();
  console.log('standoff started:', s.mode === 'standoff');
  if (s.mode === 'standoff') {
    await page.keyboard.down('KeyJ');
    for (let i = 0; i < 400; i++) {
      s = await state();
      if (s.so === 'strike' && s.soT >= s.impact - 8) break;
      if (s.mode !== 'standoff') break;
      await sleep(20);
    }
    await page.keyboard.up('KeyJ');
    await sleep(400);
    await page.screenshot({ path: `${out}/smoke_2_standoff.png` });
    s = await state();
    console.log('standoff kills:', s.stats.standoffKills);
  }

  // Fight: lock on, walk in, attack, guard on threats.
  const t0 = Date.now();
  let shot = 3;
  let attacks = 0;
  while (Date.now() - t0 < 45000) {
    s = await state();
    if (s.mode === 'defeat' || s.mode === 'victory') break;
    if (s.lock === null && s.live > 0) await page.keyboard.press('Tab');
    if (s.threats > 0) {
      await page.keyboard.down('ShiftLeft');
      await sleep(120);
      await page.keyboard.up('ShiftLeft');
    } else if (s.fin !== null) {
      await page.keyboard.press('KeyK');
    } else {
      await page.keyboard.down('KeyW');
      await sleep(120);
      await page.keyboard.up('KeyW');
      await page.keyboard.press(attacks % 3 === 2 ? 'KeyK' : 'KeyJ');
      attacks++;
    }
    if ((Date.now() - t0) / 15000 > shot - 3) {
      await page.screenshot({ path: `${out}/smoke_${shot}_fight.png` });
      shot++;
    }
  }
  s = await state();
  console.log('final state:', JSON.stringify({ mode: s.mode, wave: s.wave, hp: Math.round(s.hp), tick: s.tick, kills: s.stats.kills, deflects: s.stats.deflects, finishers: s.stats.finishers, effective: s.stats.effectiveHits, bad: s.stats.badHits }));

  // Pause menu via Escape.
  await page.keyboard.press('Escape');
  let paused = '';
  for (let i = 0; i < 30 && paused !== '일시정지'; i++) {
    await sleep(100);
    paused = await page.evaluate(() => document.querySelector('.menu.on h2')?.textContent ?? '');
  }
  console.log('pause menu:', paused);
  await page.screenshot({ path: `${out}/smoke_9_pause.png` });

  if (s.tick < 300) throw new Error(`simulation barely advanced (tick ${s.tick})`);
  if (!s.touched && s.stats.kills === 0) throw new Error('player never reached an enemy with an attack through real input');
  if (paused !== '일시정지') throw new Error('pause menu did not open');
  if (errors.length) throw new Error(`page errors:\n${errors.join('\n')}`);
  console.log('SMOKE OK');
  await browser.close();
} catch (e) {
  failed = true;
  console.error('SMOKE FAILED:', e.message);
} finally {
  server.kill();
  process.exit(failed ? 1 : 0);
}
