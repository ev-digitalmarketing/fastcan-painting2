import Reveal from "./Reveal";
import SwatchDivider from "./SwatchDivider";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative bg-ink text-canvas pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          {eyebrow && (
            <p className="font-mark text-2xl text-mustard mb-3 -rotate-1">{eyebrow}</p>
          )}
          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-[0.98] max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-canvas/70 text-lg max-w-xl">{description}</p>
          )}
        </Reveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <SwatchDivider />
      </div>
    </section>
  );
}
