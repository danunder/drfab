import { Link } from "react-router-dom";
import { PROJECT_CATEGORIES } from "../../data/projectsData";

export default function ProjectCategoriesGridSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center my-3">Browse By Category</p>
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1F2A30] sm:text-4xl">
          What We Build
        </h2>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2">
          {PROJECT_CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.slug}
                to={`/projects/categories/${c.slug}`}
                className="group rounded-2xl border border-black/10 bg-[#F7F8F9] p-8 transition hover:bg-[#F2F4F6]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F2A30] text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#1F2A30]">
                  {c.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-black/60">
                  {c.shortDesc}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1F2A30]">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
