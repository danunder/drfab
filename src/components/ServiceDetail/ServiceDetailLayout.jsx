import ServiceDetailContent from "./ServiceDetailContent";
import ServiceSidebar from "./ServiceSidebar";

export default function ServiceDetailLayout({ title, paragraphs }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <ServiceDetailContent title={title} paragraphs={paragraphs} />
        <ServiceSidebar />
      </div>
    </section>
  );
}
