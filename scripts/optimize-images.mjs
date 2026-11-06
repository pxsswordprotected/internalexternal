#!/usr/bin/env node
// Optimizes the PNG images in public/images for the web without hurting text/line-art quality.
//
// Policy (see the notes next to each constant):
//   - Only PNGs are converted. JPEGs and lossy WebPs are skipped: re-encoding an already lossy file
//     stacks a second round of compression artifacts on top of the first.
//   - Images wider than MAX_WIDTH are downscaled (Lanczos3). The essay column is at most ~740 CSS px
//     wide, so 1600px is ~2.2x for retina screens and nothing visible is lost.
//   - Opaque images are tried as high-quality lossy WebP first and kept only if the decoded result
//     is within MIN_PSNR_DB of the (resized) source. Otherwise, and for any image that really uses
//     transparency, the fallback is lossless WebP, which is verified to be bit-exact.
//   - The new file is only used if it is clearly smaller than the original.
//   - References to the old file in src/ and compressed-essay/ are rewritten to the new path.
//
// Usage:
//   node scripts/optimize-images.mjs            dry run: encodes in memory, prints the plan, writes nothing
//   node scripts/optimize-images.mjs --write    writes .webp files, rewrites references, deletes the PNGs
//   --max-width=N                               override the width cap (default 1600)
//
// Originals are tracked in git, so `git checkout -- public/images` restores them.

import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGE_ROOT = "public/images";
const PUBLIC_ROOT = "public";
const REFERENCE_ROOTS = ["src", "compressed-essay"];
const REFERENCE_EXTENSIONS = new Set([".md", ".mdoc", ".mdx", ".ts", ".tsx", ".json", ".yaml", ".yml", ".html"]);

// Lossy quality 98 with full-resolution chroma (smartSubsample) keeps anti-aliased text edges and
// colored line art clean. Lower values soften small text; see the PSNR gate below.
const LOSSY_QUALITY = 98;
// Gate for accepting the lossy encode, measured over all RGB pixels against the resized source.
// ~50 dB is visually indistinguishable on flat graphics; anything below falls back to lossless.
const MIN_PSNR_DB = 50;
// Skip the conversion unless the result is at least this much smaller than the original.
const MIN_SAVINGS_RATIO = 0.05;
// Lossy is only worth its (tiny) risk when it is much smaller than lossless; otherwise stay exact.
const LOSSY_MIN_ADVANTAGE = 1.5;
// libwebp effort: 0 (fast) to 6 (slowest, smallest). These images are few, so use the maximum.
const WEBP_EFFORT = 6;

const args = process.argv.slice(2);
const write = args.includes("--write");
const maxWidthArg = args.find((arg) => arg.startsWith("--max-width="));
const maxWidth = maxWidthArg ? Number(maxWidthArg.split("=")[1]) : 1600;
if (!Number.isInteger(maxWidth) || maxWidth < 1) {
  console.error(`Invalid --max-width: ${maxWidthArg}`);
  process.exit(1);
}

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

function psnrDb(reference, candidate) {
  let sumSquares = 0;
  for (let i = 0; i < reference.length; i++) {
    const diff = reference[i] - candidate[i];
    sumSquares += diff * diff;
  }
  return sumSquares === 0 ? Infinity : 10 * Math.log10((255 * 255) / (sumSquares / reference.length));
}

// The "source of truth" for comparison: the PNG decoded, flattened to RGB or RGBA, and resized.
async function prepareSource(file) {
  const meta = await sharp(file).metadata();
  const stats = await sharp(file).stats();
  const hasTransparency = Boolean(meta.hasAlpha) && !stats.isOpaque;

  let pipeline = sharp(file).rotate(); // honor EXIF orientation, then metadata is stripped
  if (!hasTransparency) {
    pipeline = pipeline.removeAlpha();
  }
  if (meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, kernel: "lanczos3" });
  }
  const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true });
  return { raw: data, info, hasTransparency, originalWidth: meta.width };
}

