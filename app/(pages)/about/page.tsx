import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Apex Floorings — our story, mission, and what drives us to deliver premium interlocking tile flooring across Nigeria.',
}

const PILLARS = [
  {
    title: 'Quality Materials',
    body: 'Every tile is engineered for durability — built to withstand heavy traffic, weather, and time without sacrificing aesthetics.',
  },
  {
    title: 'Expert Installation',
    body: 'Our trained installation teams ensure precision on every project, from single rooms to large commercial facilities.',
  },
  {
    title: 'Colour Range',
    body: 'Twenty-plus tile colours let you design spaces that reflect your brand, your style, and your vision.',
  },
  {
    title: 'Nationwide Reach',
    body: 'We serve clients across Lagos, Abuja, and Port Harcourt — delivering the same standard of excellence on every job.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Brand Hero */}
      <section aria-label="Brand story" className="relative min-h-[70vh] flex items-end bg-bg-base overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Apex Floorings team member"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(14,14,14,0.92) 0%, rgba(14,14,14,0.5) 40%, rgba(14,14,14,0.2) 100%)' }}
        />
        <div className="relative z-10 px-6 md:px-14 pb-16 max-w-3xl">
          <h1 className="font-jost text-[40px] md:text-[52px] font-normal leading-[1.1] text-white tracking-[0.5px] uppercase mb-6">
            Built for performance.<br />Designed to last.
          </h1>
          <p className="font-jost text-[13px] md:text-[14px] font-light text-white/70 leading-[1.7] mb-4">
            {/* Replace with client brand story copy */}
            Apex Floorings was founded with one purpose — to bring world-class interlocking tile flooring to Nigeria. We believe every space deserves flooring that performs as well as it looks.
          </p>
          <p className="font-jost text-[13px] md:text-[14px] font-light text-white/70 leading-[1.7]">
            From residential homes to commercial complexes, sports courts to industrial facilities, we engineer our tiles for the demands of real environments — and install them with precision.
          </p>
        </div>
      </section>

      {/* Section 2 — Why Apex */}
      <section aria-label="Why Apex" className="bg-bg-base px-6 md:px-14 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[9px] text-white/50 tracking-[3px] uppercase">Why Apex</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[36px] font-normal text-white tracking-[0.5px] uppercase">
            What sets us apart
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {PILLARS.map(({ title, body }) => (
            <div key={title} className="bg-bg-base p-8 border-l-2 border-accent">
              <h3 className="font-jost text-[14px] font-semibold text-white tracking-[2px] uppercase mb-3">
                {title}
              </h3>
              <p className="font-jost text-[12px] font-light text-white/55 leading-[1.7]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Locations Ticker */}
      <section aria-label="Locations" className="bg-accent px-6 md:px-14 py-[11px] flex items-center justify-between">
        <span className="font-jost text-[11px] font-medium text-[#1a1a1a] tracking-[1.5px] uppercase">
          LAGOS · ABUJA · PORT HARCOURT →
        </span>
        <Link
          href="/contact"
          className="font-jost text-[10px] font-bold text-on-accent tracking-[2px] uppercase no-underline"
        >
          GET IN TOUCH
        </Link>
      </section>
    </>
  )
}
