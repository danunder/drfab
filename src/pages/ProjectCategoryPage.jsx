import { useParams } from "react-router-dom";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";
import ProjectCategoryHero from "../components/projects/categories/ProjectCategoryHero";
import ProjectCategoryContent from "../components/projects/categories/ProjectCategoryContent";
import { getProjectCategoryBySlug } from "../data/projectsData";
import useDocumentMeta from "../hooks/useDocumentMeta";

import heroImg from "../assets/images/hero3.jpeg";

export default function ProjectCategoryPage() {
  const { slug } = useParams();
  const category = getProjectCategoryBySlug(slug);

  useDocumentMeta({
    title: category.title,
    description: category.heroDesc,
  });

  return (
    <main className="bg-white">
      <ProjectCategoryHero
        image={heroImg}
        title={category.title}
        desc={category.heroDesc}
      />
      <ProjectCategoryContent
        slug={category.slug}
        title={category.title}
        paragraphs={category.paragraphs}
      />
      <FooterDarkSimple />
    </main>
  );
}
