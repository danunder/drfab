import heroImg from "../../assets/images/hero3.jpeg";

export default function AboutHero() {
  return (
    <section className="relative h-[170px] sm:h-[220px] lg:h-[360px]">
      {/* Background image */}
      <img
        src={heroImg}
        alt="About hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Watermark text (faint "About") */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="select-none text-[72px] font-extrabold tracking-wide -mt-40 text-white/20 sm:text-[92px] lg:text-[120px]">
          About
        </div>
      </div>

      {/* Center title */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          About drfab
        </h1>
      </div>
    </section>
  );
}
