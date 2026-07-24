"use client";

import { motion } from "framer-motion";

const colors = ["bg-wet", "bg-clay", "bg-mustard", "bg-ink"];

export default function SwatchDivider({ className = "" }) {
  return (
    <div className={`flex h-1.5 w-full overflow-hidden ${className}`}>
      {colors.map((c, i) => (
        <motion.span
          key={c}
          className={`h-full flex-1 ${c}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      ))}
    </div>
  );
}
