import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Apex Floorings is a Lagos-based premium modular flooring company helping businesses transform commercial and outdoor spaces with durable tile solutions.',
}

const STATS = [
  { value: '7+',  label: 'Cities Served' },
  { value: '10',  label: 'Tile Colours' },
  { value: '1',   label: 'Day Installation' },
]

const WHY_US = [
  'Installed in one day. Zero dust, zero demolition, zero downtime.',
  'Waterproof, oil-resistant & anti-slip',
  'Replace single tiles. No need to redo the whole floor.',
  'Lower lifetime cost than epoxy or ceramic',
  'Available in multiple colours & patterns',
  'Serving Lagos, Abuja, Port Harcourt, Benin, Warri & Uyo',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section aria-label="Brand story" className="relative min-h-[80vh] flex items-end bg-bg-base overflow-hidden">
        <Image
          src="/gallery/product-11.jpg"
          alt="Apex Floorings — branded hard hat on colour tile range"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(14,14,14,0.95) 0%, rgba(14,14,14,0.55) 45%, rgba(14,14,14,0.15) 100%)' }}
        />
        <div className="relative z-10 px-6 md:px-14 pb-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[10px] text-white/60 tracking-[3px] uppercase font-medium">About Apex Floorings</span>
          </div>
          <h1 className="font-jost text-[48px] md:text-[68px] font-semibold leading-[1.05] text-white tracking-[0.5px] uppercase mb-6">
            Built on quality.<br />Grounded in excellence.
          </h1>
          <p className="font-jost text-[17px] md:text-[19px] font-light text-white/75 leading-[1.8] max-w-2xl">
            Nigeria&apos;s leading modular flooring company. We transform commercial and outdoor spaces with tile solutions built to perform under real-world conditions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Stats" className="bg-accent px-6 md:px-14 py-6">
        <div className="grid grid-cols-3 gap-px bg-on-accent/10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-accent px-6 py-4 text-center">
              <p className="font-jost text-[36px] md:text-[44px] font-bold text-on-accent leading-none">{value}</p>
              <p className="font-jost text-[10px] font-medium text-on-accent/70 tracking-[2px] uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are + Our Story */}
      <section aria-label="Our story" className="bg-bg-base px-6 md:px-14 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[10px] text-white/50 tracking-[3px] uppercase">Who We Are</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[36px] font-semibold text-white tracking-[0.5px] uppercase leading-[1.1] mb-6">
            A subsidiary of Apex Group
          </h2>
          <p className="font-jost text-[16px] font-light text-white/70 leading-[1.9] mb-5">
            Apex Floorings is a Lagos-based premium modular flooring company. We help businesses transform commercial and outdoor spaces with durable, great-looking tile solutions, from car wash bays and auto dealerships to driveways and recreational areas.
          </p>
          <p className="font-jost text-[16px] font-light text-white/70 leading-[1.9]">
            As a subsidiary of Apex Group, we deliver flooring that performs under real-world conditions, without the downtime or mess of traditional options. Every project we take on is backed by the same commitment to quality and speed.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[10px] text-white/50 tracking-[3px] uppercase">Our Story</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[36px] font-semibold text-white tracking-[0.5px] uppercase leading-[1.1] mb-6">
            Built for Nigerian conditions
          </h2>
          <p className="font-jost text-[16px] font-light text-white/70 leading-[1.9] mb-5">
            Nigerian businesses were tired of flooring that cracked, stained, or peeled, and repairs that caused costly shutdowns. So we introduced modular plastic flooring: fast to install, easy to maintain, and built to last.
          </p>
          <p className="font-jost text-[16px] font-light text-white/70 leading-[1.9]">
            Our tiles are engineered to handle heavy loads, harsh weather, oil spills and daily abuse — the kind of conditions traditional epoxy or ceramic simply cannot hold up against. We brought a better solution to the market, and businesses across Nigeria have noticed.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section aria-label="Why Apex" className="bg-bg-base px-6 md:px-14 pb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[10px] text-white/50 tracking-[3px] uppercase">Why Us</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[40px] font-semibold text-white tracking-[0.5px] uppercase leading-[1.1]">
            What sets us apart
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {WHY_US.map((item) => (
            <li key={item} className="bg-bg-base px-8 py-7 flex items-start gap-5">
              <div className="w-5 h-[2px] bg-accent flex-shrink-0 mt-[11px]" />
              <span className="font-jost text-[16px] font-light text-white/80 leading-[1.7]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA strip */}
      <section aria-label="Contact CTA" className="bg-accent px-6 md:px-14 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-col sm:flex-row gap-x-8 gap-y-1">
          <a href="tel:+2349032740765" className="font-jost text-[12px] font-semibold text-on-accent tracking-[1px] no-underline">
            +234 903 274 0765
          </a>
          <a href="tel:+2348085148898" className="font-jost text-[12px] font-semibold text-on-accent tracking-[1px] no-underline">
            +234 808 514 8898
          </a>
        </div>
        <Link
          href="/contact"
          className="font-jost text-[11px] font-bold text-on-accent tracking-[2px] uppercase no-underline"
        >
          GET IN TOUCH →
        </Link>
      </section>
    </>
  )
}
