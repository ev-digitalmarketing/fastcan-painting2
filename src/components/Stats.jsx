"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest) + suffix;
      }),
    [spring, suffix]
  );

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 340, suffix: "+", label: "Projects Completed" },
  { value: 48, suffix: "hr", label: "Average Quote Time" },
  { value: 9, suffix: "", label: "Years on the Tools" },
  { value: 4.9, suffix: "★", label: "Average Client Rating" },
];

export default function Stats() {
  return (
    <section className="bg-wet-dark text-canvas py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <p className="font-display text-6xl font-bold text-mustard">
              {s.value % 1 !== 0 ? (
                s.value + s.suffix
              ) : (
                <Counter value={s.value} suffix={s.suffix} />
              )}
            </p>
            <p className="text-xs uppercase tracking-widest text-canvas/60 mt-2">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
