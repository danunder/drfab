import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectCategoryPage from "./pages/ProjectCategoryPage";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import About from "./pages/About";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/categories/:slug" element={<ProjectCategoryPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  );
}
