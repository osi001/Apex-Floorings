import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Apex Floorings. Chat on WhatsApp, send us a message, or visit us in Lagos, Abuja, or Port Harcourt.',
}

const WHATSAPP_NUMBER = 'REPLACE_WITH_NUMBER'
const EMAIL_ADDRESSES = ['info@apexfloorings.ng'] // Replace with actual email(s)
const PHONE_NUMBERS   = ['+234 800 000 0000']      // Replace with actual number(s)

export default function ContactPage() {
  return (
    <>
      {/* Section 1 — Hero Banner */}
      <section aria-label="Contact hero" className="bg-bg-base px-6 md:px-14 flex items-end pb-14" style={{ height: 280 }}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="font-jost text-[9px] text-white/50 tracking-[3px] uppercase">Get in touch</span>
          </div>
          <h1 className="font-jost text-[36px] md:text-[48px] font-normal text-white tracking-[0.5px] uppercase leading-[1.1]">
            Let's work together
          </h1>
          <p className="font-jost text-[13px] font-light text-white/55 mt-3">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Section 2 — Form + Details */}
      <section aria-label="Contact details" className="bg-bg-base px-6 md:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — Form */}
          <div>
            <h2 className="font-jost text-[13px] font-medium text-white tracking-[3px] uppercase mb-8">
              Send a message
            </h2>
            <ContactForm />
          </div>

          {/* Right — Contact details */}
          <div className="flex flex-col gap-10">
            {/* WhatsApp CTA */}
            <div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-on-accent font-jost text-[11px] font-bold tracking-[2px] uppercase px-8 py-4 no-underline w-full justify-center md:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                CHAT ON WHATSAPP
              </a>
              <p className="font-jost text-[11px] text-white/40 mt-3 tracking-[1px]">{WHATSAPP_NUMBER}</p>
            </div>

            {/* Email */}
            <div>
              <span className="font-jost text-[9px] text-white/40 tracking-[2px] uppercase block mb-3">Email</span>
              {EMAIL_ADDRESSES.map((email) => (
                <a key={email} href={`mailto:${email}`} className="font-jost text-[12px] text-white/70 hover:text-accent no-underline block transition-colors">
                  {email}
                </a>
              ))}
            </div>

            {/* Phone */}
            <div>
              <span className="font-jost text-[9px] text-white/40 tracking-[2px] uppercase block mb-3">Phone</span>
              {PHONE_NUMBERS.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="font-jost text-[12px] text-white/70 hover:text-accent no-underline block transition-colors">
                  {phone}
                </a>
              ))}
            </div>

            {/* Locations */}
            <div>
              <span className="font-jost text-[9px] text-white/40 tracking-[2px] uppercase block mb-3">Locations</span>
              {['Lagos', 'Abuja', 'Port Harcourt'].map((city) => (
                <span key={city} className="font-jost text-[12px] text-white/55 block leading-[2]">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Google Map embed */}
      {/* Replace the src with the actual Google Maps embed URL for the client's address */}
      <div className="w-full h-[400px] bg-[#1a1a1a]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4631924773!2d3.1191131!3d6.5480356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) invert(0.9) brightness(0.7)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Apex Floorings location"
        />
      </div>
    </>
  )
}
