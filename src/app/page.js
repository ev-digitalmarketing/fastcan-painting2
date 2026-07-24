import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-14">
        <Reveal>
          <p className="font-mark text-2xl text-clay mb-2 -rotate-1">What we paint</p>
          <h2 className="font-display text-4xl font-bold mb-12">Two ways we work</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          <Reveal delay={0.05}>
            <Link
              href="/residential-services"
              className="group block h-full bg-canvas-2 hover:bg-white p-10 rounded-md border border-ink/5 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <p className="font-display text-clay text-sm mb-2">01</p>
              <h3 className="font-display text-3xl font-semibold mb-3">Residential Services</h3>
              <p className="text-ink/60 text-sm mb-6">
                Interiors, exteriors, cabinet refinishing, and rental turnovers for homeowners
                and landlords across the GTA.
              </p>
              <span className="brush-underline text-sm uppercase tracking-wide text-wet font-semibold">
                Explore residential &rarr;
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              href="/commercial-services"
              className="group block h-full bg-canvas-2 hover:bg-white p-10 rounded-md border border-ink/5 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <p className="font-display text-clay text-sm mb-2">02</p>
              <h3 className="font-display text-3xl font-semibold mb-3">Commercial Services</h3>
              <p className="text-ink/60 text-sm mb-6">
                Offices, retail, warehouses, and multi-site property management contracts
                scheduled around your business hours.
              </p>
              <span className="brush-underline text-sm uppercase tracking-wide text-wet font-semibold">
                Explore commercial &rarr;
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <About />
      <Process />
      <Testimonials limit={3} />
      <CTA />
    </>
  );
}
