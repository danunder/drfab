import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

/**
 * FooterArea (fixed)
 * ✅ Floating Map card no longer clipped
 * ✅ Background rings still clipped (inner wrapper uses overflow-hidden)
 * ✅ Matches screenshot: centered floating card + dark footer content below
 */
export default function FooterArea() {
  return (
    // IMPORTANT: overflow-visible so the floating card can sit above the footer
    <footer className="relative isolate z-10 overflow-visible text-white mt-90 lg:mt-60">
      {/* Floating Map + Contact card */}
      <div className="absolute left-1/2 top-0 z-30 w-full -translate-x-1/2 -translate-y-1/2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] lg:grid-cols-[1.35fr_0.65fr]">
            {/* MAP (left) */}
            <div className="relative h-[300px] bg-gray-200 lg:h-[420px]">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11542.779047691316!2d-79.45913715!3d43.67531765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1790207019787!5m2!1sen!2sca"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* CONTACT (right) */}
            <div className="p-5 text-[#1F2A30]">
              <h3 className="text-3xl font-extrabold">Contact Us</h3>

              {/* underline */}
              <div className="mt-4 flex items-center gap-2 px-5">
                <div className="h-[3px] w-10 rounded bg-black/15" />
                <div className="h-[3px] w-3 rounded bg-black/10" />
              </div>

              <div className="mt-5 lg:mt-10 space-x-2 space-y-8 grid grid-cols-1 ">
                <ContactRow
                  icon={<Phone className="h-5 w-5" />}
                  title="Call Us"
                  value="+1 416 500 3579"
                />
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  title="Work with us"
                  value="hello@drfab.biz"
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="Our Location"
                  value="Corso Italia, Toronto, ON"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INNER WRAPPER (clips rings + background only) */}
      <div className="relative overflow-hidden bg-[#1F2A30] pt-90 lg:pt-70 pb-10">
        {/* Subtle background rings (as in screenshot) */}
        <div className="pointer-events-none absolute -left-64 top-28 h-[560px] w-[560px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-72 top-10 h-[680px] w-[680px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -left-24 bottom-[-260px] h-[560px] w-[560px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute right-24 bottom-[-320px] h-[720px] w-[720px] rounded-full border border-white/5" />

        {/* Footer content */}
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
              {/* Opening Hours (left card) */}
              <div className="w-full max-w-[320px] rounded-2xl bg-gradient-to-b from-[#111A20] to-[#0E161C] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <h4 className="text-lg font-bold">Opening Hours</h4>
                <div className="mt-3 h-[3px] w-10 bg-white/15" />

                <div className="mt-6 space-y-4 text-sm text-white/85">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Week Days</span>
                    <span className="text-white/70">09.00 - 24.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-white/70">08.00 - 03.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-white/70">Day Off</span>
                  </div>
                </div>

                <Link
                  to="/#get-in-touch"
                  className="nes-btn mt-8 inline-block rounded-xl bg-white px-7 py-3 text-sm font-semibold text-[#1F2A30] shadow-sm"
                >
                  Contact Us
                </Link>
              </div>

              {/* Quick Links (middle) */}
              <div>
                <h4 className="text-lg font-bold">Quick Links</h4>
                <div className="mt-3 h-[3px] w-10 bg-white/15" />

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <ul className="space-y-3 text-sm text-white/70">
                    <FooterLink to="/support" label="Forum Support" />
                    <FooterLink to="/faq" label="Help & FAQ" />
                    <FooterLink to="/#get-in-touch" label="Contact Us" />
                    <FooterLink to="/pricing" label="Pricing & Plans" />
                    <FooterLink to="/cookies" label="Cookie Policy" />
                  </ul>

                  <ul className="space-y-3 text-sm text-white/70">
                    <FooterLink to="/about" label="About Us" />
                    <FooterLink to="/account" label="My Account" />
                    <FooterLink to="/company" label="Our Company" />
                    <FooterLink to="/service" label="Service" />
                  </ul>
                </div>
              </div>

              {/* Get Updates (right) */}
              <div>
                <h4 className="text-lg font-bold">Get Updates</h4>
                <div className="mt-3 h-[3px] w-10 bg-white/15" />

                <p className="mt-6 max-w-sm text-sm text-white/60">
                  Sign up for our latest news &amp; articles. We won’t give you
                  spam mails.
                </p>

                <div className="mt-6 flex max-w-sm items-stretch gap-3">
                  <div className="flex w-full overflow-hidden rounded-lg bg-white">
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full px-4 py-3 text-sm text-[#1F2A30] outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="nes-btn is-primary grid h-[46px] w-[52px] place-items-center rounded-lg bg-[#1F2A30] text-white shadow-sm"
                    aria-label="Subscribe"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-xs text-white/50">
                  Note: We do not publish your email
                </p>
              </div>
            </div>

            {/* Divider line */}
            <div className="mt-14 h-px w-full bg-white/10" />

            {/* Copyright */}
            <p className="mt-6 text-center text-xs text-white/70">
              © 2026 drfab. A partnership of Dan & Ryan in Ontario, Canada.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Contact row used in the right panel */
function ContactRow({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-[#1F2A30]">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-black/60">{title}</p>
        <p className="mt-1 text-sm text-black/80">{value}</p>
      </div>
    </div>
  );
}

/** Footer link line with arrow icon */
function FooterLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="group inline-flex items-center gap-2 hover:text-white"
      >
        <ArrowRight className="h-4 w-4 text-white/35 group-hover:text-white/70" />
        <span>{label}</span>
      </Link>
    </li>
  );
}
