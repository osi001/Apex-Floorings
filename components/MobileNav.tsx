'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { label: 'HOME',    href: '/'        },
  { label: 'ABOUT',   href: '/about'   },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'CONTACT', href: '/contact' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="text-white w-10 h-10 flex flex-col justify-center gap-[5px]"
      >
        <span className={`block h-px bg-white w-6 transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block h-px bg-white w-6 transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-px bg-white w-6 transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-bg-base z-50 flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-white text-3xl leading-none"
          >
            ×
          </button>
          {LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-jost text-2xl font-medium tracking-[4px] uppercase ${
                pathname === href ? 'text-accent' : 'text-white/65'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-jost text-sm font-bold bg-accent text-on-accent px-8 py-3 tracking-[2px] uppercase mt-4"
          >
            GET A QUOTE
          </Link>
        </div>
      )}
    </div>
  )
}
