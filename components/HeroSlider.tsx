'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SLIDES } from '@/lib/slides'

const INTERVAL = 5500

export default function HeroSlider() {
  const [idx, setIdx] = useState(0)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), INTERVAL)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIdx((i) => (i + 1) % SLIDES.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <section
      aria-label="Hero slider"
      className="absolute inset-0 overflow-hidden bg-bg-base"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Photo stack */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.img}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === idx ? 1 : 0, zIndex: 1 }}
        >
          <Image
            src={slide.img}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to top, rgba(14,14,14,0.92) 0%, rgba(14,14,14,0.5) 28%, rgba(14,14,14,0) 55%)',
        }}
      />

      {/* Bottom text overlay */}
      <div
        className="absolute flex items-end justify-between gap-10"
        style={{ left: 56, right: 56, bottom: 60, zIndex: 10 }}
      >
        {/* Left — animated per-slide content */}
        <div className="relative flex-1 max-w-[820px]">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.img}
              style={{
                position: i === idx ? 'relative' : 'absolute',
                top: 0, left: 0, right: 0,
                opacity: i === idx ? 1 : 0,
                transform: i === idx ? 'translateY(0)' : 'translateY(16px)',
                pointerEvents: i === idx ? 'auto' : 'none',
                transition: i === idx
                  ? 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s'
                  : 'opacity 0.7s ease 0s, transform 0.7s ease 0s',
              }}
            >
              <div className="flex items-center gap-[10px] mb-3">
                <div className="w-5 h-px bg-white/50" />
                <span className="font-jost text-[10px] text-white/90 tracking-[3px] font-semibold">
                  {slide.eyebrow}
                </span>
              </div>
              <h1 className="font-jost text-[32px] leading-[1.15] text-white tracking-[0.2px] mb-[10px] font-normal">
                {slide.headline}
              </h1>
              <p className="font-jost text-[12px] text-white/55 leading-[1.65] max-w-[480px] font-light tracking-[0.2px]">
                {slide.sub}
              </p>
            </div>
          ))}

          {/* Static CTAs */}
          <div className="flex gap-[10px] mt-[22px]">
            <Link
              href="/gallery"
              className="font-jost text-[10px] font-semibold bg-accent text-on-accent px-[26px] py-3 tracking-[2px] uppercase no-underline"
            >
              VIEW PRODUCTS
            </Link>
            <Link
              href="/gallery"
              className="font-jost text-[10px] font-normal text-white border border-white/25 px-6 py-3 tracking-[2px] uppercase no-underline"
            >
              OUR WORK →
            </Link>
          </div>
        </div>

        {/* Right — arrows + counter + dots */}
        <div className="flex flex-col items-end gap-[14px] flex-shrink-0">
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-[38px] h-[38px] font-jost text-sm text-white border border-white/30 bg-transparent flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-[38px] h-[38px] font-jost text-sm font-bold text-on-accent bg-accent border-0 flex items-center justify-center"
            >
              →
            </button>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="font-jost text-[11px] text-white/70 tracking-[1px] font-normal">
              {String(idx + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </span>
            <div className="flex gap-[5px]">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.img}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === idx ? true : undefined}
                  className="h-[2px] border-0 cursor-pointer p-0 transition-all duration-300 ease-in-out"
                  style={{
                    width: i === idx ? 22 : 10,
                    background: i === idx ? '#CFDB30' : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
