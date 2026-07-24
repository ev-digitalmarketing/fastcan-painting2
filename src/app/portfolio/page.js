import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Portfolio | Fastcan Painting",
  description: "Recent residential and commercial painting projects across the GTA.",
};

const projects = [
  { title: "Century Home Repaint", category: "Exterior · Residential", place: "Leslieville", swatch: "bg-mustard" },
  { title: "Two-Bed Condo Refresh", category: "Interior · Residential", place: "Liberty Village", swatch: "bg-wet" },
  { title: "12-Unit Rental Turnover", category: "Property Management", place: "North York", swatch: "bg-clay" },
  { title: "Retail Storefront Repaint", category: "Commercial", place: "Queen St W", swatch: "bg-wet-dark" },
  { title: "Kitchen Cabinet Refinish", category: "Interior · Residential", place: "Scarborough", swatch: "bg-mustard" },
  { title: "Office Floor Repaint", category: "Commercial", place: "Downtown Core", swatch: "bg-wet" },
  { title: "Deck & Fence Restain", category: "Exterior · Residential", place: "The Beaches", swatch: "bg-clay" },
  { title: "Lobby & Stairwell Refresh", category: "Common Area", place: "Mississauga", swatch: "bg-wet-dark" },
  { title: "New-Build Touch-ups", category: "Commercial", place: "Vaughan", swatch: "bg-mustard" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recent work"
        title="A look at what we've painted."
        description="A sample of residential and commercial projects finished across Toronto and the GTA — every one quoted fast, priced fixed, and finished on the date we promised."
      />

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="bg-canvas-2 hover:bg-white h-full rounded-md border border-ink/5 shadow-sm hover:shadow-lg transition-colors duration-200 overflow-hidden">
                <div className={`h-28 ${p.swatch}`} />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-steel mb-2">{p.category}</p>
                  <h3 className="font-display text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-ink/60 text-sm">{p.place}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials eyebrow="Client notes" heading="On record" />
      <CTA />
    </>
  );
}
