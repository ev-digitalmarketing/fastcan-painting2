"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-ink text-canvas py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="font-mark text-2xl text-mustard mb-2 -rotate-1">Next steps</p>
          <h2 className="font-display text-5xl font-bold leading-tight">
            Let&rsquo;s put a date on your paint job.
          </h2>
          <p className="text-canvas/70 mt-5 max-w-md">
            Tell us what you&rsquo;re painting and we&rsquo;ll book a walkthrough this week
            &mdash; quote follows within 48 hours.
          </p>
          <div className="mt-8 space-y-2 text-sm text-canvas/70">
            <p>
              Call &mdash;{" "}
              <a href="tel:14165550142" className="text-mustard hover:underline">
                (416) 555-0142
              </a>
            </p>
            <p>
              Email &mdash;{" "}
              <a href="mailto:hello@fastcanpainting.ca" className="text-mustard hover:underline">
                hello@fastcanpainting.ca
              </a>
            </p>
            <p>Serving &mdash; Toronto &amp; the GTA</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-wet-dark p-8 rounded-md relative overflow-hidden">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <p className="font-display text-3xl font-bold text-mustard mb-2">
                  Request sent
                </p>
                <p className="text-canvas/70 text-sm">
                  We&rsquo;ll reach out within one business day to book your walkthrough.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-canvas/60">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full mt-1 bg-transparent border-b border-canvas/30 focus:border-mustard outline-none py-2 text-canvas transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-canvas/60">
                    Email or phone
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full mt-1 bg-transparent border-b border-canvas/30 focus:border-mustard outline-none py-2 text-canvas transition-colors"
                    placeholder="How should we reach you?"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-canvas/60">
                    What are you painting?
                  </label>
                  <select className="w-full mt-1 bg-transparent border-b border-canvas/30 focus:border-mustard outline-none py-2 text-canvas transition-colors">
                    <option className="text-ink">Interior</option>
                    <option className="text-ink">Exterior</option>
                    <option className="text-ink">Kitchen cabinets</option>
                    <option className="text-ink">Rental unit / commercial</option>
                    <option className="text-ink">Deck or fence</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-mustard hover:bg-clay hover:text-canvas text-ink font-semibold py-3 mt-2 rounded-sm transition-colors duration-200"
                >
                  Request My Estimate
                </motion.button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
