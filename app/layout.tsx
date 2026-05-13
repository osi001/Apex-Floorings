import type { Metadata } from 'next'
import { Bebas_Neue, Jost } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://apexfloorings.ng'), // Replace with actual domain
  title: {
    default: 'Apex Floorings | Premium Interlocking Tile Flooring Nigeria',
    template: '%s | Apex Floorings',
  },
  description:
    'Premium interlocking tile flooring for residential, commercial, sports and industrial spaces. Expert installation available nationwide.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${jost.variable} bg-bg-base font-jost`}
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
