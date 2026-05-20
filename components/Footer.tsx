import Link from 'next/link'
import Logo from './Logo'
import { NAV_LINKS } from '@/lib/nav-links'

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-white/10 px-6 md:px-14 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="font-jost text-[11px] text-white/40 tracking-[1px] uppercase max-w-[200px]">
            Premium interlocking tile flooring across Nigeria.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <span className="font-jost text-[9px] text-white/40 tracking-[2px] uppercase">Navigation</span>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className="font-jost text-[11px] text-white/55 hover:text-accent tracking-[1px] no-underline transition-colors">
              {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
            </Link>
          ))}
        </div>

        {/* Coverage */}
        <div className="flex flex-col gap-3">
          <span className="font-jost text-[9px] text-white/40 tracking-[2px] uppercase">Coverage</span>
          <span className="font-jost text-[11px] text-white/55 tracking-[1px]">Available nationwide</span>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <span className="font-jost text-[9px] text-white/40 tracking-[2px] uppercase">Follow Us</span>
          <a
            href="https://www.instagram.com/apexfloorings.ng?igsh=cHRjYXJibWVsdDNo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/[0.06] hover:bg-accent hover:text-on-accent border border-white/10 px-4 py-3 text-white no-underline transition-all duration-200 group w-fit"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="font-jost text-[11px] font-semibold tracking-[2px] uppercase">@apexfloorings.ng</span>
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/[0.06]">
        <span className="font-jost text-[9px] text-white/40 tracking-[1px] font-normal">
          © {new Date().getFullYear()} Apex Floorings. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
