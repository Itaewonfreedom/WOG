// Single pose close-up: node scripts/pose1.cjs out.png who kind arg t camx camy camz [lookY]
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const [out, who, kind, arg, t, cx, cy, cz, ly] = process.argv.slice(2);
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 700, height: 700 } });
  await page.addInitScript(() => localStorage.setItem('wog.settings', JSON.stringify({ quality: 'low' })));
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('http://localhost:5173/', { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  await page.evaluate(({ who, kind, arg, t, cx, cy, cz, ly }) => {
    const g = window.__game;
    g.start('practice');
    g.debugHold = true;
    const w = g.world;
    const { MOVES } = window.__wog;
    w.enemies().forEach((e) => (e.hp = 0));
    w.removeCorpses();
    document.querySelectorAll('#hud, .practice, .click-hint').forEach((e) => (e.style.display = 'none'));
    let f = w.player;
    if (who !== 'player') { f = w.spawn(who, { x: 0, z: 0 }, 0); w.player.pos = { x: 0, z: -30 }; w.player.prevPos = { ...w.player.pos }; }
    f.pos = { x: 0, z: 0 }; f.prevPos = { ...f.pos }; f.yaw = 0; f.prevYaw = 0;
    if (kind === 'attack') f.set('attack', 999, { move: MOVES[arg], hit: new Set(), lunge: 0 });
    else if (kind === 'finisher' || kind === 'finished') f.set(kind, 999, { finisher: arg });
    else if (kind === 'aim') { f.set('aim', Infinity); w.ps.draw = +t; }
    else f.set(kind, Infinity);
    f.act.t = +t;
    const V = g.cam.camera.position.constructor;
    g.debugCam = { pos: new V(+cx, +cy, +cz), look: new V(0, +(ly || 1.05), 0), fov: 40 };
  }, { who, kind, arg, t, cx, cy, cz, ly });
  for (let i = 0; i < 3; i++) await page.evaluate(() => window.__game.frame(0.3));
  await page.screenshot({ path: out });
  if (errors.length) console.log(errors);
  await browser.close();
})();
