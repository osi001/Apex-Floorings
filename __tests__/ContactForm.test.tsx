import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from '@/components/ContactForm'

global.fetch = jest.fn()

describe('ContactForm', () => {
  beforeEach(() => { (global.fetch as jest.Mock).mockReset() })

  it('renders all required fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('shows SENDING on submit button while request is in-flight', async () => {
    let resolve!: (v: Response) => void
    ;(global.fetch as jest.Mock).mockReturnValueOnce(new Promise((r) => { resolve = r }))

    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText(/full name/i),      { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText(/email address/i),  { target: { value: 'ada@test.com' } })
    fireEvent.change(screen.getByLabelText(/message/i),        { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    expect(await screen.findByRole('button', { name: /sending/i })).toBeDisabled()
    resolve({ ok: true } as Response)
  })

  it('shows success confirmation after ok response', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })

    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText(/full name/i),      { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText(/email address/i),  { target: { value: 'ada@test.com' } })
    fireEvent.change(screen.getByLabelText(/message/i),        { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })
  })

  it('shows error message on non-ok response', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false })

    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText(/full name/i),      { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText(/email address/i),  { target: { value: 'ada@test.com' } })
    fireEvent.change(screen.getByLabelText(/message/i),        { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })
})
