// One-off: take the ChatGPT logo PNG (black mark on solid white background)
// and produce clean transparent-background versions in both black and white.
const sharp = require('sharp')
const path = require('path')

const PUBLIC = path.join(__dirname, '..', 'public')

async function recolorTransparent(sourcePath, outputPath, outputRgb /* {r,g,b} */, threshold = 64) {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const out = Buffer.alloc(data.length)
  let markPixels = 0
  let total = 0

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const lum = (r + g + b) / 3
    const isMark = lum < threshold
    total++

    if (isMark) {
      out[i] = outputRgb.r
      out[i + 1] = outputRgb.g
      out[i + 2] = outputRgb.b
      out[i + 3] = 255
      markPixels++
    } else {
      out[i] = 0; out[i + 1] = 0; out[i + 2] = 0; out[i + 3] = 0
    }
  }

  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(outputPath)

  const markPct = ((markPixels / total) * 100).toFixed(1)
  console.log(`Wrote ${path.basename(outputPath)} (${info.width}×${info.height}) — mark covers ${markPct}% of canvas`)
}

async function main() {
  const source = path.join(PUBLIC, 'logo-source-temp.png')

  await recolorTransparent(source, path.join(PUBLIC, 'logo-black.png'), { r: 0, g: 0, b: 0 })
  await recolorTransparent(source, path.join(PUBLIC, 'logo-white.png'), { r: 255, g: 255, b: 255 })
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