function encode(source, options) {
  const { raw, info } = source;
  return sharp(raw, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .webp({ effort: WEBP_EFFORT, ...options })
    .toBuffer();
}

async function decodeRaw(webp, channels) {
  const image = sharp(webp);
  return (channels === 4 ? image.ensureAlpha() : image.removeAlpha()).raw().toBuffer();
}

async function chooseEncoding(source) {
  const { raw, info, hasTransparency } = source;

  const lossless = await encode(source, { lossless: true });
  if (psnrDb(raw, await decodeRaw(lossless, info.channels)) !== Infinity) {
    throw new Error("lossless WebP did not round-trip bit-exactly");
  }
  const result = { data: lossless, mode: "lossless", psnr: Infinity };
  if (hasTransparency) {
    return result;
  }

  const lossy = await encode(source, { quality: LOSSY_QUALITY, smartSubsample: true });
  const psnr = psnrDb(raw, await decodeRaw(lossy, info.channels));
  if (psnr >= MIN_PSNR_DB && lossless.length > lossy.length * LOSSY_MIN_ADVANTAGE) {
    return { data: lossy, mode: `lossy q${LOSSY_QUALITY}`, psnr };
  }
  return result;
}

async function isLossyWebp(file) {
  const handle = await fs.open(file, "r");
  try {
    const header = Buffer.alloc(64);
    await handle.read(header, 0, 64, 0);
    // "VP8 " = lossy, "VP8L" = lossless, "VP8X" = extended (lossy unless a VP8L chunk follows).
    return !header.includes("VP8L");
  } finally {
    await handle.close();
  }
}

async function collectReferenceFiles() {
  const files = [];
  for (const root of REFERENCE_ROOTS) {
    for await (const file of walk(root)) {
      if (REFERENCE_EXTENSIONS.has(path.extname(file).toLowerCase())) {
        files.push(file);
      }
    }
  }
  return files;
}

const publicPath = (file) => `/${path.relative(PUBLIC_ROOT, file).split(path.sep).join("/")}`;

async function main() {
  const referenceFiles = await collectReferenceFiles();
  const referenceContents = new Map(
    await Promise.all(referenceFiles.map(async (file) => [file, await fs.readFile(file, "utf8")])),
  );

  const converted = [];
  let bytesBefore = 0;
  let bytesAfter = 0;

  console.log(`${write ? "WRITE" : "DRY RUN"}  max width ${maxWidth}px\n`);

  for await (const file of walk(IMAGE_ROOT)) {
    const ext = path.extname(file).toLowerCase();
    const label = path.relative(IMAGE_ROOT, file);
    const originalSize = (await fs.stat(file)).size;

    if (ext === ".jpg" || ext === ".jpeg" || (ext === ".webp" && (await isLossyWebp(file)))) {
      const { width } = await sharp(file).metadata();
      const note = width > maxWidth ? `  (wider than ${maxWidth}px: resize it from the original)` : "";
      console.log(`skip  ${kb(originalSize).padStart(7)}  already lossy${note}  ${label}`);
      continue;
    }
    if (ext !== ".png") {
      console.log(`skip  ${kb(originalSize).padStart(7)}  not a PNG  ${label}`);
      continue;
    }

    const source = await prepareSource(file);
    const encoding = await chooseEncoding(source);
    const outFile = file.slice(0, -ext.length) + ".webp";
    const oldRef = publicPath(file);
    const newRef = publicPath(outFile);
    const referencedIn = [...referenceContents].filter(([, text]) => text.includes(oldRef)).map(([f]) => f);

    const resized = source.info.width !== source.originalWidth ? ` ${source.originalWidth}->${source.info.width}px` : "";
    const detail = `${encoding.mode}${Number.isFinite(encoding.psnr) ? ` ${encoding.psnr.toFixed(1)} dB` : ""}${resized}`;

    if (encoding.data.length > originalSize * (1 - MIN_SAVINGS_RATIO)) {
      console.log(`keep  ${kb(originalSize).padStart(7)}  new file not smaller (${kb(encoding.data.length)})  ${label}`);
      continue;
    }
    if (referencedIn.length === 0) {
      console.log(`keep  ${kb(originalSize).padStart(7)}  not referenced anywhere in ${REFERENCE_ROOTS.join(", ")}; left alone  ${label}`);
      continue;
    }

    console.log(`conv  ${kb(originalSize).padStart(7)} -> ${kb(encoding.data.length).padStart(7)}  ${detail}  ${label}`);
    bytesBefore += originalSize;
    bytesAfter += encoding.data.length;
    converted.push({ file, outFile, oldRef, newRef, data: encoding.data, referencedIn });
  }

  console.log(`\n${converted.length} converted: ${kb(bytesBefore)} -> ${kb(bytesAfter)}`);

  if (!write) {
    console.log("Dry run only. Re-run with --write to apply.");
    return;
  }

  for (const item of converted) {
    await fs.writeFile(item.outFile, item.data);
    for (const refFile of item.referencedIn) {
      const text = referenceContents.get(refFile).split(item.oldRef).join(item.newRef);
      referenceContents.set(refFile, text);
      await fs.writeFile(refFile, text);
    }
    await fs.unlink(item.file);
    console.log(`wrote ${path.relative(IMAGE_ROOT, item.outFile)}; updated ${item.referencedIn.length} reference file(s)`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
