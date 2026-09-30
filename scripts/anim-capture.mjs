// Deterministic animation capture: drives a built game frame-by-frame through the REAL input path
// (keyboard events) with a frozen clock, and saves JPEG frames + per-frame metrics per scenario.
//
//   node scripts/anim-capture.mjs --dist dist --out <dir> [--hz 60] [--only a,b] [--label after]
//
// Works against older builds too (only uses __game / __wog debug hooks that exist since the first release).
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require('/opt/node22/lib/node_modules/playwright'));
}

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .join(' ')
    .split('--')
    .filter(Boolean)
    .map((s) => {
      const [k, ...v] = s.trim().split(' ');
      return [k, v.join(' ')];
    }),
);
const DIST = path.resolve(args.dist || 'dist');
const OUT = path.resolve(args.out || 'capture');
const HZ = Number(args.hz || 60);
const ONLY = args.only ? args.only.split(',') : null;
const PORT = 4300 + Math.floor(Math.random() * 500);
const W = 640;
const H = 360;

// ── Scenarios ───────────────────────────────────────────────────────────────
// Each: frames at 60 Hz (scaled to --hz), events keyed by 60 Hz frame index, a setup eval and a camera.
const SIDE = { pos: [-3.6, 1.35, 1.6], look: [0, 1.0, 1.3], fov: 42 };
const SETUP_DUEL = (arch, dist, extra = '') => `
  const g = window.__game; g.start('practice');
  const w = g.world; w.enemies().forEach((e) => (e.hp = 0)); w.removeCorpses();
  w.player.pos = { x: 0, z: 0 }; w.player.prevPos = { x: 0, z: 0 }; w.player.yaw = 0; w.player.prevYaw = 0;
  g.cam.yaw = 0; g.cam.pitch = 0.2;
  const e = w.spawn('${arch}', { x: 0, z: ${dist} }, Math.PI); e.brain.aware = false; e.brain.cooldown = 1e9;
  window.__e = e; ${extra}
  for (const s of ['#help', '#tip', '.practice', '.click-hint', '#wave']) document.querySelectorAll(s).forEach((x) => (x.style.display = 'none'));
`;
const ATTACK = (id) => `window.__wog.startEnemyAttack(window.__game.world, window.__e, window.__wog.MOVES['${id}']); window.__e.brain.aware = false;`;

