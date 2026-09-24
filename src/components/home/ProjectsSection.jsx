import { useEffect, useMemo, useRef, useState } from "react";
import CarouselDots from "../ui/CarouselDots";
import ProjectCard from "./ProjectCard";
import image from "../../assets/images/hero1.jpeg";

/**
 * ProjectsSection (Popular Projects)
 * - Scroll-snap carousel
 * - 4 dots for 4 items
 * - lg/xl: 2 visible, md/sm: 1 visible
 * - Dot click moves by ONE card (smooth)
 */
export default function ProjectsSection() {
  const projects = useMemo(
    () => [
      {
        slug: "custom-toy-prototype",
        title: "Custom Toy Prototype",
        category: "Modelled, Printed & Blister-Packaged",
        image: image,
      },
      {
        slug: "replacement-parts",
        title: "Replacement Parts",
        category: "For Vintage Equipment",
        image: image,
      },
      {
        slug: "product-mockup",
        title: "Product Mockup",
        category: "For Agency Pitch",
        image: image,
      },
      {
        slug: "small-batch-packaging",
        title: "Small-Batch Packaging Run",
        category: "50 Units",
        image: image,
      },
    ],
    [],
  );

  const DOTS = 3;
  const [activeDot, setActiveDot] = useState(0);

  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);
  const isFirstRender = useRef(true);

  // Smoothly scroll to the selected item (one-card movement), skipping the
  // initial mount so this never hijacks the page's vertical scroll on load
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const el = itemRefs.current[activeDot];
    if (!el || !scrollerRef.current) return;
    scrollerRef.current.scrollTo({
      left: el.offsetLeft,
      behavior: "smooth",
    });
  }, [activeDot]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row: heading left, dots right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative">
            {/* Watermark */}
            <div className="pointer-events-none absolute -top-20 left-0 hidden select-none text-[110px] font-extrabold tracking-wider text-black/7 lg:block">
              Projects
            </div>

            <p className="text-sm font-semibold tracking-[0.25em] text-[#1F2A30]">
              RECENT WORK
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
              Recent Work
            </h2>
          </div>

          {/* Dots aligned to right (like screenshot) */}
          <div className="lg:pt-6">
            <CarouselDots
              count={DOTS}
              activeIndex={activeDot}
              onChange={setActiveDot}
            />
          </div>
        </div>

        {/* Light patterned panel */}
        <div className="relative mt-10 overflow-hidden bg-[#F7F8F9] px-4 py-12 sm:px-8">
          {/* Subtle diagonal shapes */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-40 top-10 h-56 w-[520px] rotate-[-25deg] bg-white/70" />
            <div className="absolute left-1/3 top-24 h-56 w-[520px] rotate-[-25deg] bg-white/60" />
            <div className="absolute right-[-220px] top-10 h-56 w-[520px] rotate-[-25deg] bg-white/50" />
          </div>

          {/* Carousel */}
          <div
            ref={scrollerRef}
            className="relative no-scrollbar overflow-x-auto scroll-smooth"
          >
            <div className="flex snap-x snap-mandatory gap-8 lg:gap-10">
              {projects.map((p, i) => (
                <div
                  key={p.slug}
                  ref={(node) => (itemRefs.current[i] = node)}
                  className={[
                    "snap-start shrink-0",
                    "w-full", // md/sm: 1 visible
                    "lg:w-[calc(50%-20px)]", // lg/xl: 2 visible
                  ].join(" ")}
                >
                  <ProjectCard
                    to={`/projects/${p.slug}`}
                    title={p.title}
                    category={p.category}
                    image={p.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
