// Turn dist-single/index.html into an artifact page body (the host adds <html>/<head>/<body>).
//   npm run build:single && node scripts/make-artifact.mjs <out.html>
import { readFileSync, writeFileSync } from 'node:fs';

const out = process.argv[2] || 'dist-single/wog-artifact.html';
const html = readFileSync('dist-single/index.html', 'utf8');
const pick = (re, name) => {
  const m = html.match(re);
  if (!m) throw new Error(`missing ${name}`);
  return m[1];
};
const title = pick(/<title>([\s\S]*?)<\/title>/, 'title');
const fonts = pick(/(<link href="https:\/\/fonts\.googleapis\.com[^>]*>)/, 'fonts link');
const script = pick(/<script type="module" crossorigin>([\s\S]*?)<\/script>/, 'script');
const style = pick(/<style[^>]*>([\s\S]*?)<\/style>/, 'style');
const body = pick(/<body>([\s\S]*?)<\/body>/, 'body').trim();
const page = `<title>${title}</title>
<meta name="description" content="숏소드와 버클러를 든 레인저의 찬바라 전투 — 베기/찌르기 상성, 튕기기·흘리기·일섬, 피니쉬, 활쏘기.">
${fonts}
<style>${style}</style>
${body}
<script type="module">${script}</script>
`;
writeFileSync(out, page);
console.log(`wrote ${out} (${(page.length / 1024).toFixed(0)} KB)`);
