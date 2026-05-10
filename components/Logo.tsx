import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  /** Use the white mark on dark backgrounds (default), black mark on light backgrounds */
  variant?: 'white' | 'black'
}

export default function Logo({ variant = 'white' }: LogoProps) {
  const src = variant === 'white' ? '/logo-white.png' : '/logo-black.png'
  const apexColor = variant === 'white' ? 'text-white' : 'text-on-accent'
  const flooringsColor = variant === 'white' ? 'text-accent' : 'text-on-accent'

  return (
    <Link href="/" className="flex items-center gap-3 no-underline">
      <Image
        src={src}
        alt="Apex Floorings"
        width={44}
        height={44}
        className="object-contain flex-shrink-0"
        priority
      />
      <div className="flex flex-col">
        <span className={`font-bebas text-[22px] tracking-[3px] block leading-none ${apexColor}`}>APEX</span>
        <span className={`font-jost text-[9px] tracking-[4px] uppercase font-medium block ${flooringsColor}`}>FLOORINGS</span>
      </div>
    </Link>
  )
}
