import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About Us | Fastcan Painting",
  description:
    "Fastcan Painting is a Toronto-based painting crew — fast quotes, fixed prices, and our own uniformed painters on every job.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fastcan Painting"
        title="About Us"
        description="Toronto-based, in-house, and built for people who don't have time to chase down a contractor."
      />
      <About />
      <Process />
      <CTA />
    </>
  );
}
