// One-off: take the ChatGPT logo PNG (black mark on solid white background)
// and produce clean transparent-background versions in both black and white.
const sharp = require('sharp')
const path = require('path')

const PUBLIC = path.join(__dirname, '..', 'public')

async function recolorTransparent(sourcePath, outputPath, outputRgb /* {r,g,b} */) {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const out = Buffer.alloc(data.length)
  // Source is mark on a solid background — assume mark is the darker pixels.
  // Threshold and re-render the mark in the target colour with full opacity;
  // everything else becomes fully transparent.
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const lum = (r + g + b) / 3
    const isMark = lum < 128

    if (isMark) {
      out[i] = outputRgb.r
      out[i + 1] = outputRgb.g
      out[i + 2] = outputRgb.b
      out[i + 3] = 255
    } else {
      out[i] = 0; out[i + 1] = 0; out[i + 2] = 0; out[i + 3] = 0
    }
  }

  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(outputPath)

  console.log(`Wrote ${outputPath} (${info.width}×${info.height})`)
}

async function main() {
  const source = path.join(PUBLIC, 'logo-black-source.png')

  // Black mark on transparent bg
  await recolorTransparent(source, path.join(PUBLIC, 'logo-black.png'), { r: 0, g: 0, b: 0 })

  // White mark on transparent bg (derived from same clean source)
  await recolorTransparent(source, path.join(PUBLIC, 'logo-white.png'), { r: 255, g: 255, b: 255 })
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
