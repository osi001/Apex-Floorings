// Generate favicons from the logo source.
// Approach: alpha-matting — preserve the original A pixels (including their
// anti-aliased greys) but make the white background pixels fully transparent.
// This avoids both the "blob" artefact of binary thresholding and the
// "white square" of leaving the background opaque.
const sharp = require('sharp')
const path = require('path')

const PUBLIC = path.join(__dirname, '..', 'public')
const APP = path.join(__dirname, '..', 'app')

async function makeTransparentMark(sourcePath) {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const out = Buffer.alloc(data.length)
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const lum = (r + g + b) / 3

    if (lum >= 245) {
      // Definitely background — fully transparent.
      out[i] = 0; out[i + 1] = 0; out[i + 2] = 0; out[i + 3] = 0
    } else {
      // Keep original colour. Alpha scales from 0→255 across the soft transition zone
      // (lum 245 → 200) so anti-aliased edges fade out cleanly.
      const t = Math.max(0, Math.min(1, (245 - lum) / 45))
      out[i] = r
      out[i + 1] = g
      out[i + 2] = b
      out[i + 3] = Math.round(255 * t + (1 - t) * 0)
    }
  }

  return { buffer: out, width: info.width, height: info.height }
}

async function main() {
  const source = path.join(PUBLIC, 'logo-source-temp.png')

  // Build the transparent mark.
  const { buffer, width, height } = await makeTransparentMark(source)
  const mark = sharp(buffer, { raw: { width, height, channels: 4 } }).png()

  // Save the cleaned full-size logo (replacing the old blobby one).
  await mark.clone().toFile(path.join(PUBLIC, 'logo-black.png'))
  console.log('Wrote public/logo-black.png — black A on transparent bg')

  // Now produce favicons: trim transparent padding, pad to a square,
  // resize to icon sizes. Transparent canvas throughout.
  const trimmed = await mark.clone()
    .trim() // trims fully-transparent edges
    .toBuffer({ resolveWithObject: true })

  const side = Math.max(trimmed.info.width, trimmed.info.height)
  const padX = Math.floor((side - trimmed.info.width) / 2)
  const padY = Math.floor((side - trimmed.info.height) / 2)

  const squared = await sharp(trimmed.data)
    .extend({
      top: padY,
      bottom: side - trimmed.info.height - padY,
      left: padX,
      right: side - trimmed.info.width - padX,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer()

  await sharp(squared).resize(32, 32).png().toFile(path.join(APP, 'icon.png'))
  await sharp(squared).resize(180, 180).png().toFile(path.join(APP, 'apple-icon.png'))
  console.log('Wrote app/icon.png (32×32) + app/apple-icon.png (180×180) — transparent bg')
}

main().catch(err => { console.error(err); process.exit(1) })
