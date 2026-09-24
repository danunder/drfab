import FooterDarkSimple from "../components/contact/FooterDarkSimple";
import FaqHero from "../components/faq/FaqHero";
import FaqSection from "../components/faq/FaqSection";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function Faq() {
  useDocumentMeta({
    title: "FAQ",
    description:
      "Answers to common questions about file formats, materials, turnaround, minimums, and shipping at drfab.",
  });

  return (
    <main>
      <FaqHero />
      <FaqSection />
      <FooterDarkSimple />
    </main>
  );
}
