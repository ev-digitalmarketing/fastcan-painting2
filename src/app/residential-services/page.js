import PageHeader from "@/components/PageHeader";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { residentialServices } from "@/lib/servicesData";

export const metadata = {
  title: "Residential Services | Fastcan Painting",
  description:
    "Interior painting, exterior painting, cabinet refinishing, and rental turnovers for homeowners and landlords across the GTA.",
};

export default function ResidentialServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For your home"
        title="Residential painting, done properly fast."
        description="Interiors, exteriors, cabinets, and rental turnovers — fixed-price quotes in 48 hours, painted by our own uniformed crew."
      />
      <ServiceGrid
        eyebrow="What we paint"
        heading="Residential Services"
        items={residentialServices}
        ctaHref="/contact-us"
        ctaLabel="Request a scope review →"
      />
      <Testimonials eyebrow="Client notes" heading="What homeowners say" limit={3} />
      <CTA />
    </>
  );
}
