'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LightboxProps {
  images: { src: string; alt: string }[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [idx, setIdx] = useState(initialIndex)

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[idx].src}
          alt={images[idx].alt}
          width={1280}
          height={800}
          className="object-contain w-full max-h-[80vh]"
        />

        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 text-white border border-white/30 flex items-center justify-center font-jost text-sm"
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-accent text-on-accent flex items-center justify-center font-jost text-sm font-bold"
        >
          →
        </button>

        <div className="absolute bottom-[-36px] left-0 font-jost text-[11px] text-white/50 tracking-[1px]">
          {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>

        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-0 right-[-48px] w-10 h-10 text-white/60 hover:text-white font-jost text-xl flex items-center justify-center"
        >
          ×
        </button>
      </div>
    </div>
  )
}
