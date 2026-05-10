// Build favicons only — never touches public/logo-*.png.
// Strategy: composite the white-on-transparent logo over a dark brand square
// so the favicon stays visible on any tab background (light or dark).
const sharp = require('sharp')
const path = require('path')

const PUBLIC = path.join(__dirname, '..', 'public')
const APP = path.join(__dirname, '..', 'app')

const BRAND_DARK = '#0E0E0E' // matches the site background
const PADDING_RATIO = 0.18   // breathing room around the logo inside the icon

async function build(size, outPath) {
  // Trim the logo to its content bounding box
  const trimmed = await sharp(path.join(PUBLIC, 'logo-white.png'))
    .trim()
    .toBuffer({ resolveWithObject: true })

  // Logo will fill the inner area (icon size minus padding on each side)
  const inner = Math.floor(size * (1 - PADDING_RATIO * 2))
  const resized = await sharp(trimmed.data)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer()

  // Composite the resized logo onto a dark square canvas
  await sharp({
    create: { width: size, height: size, channels: 3, background: BRAND_DARK },
  })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toFile(outPath)

  console.log(`Wrote ${outPath} (${size}×${size})`)
}

async function main() {
  await build(32, path.join(APP, 'icon.png'))
  await build(180, path.join(APP, 'apple-icon.png'))
}

main().catch(err => { console.error(err); process.exit(1) })