const SCENARIOS = {
  combo_mixed: { frames: 130, cam: SIDE, setup: SETUP_DUEL('dummy', 2.4), keys: [[10, 'KeyJ'], [28, 'KeyJ'], [46, 'KeyK'], [64, 'KeyJ'], [82, 'KeyJ']] },
  combo_thrust: { frames: 120, cam: SIDE, setup: SETUP_DUEL('dummy', 2.6), keys: [[10, 'KeyK'], [27, 'KeyK'], [44, 'KeyJ'], [62, 'KeyJ']] },
  heavy: { frames: 110, cam: SIDE, setup: SETUP_DUEL('dummy', 2.6), hold: [[10, 60, 'KeyJ']] },
  deflect_issen: {
    frames: 200,
    cam: SIDE,
    setup: SETUP_DUEL('ronin', 2.2),
    evals: [[5, ATTACK('ro_cut2')]],
    hold: [[19, 23, 'ShiftLeft']],
    keys: [[26, 'KeyJ']],
  },
  issen_gamecam: { frames: 170, cam: null, setup: SETUP_DUEL('ronin', 2.2), evals: [[5, ATTACK('ro_cut2')]], keys: [[20, 'KeyJ']] },
  flow_finisher: {
    frames: 210,
    cam: SIDE,
    setup: SETUP_DUEL('armored', 2.6),
    evals: [[5, ATTACK('ar_crush')]],
    hold: [[10, 58, 'ShiftLeft']],
    keys: [[48, 'Space'], [66, 'KeyK']],
  },
  finisher_slash: { frames: 170, cam: SIDE, setup: SETUP_DUEL('ronin', 2.0, 'e.set("broken", 400);'), keys: [[10, 'KeyJ']] },
  finisher_thrust: { frames: 180, cam: SIDE, setup: SETUP_DUEL('ronin', 2.0, 'e.set("broken", 400);'), keys: [[10, 'KeyK']] },
  finisher_gamecam: { frames: 150, cam: null, setup: SETUP_DUEL('armored', 2.0, 'e.set("broken", 400);'), keys: [[10, 'KeyK']] },
  kill: { frames: 120, cam: SIDE, setup: SETUP_DUEL('ronin', 2.2, 'e.hp = 4;'), keys: [[10, 'KeyJ']] },
  hit_react: { frames: 130, cam: SIDE, setup: SETUP_DUEL('ronin', 2.2, 'e.hp = 9999; e.maxHp = 9999; e.maxPosture = 9999;'), keys: [[10, 'KeyJ'], [45, 'KeyK'], [85, 'KeyJ']] },
  dodge_roll: { frames: 120, cam: SIDE, setup: SETUP_DUEL('dummy', 4), keys: [[10, 'Space'], [16, 'Space'], [70, 'Space']], hold: [[62, 90, 'KeyA']] },
  locomotion: { frames: 190, cam: { pos: [-4.2, 1.3, 2.5], look: [0, 0.6, 2.2], fov: 45 }, setup: SETUP_DUEL('dummy', 12), hold: [[5, 55, 'KeyW'], [65, 115, 'KeyD'], [125, 175, 'KeyS']] },
  bow: { frames: 120, cam: SIDE, setup: SETUP_DUEL('dummy', 8), hold: [[5, 82, 'KeyQ'], [15, 60, 'KeyJ']], keys: [[92, 'KeyJ']] },
  pause_restart: {
    realLoop: true,
    frames: 150,
    cam: null,
    setup: SETUP_DUEL('ronin', 2.2),
    evals: [[5, ATTACK('ro_cut2')]],
    keys: [[20, 'KeyJ'], [30, 'Escape'], [70, 'Escape'], [120, 'Escape']],
    evalsLate: [[122, `document.querySelector('[data-a="restart"]').click();`]],
  },
};

