import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact Us | Fastcan Painting",
  description:
    "Book a walkthrough with Fastcan Painting. Fixed-price quotes within 48 hours, serving Toronto and the GTA.",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Us"
        description="Fixed-price quotes within 48 hours, our own uniformed crew, and daily updates until the job's done."
      />
      <CTA />
      <FAQ />
    </>
  );
}
