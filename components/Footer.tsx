import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home',    href: '/'        },
  { label: 'About',   href: '/about'   },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-white/10 px-6 md:px-14 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-1 h-9 bg-accent flex-shrink-0" />
            <div>
              <span className="font-bebas text-[22px] text-white tracking-[3px] block leading-none">APEX</span>
              <span className="font-jost text-[9px] text-accent tracking-[4px] uppercase font-medium block">FLOORINGS</span>
            </div>
          </div>
          <p className="font-jost text-[11px] text-white/40 tracking-[1px] uppercase max-w-[200px]">
            Premium interlocking tile flooring across Nigeria.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <span className="font-jost text-[9px] text-white/40 tracking-[2px] uppercase">Navigation</span>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className="font-jost text-[11px] text-white/55 hover:text-accent tracking-[1px] no-underline transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-3">
          <span className="font-jost text-[9px] text-white/40 tracking-[2px] uppercase">Locations</span>
          {['Lagos', 'Abuja', 'Port Harcourt'].map((city) => (
            <span key={city} className="font-jost text-[11px] text-white/55 tracking-[1px]">{city}</span>
          ))}
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/[0.06]">
        <span className="font-jost text-[9px] text-white/40 tracking-[1px]">
          © {new Date().getFullYear()} Apex Floorings. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
