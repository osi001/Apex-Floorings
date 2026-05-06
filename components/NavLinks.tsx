'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { label: 'HOME',    href: '/'        },
  { label: 'ABOUT',   href: '/about'   },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'CONTACT', href: '/contact' },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <div className="hidden md:flex gap-9">
      {LINKS.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`font-jost text-[11px] font-medium tracking-[2px] uppercase no-underline transition-colors duration-150 ${
            pathname === href ? 'text-accent' : 'text-white/65 hover:text-accent'
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
