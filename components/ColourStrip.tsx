'use client'
import { useState } from 'react'
import { TILES } from '@/lib/tiles'

export default function ColourStrip() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="flex w-full h-16">
      {TILES.map((tile, i) => (
        <div
          key={tile.label}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onClick={() => setActive(active === i ? null : i)}
          className="overflow-hidden flex items-end justify-center pb-[10px] cursor-pointer"
          style={{
            flex: active === i ? 3 : 1,
            background: tile.color,
            transition: 'flex 0.35s ease',
          }}
        >
          <span
            className="font-jost text-[9px] font-bold tracking-[2px] uppercase whitespace-nowrap transition-opacity duration-200"
            style={{
              color: tile.textColor,
              opacity: active === i ? 1 : 0,
            }}
          >
            {tile.label}
          </span>
        </div>
      ))}
    </div>
  )
}
