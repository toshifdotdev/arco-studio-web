import { useSearchParams } from 'react-router-dom'
import { PROJECTS, CATEGORIES } from '../data/company'

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const param = searchParams.get('category')
  const active = param && CATEGORIES.includes(param) ? param : 'All'
  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  const select = (c: string) => {
    setSearchParams(c === 'All' ? {} : { category: c }, { replace: true })
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-[9px] uppercase tracking-[0.3em] text-accent md:text-[10px]">Portfolio</p>
      <h1 className="mt-4 font-serif text-4xl text-brand-50 md:text-6xl">Our Projects</h1>
      <p className="mt-4 max-w-3xl text-brand-300">
        A selection of residential, commercial, interior, institutional and housing projects designed by ARCO STUDIO.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => select(c)}
            className={`border px-5 py-2 text-xs uppercase tracking-widest transition ${
              active === c
                ? 'border-accent bg-accent text-brand-900'
                : 'border-brand-700/60 text-brand-200 hover:border-accent hover:text-accent'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.id} className="group relative overflow-hidden border border-brand-700/60">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name} — ${p.category} design by ARCO STUDIO, Dehradun, Uttarakhand`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="border-t border-brand-700/60 bg-brand-900 p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.category}</p>
              <h3 className="mt-1 font-serif text-lg text-brand-50">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
