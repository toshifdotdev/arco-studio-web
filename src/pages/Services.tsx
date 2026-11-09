import { SERVICES } from '../data/company'

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-[9px] uppercase tracking-[0.3em] text-accent md:text-[10px]">Services</p>
      <h1 className="mt-4 font-serif text-4xl text-brand-50 md:text-6xl">What We Do</h1>
      <p className="mt-4 max-w-3xl text-brand-300">
        ARCO STUDIO has expertise and experience in a wide range of areas including residential,
        commercial, retail, educational, housing, institutional and interior design projects.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {SERVICES.map((s, i) => {
          const Icon = s.icon
          return (
            <div
              key={s.id}
              className="group flex gap-6 border border-brand-700/60 bg-brand-800/40 p-8 transition hover:border-accent"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-brand-600 text-accent transition group-hover:border-accent">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs text-brand-400">0{i + 1}</span>
                <h2 className="mt-1 font-serif text-2xl text-brand-50">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-brand-300">{s.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-24 border border-brand-700/60 p-10">
        <h2 className="font-serif text-4xl text-brand-50 md:text-5xl">Our approach</h2>
        <p className="mt-4 leading-relaxed text-brand-300">
          We approach each project with a deep understanding of our clients' needs and a commitment to
          sustainability. Our design approach differs for every project and is governed by budget,
          physical and cultural context, client need and desires, environmental considerations, and the
          relevant Council Development Plan requirements.
        </p>
      </div>
    </div>
  )
}
