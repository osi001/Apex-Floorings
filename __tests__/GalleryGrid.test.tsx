import { render, screen, fireEvent } from '@testing-library/react'
import GalleryGrid from '@/components/GalleryGrid'
import type { GalleryImage } from '@/lib/gallery'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}))

const IMAGES: GalleryImage[] = [
  { src: '/a.jpg', alt: 'Residential 1', category: 'residential' },
  { src: '/b.jpg', alt: 'Commercial 1',  category: 'commercial'  },
  { src: '/c.jpg', alt: 'Sports 1',      category: 'sports'      },
  { src: '/d.jpg', alt: 'Residential 2', category: 'residential' },
]

describe('GalleryGrid', () => {
  it('shows all images when ALL is active', () => {
    render(<GalleryGrid images={IMAGES} />)
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })

  it('filters to matching category on tab click', () => {
    render(<GalleryGrid images={IMAGES} />)
    fireEvent.click(screen.getByRole('button', { name: /^residential$/i }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.queryByAltText('Commercial 1')).not.toBeInTheDocument()
  })

  it('resets to all images when ALL is clicked after filtering', () => {
    render(<GalleryGrid images={IMAGES} />)
    fireEvent.click(screen.getByRole('button', { name: /^residential$/i }))
    fireEvent.click(screen.getByRole('button', { name: /^all$/i }))
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })

  it('opens lightbox when an image is clicked', () => {
    render(<GalleryGrid images={IMAGES} />)
    fireEvent.click(screen.getAllByRole('img')[0])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
