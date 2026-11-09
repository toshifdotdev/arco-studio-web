import { COMPANY, EXPERTISE, FOUNDERS } from '../data/company'

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.4em] text-accent">About Us</p>
      <h1 className="mt-4 font-serif text-3xl text-brand-50 md:text-5xl">ARCO STUDIO</h1>
      <p className="mt-2 text-brand-300">Architecture Consultancy &amp; Engineering Services</p>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-brand-50 md:text-4xl">Our Story</h2>
          <p className="mt-6 leading-relaxed text-brand-300">
            ARCO STUDIO is a dynamic and innovative architectural firm based at Laxmi Road, Nehru
            Colony, Dehradun, Uttarakhand. Founded in {COMPANY.founded} by {COMPANY.almaMater} alumni
            {' '}Mohammad Aneesh and Sudha Dabral, we are dedicated to transforming spaces with
            creativity, structural precision, and adherence to {COMPANY.council} standards. Our
            expertise spans across residential, commercial, housing, interior design, and
            institutional projects across Uttarakhand.
          </p>
          <p className="mt-5 leading-relaxed text-brand-300">
            At ARCO STUDIO, the value of our work stems from its positive impact on the human
            experience. We are a dynamic and collaborative design firm uniting creativity, research and
            innovation to solve complex problems for our clients. Our work challenges conventional ideas
            about architecture and the built environment. We aren't just designing buildings — we are
            reimagining spaces that make a difference in people's lives.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/projects/project-20.jpg"
            alt="ARCO STUDIO residential architecture project in Dehradun, Uttarakhand"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
          <img
            src="/projects/project-11.jpg"
            alt="Commercial and interior architectural design by ARCO STUDIO, Nehru Colony, Dehradun"
            loading="lazy"
            className="mt-8 aspect-[3/4] w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-24 grid gap-8 border-y border-brand-700/60 py-16 md:grid-cols-4">
        {[
          { value: COMPANY.founded.toString(), label: 'Year Founded' },
          { value: COMPANY.teamSize.toString(), label: 'Professionals' },
          { value: COMPANY.clients, label: 'Clients Served' },
          { value: 'Uttarakhand', label: 'Region' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-4xl text-accent">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-brand-300">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="font-serif text-3xl text-brand-50 md:text-4xl">Our Mission</h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-brand-300">
          Everything we do is guided by our mission: to create better spaces through the power of
          design. Everything we do is guided by research, innovation and a deep commitment to the
          human experience.
        </p>
        <h3 className="mt-10 text-sm uppercase tracking-widest text-brand-100">Areas of expertise</h3>
        <ul className="mt-4 flex flex-wrap gap-3">
          {EXPERTISE.map((e) => (
            <li key={e} className="border border-brand-700/60 px-4 py-2 text-sm text-brand-200">{e}</li>
          ))}
        </ul>
      </div>

      <div className="mt-24">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">Leadership</p>
        <h2 className="mt-4 font-serif text-3xl text-brand-50 md:text-4xl">Our Founders</h2>
        <div className="mt-12 grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="order-1 flex flex-col items-center text-center md:order-1">
            <div className="h-56 w-44 overflow-hidden border border-brand-700/60">
              <img
                src={FOUNDERS[0].image}
                alt={`${FOUNDERS[0].name} — ${FOUNDERS[0].role} at ARCO STUDIO, Dehradun (${FOUNDERS[0].credentials})`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-serif text-xl text-brand-50">{FOUNDERS[0].name}</h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-accent">{FOUNDERS[0].role}</p>
            <p className="mt-1 text-[11px] text-brand-400">{FOUNDERS[0].credentials}</p>
          </div>
          <figure className="order-2 md:order-2">
            <div className="font-serif text-5xl leading-none text-accent">&ldquo;</div>
            <blockquote className="mt-2 font-serif text-lg italic leading-relaxed text-brand-200 md:text-xl">
              {FOUNDERS[0].quote}
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">&mdash; {FOUNDERS[0].name}</figcaption>
          </figure>
          <figure className="order-4 md:order-3 md:text-right">
            <div className="font-serif text-5xl leading-none text-accent">&ldquo;</div>
            <blockquote className="mt-2 font-serif text-lg italic leading-relaxed text-brand-200 md:text-xl">
              {FOUNDERS[1].quote}
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">&mdash; {FOUNDERS[1].name}</figcaption>
          </figure>
          <div className="order-3 flex flex-col items-center text-center md:order-4">
            <div className="h-56 w-44 overflow-hidden border border-brand-700/60">
              <img
                src={FOUNDERS[1].image}
                alt={`${FOUNDERS[1].name} — ${FOUNDERS[1].role} at ARCO STUDIO, Dehradun (${FOUNDERS[1].credentials})`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-serif text-xl text-brand-50">{FOUNDERS[1].name}</h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-accent">{FOUNDERS[1].role}</p>
            <p className="mt-1 text-[11px] text-brand-400">{FOUNDERS[1].credentials}</p>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-serif text-3xl text-brand-50 md:text-4xl">Team</h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-brand-300">
          ARCO STUDIO has built a team of {COMPANY.teamSize} professionals at our Nehru Colony,
          Dehradun studio who have designed the dream projects of more than 100 clients across
          Uttarakhand.
        </p>
      </div>
    </div>
  )
}
