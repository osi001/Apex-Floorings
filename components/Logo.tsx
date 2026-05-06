import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 no-underline">
      {/* Replace the div below with <Image src="/logo.svg" ... /> once logo is provided */}
      <div className="w-1 h-9 bg-accent flex-shrink-0" />
      <div>
        <span className="font-bebas text-[22px] text-white tracking-[3px] block leading-none">APEX</span>
        <span className="font-jost text-[9px] text-accent tracking-[4px] uppercase font-medium block">FLOORINGS</span>
      </div>
    </Link>
  )
}
