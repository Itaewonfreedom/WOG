// Pose contact sheet: node scripts/gallery.cjs <out.png> <set>
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const out = process.argv[2];
const set = process.argv[3] || 'player';

const PLAYER = [
  ['stance', 'free', null, 0],
  ['s1 windup', 'attack', 'r_s1', 6], ['s1 strike', 'attack', 'r_s1', 9], ['s1 follow', 'attack', 'r_s1', 11],
  ['s2 windup', 'attack', 'r_s2', 7], ['s2 strike', 'attack', 'r_s2', 10], ['s2 follow', 'attack', 'r_s2', 12],
  ['s3 windup', 'attack', 'r_s3', 8], ['s3 strike', 'attack', 'r_s3', 11], ['s3 follow', 'attack', 'r_s3', 14],
  ['s4 spin', 'attack', 'r_s4', 15],
  ['t1 windup', 'attack', 'r_t1', 5], ['t1 strike', 'attack', 'r_t1', 8],
  ['t3 windup', 'attack', 'r_t3', 10], ['t3 strike', 'attack', 'r_t3', 13],
  ['ts follow', 'attack', 'r_ts', 11], ['st strike', 'attack', 'r_st', 8],
  ['hs charge', 'charge', 'slash', 20], ['hs strike', 'attack', 'r_hs', 10], ['ht strike', 'attack', 'r_ht', 9],
  ['bash', 'attack', 'r_bash', 7], ['guard', 'guard', null, 5], ['deflect', 'deflect', null, 3], ['flow', 'flow', null, 8],
  ['aim', 'aim', null, 40], ['dodge', 'dodge', null, 7], ['roll', 'roll', null, 12], ['issen', 'issen', null, 12],
  ['fin slash up', 'finisher', 'slash', 24], ['fin slash down', 'finisher', 'slash', 36], ['fin thrust', 'finisher', 'thrust', 40], ['standoff', 'standoff', null, 10],
];
const ENEMY = [
  ['ronin stance', 'ronin', 'free', null, 0], ['ronin overhead', 'ronin', 'attack', 'ro_cut1', 14], ['ronin cut', 'ronin', 'attack', 'ro_cut1', 19], ['ronin lunge', 'ronin', 'attack', 'ro_lunge', 32],
  ['ronin guard', 'ronin', 'guard', null, 5], ['ronin broken', 'ronin', 'broken', null, 40], ['ronin recoil', 'ronin', 'recoil', null, 6], ['ronin dead', 'ronin', 'dead', null, 60],
  ['shield stance', 'shield', 'free', null, 0], ['shield stab', 'shield', 'attack', 'sh_stab', 17], ['shield charge', 'shield', 'attack', 'sh_charge', 30], ['spear stance', 'spear', 'free', null, 0],
  ['spear thrust', 'spear', 'attack', 'sp_thrust', 21], ['spear sweep', 'spear', 'attack', 'sp_sweep', 35], ['armored stance', 'armored', 'free', null, 0], ['armored crush', 'armored', 'attack', 'ar_crush', 36],
  ['armored sweep', 'armored', 'attack', 'ar_sweep', 33], ['duelist stance', 'duelist', 'free', null, 0], ['duelist f1', 'duelist', 'attack', 'du_f1', 12], ['duelist leap', 'duelist', 'attack', 'du_leap', 18],
  ['archer stance', 'archer', 'free', null, 0], ['archer draw', 'archer', 'attack', 'ac_shot', 40], ['boss stance', 'boss', 'free', null, 0], ['boss red', 'boss', 'attack', 'bo_red', 34],
  ['fear', 'ronin', 'fear', null, 20], ['overextended', 'ronin', 'overextended', null, 20], ['finished issen', 'ronin', 'finished', 'issen', 30], ['finished thrust', 'ronin', 'finished', 'thrust', 44],
  ['dummy', 'dummy', 'free', null, 0], ['evade', 'duelist', 'evade', null, 8], ['stagger', 'ronin', 'stagger', null, 10], ['hitstun', 'shield', 'hitstun', null, 6],
];

