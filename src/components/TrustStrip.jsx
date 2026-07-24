import Reveal from "./Reveal";

const items = [
  "Fixed-price quotes, no surprise change orders",
  "Daily photo updates sent to your phone",
  "3-year warranty on exterior work",
];

export default function TrustStrip() {
  return (
    <section className="bg-wet text-canvas">
      <div className="max-w-7xl mx-auto px-6 py-5 grid sm:grid-cols-3 gap-4 text-sm">
        {items.map((t, i) => (
          <Reveal key={t} delay={i * 0.08} className="flex items-center gap-3">
            <span className="font-display text-lg font-bold text-mustard shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{t}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
