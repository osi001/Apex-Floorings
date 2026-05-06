'use client'
import { useState } from 'react'

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full bg-transparent border border-white/20 font-jost text-[12px] text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-accent transition-colors'
const labelClass = 'font-jost text-[10px] text-white/50 tracking-[2px] uppercase block mb-2'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const data = new FormData(e.currentTarget)
    data.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-12 text-center">
        <div className="w-12 h-1 bg-accent mx-auto mb-6" />
        <p className="font-jost text-[14px] text-white tracking-[1px] uppercase">Message sent</p>
        <p className="font-jost text-[12px] text-white/50 mt-2">We&apos;ll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className={labelClass}>Full Name</label>
        <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number <span className="text-white/30 normal-case tracking-normal">(optional)</span></label>
        <input id="phone" name="phone" type="tel" placeholder="+234 800 000 0000" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="font-jost text-[11px] text-red-400 tracking-[1px]">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-accent text-on-accent font-jost text-[11px] font-bold tracking-[2px] uppercase py-4 disabled:opacity-60"
      >
        {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  )
}
