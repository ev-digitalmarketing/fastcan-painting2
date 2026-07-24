"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Walkthrough", body: "We measure the space in person and talk colour, finish, and budget — usually same week." },
  { n: "02", title: "Fixed Quote", body: "A line-itemed, fixed-price quote lands in your inbox within 48 hours." },
  { n: "03", title: "Prep & Protect", body: "Floors, furniture, and landscaping get covered before a drop of paint opens." },
  { n: "04", title: "Two Coats", body: "Every surface gets primer where needed and two coats of premium paint, applied by our own crew." },
  { n: "05", title: "Daily Check-In", body: "A short photo update and next-day plan, sent every evening — no chasing your painter." },
  { n: "06", title: "Final Walkthrough", body: "A joint inspection against the quote, a punch list closed on the spot, and a written warranty." },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink text-canvas py-14 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="font-mark text-2xl text-mustard mb-2 -rotate-1">How it works</p>
          <h2 className="font-display text-4xl font-bold mb-14">The 6-step Fastcan paint job</h2>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute top-[38px] left-0 right-0 h-px bg-canvas/15" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-[38px] left-0 right-0 h-px bg-mustard"
          />

          <div className="grid md:grid-cols-6 gap-8 md:gap-4 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="w-3 h-3 rounded-full bg-mustard mb-6 relative z-10" />
                <p className="font-display text-mustard text-sm mb-2">{s.n}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-canvas/60 text-sm">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
