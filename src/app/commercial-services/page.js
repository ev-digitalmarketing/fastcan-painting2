import PageHeader from "@/components/PageHeader";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { commercialServices } from "@/lib/servicesData";

export const metadata = {
  title: "Commercial Services | Fastcan Painting",
  description:
    "Office, retail, warehouse, and multi-site property management painting scheduled around your business hours.",
};

export default function CommercialServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For your business"
        title="Commercial painting that works around your hours."
        description="Offices, retail, warehouses, and multi-site portfolios — scheduled after-hours or on weekends so your business never has to close."
      />
      <ServiceGrid
        eyebrow="What we paint"
        heading="Commercial Services"
        items={commercialServices}
        ctaHref="/contact-us"
        ctaLabel="Request a scope review →"
      />
      <Testimonials eyebrow="Client notes" heading="What property managers say" limit={3} />
      <CTA />
    </>
  );
}
