import type { Metadata } from 'next'
import Image from 'next/image'
import GalleryGrid from '@/components/GalleryGrid'
import ColourStrip from '@/components/ColourStrip'
import { GALLERY_IMAGES } from '@/lib/gallery'
import { APPLICATIONS } from '@/lib/applications'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our interlocking tile colour range and browse completed projects across residential, commercial, sports and industrial spaces.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Page heading */}
      <div className="bg-bg-base px-6 md:px-14 pt-16 pb-4">
        <h1 className="font-jost text-[36px] md:text-[48px] font-normal text-white tracking-[0.5px] uppercase">
          Gallery
        </h1>
      </div>

      {/* Section 1 — Colour Range */}
      <section aria-label="Colour range" className="bg-bg-base px-6 md:px-14 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[9px] text-white/50 tracking-[3px] uppercase">Our Product</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[36px] font-normal text-white tracking-[0.5px] uppercase">
            Our Colour Range
          </h2>
        </div>
        <ColourStrip />
      </section>

      {/* Section 2 — Applications */}
      <section aria-label="Applications" className="bg-bg-base px-6 md:px-14 pb-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[9px] text-white/50 tracking-[3px] uppercase">Applications</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[36px] font-normal text-white tracking-[0.5px] uppercase mb-4">
            Use Cases
          </h2>
          <p className="font-jost text-[12px] font-light text-white/50 leading-[1.7] max-w-[560px]">
            These are just a few of the spaces our tiles have transformed. If you can imagine it, we can floor it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
          {APPLICATIONS.map(({ label, body, category, img }) => (
            <div key={label} className="relative aspect-video overflow-hidden group bg-[#1a1a1a]">
              <Image
                src={img}
                alt={`${label} flooring`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="font-jost text-[9px] text-accent tracking-[3px] uppercase mb-2">{category}</span>
                <h3 className="font-jost text-[20px] font-normal text-white tracking-[0.5px] uppercase mb-3">{label}</h3>
                <p className="font-jost text-[12px] font-light text-white/60 leading-[1.7] max-w-[380px]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Project Gallery */}
      <section aria-label="Project gallery" className="bg-bg-base px-6 md:px-14 pb-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[9px] text-white/50 tracking-[3px] uppercase">Portfolio</span>
          </div>
          <h2 className="font-jost text-[28px] md:text-[36px] font-normal text-white tracking-[0.5px] uppercase">
            Our Work
          </h2>
        </div>
        <GalleryGrid images={GALLERY_IMAGES} />
      </section>
    </>
  )
}
