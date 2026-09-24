import { Globe, MailCheck, MapPin, Phone } from "lucide-react";
import { useState } from "react";

/**
 * RequestQuote
 * - Left: heading + contact details
 * - Right: contact form
 * - Responsive: stacks on small screens
 */
export default function RequestQuote() {

  const [result, setResult] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "00d4b947-0922-42d3-9a97-0b2a0dd089ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section id="get-in-touch" className="bg-white py-10 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* LEFT: Heading + contact details */}
          <div className="relative rounded-xl bg-white p-8 shadow-sm sm:p-10">
            {/* Watermark */}
            <div className="pointer-events-none absolute -top-10 left-6 hidden select-none text-[120px] font-extrabold tracking-tight text-black/7 lg:block">
              Hello
            </div>

            <p className="text-sm font-semibold tracking-[0.22em] text-[#1F2A30]">
              GET IN TOUCH
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#1F2A30] sm:text-5xl">
              Let&apos;s make something
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-7 text-[#5C6B73]">
              Tell us about your project. We&apos;ll get back to you within 24
              hours with questions or a quote.
            </p>

            {/* Contact details */}
            <ul className="mt-6 space-y-3 text-[15px] text-[#5C6B73]">
              <li className="flex items-center gap-3">
                <IconBubble>
                  <Phone className="h-4 w-4" />
                </IconBubble>
                <span>+1 416 500 3579</span>
              </li>
              <li className="flex items-center gap-3">
                <IconBubble>
                  <MailCheck className="h-4 w-4" />
                </IconBubble>
                <span>hello@drfab.biz</span>
              </li>
              <li className="flex items-center gap-3">
                <IconBubble>
                  <Globe className="h-4 w-4" />
                </IconBubble>
                <span>www.drfab.biz</span>
              </li>
              <li className="flex items-center gap-3">
                <IconBubble>
                  <MapPin className="h-4 w-4" />
                </IconBubble>
                <span>Corso Italia, Toronto, ON</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: Contact form */}
          <div className="relative rounded-xl bg-white p-8 shadow-sm sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your Name"
                    className="h-12 w-full rounded-xl bg-black/5 px-5 text-sm text-[#1F2A30] outline-none placeholder:text-[#5C6B73] focus:ring-2 focus:ring-black/10"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="quote-number" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="quote-number"
                    name="phone"
                    type="text"
                    autoComplete="tel"
                    placeholder="Number"
                    className="h-12 w-full rounded-xl bg-black/5 px-5 text-sm text-[#1F2A30] outline-none placeholder:text-[#5C6B73] focus:ring-2 focus:ring-black/10"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div>
                <label htmlFor="quote-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="quote-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  className="h-12 w-full rounded-xl bg-black/5 px-5 text-sm text-[#1F2A30] outline-none placeholder:text-[#5C6B73] focus:ring-2 focus:ring-black/10"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="quote-message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={5}
                  placeholder="Type Your Message"
                  className="w-full resize-none rounded-xl bg-black/5 px-5 py-4 text-sm text-[#1F2A30] outline-none placeholder:text-[#5C6B73] focus:ring-2 focus:ring-black/10"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className={`nes-btn ${result ? (result === "Success!" ? "is-success" : "is-error ") : "is-primary"} inline-flex h-12 items-center justify-center px-8 text-sm font-semibold text-white hover:opacity-95`}
              >
                {result ? result : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small icon bubble (matches SidePanel styling) */
function IconBubble({ children }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
      {children}
    </span>
  );
}