(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 900, height: 900 } });
  await page.addInitScript(() => localStorage.setItem('wog.settings', JSON.stringify({ quality: 'low' })));
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !m.text().includes('ERR_CERT')) errors.push(m.text()); });
  await page.goto('http://localhost:5173/', { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  await page.evaluate(() => {
    const g = window.__game;
    g.start('practice');
    g.debugHold = true;
    g.world.enemies().forEach((e) => (e.hp = 0));
    g.world.removeCorpses();
    document.querySelectorAll('#hud, .practice, .click-hint').forEach((e) => (e.style.display = 'none'));
  });
  const list = set === 'player' ? PLAYER.map((x) => ['player', ...x]) : ENEMY.map(([l, k, ...r]) => [k, l, ...r]);
  const shots = [];
  for (const [who, label, kind, arg, t] of list) {
    await page.evaluate(({ who, kind, arg, t }) => {
      const g = window.__game;
      const w = g.world;
      const { MOVES } = window.__wog;
      let f = w.player;
      w.enemies().forEach((e) => (e.hp = 0));
      w.removeCorpses();
      if (who !== 'player') {
        f = w.spawn(who, { x: 0, z: 0 }, 0);
        w.player.pos = { x: 0, z: -30 };
        w.player.prevPos = { ...w.player.pos };
      } else {
        f.pos = { x: 0, z: 0 };
      }
      f.prevPos = { ...f.pos };
      f.yaw = 0; f.prevYaw = 0;
      f.hp = f.maxHp;
      f.glint = null;
      const set = (k, dur, extra) => { f.set(k, dur, extra); };
      if (kind === 'attack') set('attack', 999, { move: MOVES[arg], hit: new Set(), lunge: 0, button: 'slash' });
      else if (kind === 'charge') set('charge', 999, { button: arg });
      else if (kind === 'roll') set('dodge', 30, { dir: { x: 0, z: 1 }, value: 1 });
      else if (kind === 'dodge') set('dodge', 18, { dir: { x: 0, z: -1 } });
      else if (kind === 'finisher') set('finisher', 70, { finisher: arg });
      else if (kind === 'finished') set('finished', 70, { finisher: arg });
      else if (kind === 'flow') set('flow', 26, { side: 1 });
      else if (kind === 'issen') set('issen', 34, { finisher: 'issen' });
      else if (kind === 'evade') set('evade', 20, { side: 1 });
      else if (kind === 'dead') { set('dead', Infinity); f.deadTicks = t; }
      else if (kind === 'aim') { set('aim', Infinity); w.ps.draw = t; }
      else set(kind, kind === 'free' || kind === 'guard' || kind === 'standoff' ? Infinity : 200);
      f.act.t = t;
      // Freeze: make the world tick consistent with the action start.
      g.debugCam = { pos: new g.cam.camera.position.constructor(-2.6, 1.5, 2.6), look: new g.cam.camera.position.constructor(0, 1.0, 0.2), fov: 50 };
    }, { who, kind, arg, t });
    for (let i = 0; i < 3; i++) await page.evaluate(() => window.__game.frame(0.3));
    const b64 = await page.screenshot({ clip: { x: 250, y: 170, width: 400, height: 560 }, encoding: 'base64' });
    shots.push([label, b64.toString('base64')]);
  }
  const html = `<body style="margin:0;background:#222;display:grid;grid-template-columns:repeat(8,200px);gap:2px;font:12px sans-serif;color:#fff">${shots
    .map(([l, b]) => `<div style="position:relative"><img src="data:image/png;base64,${b}" style="width:200px;height:280px;display:block"><span style="position:absolute;left:4px;top:2px;background:#000a;padding:1px 4px">${l}</span></div>`)
    .join('')}</body>`;
  const p2 = await browser.newPage({ viewport: { width: 8 * 202, height: Math.ceil(shots.length / 8) * 282 } });
  await p2.setContent(html);
  await p2.screenshot({ path: out, fullPage: true });
  console.log('errors', JSON.stringify(errors.slice(0, 10)));
  await browser.close();
})();
