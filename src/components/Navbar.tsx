import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { COMPANY } from '../data/company'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-brand-700/60 bg-brand-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2 leading-none">
          <span className="font-serif text-3xl tracking-[0.2em] text-brand-50">ARCO</span>
          <span className="text-base uppercase tracking-[0.35em] text-accent">Studio</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `text-sm uppercase tracking-widest transition ${
                  isActive ? 'text-accent' : 'text-brand-200 hover:text-brand-50'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-brand-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-brand-700/60 bg-brand-900 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm uppercase tracking-widest ${isActive ? 'text-accent' : 'text-brand-200'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
      <span className="sr-only">{COMPANY.name}</span>
    </header>
  )
}
