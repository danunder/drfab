import ServiceFaq from "../ServiceDetail/ServiceFaq";

const FAQS = [
  {
    q: "What file formats do you accept?",
    a: "STL, OBJ, STEP, 3MF, or native files from Blender, ZBrush, Fusion 360, SolidWorks, etc. Not sure? Send it over and we'll figure it out.",
  },
  {
    q: "I don't have a 3D model. Can you still help?",
    a: "Absolutely. Send a sketch, a photo, measurements, or just describe what you need. Modelling is one of our core services.",
  },
  {
    q: "What materials can you print in?",
    a: "PLA, PETG, ABS, ASA, TPU, Nylon, and more (FDM). Standard, tough, flexible, and castable resins. We'll recommend the right material for your application.",
  },
  {
    q: "How fast can you turn things around?",
    a: "Standard turnaround is 1–2 weeks depending on complexity. Rush service available for an additional fee.",
  },
  {
    q: "What's the minimum order?",
    a: "One. Literally one. That's the whole point.",
  },
  {
    q: "Do you ship?",
    a: "Yes — anywhere in Ontario (and beyond). Local pickup is also free in Toronto.",
  },
  {
    q: "Is there a setup fee for packaging?",
    a: "The first blister mold is included in the quote. If you need additional sizes or designs, each mold is quoted separately. Once the mold exists, per-unit costs are low.",
  },
  {
    q: "Can I get a sample before committing to a run?",
    a: "Yes. We always recommend approving a sample before production runs. It's built into our process.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ServiceFaq
          faqs={FAQS}
          heading="Questions"
          intro="Answers to the most common questions we get about files, materials, turnaround, and pricing."
        />
      </div>
    </section>
  );
}
