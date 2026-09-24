import { Wrench, Palette, Gamepad2, Sparkles } from "lucide-react";

export const PROJECT_CATEGORIES = [
  {
    slug: "functional-parts",
    title: "Functional Parts",
    icon: Wrench,
    shortDesc: "Replacement parts or new designs, printed to fit and perform.",
    heroDesc:
      "Broken part? New idea? We print functional parts that fit right and hold up to real use.",
    paragraphs: [
      "From a snapped bracket to a part that's never existed before, we model and print functional pieces built to spec — measured, tested, and matched to the right material for the job.",
      "Send us the broken part, a photo, or a measurement, and we'll get you a replacement or a first working prototype.",
    ],
  },
  {
    slug: "brand-imagery",
    title: "Brand Imagery",
    icon: Palette,
    shortDesc: "Business cards, signage, nametags, coasters, and more.",
    heroDesc:
      "Custom branded pieces — from desk signage to nametags — printed and finished to represent your business.",
    paragraphs: [
      "Business cards, signage, nametags, coasters, and other branded pieces — we model and print custom items that carry your logo and colors.",
      "Small batch or one-off, we can produce branded pieces without factory minimums.",
    ],
  },
  {
    slug: "trending-toys-gadgets",
    title: "Trending Toys & Gadgets",
    icon: Gamepad2,
    shortDesc: "Popular toys and gadgets, for personal use or resale.",
    heroDesc:
      "On-trend toys and gadgets, printed for personal use or as small-batch inventory for resale.",
    paragraphs: [
      "We keep an eye on what's trending and can print popular toys and gadgets for personal use or as inventory for your shop.",
      "Have a design in mind? We can model and print it, then help you package it for resale.",
    ],
  },
  {
    slug: "bespoke-cosplay",
    title: "Bespoke & Custom Creations",
    icon: Sparkles,
    shortDesc: "Custom cosplay armor, props, and one-off creations.",
    heroDesc:
      "Cosplay armor, props, and one-of-a-kind creations, modelled and printed to your exact specs.",
    paragraphs: [
      "From full cosplay armor sets to a single prop piece, we model and print bespoke creations built to your specs — then finish them so they're ready to wear or display.",
      "Bring reference art, measurements, or a rough idea and we'll help bring it to life.",
    ],
  },
];

export function getProjectCategoryBySlug(slug) {
  return (
    PROJECT_CATEGORIES.find((c) => c.slug === slug) || PROJECT_CATEGORIES[0]
  );
}
