import sharp from 'sharp';
import { readdir, mkdir, readFile, writeFile, stat, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC = join(__dirname, '..', 'public', 'gallery');
const OUT = join(__dirname, '..', 'public', 'gallery');
const MAX_EDGE = 1600;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));
const stats = [];

for (const f of files) {
  const src = join(SRC, f);
  const ext = extname(f).toLowerCase();
  const before = (await stat(src)).size;

  const buf = await readFile(src);
  let pipeline = sharp(buf, { failOnError: false }).rotate();

  const meta = await sharp(buf).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;

  if (Math.max(w, h) > MAX_EDGE) {
    pipeline = pipeline.resize(MAX_EDGE, MAX_EDGE, { fit: 'inside', withoutEnlargement: true });
  }

  let outBuf;
  if (ext === '.jpg' || ext === '.jpeg') {
    outBuf = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: '4:2:0' }).toBuffer();
  } else if (ext === '.png') {
    outBuf = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toBuffer();
  } else {
    continue;
  }

  const outPath = join(OUT, f);
  if (outBuf.length < before) {
    await writeFile(outPath, outBuf);
  } else {
    outBuf = buf;
  }
  const after = outBuf.length;
  const pct = before ? (1 - after / before) * 100 : 0;
  stats.push({ f, beforeKB: (before / 1024).toFixed(1), afterKB: (after / 1024).toFixed(1), savedPct: pct.toFixed(1) });
}

console.table(stats);
const totalBefore = stats.reduce((s, x) => s + parseFloat(x.beforeKB), 0);
const totalAfter = stats.reduce((s, x) => s + parseFloat(x.afterKB), 0);
console.log(`\nTotal before: ${totalBefore.toFixed(0)} KB`);
console.log(`Total after : ${totalAfter.toFixed(0)} KB`);
console.log(`Saved       : ${(totalBefore - totalAfter).toFixed(0)} KB (${(((totalBefore - totalAfter) / totalBefore) * 100 || 0).toFixed(1)}%)`);
