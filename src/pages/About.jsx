import NewsletterCta from "../components/contact/NewsletterCta";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";
import AboutHero from "../components/about/AboutHero";
import AboutTeamSection from "../components/about/AboutTeamSection";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function About() {
  useDocumentMeta({
    title: "About Us",
    description:
      "Meet the team behind drfab — Dan and Ryan, running 3D printing, modelling, and packaging out of Ontario.",
  });

  return (
    <main>
      <AboutHero />
      <AboutTeamSection />
      <FooterDarkSimple />
    </main>
  );
}
