import { render, screen, fireEvent } from '@testing-library/react'
import Lightbox from '@/components/Lightbox'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}))

const IMAGES = [
  { src: '/a.jpg', alt: 'Image 1' },
  { src: '/b.jpg', alt: 'Image 2' },
  { src: '/c.jpg', alt: 'Image 3' },
]

describe('Lightbox', () => {
  it('displays the image at initialIndex', () => {
    render(<Lightbox images={IMAGES} initialIndex={1} onClose={jest.fn()} />)
    expect(screen.getByAltText('Image 2')).toBeInTheDocument()
  })

  it('advances to next image on next button click', () => {
    render(<Lightbox images={IMAGES} initialIndex={0} onClose={jest.fn()} />)
    fireEvent.click(screen.getByLabelText('Next image'))
    expect(screen.getByAltText('Image 2')).toBeInTheDocument()
  })

  it('goes to previous image on prev button click', () => {
    render(<Lightbox images={IMAGES} initialIndex={1} onClose={jest.fn()} />)
    fireEvent.click(screen.getByLabelText('Previous image'))
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('calls onClose when Escape key is pressed', () => {
    const onClose = jest.fn()
    render(<Lightbox images={IMAGES} initialIndex={0} onClose={onClose} />)
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('wraps to first image when next is clicked on last image', () => {
    render(<Lightbox images={IMAGES} initialIndex={2} onClose={jest.fn()} />)
    fireEvent.click(screen.getByLabelText('Next image'))
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })
})
