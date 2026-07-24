"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";

export default function ServiceGrid({
  id,
  eyebrow,
  heading,
  items,
  ctaHref = "/contact-us",
  ctaLabel = "Request a scope review →",
  compact = false,
}) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-6 ${compact ? "py-10" : "py-14"}`}>
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <Reveal>
          {eyebrow && (
            <p className="font-mark text-2xl text-clay mb-2 -rotate-1">{eyebrow}</p>
          )}
          <h2 className="font-display text-4xl font-bold">{heading}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href={ctaHref}
            className="brush-underline text-sm uppercase tracking-wide text-wet font-semibold"
          >
            {ctaLabel}
          </Link>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((s, i) => (
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
