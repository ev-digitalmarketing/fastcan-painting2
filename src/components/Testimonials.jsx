import Reveal from "./Reveal";

const quotes = [
  {
    text: "Quoted our exterior on a Tuesday, started the following Monday, and they hit the finish date to the day. Nightly photo updates meant we never had to wonder what was happening.",
    name: "R. Nguyen",
    place: "Leslieville",
  },
  {
    text: "We manage a dozen rental units and Fastcan turns them around between tenants faster than anyone we've used. Fixed pricing per unit makes budgeting simple.",
    name: "D. Whitfield",
    place: "Property Manager",
  },
  {
    text: "Cabinet refinishing looked better than a full replacement quote we got, at a third of the price. Genuinely factory-smooth finish.",
    name: "M. Costa",
    place: "Scarborough",
  },
];

export default function Testimonials({
  id = "testimonials",
  eyebrow = "Client notes",
  heading = "On record",
  limit,
}) {
  const shown = limit ? quotes.slice(0, limit) : quotes;
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-14">
      <Reveal>
        <p className="font-mark text-2xl text-clay mb-2 -rotate-1">{eyebrow}</p>
        <h2 className="font-display text-4xl font-bold mb-12">{heading}</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-4">
        {shown.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.1}>
            <div className="bg-white h-full p-8 rounded-md border border-ink/5 shadow-sm">
              <p className="text-ink/70 text-sm leading-relaxed">&ldquo;{q.text}&rdquo;</p>
              <p className="text-xs uppercase tracking-widest text-steel mt-6">
                {q.name} &middot; {q.place}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
