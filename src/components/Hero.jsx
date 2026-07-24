"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SwatchDivider from "./SwatchDivider";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink text-canvas pt-20 overflow-hidden">
      <SwatchDivider />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-20 md:py-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={line}
            className="font-mark text-2xl text-mustard mb-3 -rotate-1"
          >
            Toronto's fastest painting crew
          </motion.p>

          <h1 className="font-display text-6xl sm:text-7xl leading-[0.98] font-bold">
            <motion.span variants={line} className="block">
              Colour, done
            </motion.span>
            <motion.span variants={line} className="block relative">
              <span className="relative z-10">properly fast.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
                style={{ transformOrigin: "left", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                className="absolute -z-0 -left-2 right-0 bottom-1 h-5 bg-wet/40 origin-left"
              />
            </motion.span>
          </h1>

          <motion.p variants={line} className="mt-6 text-canvas/70 text-lg max-w-md">
            Interior, exterior, and cabinet repaints — quoted in 48 hours, painted by our
            own uniformed crew, finished on the date we promised.
          </motion.p>

          <motion.div variants={line} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="bg-mustard hover:bg-clay hover:text-canvas text-ink font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
            >
              Book Your Estimate
            </Link>
            <Link
              href="/portfolio"
              className="border border-canvas/30 hover:border-mustard hover:text-mustard px-6 py-3 rounded-sm transition-colors duration-200"
            >
              See Recent Work
            </Link>
          </motion.div>

          <motion.div
            variants={line}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-canvas/50 uppercase tracking-wide"
          >
            <span>Licensed &amp; Insured</span>
            <span className="w-1 h-1 bg-canvas/30 rounded-full" />
            <span>WSIB Covered</span>
            <span className="w-1 h-1 bg-canvas/30 rounded-full" />
            <span>Serving the GTA</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3]">
            <svg
              viewBox="0 0 520 420"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="strokeReveal">
                  <motion.rect
                    x="46"
                    y="238"
                    height="120"
                    initial={{ width: 0 }}
                    animate={{ width: 400 }}
                    transition={{ duration: 0.9, delay: 0.7, ease: [0.65, 0, 0.35, 1] }}
                  />
                </clipPath>
              </defs>

              {/* painted stroke */}
              <g clipPath="url(#strokeReveal)">
                <path
                  d="M50 300 C60 260 140 260 170 285 C200 310 260 310 290 285 C320 260 380 260 410 290 C425 305 420 325 400 330 C340 345 260 320 220 335 C170 350 100 340 65 325 C45 317 40 308 50 300 Z"
                  className="fill-mustard"
                />
              </g>

              {/* drips */}
              <motion.circle
                cx="120"
                cy="345"
                r="5"
                className="fill-mustard"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
              />
              <motion.circle
                cx="330"
                cy="352"
                r="4"
                className="fill-mustard"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.65, duration: 0.4 }}
              />

              {/* brush, tip resting at the end of the stroke */}
              <motion.g
                initial={{ opacity: 0, x: 60, y: -50, rotate: -18 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <g transform="translate(420 288) rotate(-38)">
                  {/* bristles */}
                  <path
                    d="M-66 -20 L-4 -14 L0 0 L-4 14 L-66 20 Q-50 0 -66 -20 Z"
                    className="fill-canvas-2"
                    stroke="#0C315E"
                    strokeOpacity="0.08"
                  />
                  <path d="M-58 -13 L-10 -8" stroke="#0C315E" strokeOpacity="0.15" strokeWidth="1.5" />
                  <path d="M-58 13 L-10 8" stroke="#0C315E" strokeOpacity="0.15" strokeWidth="1.5" />
                  {/* wet paint on tip */}
                  <circle cx="-2" cy="0" r="9" className="fill-mustard" />
                  {/* ferrule */}
                  <rect x="-4" y="-17" width="30" height="34" rx="4" fill="#C7CDD6" />
                  <rect x="-4" y="-17" width="30" height="6" rx="3" fill="#EDF1F5" opacity="0.6" />
                  {/* handle */}
                  <rect x="22" y="-13" width="250" height="26" rx="13" className="fill-canvas" />
                  <rect x="22" y="-13" width="250" height="9" rx="4.5" fill="#ffffff" opacity="0.25" />
                </g>
              </motion.g>
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute -top-5 -right-5 bg-mustard text-ink rounded-full w-24 h-24 flex flex-col items-center justify-center rotate-6 shadow-lg"
          >
            <span className="font-display text-2xl font-bold leading-none">4.9</span>
            <span className="text-[10px] uppercase tracking-wide">★ rating</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
