import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0E0E0E',
        accent: '#CFDB30',
        'on-accent': '#111111',
        'tile-red': '#E8453C',
        'tile-blue': '#3B7FE8',
        'tile-pink': '#E83AAE',
        'tile-grey': '#9B9B9B',
        'tile-yellow': '#CFDB30',
        'tile-black': '#1C1C1C',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
