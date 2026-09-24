import { Link } from "react-router-dom";
import featuredImg from "../../../assets/images/hero3.jpeg";
import { PROJECT_CATEGORIES } from "../../../data/projectsData";

export default function ProjectCategoryContent({ slug, title, paragraphs = [] }) {
  const otherCategories = PROJECT_CATEGORIES.filter((c) => c.slug !== slug);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          {/* Featured Image */}
          <div className="overflow-hidden rounded-2xl bg-black/5">
            <img src={featuredImg} alt="" className="w-full object-cover" />
          </div>

          {/* Title */}
          <h2 className="mt-8 text-2xl font-extrabold text-[#1F2A30]">
            {title}
          </h2>

          {paragraphs.map((p) => (
            <p key={p} className="mt-4 text-sm leading-7 text-black/60">
              {p}
            </p>
          ))}
        </div>

        {/* Sidebar: other categories */}
        <div className="rounded-2xl bg-[#1F2A30] p-6 text-white">
          <h4 className="text-lg font-extrabold">Other Categories</h4>

          <div className="mt-6 space-y-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/projects/categories/${c.slug}`}
                className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-sm hover:bg-white/20"
              >
                {c.title}
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
