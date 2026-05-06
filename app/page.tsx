import Nav from '@/components/Nav'
import HeroSlider from '@/components/HeroSlider'
import BottomStrip from '@/components/BottomStrip'

export const metadata = {
  title: 'Apex Floorings — Premium Interlocking Tile Flooring Nigeria',
}

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex flex-col bg-bg-base overflow-hidden">
      <div className="flex-1 relative min-h-0">
        <Nav variant="overlay" />
        <HeroSlider />
      </div>
      <BottomStrip />
    </main>
  )
}
