import { useEffect, useMemo, useRef, useState } from "react";
import CarouselDots from "../ui/CarouselDots";
import ServiceCard from "./ServiceCard";
import icon1 from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";
import { ChevronLeft, ChevronRight } from "lucide-react";


/**
 * ServicesSection
 * - Scroll-snap carousel that shifts by 1 card per dot
 * - 4 dots (0..3)
 * - xl: 3 visible, lg: 2 visible, md/sm: 1 visible
 * - Wrap effect on last dot via duplicated items
 */
export default function ServicesSection() {
  const services = useMemo(
    () => [
      {
        title: "3D Modelling",
        desc: "Professional CAD and sculpting. We turn your napkin sketch, photo, or description into a production-ready 3D model.",
        icon: icon1,
      },
      {
        title: "3D Printing",
        desc: "FDM and resin printing for prototypes, end-use parts, and everything in between. Multiple materials for any application.",
        icon: icon2,
      },
      {
        title: "Print Finishing",
        desc: "High-quality print finishing - sanding, assembly, priming & painting - for your prototypes and products, ensuring a professional look and feel.",
        icon: icon3,
      },
      {
       title: "Custom Packaging",
        desc: "Blister packs, clamshells, and trays — vacformed from 3D-printed molds. Retail-quality packaging in quantities of 1 to 500.",
        icon: icon4,
      },
    ],
    [],
  );

  const DOTS = 4;
  const [activeDot, setActiveDot] = useState(0);

  // Duplicate list so dot 3 can show [3,0,1] naturally
  const trackItems = useMemo(() => [...services, ...services], [services]);

  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);
  const isFirstRender = useRef(true);

  // Scroll to the active card (one-card step behavior), skipping the initial
  // mount so this never hijacks the page's vertical scroll on load
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
    <section className="bg-white py-16 md:py-24" id="services">
      <div className="px-4">
        {/* Heading */}
        <div className="relative text-center">
          <div className="pointer-events-none absolute left-1/2 -top-23 hidden -translate-x-1/2 select-none text-[120px] font-extrabold tracking-tight text-black/7 lg:block">
            Services
          </div>

          <p className="text-sm font-semibold tracking-[0.25em] text-[#1F2A30]">
            OUR SERVICES
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
            One Shop. Whole Chain.
          </h2>
        </div>

        {/* Panel */}
        <div className="bg-gray-200">
          <div className="relative mt-14 w-full max-w-7xl mx-auto overflow-hidden px-4 py-14">
            {/* Subtle diagonal shapes */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -left-40 top-10 h-56 w-130 rotate-[-25deg] bg-white/70" />
              <div className="absolute left-1/3 top-24 h-56 w-130 rotate-[-25deg] bg-white/60" />
              <div className="absolute -right-55 top-10 h-56 w-130 rotate-[-25deg] bg-white/50" />
            </div>

            {/* Carousel (scroll-snap) */}
            <div
              ref={scrollerRef}
              className="relative no-scrollbar overflow-x-auto scroll-smooth"
            >
              <div className="flex snap-x snap-mandatory gap-5">
                {trackItems.map((item, i) => {
                  // Active card is the first visible card (index = activeDot)
                  const isActive = i === activeDot;

                  return (
                    <div
                      key={`${item.title}-${i}`}
                      ref={(node) => {
                        if (i < DOTS) itemRefs.current[i] = node; // only need refs for 0..3
                      }}
                      className={[
                        "snap-start shrink-0",
                        "w-full", // mobile
                        "l:w-[60%]", // 2 cards look larger
                        "xl:w-[45%]", // 3 cards but wider
                      ].join(" ")}
                    >
                      <ServiceCard
                        title={item.title}
                        desc={item.desc}
                        active={isActive}
                        icon={item.icon}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="relative mt-10">
              <CarouselDots
                count={DOTS}
                activeIndex={activeDot}
                onChange={setActiveDot}
              />
            </div>
            {/* Prev / Next */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => activeDot > 0 && setActiveDot(activeDot - 1)}
          className="nes-btn absolute left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-[#1F2A30] shadow md:flex "
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => activeDot < DOTS - 1 && setActiveDot(activeDot + 1)}
          className="nes-btn absolute right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-[#1F2A30] shadow md:flex"
        >
          <ChevronRight />
        </button>

        {/* Mobile controls */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
              onClick={() => activeDot > 0 && setActiveDot(activeDot - 1)}
            className="nes-btn h-11 w-11 text-[#1F2A30]"
            aria-label="Previous slide (mobile)"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setActiveDot(activeDot + 1)}
            className="nes-btn h-11 w-11 text-[#1F2A30]"
            aria-label="Next slide (mobile)"
          >
            ›
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
