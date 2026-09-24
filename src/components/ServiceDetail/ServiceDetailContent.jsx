import ServiceFeatureGrid from "./ServiceFeatureGrid";
import ServiceSteps from "./ServiceSteps";
import ServiceFaq from "./ServiceFaq";

import featuredImg from "../../assets/images/hero3.jpeg";

export default function ServiceDetailContent({ title, paragraphs = [] }) {
  return (
    <div>
      {/* Featured Image */}
      <div className="overflow-hidden rounded-2xl bg-black/5">
        <img src={featuredImg} alt="" className="w-full object-cover" />
      </div>

      {/* Title */}
      <h2 className="mt-8 text-2xl font-extrabold text-[#1F2A30]">
        {title}
      </h2>

      {paragraphs.map((p) => (
        <p key={p} className="mt-4 text-sm leading-7 text-black/60">
          {p}
        </p>
      ))}

      <ServiceFeatureGrid />

      <ServiceSteps />

      <ServiceFaq />
    </div>
  );
}
