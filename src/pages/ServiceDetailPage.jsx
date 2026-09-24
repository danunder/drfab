import { useParams } from "react-router-dom";
import ServiceDetailHero from "../components/ServiceDetail/ServiceDetailHero";
import ServiceDetailLayout from "../components/ServiceDetail/ServiceDetailLayout";
import { getServiceBySlug } from "../data/servicesData";
import useDocumentMeta from "../hooks/useDocumentMeta";

import heroImg from "../assets/images/hero3.jpeg";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useDocumentMeta({
    title: service.title,
    description: service.heroDesc,
  });

  return (
    <main className="bg-white">
      <ServiceDetailHero
        image={heroImg}
        title={service.title}
        desc={service.heroDesc}
      />
      <ServiceDetailLayout title={service.title} paragraphs={service.paragraphs} />
      <FooterDarkSimple />
    </main>
  );
}
