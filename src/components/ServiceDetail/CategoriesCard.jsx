import { Link } from "react-router-dom";
import { SERVICES } from "../../data/servicesData";

export default function CategoriesCard() {
  return (
    <div className="rounded-2xl bg-[#1F2A30] p-6 text-white">
      <h4 className="text-lg font-extrabold">Categories</h4>

      <div className="mt-6 space-y-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-sm hover:bg-white/20"
          >
            {s.title}
            <span>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}