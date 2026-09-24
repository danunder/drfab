import FooterDarkSimple from "../components/contact/FooterDarkSimple";
import ServicesHero from "../components/ServiceDetail/ServicesHero";
import ServicesGridSection from "../components/ServiceDetail/ServicesGridSection";
import PricingSection from "../components/ServiceDetail/PricingSection";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function Services() {
  useDocumentMeta({
    title: "Services",
    description:
      "3D modelling, rapid prototyping, premium materials, and print finishing — explore drfab's services and pricing.",
  });

  return (
    <main>
      <ServicesHero />
      <ServicesGridSection />
      <PricingSection />
      <FooterDarkSimple />
    </main>
  );
}
