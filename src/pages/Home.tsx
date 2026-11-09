import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { COMPANY, SERVICES, FEATURED_PROJECTS } from '../data/company'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate min-h-[90vh] overflow-hidden">
        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[0.4em] text-accent"
            >
              Architecture Consultancy &amp; Engineering Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 font-serif text-3xl leading-[1.05] text-brand-50 md:text-5xl"
            >
              {COMPANY.tagline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-brand-200"
            >
              {COMPANY.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-brand-900 transition hover:bg-accentDark"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-brand-100/40 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-brand-50 transition hover:border-accent hover:text-accent"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="relative hidden aspect-[4/3] overflow-hidden border border-brand-600/50 md:block"
          >
            <img
              src="/projects/project-25.jpg"
              alt="ARCO STUDIO architectural design project in Dehradun, Uttarakhand"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-accent/30" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-brand-700/60 bg-brand-800">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-brand-700/40 md:grid-cols-4">
          {[
            { value: COMPANY.founded.toString(), label: 'Founded' },
            { value: COMPANY.teamSize.toString(), label: 'Professionals' },
            { value: COMPANY.clients, label: 'Clients' },
            { value: '200+', label: 'Projects' },
          ].map((s) => (
            <div key={s.label} className="bg-brand-800 px-6 py-10 text-center">
              <div className="font-serif text-4xl text-accent">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-brand-300">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">About ARCO</p>
            <h2 className="mt-4 font-serif text-3xl text-brand-50 md:text-4xl">
              We aren't just designing buildings — we are reimagining spaces.
            </h2>
            <p className="mt-6 leading-relaxed text-brand-300">
              ARCO STUDIO is a dynamic and collaborative design firm uniting creativity, research and
              innovation to solve complex problems for our clients. Our work challenges conventional ideas
              about architecture and the built environment.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/projects/project-19.jpg"
              alt="ARCO STUDIO residential and housing architecture in Nehru Colony, Dehradun, Uttarakhand"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-brand-800/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">What we do</p>
          <h2 className="mt-4 font-serif text-3xl text-brand-50 md:text-4xl">Our Expertise</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.id} className="group border border-brand-700/60 bg-brand-900 p-8 transition hover:border-accent">
                  <Icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-6 font-serif text-2xl text-brand-50">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-300 line-clamp-4">{s.description}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent hover:underline"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Selected works</p>
            <h2 className="mt-4 font-serif text-3xl text-brand-50 md:text-4xl">Featured Projects</h2>
          </div>
          <Link to="/projects" className="hidden text-sm uppercase tracking-widest text-accent hover:underline md:block">
            View all
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURED_PROJECTS.map((p) => (
            <Link key={p.id} to="/projects" className="group relative block aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name} — ${p.category} architecture project by ARCO STUDIO Dehradun`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.category}</p>
                <h3 className="mt-1 font-serif text-xl text-white">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
