"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "Interior Painting",
    body: "Walls, ceilings, and trim with clean cut-lines and premium low-VOC paint, finished in days, not weeks.",
  },
  {
    n: "02",
    title: "Exterior Painting",
    body: "Siding, stucco, and trim prepped, primed, and coated to hold up through a full GTA winter.",
  },
  {
    n: "03",
    title: "Cabinet Refinishing",
    body: "Spray-finished kitchen and bathroom cabinets for a factory-smooth look at a fraction of replacement cost.",
  },
  {
    n: "04",
    title: "Condo & Rental Turnover",
    body: "Fast between-tenant repaints priced per unit, scheduled around your move-out and move-in dates.",
  },
  {
    n: "05",
    title: "Commercial Painting",
    body: "Retail, office, and lobby repaints scheduled after-hours or on weekends to keep your business open.",
  },
  {
    n: "06",
    title: "Deck & Fence Staining",
    body: "Pressure-washed, sanded, and stained to bring tired outdoor wood back to life before summer.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <Reveal>
          <p className="font-mark text-2xl text-clay mb-2 -rotate-1">What we paint</p>
          <h2 className="font-display text-4xl font-bold">Services</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a href="#contact" className="brush-underline text-sm uppercase tracking-wide text-wet font-semibold">
            Request a scope review &rarr;
          </a>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={(i % 3) * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-canvas-2 hover:bg-white h-full p-8 rounded-md border border-ink/5 shadow-sm hover:shadow-lg transition-colors duration-200"
            >
              <p className="font-display text-clay text-sm mb-2">{s.n}</p>
              <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-ink/60 text-sm">{s.body}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
