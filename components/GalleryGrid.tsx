'use client'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'
import type { Category, GalleryImage } from '@/lib/gallery'

const FILTERS: { label: string; value: Category | 'all' }[] = [
  { label: 'ALL',         value: 'all'         },
  { label: 'RESIDENTIAL', value: 'residential' },
  { label: 'COMMERCIAL',  value: 'commercial'  },
  { label: 'SPORTS',      value: 'sports'      },
  { label: 'INDUSTRIAL',  value: 'industrial'  },
]

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [active, setActive] = useState<Category | 'all'>('all')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const visible = active === 'all' ? images : images.filter((img) => img.category === active)

  const closeLightbox = useCallback(() => setLightboxIdx(null), [])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter gallery by category">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            aria-pressed={active === value}
            className={`font-jost text-[10px] tracking-[2px] uppercase px-4 py-2 border transition-colors ${
              active === value
                ? 'bg-accent text-on-accent border-accent'
                : 'bg-transparent text-white/55 border-white/20 hover:text-white hover:border-white/40'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
        {visible.map((img) => (
          <div
            key={img.src}
            className="relative aspect-[4/3] overflow-hidden cursor-pointer group bg-bg-base"
            onClick={() => setLightboxIdx(images.indexOf(img))}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
              <span className="font-jost text-[9px] text-white tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIdx}
          onClose={closeLightbox}
        />
      )}
    </div>
  )
}
