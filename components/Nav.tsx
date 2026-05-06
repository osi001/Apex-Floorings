import Link from 'next/link'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'

interface NavProps {
  variant?: 'overlay' | 'solid'
}

export default function Nav({ variant = 'solid' }: NavProps) {
  const isOverlay = variant === 'overlay'
  return (
    <nav
      className={`h-[76px] flex items-center justify-between px-6 md:px-14 z-30 ${
        isOverlay
          ? 'absolute top-0 left-0 right-0 bg-gradient-to-b from-[rgba(14,14,14,0.85)] to-transparent'
          : 'sticky top-0 bg-bg-base border-b border-white/[0.08]'
      }`}
    >
      <Link href="/" className="flex items-center gap-3 no-underline">
        {/* Replace the div below with <Image src="/logo.svg" ... /> once logo is provided */}
        <div className="w-1 h-9 bg-accent flex-shrink-0" />
        <div>
          <span className="font-bebas text-[22px] text-white tracking-[3px] block leading-none">APEX</span>
          <span className="font-jost text-[9px] text-accent tracking-[4px] uppercase font-medium block">FLOORINGS</span>
        </div>
      </Link>

      <NavLinks />

      <Link
        href="/contact"
        className="hidden md:block font-jost text-[11px] font-bold bg-accent text-on-accent px-6 py-[11px] tracking-[2px] uppercase no-underline"
      >
        GET A QUOTE
      </Link>

      <MobileNav />
    </nav>
  )
}
