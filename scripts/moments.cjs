// Stage real combat moments through the simulation and screenshot them (FX + camera + HUD).
// node scripts/moments.cjs <outdir> [names...]
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const out = process.argv[2];
const only = process.argv.slice(3);

const STAGE = `
window.__stage = {
  step(held = {}, pressed = {}, released = {}, extra = {}) {
    const g = window.__game; const w = g.world; const f = window.__wog.emptyInput();
    f.held = held; f.pressed = pressed; f.released = released; f.camYaw = g.cam.yaw;
    Object.assign(f, extra);
    w.step(f);
  },
  run(n, held = {}, extra = {}) { for (let i = 0; i < n; i++) this.step(held, {}, {}, extra); },
  duel(arch, dist = 2.3) {
    const g = window.__game; g.start('practice'); g.debugHold = true;
    const w = g.world; w.enemies().forEach((e) => (e.hp = 0)); w.removeCorpses();
    w.player.pos = { x: 0, z: 0 }; w.player.prevPos = { x: 0, z: 0 }; w.player.yaw = 0; w.player.prevYaw = 0;
    g.cam.yaw = 0.5; g.cam.pitch = 0.18;
    const e = w.spawn(arch, { x: 0, z: dist }, Math.PI); e.brain.aware = false; e.brain.cooldown = 99999;
    document.querySelector('#help').classList.add('off');
    document.querySelector('.practice').style.display = 'none';
    document.querySelector('.click-hint').style.display = 'none';
    return e;
  },
  attack(e, id) { window.__wog.startEnemyAttack(window.__game.world, e, window.__wog.MOVES[id]); e.brain.aware = false; return window.__wog.MOVES[id].startup; },
  render(n = 4, dt = 1 / 60) { for (let i = 0; i < n; i++) window.__game.frame(dt); },
};`;

const MOMENTS = {
  deflect: `const S = __stage; const e = S.duel('ronin'); S.render(20, 0.05); const s = S.attack(e, 'ro_cut2'); S.run(s - 4); S.step({ guard: true }, { guard: true }); S.run(5, { guard: true }); S.render(1); S.run(2, { guard: true }); S.render(6, 1/60);`,
  issen: `const S = __stage; const e = S.duel('ronin'); S.render(20, 0.05); const s = S.attack(e, 'ro_cut2'); S.run(s - 3); S.step({ slash: true }, { slash: true }); S.step({}, {}, { slash: true }); S.run(12); S.render(12, 1/60);`,
  finisher: `const S = __stage; const e = S.duel('ronin', 2.0); S.render(20, 0.05); e.posture = e.maxPosture - 1; S.step({ thrust: true }, { thrust: true }); S.step({}, {}, { thrust: true }); S.run(24); S.step({ slash: true }, { slash: true }); S.step({}, {}, { slash: true }); for (let i = 0; i < 30; i++) { S.run(1); S.render(1, 1/60); }`,
  finisherThrust: `const S = __stage; const e = S.duel('armored', 2.0); S.render(20, 0.05); e.set('broken', 300); S.step({ thrust: true }, { thrust: true }); S.step({}, {}, { thrust: true }); for (let i = 0; i < 36; i++) { S.run(1); S.render(1, 1/60); }`,
  bounce: `const S = __stage; const e = S.duel('shield', 2.0); S.render(20, 0.05); S.step({ slash: true }, { slash: true }); S.step({}, {}, { slash: true }); S.run(9); S.render(5, 1/60);`,
  flow: `const S = __stage; const e = S.duel('spear', 3.0); S.render(20, 0.05); const s = S.attack(e, 'sp_sweep'); S.step({ guard: true }, { guard: true }); S.run(s - 6, { guard: true }); S.render(1); S.step({ guard: true, dodge: true }, { dodge: true }); S.run(8, { guard: true }); S.render(8, 1/60);`,
  glint: `const S = __stage; const e = S.duel('armored', 3.2); S.render(20, 0.05); const s = S.attack(e, 'ar_crush'); S.run(s - 12); S.render(6, 1/60);`,
  bow: `const S = __stage; const e = S.duel('ronin', 13); S.render(10, 0.05); const g = window.__game; const w = g.world; g.cam.yaw = 0; g.cam.pitch = 0.02; S.render(8, 0.05); const o = g.cam.camera.position; const d = { x: e.pos.x - o.x, y: 1.62 - o.y, z: e.pos.z - o.z }; const l = Math.hypot(d.x, d.y, d.z); const ex = { aimOrigin: { x: o.x, y: o.y, z: o.z }, aimDir: { x: d.x / l, y: d.y / l, z: d.z / l } }; S.step({ aim: true }, { aim: true }, {}, ex); S.run(3, { aim: true }, ex); S.step({ aim: true, slash: true }, { slash: true }, {}, ex); S.run(36, { aim: true, slash: true }, ex); S.render(10, 1/60);`,
  standoff: `const g = window.__game; g.start('campaign'); g.debugHold = true; document.querySelector('#help').classList.add('off'); const S = __stage; S.run(115); S.render(3, 0.05); S.step({}, { standoff: true }); S.step({ slash: true }, { slash: true }); for (let i = 0; i < 60; i++) { S.run(2, { slash: true }); S.render(1, 1/30); }`,
  wave4: `const g = window.__game; g.start('campaign'); g.debugHold = true; document.querySelector('#help').classList.add('off'); const w = g.world; w.waves.index = 2; w.waves.state = 'clear'; w.waves.timer = 999; const S = __stage; S.run(3); S.run(200); w.waves.engage(w); for (let i = 0; i < 40; i++) { S.run(6, { thrust: i % 3 === 0 }); S.render(1, 1/15); }`,
  boss: `const S = __stage; const e = S.duel('boss', 2.6); S.render(20, 0.05); const s = S.attack(e, 'bo_red'); S.run(s - 8); S.render(6, 1/60);`,
};

(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.addInitScript(() => localStorage.setItem('wog.settings', JSON.stringify({ quality: 'low' })));
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !m.text().includes('ERR_CERT')) errors.push(m.text()); });
  await page.goto('http://localhost:5173/', { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  await page.evaluate(STAGE);
  for (const [name, code] of Object.entries(MOMENTS)) {
    if (only.length && !only.includes(name)) continue;
    try {
      await page.evaluate(code);
      await page.waitForTimeout(300);
      await page.screenshot({ path: `${out}/m_${name}.png` });
      console.log('ok', name);
    } catch (e) {
      console.log('FAIL', name, e.message.split('\n')[0]);
    }
  }
  console.log('errors', JSON.stringify(errors.slice(0, 10)));
  await browser.close();
})();
