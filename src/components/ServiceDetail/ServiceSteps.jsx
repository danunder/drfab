import stepImg1 from "../../assets/images/hero3.jpeg";
import stepImg2 from "../../assets/images/hero3.jpeg";

const steps = [
  {
    img: stepImg1,
    title: "Choose Your Process",
    bullets: [
      "Resin Printing",
      "Filament (FDM) Printing",
      "3D Modelling",
      "Rapid Prototyping",
    ],
  },
  {
    img: stepImg2,
    title: "We Build It Right",
    bullets: [
      "Engineering-Grade Filaments",
      "Cosplay & Prop Finishing",
      "Multi-Material Options",
      "Quality Checked Before Shipping",
    ],
  },
];

export default function ServiceSteps() {
  return (
    <section className="mt-14">
      <h3 className="text-2xl font-extrabold text-[#1F2A30]">
        2 Simple Steps to Process
      </h3>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
        Tell us what you need and which process fits best — resin for fine
        detail, FDM filament for strength and size. We'll recommend materials
        for the application, whether it's a functional part or a cosplay prop.
      </p>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
        Every print is checked for quality before it leaves our shop, so what
        you get back matches what you approved.
      </p>

      <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
        {steps.map((s, idx) => (
          <div key={idx} className="grid gap-6 p-6 sm:grid-cols-[200px_1fr]">
            {/* Left image */}
            <div className="overflow-hidden rounded-xl bg-black/5">
              <img
                src={s.img}
                alt=""
                className="h-[120px] w-full object-cover sm:h-[110px]"
              />
            </div>

            {/* Right content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-[16px] font-extrabold text-[#1F2A30]">
                {s.title}
              </h4>

              <div className="mt-3 grid gap-x-10 gap-y-2 text-xs text-black/55 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <p key={b} className="leading-6">
                    {b}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
