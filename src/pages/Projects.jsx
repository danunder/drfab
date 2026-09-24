import React from "react";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectCategoriesGridSection from "../components/projects/ProjectCategoriesGridSection";
import ProjectsGridSection from "../components/projects/ProjectsGridSection";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function Projects() {
  useDocumentMeta({
    title: "Projects",
    description:
      "Browse completed 3D printing, modelling, and packaging projects from drfab, organized by category.",
  });

  return (
    <main>
      <ProjectsHero />
      <ProjectCategoriesGridSection />
      <ProjectsGridSection />
      <FooterDarkSimple />
    </main>
  );
}
