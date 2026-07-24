import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <Reveal>
          <p className="font-mark text-2xl text-clay mb-2 -rotate-1">Who we are</p>
          <h2 className="font-display text-4xl font-bold leading-tight">
            A painting crew that treats your home like a job site, not a sales lead.
          </h2>
        </Reveal>
      </div>
      <div className="md:col-span-8 text-ink/70 text-lg leading-relaxed space-y-4">
        <Reveal delay={0.1}>
          <p>
            Fastcan Painting is a Toronto-based crew built for people who don&rsquo;t have
            time to chase down a contractor. We quote fast, price the job before we pick
            up a brush, and staff every project with our own painters &mdash; not a rotating
            cast of subcontractors.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p>
            Homeowners call us for interiors, exteriors, and cabinet refinishing.
            Property managers call us when a unit needs to be repainted between tenants
            and every extra vacant day costs money. Either way, the process is the same:
            fast quote, fixed price, daily updates, done on the date we said.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
