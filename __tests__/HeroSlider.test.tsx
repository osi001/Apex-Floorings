import { render, screen, act, fireEvent } from '@testing-library/react'
import HeroSlider from '@/components/HeroSlider'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...rest }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...rest} />
  ),
}))

describe('HeroSlider', () => {
  beforeEach(() => { jest.useFakeTimers() })
  afterEach(() => { jest.useRealTimers() })

  it('starts on slide 1 (dot 1 is aria-current)', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Go to slide 1')).toHaveAttribute('aria-current', 'true')
  })

  it('advances to slide 2 after 5500ms', () => {
    render(<HeroSlider />)
    act(() => { jest.advanceTimersByTime(5500) })
    expect(screen.getByLabelText('Go to slide 2')).toHaveAttribute('aria-current', 'true')
  })

  it('does not advance when paused (mouse over)', () => {
    render(<HeroSlider />)
    fireEvent.mouseEnter(screen.getByRole('region', { name: /hero/i }))
    act(() => { jest.advanceTimersByTime(5500) })
    expect(screen.getByLabelText('Go to slide 1')).toHaveAttribute('aria-current', 'true')
  })

  it('resumes advancing after mouse leaves', () => {
    render(<HeroSlider />)
    fireEvent.mouseEnter(screen.getByRole('region', { name: /hero/i }))
    act(() => { jest.advanceTimersByTime(5500) })
    fireEvent.mouseLeave(screen.getByRole('region', { name: /hero/i }))
    act(() => { jest.advanceTimersByTime(5500) })
    expect(screen.getByLabelText('Go to slide 2')).toHaveAttribute('aria-current', 'true')
  })

  it('navigates to next slide on next button click', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByLabelText('Next slide'))
    expect(screen.getByLabelText('Go to slide 2')).toHaveAttribute('aria-current', 'true')
  })

  it('wraps to last slide on prev from slide 1', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByLabelText('Go to slide 4')).toHaveAttribute('aria-current', 'true')
  })

  it('jumps to slide on dot click', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByLabelText('Go to slide 3'))
    expect(screen.getByLabelText('Go to slide 3')).toHaveAttribute('aria-current', 'true')
  })
})
