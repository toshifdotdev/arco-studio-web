import { useState } from 'react'
import { COMPANY } from '../data/company'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [opened, setOpened] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    const sub = encodeURIComponent(form.subject || 'Enquiry from website')
    window.location.href = `mailto:${COMPANY.email}?subject=${sub}&body=${body}`
    setOpened(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-[9px] uppercase tracking-[0.3em] text-accent md:text-[10px]">Contact</p>
      <h1 className="mt-4 font-serif text-4xl text-brand-50 md:text-6xl">Get In Touch</h1>
      <p className="mt-4 max-w-3xl text-brand-300">
        We'd love to hear about your project. Reach out and let's start a conversation.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <form onSubmit={submit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              required
              type="text"
              name="name"
              autoComplete="name"
              aria-label="Your Name"
              maxLength={100}
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-brand-700/60 bg-brand-800/40 px-4 py-3 text-brand-50 placeholder-brand-400 outline-none focus:border-accent"
            />
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              aria-label="Your Email"
              maxLength={120}
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-brand-700/60 bg-brand-800/40 px-4 py-3 text-brand-50 placeholder-brand-400 outline-none focus:border-accent"
            />
          </div>
          <input
            type="text"
            name="subject"
            aria-label="Subject"
            maxLength={150}
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full border border-brand-700/60 bg-brand-800/40 px-4 py-3 text-brand-50 placeholder-brand-400 outline-none focus:border-accent"
          />
          <textarea
            required
            rows={6}
            name="message"
            aria-label="Message"
            maxLength={2000}
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-brand-700/60 bg-brand-800/40 px-4 py-3 text-brand-50 placeholder-brand-400 outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-brand-900 transition hover:bg-accentDark"
          >
            Send Message
          </button>
          {opened && (
            <p className="text-sm leading-relaxed text-brand-300">
              Opening your email app with the message ready to send. Didn’t open?{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
                Email us directly
              </a>
              .
            </p>
          )}
        </form>

        <div className="space-y-6">
          <ul className="space-y-4 text-brand-300">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-accent" />
              <a
                href={COMPANY.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-accent"
              >
                {COMPANY.address}
              </a>
            </li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-accent" /> {COMPANY.phone}</li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-accent" /> {COMPANY.email}</li>
            <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-accent" /> {COMPANY.hours}</li>
          </ul>
          <div>
            <div className="aspect-video w-full overflow-hidden border border-brand-700/60">
              <iframe
                title="ARCO STUDIO location on Google Maps"
                src="https://www.google.com/maps?q=30.3031352,78.0526562&hl=en&z=17&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 text-right">
              <a
                href={COMPANY.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent transition hover:underline"
              >
                Get Directions on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
