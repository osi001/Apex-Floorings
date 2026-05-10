// Generate favicons from the logo source. We keep the source's natural background
// (white) rather than processing for transparency — the auto-threshold produces a
// blob for this particular mark, and a clean A on white reads correctly on tabs.
const sharp = require('sharp')
const path = require('path')

const PUBLIC = path.join(__dirname, '..', 'public')
const APP = path.join(__dirname, '..', 'app')

async function main() {
  const source = path.join(PUBLIC, 'logo-source-temp.png')

  const trimmed = await sharp(source)
    .trim({ background: '#ffffff', threshold: 10 })
    .toBuffer({ resolveWithObject: true })

  const { width, height } = trimmed.info
  const side = Math.max(width, height)
  const padX = Math.floor((side - width) / 2)
  const padY = Math.floor((side - height) / 2)

  const squared = await sharp(trimmed.data)
    .extend({
      top: padY,
      bottom: side - height - padY,
      left: padX,
      right: side - width - padX,
      background: { r: 255, g: 255, b: 255 },
    })
    .toBuffer()

  await sharp(squared).resize(32, 32).png().toFile(path.join(APP, 'icon.png'))
  await sharp(squared).resize(180, 180).png().toFile(path.join(APP, 'apple-icon.png'))
  console.log('Wrote app/icon.png + app/apple-icon.png')
}

main().catch(err => { console.error(err); process.exit(1) })
