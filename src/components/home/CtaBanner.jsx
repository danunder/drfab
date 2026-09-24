import bgImage from "../../assets/images/hero2.png";
import { Link } from "react-router-dom";

/**
 * CtaBanner
 * - Full-width background image banner
 * - Dark overlay
 * - Content vertically centered
 * - Left headline + right pill button (like screenshot)
 */
export default function CtaBanner() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        {/* Background image placeholder */}
        <div
          className="absolute inset-0 bg-gray-300 bg-cover bg-center"
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content (centered vertically) */}
        <div className="relative">
          <div className="mx-auto flex min-h-45 max-w-7xl flex-col items-start justify-center gap-6 px-4 py-10 sm:px-6 md:min-h-72 md:flex-row md:items-center md:justify-between lg:px-8">
            <h3 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Got an idea? Let&apos;s make it
              <br className="hidden sm:block" />
              real — no minimum order required
            </h3>

            <Link
              to="/#get-in-touch"
              className="nes-btn is-success h-14 w-fit px-10 py-4 text-sm font-semibold text-[#1F2A30]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
