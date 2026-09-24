import icon from "../../assets/icons/planning.png";

/**
 * StatsStrip
 * - Dark background strip with 4 stats
 * - Each stat: circular icon + big number + label
 * - Icons are placeholders (swap later)
 */
export default function StatsStrip() {
  const stats = [
    { value: "1", label: "MINIMUM ORDER SIZE", image: icon },
    { value: "24HR", label: "QUOTE TURNAROUND", image: icon },
    { value: "2", label: "IN-HOUSE SPECIALISTS", image: icon },
    { value: "500+", label: "PARTS PRODUCED", image: icon },
  ];

  return (
    <section className="relative w-full bg-[#0B1318] py-10">
      {/* Subtle diagonal accents (matches template vibe) */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-40 -top-20 h-64 w-[520px] rotate-[-25deg] bg-white/5" />
        <div className="absolute right-[-220px] -top-10 h-64 w-[520px] rotate-[-25deg] bg-white/5" />
      </div> */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-5">
              {/* Icon circle */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                {/* Placeholder icon */}
                <img src={s.image} alt={s.label} className="h-12 w-12" />
              </div>

              {/* Text */}
              <div>
                <div className="text-3xl font-extrabold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-semibold tracking-wide text-white/90">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
