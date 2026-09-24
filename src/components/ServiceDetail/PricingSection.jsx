import { Link } from "react-router-dom";

const PRICING = [
  { service: "3D print (you provide the file)", price: "$50" },
  { service: "3D modelling + print", price: "$250" },
  { service: "Custom blister packaging (per design)", price: "$300" },
  { service: "Full-service: model + print + package", price: "$1,000" },
  { service: "Consultation", price: "$100/hr" },
];

export default function PricingSection() {
  return (
    <section className="bg-[#F7F8F9] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#1F2A30]">
            PRICING SNAPSHOT
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
            Transparent Pricing
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          {PRICING.map((row, idx) => (
            <div
              key={row.service}
              className={[
                "flex items-center justify-between gap-6 px-6 py-5 sm:px-10",
                idx !== PRICING.length - 1 ? "border-b border-black/5" : "",
              ].join(" ")}
            >
              <span className="text-[15px] font-semibold text-[#1F2A30]">
                {row.service}
              </span>
              <span className="whitespace-nowrap text-[15px] font-extrabold text-[#1F2A30]">
                Starting at {row.price}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm italic text-black/55">
          Every project is different. Send us the details and we'll quote it
          properly — no charge, no obligation.
        </p>

        <div className="mt-8 text-center">
          <Link
            to="/#get-in-touch"
            className="nes-btn is-primary inline-flex h-12 items-center justify-center px-8 text-sm font-semibold text-white hover:opacity-95"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
