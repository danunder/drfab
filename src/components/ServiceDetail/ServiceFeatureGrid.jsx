import { Droplet, Layers3, Zap, Sparkles } from "lucide-react";

const features = [
  {
    icon: Droplet,
    title: "Resin Printing",
    desc: "High-detail SLA/resin prints for miniatures, props, and fine features.",
  },
  {
    icon: Layers3,
    title: "Filament (FDM) Printing",
    desc: "Durable PLA, PETG, ABS, ASA, and Nylon prints for functional parts.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    desc: "Fast turnaround iterations so you can test and refine before production.",
  },
  {
    icon: Sparkles,
    title: "Engineering Filaments & Cosplay",
    desc: "Tough engineering-grade materials, plus finishing for cosplay and props.",
  },
];

export default function ServiceFeatureGrid() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <div key={i} className="flex gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#F5F7F9]">
              <Icon className="h-6 w-6 text-[#1F2A30]" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#1F2A30]">
                {f.title}
              </h4>
              <p className="mt-2 text-xs leading-6 text-black/55">{f.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