// ── Server ──────────────────────────────────────────────────────────────────
const server = spawn('npx', ['http-server', DIST, '-p', String(PORT), '-s', '-c-1'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function waitServer() {
  for (let i = 0; i < 80; i++) {
    try {
      if ((await fetch(`http://127.0.0.1:${PORT}/`)).ok) return;
    } catch {
      /* not up */
    }
    await sleep(200);
  }
  throw new Error('server did not start');
}

const METRICS = `(() => {
  const g = window.__game; const w = g.world; const p = w.player; const out = { tick: w.tick, hitstop: w.hitstop, ts: w.timeScale, state: g.state, mode: w.mode, fighters: [] };
  for (const f of w.fighters) {
    const v = g.views.get(f.id); if (!v) continue;
    const c = v.char; const V = c.root.position.constructor;
    const fl = new V(); const fr = new V(); c.footLMesh.getWorldPosition(fl); c.footRMesh.getWorldPosition(fr);
    const tip = new V(); const base = new V(); c.bladeWorld(base, tip);
    out.fighters.push({ id: f.id, kind: f.act.kind, t: f.act.t, move: f.act.move ? f.act.move.id : null, fin: f.act.finisher || null, hp: f.hp, x: f.pos.x, z: f.pos.z,
      rx: c.root.position.x, rz: c.root.position.z, fl: [fl.x, fl.y, fl.z], fr: [fr.x, fr.y, fr.z], tip: [tip.x, tip.y, tip.z], base: [base.x, base.y, base.z] });
  }
  out.kills = w.stats.kills;
  return out;
})()`;

let failed = false;
try {
  mkdirSync(OUT, { recursive: true });
  await waitServer();
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const summary = {};
  for (const [name, sc] of Object.entries(SCENARIOS)) {
    if (ONLY && !ONLY.includes(name)) continue;
    const page = await browser.newPage({ viewport: { width: W, height: H } });
    await page.addInitScript(() => localStorage.setItem('wog.settings', JSON.stringify({ quality: 'low', blood: true })));
    await page.clock.install({ time: 0 });
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'load' });
    await page.waitForFunction(() => !!window.__game);
    // An installed clock still flows in real time and the game's own rAF loop would run behind
    // our back: stop the loop and pause the clock. Every captured frame then advances the fake
    // clock by exactly 1/HZ (so timers fire on schedule) and renders exactly one game frame.
    await page.evaluate(() => {
      window.requestAnimationFrame = () => 0;
    });
    await page.clock.runFor(100);
    for (let k = 1; ; k++) {
      try {
        // The clock keeps flowing between these two calls: leave a margin (and retry).
        await page.clock.pauseAt((await page.evaluate(() => Date.now())) + 400 * k);
        break;
      } catch (e) {
        if (k >= 5) throw e;
      }
    }
    await page.evaluate(sc.setup);
    const dir = path.join(OUT, name);
    mkdirSync(dir, { recursive: true });
    const scale = HZ / 60;
    const n = Math.round(sc.frames * scale);
    const at = (f60) => Math.round(f60 * scale);
    const metrics = [];
    for (let i = 0; i < n; i++) {
      for (const [f, code] of sc.evals || []) if (at(f) === i) await page.evaluate(code);
      for (const [f, key] of sc.keys || []) {
        if (at(f) === i) {
          await page.keyboard.down(key);
        }
        if (at(f) + 1 === i) await page.keyboard.up(key);
      }
      for (const [f0, f1, key] of sc.hold || []) {
        if (at(f0) === i) await page.keyboard.down(key);
        if (at(f1) === i) await page.keyboard.up(key);
      }
      for (const [f, code] of sc.evalsLate || []) if (at(f) === i) await page.evaluate(code);
      let shot;
      await page.clock.runFor(1000 / HZ);
      if (sc.realLoop) {
        // Drive the game's own loop entry point (real dt from the clock, pause handling …).
        shot = await page.evaluate(`(() => { const g = window.__game; g.loop(performance.now()); return { img: g.renderer.domElement.toDataURL('image/jpeg', 0.8), m: ${METRICS} }; })()`);
      } else {
        shot = await page.evaluate(
          `(() => { const g = window.__game; const cam = ${JSON.stringify(sc.cam)};
            if (cam) { const V = g.cam.camera.position.constructor; const p = g.world.player.pos;
              g.debugCam = { pos: new V(p.x * 0.5 + cam.pos[0], cam.pos[1], p.z * 0.5 + cam.pos[2]), look: new V(p.x * 0.5 + cam.look[0], cam.look[1], p.z * 0.5 + cam.look[2]), fov: cam.fov }; }
            g.frame(${1 / HZ});
            return { img: g.renderer.domElement.toDataURL('image/jpeg', 0.8), m: ${METRICS} }; })()`,
        );
      }
      metrics.push(shot.m);
      writeFileSync(path.join(dir, `${String(i).padStart(4, '0')}.jpg`), Buffer.from(shot.img.split(',')[1], 'base64'));
    }
    writeFileSync(path.join(dir, 'metrics.json'), JSON.stringify(metrics));
    summary[name] = { frames: n, errors };
    console.log(`${name}: ${n} frames${errors.length ? ' ERRORS ' + errors.join(' | ') : ''}`);
    await page.close();
  }
  writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(summary, null, 1));
  await browser.close();
} catch (e) {
  failed = true;
  console.error('CAPTURE FAILED', e);
} finally {
  server.kill();
  process.exit(failed ? 1 : 0);
}
