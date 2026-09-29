// Quick visual check: node scripts/shot.cjs <outdir> [scenario]
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const out = process.argv[2] || '.';
const scenario = process.argv[3] || 'basic';
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  await page.goto('http://localhost:5173/', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${out}/title.png` });
  if (scenario === 'basic') {
    await page.click('[data-a="campaign"]');
    await page.waitForTimeout(6000);
    await page.screenshot({ path: `${out}/wave1.png` });
  }
  console.log(JSON.stringify(errors.slice(0, 20), null, 1));
  await browser.close();
})();
