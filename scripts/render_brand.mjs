/**
 * Raster fallbacks from the vector icon: white mark on ink.
 * Source files live in public/brand/.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import sharp from 'sharp';

const INK = { r: 14, g: 17, b: 22, alpha: 1 };
const iconSvg = readFileSync('public/brand/ec-icon-white.svg');
const wordSvg = readFileSync('public/brand/ec-logo-full-white.svg');

function faviconSvg() {
  const source = readFileSync('public/brand/ec-icon-white.svg', 'utf8');
  const path = source.match(/<path d="[^"]+"/)?.[0];
  if (!path) throw new Error('Icon path missing');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <title>Embedded Consultants</title>
  <rect width="1000" height="1000" fill="#0E1116"/>
  <g transform="translate(140 140) scale(0.72)" fill="#FFFFFF" fill-rule="evenodd">
    ${path}/>
  </g>
</svg>
`;
}

async function iconOnInk(size, pad) {
  const inner = Math.max(1, Math.round(size * (1 - pad * 2)));
  const rendered = await sharp(iconSvg, { density: 384 })
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const meta = await sharp(rendered).metadata();
  const left = Math.round((size - (meta.width ?? inner)) / 2);
  const top = Math.round((size - (meta.height ?? inner)) / 2);
  return sharp({
    create: { width: size, height: size, channels: 4, background: INK },
  })
    .composite([{ input: rendered, left, top }])
    .png()
    .toBuffer();
}

async function write(path, buffer) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, buffer);
}

writeFileSync('public/favicon.svg', faviconSvg());

const outputs = [
  ['public/icons/icon-32.png', 32, 0.14],
  ['public/icons/apple-touch-icon.png', 180, 0.16],
  ['public/icons/icon-192.png', 192, 0.16],
  ['public/icons/icon-512.png', 512, 0.16],
  ['public/icons/icon-maskable.png', 512, 0.28],
];

for (const [path, size, pad] of outputs) {
  await write(path, await iconOnInk(size, pad));
}

await sharp(wordSvg, { density: 400 })
  .resize({ height: 84, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('/tmp/ec-wordmark-og.png');

console.log('brand rasters ready');
