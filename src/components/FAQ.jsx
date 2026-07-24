"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How fast is \u201cfast,\u201d really?",
    a: "Most rooms are painted in a day, full interiors run 2-4 days, and exteriors 3-5 days depending on size. Your written quote includes a firm start and finish date before any work begins.",
  },
  {
    q: "What paint brands do you use?",
    a: "We work with Benjamin Moore, Sherwin-Williams, and Behr as standard, and we're happy to match a specific brand or colour you've already chosen.",
  },
  {
    q: "Do you move furniture?",
    a: "Yes — we shift and cover furniture as part of every quote, and put everything back in place at the end of each day.",
  },
  {
    q: "What areas do you serve?",
    a: "Toronto and the surrounding GTA, including Mississauga, Vaughan, Markham, and Scarborough. Property managers with multi-site portfolios can ask about standing service agreements.",
  },
  {
    q: "How does payment work?",
    a: "A small deposit to secure your schedule slot, and the balance on the final walkthrough — all laid out in the quote up front, no surprises.",
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-ink/15 py-5">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex justify-between items-center text-left cursor-pointer"
        >
          <span className="font-display text-xl font-semibold pr-6">{q}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-clay shrink-0"
          >
            <Plus size={22} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-ink/60 text-sm leading-relaxed pt-3 pr-8">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-canvas-2 py-14">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="font-mark text-2xl text-clay mb-2 -rotate-1">Questions</p>
          <h2 className="font-display text-4xl font-bold mb-10">Frequently asked</h2>
        </Reveal>
        <div className="border-t border-ink/15">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
