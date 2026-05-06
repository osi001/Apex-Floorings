import Link from 'next/link'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import Logo from './Logo'

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
      <Logo />

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
