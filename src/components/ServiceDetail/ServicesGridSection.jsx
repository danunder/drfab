import { Link } from "react-router-dom";
import { SERVICES } from "../../data/servicesData";

export default function ServicesGridSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center my-3">What We Do</p>
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1F2A30] sm:text-4xl">
          One Shop. Whole Chain.
        </h2>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-2xl border border-black/10 bg-[#F7F8F9] p-8 transition hover:bg-[#F2F4F6]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F2A30] text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#1F2A30]">
                  {s.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-black/60">
                  {s.shortDesc}
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
