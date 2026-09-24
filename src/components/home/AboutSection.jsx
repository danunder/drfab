import { Check, Mail } from "lucide-react";
import hero1 from "../../assets/images/hero1.jpeg";
import hero2 from "../../assets/images/hero2.png";

/**
 * AboutSection
 * - Left: image collage with experience badge
 * - Right: headings, copy, checklist, phone + signature row
 */
export default function AboutSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-300 items-center px-4 sm:px-6 lg:grid-cols-2">
        {/* LEFT: image collage */}
        <div className="relative mx-auto w-full max-w-130 lg:mx-0">
          {/* Main image placeholder */}
          <div className="relative overflow-hidden rounded-3xl bg-gray-200">
            {/* Replace this div with your <img /> later */}
            <img
              src={hero2}
              alt="drfab workshop"
              className="h-105 w-full sm:h-120 object-cover"
            />
          </div>

          {/* Experience badge
          <div className="absolute left-0 top-24 -translate-x-6 rounded-2xl bg-[#1F2A30] px-8 py-8 text-white shadow-lg sm:-translate-x-10">
            <div className="text-5xl font-extrabold leading-none">25+</div>
            <div className="mt-4 text-sm font-semibold">Year of experience</div>
          </div> */}

          {/* Small bottom image placeholder */}
          <div className="absolute bottom-10 right-6 w-60 overflow-hidden rounded-2xl border-8 border-white bg-gray-200 shadow-lg sm:right-10 sm:w-70">
            <img src={hero1} alt="" className="h-40 w-full sm:h-45" />
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="relative">
          {/* Watermark */}
          <div className="pointer-events-none absolute -top-23 left-0 hidden select-none text-[120px] font-extrabold tracking-tight text-black/8 lg:block">
            About Us
          </div>

          <p className="text-sm font-semibold tracking-[0.22em] text-[#1F2A30]">
            WHAT WE DO
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-[#1F2A30] sm:text-4xl">
            Prototyping
            <br className="hidden sm:block" />
            to Production
          </h2>

          <div className="mt-6 grid lg:grid-cols-[1.25fr_0.75fr]">
            {/* Paragraph */}
            <p className="text-[15px] leading-7 text-[#5C6B73] pr-6">
              drfab takes your idea from sketch to shelf-ready product — all
              under one roof. No weeks of back-and-forth
              between vendors.
            </p>

            {/* Checklist */}
            <ul className="space-y-3">
              <CheckItem text="No Minimum Orders" />
              <CheckItem text="One Point of Contact" />
              <CheckItem text="Model, Print & Package In-House" />
            </ul>
          </div>

          {/* Bottom row */}
          <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Email box */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F2A30] text-white">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-[#5C6B73]">Email us anytime</p>
                <p className="text-lg font-extrabold text-[#1F2A30]">
                  hello@drfab.biz
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

/** Checklist row */
function CheckItem({ text }) {
  return (
    <li className="flex items-center gap-3 text-[15px] text-[#1F2A30]">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1F2A30] text-[11px] text-white">
        <Check size={15} color="#ffffff" />
      </span>
      <span className="font-semibold">{text}</span>
    </li>
  );
}
