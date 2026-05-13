import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'
import { GALLERY_IMAGES } from '@/lib/gallery'
import { TILES } from '@/lib/tiles'

export const metadata = {
  title: 'Apex Floorings | Premium Interlocking Tile Flooring Nigeria',
}

export default function HomePage() {
  const featured = GALLERY_IMAGES.slice(0, 4)

  return (
    <main className="bg-bg-base">
      {/* Hero — full viewport */}
      <div className="relative overflow-hidden h-screen">
        <Nav variant="overlay" />
        <HeroSlider />
      </div>

      {/* About preview */}
      <section aria-label="About preview" className="px-6 md:px-14 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[9px] text-white/50 tracking-[3px] uppercase">About Apex</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[40px] font-normal text-white tracking-[0.5px] uppercase mb-6 leading-[1.1]">
            Built for performance.<br />Designed to last.
          </h2>
          <p className="font-jost text-[13px] md:text-[14px] font-light text-white/60 leading-[1.7] mb-8">
            Apex Floorings brings world-class interlocking tile flooring to Nigeria. Engineered for residential, commercial, sports and industrial spaces, installed with precision by our trained teams.
          </p>
          <Link
            href="/about"
            className="inline-block font-jost text-[10px] font-bold text-on-accent bg-accent px-6 py-3 tracking-[2px] uppercase no-underline"
          >
            LEARN MORE →
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/about-hero.jpg"
            alt="Apex Floorings team member"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Colour range strip */}
      <section aria-label="Colour range" className="px-6 md:px-14 pb-24">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[9px] text-white/50 tracking-[3px] uppercase">Our Colour Range</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[40px] font-normal text-white tracking-[0.5px] uppercase">
            A palette built for any space
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-white/[0.04]">
          {TILES.map((tile) => (
            <div
              key={tile.label}
              className="aspect-square flex flex-col"
              style={{ background: tile.color }}
            >
              <div className="flex-1" />
              <div className="p-3" style={{ background: 'rgba(0,0,0,0.2)' }}>
                <span
                  className="font-jost text-[9px] font-bold tracking-[2px] uppercase block"
                  style={{ color: tile.textColor }}
                >
                  {tile.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section aria-label="Featured projects" className="px-6 md:px-14 pb-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="font-jost text-[9px] text-white/50 tracking-[3px] uppercase">Our Work</span>
            </div>
            <h2 className="font-jost text-[28px] md:text-[40px] font-normal text-white tracking-[0.5px] uppercase">
              Featured projects
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-jost text-[10px] font-bold text-accent tracking-[2px] uppercase no-underline self-start md:self-auto"
          >
            VIEW FULL GALLERY →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04]">
          {featured.map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden bg-bg-base">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Get a quote" className="bg-accent px-6 md:px-14 py-16 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <h2 className="font-jost text-[24px] md:text-[32px] font-normal text-on-accent tracking-[0.5px] uppercase max-w-[640px]">
          Ready to start your project?
        </h2>
        <Link
          href="/contact"
          className="font-jost text-[11px] font-bold border-2 border-on-accent px-8 py-4 text-on-accent tracking-[2px] uppercase no-underline self-start md:self-auto"
        >
          GET A QUOTE →
        </Link>
      </section>

      <Footer />
    </main>
  )
}
