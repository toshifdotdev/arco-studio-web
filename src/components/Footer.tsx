import { Link } from 'react-router-dom'
import { COMPANY } from '../data/company'
import { Mail, Phone, MapPin } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-700/60 bg-brand-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <img src="/favicon.png" alt="ARCO STUDIO logo" className="h-12 w-12 rounded-md border border-brand-700/60 object-cover" />
            <div>
              <div className="font-serif text-3xl tracking-[0.25em] text-brand-50">ARCO</div>
              <div className="mt-1 text-xs uppercase tracking-[0.4em] text-accent">Studio</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-300">
            {COMPANY.subtitle}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-brand-100">Explore</h3>
          <ul className="space-y-2 text-sm text-brand-300">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-brand-100">Contact</h3>
          <address className="not-italic">
            <ul className="space-y-3 text-sm text-brand-300">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={COMPANY.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-accent"
                >
                  {COMPANY.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>
                  <a href="tel:+917409265567" className="hover:text-accent">+91 7409265567</a>
                  {', '}
                  <a href="tel:+919870803156" className="hover:text-accent">+91 9870803156</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-accent">{COMPANY.email}</a>
              </li>
            </ul>
          </address>
        </div>
      </div>
      <div className="border-t border-brand-700/40 px-6 py-6 text-center text-xs text-brand-400">
        © {CURRENT_YEAR} ARCO STUDIO. Founded {COMPANY.founded}. All rights reserved.
      </div>
    </footer>
  )
}
