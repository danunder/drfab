import { Blocks, Printer, PaintBucket, Package } from "lucide-react";

export const SERVICES = [
  {
    slug: "3d-modelling",
    title: "3D Modelling",
    icon: Blocks,
    shortDesc: "CAD and sculpting from a sketch, photo, scan, or description.",
    heroDesc:
      "Professional CAD and sculpting that turns your napkin sketch, photo, or description into a production-ready 3D model.",
    paragraphs: [
      "Whether you're starting from a rough sketch, a reference photo, or nothing but an idea, our modelling process gets you to a print-ready file fast. We handle organic sculpting and precision CAD alike.",
      "Every model is checked for printability before it goes to production, so what you approve is what you get — no surprises at the print stage.",
    ],
  },
  {
    slug: "3d-printing",
    title: "3D Printing",
    icon: Printer,
    shortDesc:
      "FDM and resin printing for prototypes, end-use parts, and everything in between.",
    heroDesc:
      "FDM and resin printing for prototypes, end-use parts, and everything in between. Multiple materials for any application.",
    paragraphs: [
      "We run both FDM filament and resin printing in-house, so we can match the process to the job — fine-detail resin for miniatures and props, durable filaments for functional, end-use parts.",
      "Need something fast? We print same-day or next-day on most jobs, and we'll recommend the right material for your application.",
    ],
  },
  {
    slug: "print-finishing",
    title: "Print Finishing",
    icon: PaintBucket,
    shortDesc:
      "Sanding, assembly, priming & painting for a professional look and feel.",
    heroDesc:
      "High-quality print finishing — sanding, assembly, priming, and painting — for your prototypes and products, ensuring a professional look and feel.",
    paragraphs: [
      "A raw print is just the first step. We offer sanding, gap-filling, priming, and painting to bring your piece to a display-ready finish.",
      "For multi-part builds — like cosplay armor or assemblies — we handle joining, pinning, and finishing so the final piece holds together and looks the part.",
    ],
  },
  {
    slug: "custom-packaging",
    title: "Custom Packaging",
    icon: Package,
    shortDesc:
      "Blister packs, clamshells, and trays, vacformed from 3D-printed molds.",
    heroDesc:
      "Blister packs, clamshells, and trays — vacformed from 3D-printed molds. Retail-quality packaging in quantities of 1 to 500.",
    paragraphs: [
      "Retail-ready packaging without factory minimums. We design and vacform blister packs, clamshells, and trays from molds we print in-house.",
      "The first mold is included in your quote. Once it exists, per-unit costs are low — so small runs stay affordable.",
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug) || SERVICES[0];
}
