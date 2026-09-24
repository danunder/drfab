import { Link } from "react-router-dom";
import { PROJECT_CATEGORIES } from "../../data/projectsData";

export default function ProjectsDropdown({
  open,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        // Position & size (centered)
        "fixed left-1/2 top-48 z-9999 w-[min(680px,calc(100vw-2rem))] -translate-x-1/2",

        // Animation + interaction
        "origin-top transition-all duration-200 ease-out",
        open
          ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
          : "pointer-events-none -translate-y-3 opacity-0 scale-[0.98]",
      ].join(" ")}
    >
      <div className="overflow-hidden rounded-b-xl bg-white shadow-[0_22px_70px_rgba(0,0,0,0.18)]">
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {PROJECT_CATEGORIES.map((it) => {
              const Icon = it.icon;
              return (
                <Link
                  key={it.slug}
                  to={`/projects/categories/${it.slug}`}
                  onClick={onClose}
                  className="group rounded-xl bg-[#F7F8F9] p-4 transition hover:bg-[#F2F4F6]"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Icon className="h-5 w-5 text-[#1F2A30]" />
                    </div>
                    <div>
                      <p className="text-[15px] font-extrabold text-[#1F2A30]">
                        {it.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-black/55">
                        {it.shortDesc}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
