import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/images/hero1.jpeg";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * HeroSlider
 * - Background image slider with centered content
 * - Prev/Next controls
 * - Decorative overlays (circles + corner grid)
 */
export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        eyebrow: "",
        titleTop: "From Concept to Product.",
        titleBottom: "No Minimums.",
        body: "Custom 3D printing, modelling, and packaging for Ontario's makers, creators, and small businesses.",
        imageUrl: hero1, // TODO: replace with your image path
      },
      {
        eyebrow: "",
        titleTop: "One shop.",
        titleBottom: "Whole chain.",
        body: "drfab takes your idea from sketch to shelf-ready product — all under one roof. No weeks of back-and-forth between vendors.",
        imageUrl: hero2, // TODO
      },
      {
        eyebrow: "BUILT FOR SMALL RUNS AND BIG IDEAS",
        titleTop: "Model. Print.",
        titleBottom: "Package. Done.",
        body: "From a napkin sketch to a retail-ready product — modelling, 3D printing, and custom packaging in quantities of 1 to 500.",
        imageUrl: hero3, // TODO
      },
    ],
    [],
  );

  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  // Optional autoplay (matches typical template behavior)
  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[active];

  return (
    <section className="relative w-full">
      {/* Slide background */}
      <div className="relative h-130 w-full overflow-hidden md:h-155 lg:h-180">
        {/* Image placeholder (swap to real bg image later) */}
        <div
          className="absolute inset-0 bg-gray-300 bg-cover bg-center"
          style={{
            backgroundImage: s.imageUrl ? `url(${s.imageUrl})` : undefined,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Decorative overlays */}
        <Decorations />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-white/90 md:text-xs">
              {s.eyebrow}
            </p>

            <h1 className="mt-4 text-2xl font-extrabold leading-[1.08] md:text-6xl">
              <span className="block">{s.titleTop}</span>
              <span className="block">{s.titleBottom}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 md:text-[15px]">
              {s.body}
            </p>

            <div className="mt-8">
              <Link
                to="/#get-in-touch"
                className="nes-btn inline-flex h-12 items-center justify-center px-8 text-sm font-semibold text-[#1F2A30] hover:bg-white/90"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="nes-btn absolute left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-[#1F2A30] shadow md:flex "
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="nes-btn absolute right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-[#1F2A30] shadow md:flex"
        >
          <ChevronRight />
        </button>

        {/* Mobile controls */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={prev}
            className="nes-btn h-11 w-11 text-[#1F2A30]"
            aria-label="Previous slide (mobile)"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="nes-btn h-11 w-11 text-[#1F2A30]"
            aria-label="Next slide (mobile)"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

/** Decorative circles + corner grid overlay */
function Decorations() {
  return (
    <>
      {/* Top-left diagonal overlay */}
      <div className="pointer-events-none absolute left-0 top-0 z-2 h-full w-full">
        <div className="absolute left-0 top-0 h-full w-45 bg-white/10 md:w-60" />
        <div className="absolute left-0 top-0 h-full w-45 -skew-x-12 bg-black/10 md:w-60" />
      </div>

      {/* Left big circle */}
      <div className="pointer-events-none absolute bottom-16 left-10 z-3 h-28 w-28 rounded-full border border-white/25 md:h-36 md:w-36" />

      {/* Right mid circle */}
      <div className="pointer-events-none absolute right-24 top-1/2 z-3 hidden h-20 w-20 -translate-y-1/2 rounded-full border border-white/25 md:block" />

      {/* Bottom-right big arc */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 z-3 h-72 w-72 rounded-full border-18 border-white/15 md:h-96 md:w-96" />

      {/* Bottom-right grid (square lines) */}
      <div className="pointer-events-none absolute bottom-10 right-10 z-3 hidden h-28 w-28 md:block">
        <div className="absolute inset-0 border border-white/20" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />
        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/20" />
      </div>
    </>
  );
}
