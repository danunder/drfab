import { useEffect } from "react";
import logo from "../../assets/images/drfablogo.png";
import { Globe, MailCheck, MapPin, Phone } from "lucide-react";
import etsyIcon from "../../assets/social-icons/etsy.png";
import tiktokIcon from "../../assets/social-icons/tiktok.png";

/**
 * SidePanel (Desktop off-canvas modal)
 * - Slides in from the right
 * - Backdrop click + ESC closes
 * - Locks body scroll while open
 */


export default function SidePanel({ open, onClose }) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 hidden md:block">
      {/* Backdrop */}
      {/* <button
        className="nes-btn is-error inline-flex h-10 w-10 items-center justify-center bg-[#1F2A30] text-white text-3xl"
        aria-label="Close side panel backdrop"
        onClick={onClose}
      >X</button> */}

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-[420px] max-w-[92vw] bg-white shadow-xl">
        {/* Header: logo top-left, close button top-right */}
        <div className="flex items-center justify-between p-6">
          <img src={logo} alt="drfab" className="h-16 w-auto origin-left rotate-[5deg] scale-170" />

          <button
            type="button"
            className="nes-btn is-error inline-flex h-10 w-10 items-center justify-center bg-[#1F2A30] text-white text-xl"
            aria-label="Close side panel"
            onClick={onClose}
          >X</button>
        </div>

        <div className="px-8 pb-10">
          <div className="mt-4 text-lg text-[#5C6B73]">
            3d modelling
          </div>
          <div className="mt-2 text-lg text-[#5C6B73]">
            & printshop
          </div>

          {/* Description */}
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-[#6B7780]">
            No jobs too small, please give us a call.
          </p>

          {/* Contact block */}
          <h3 className="mt-8 text-lg font-extrabold text-[#1F2A30]">
            Get In Touch
          </h3>

          <ul className="mt-5 space-y-4 text-[15px] text-[#5C6B73]">
            <li className="flex items-center gap-3">
              <IconBubble>
                <Phone />
              </IconBubble>
              <span>+1 416 500 3579</span>
            </li>
            <li className="flex items-center gap-3">
              <IconBubble>
                <MailCheck />
              </IconBubble>
              <span>hello@drfab.biz</span>
            </li>
            <li className="flex items-center gap-3">
              <IconBubble>
                <Globe />
              </IconBubble>
              <span>www.drfab.biz</span>
            </li>
            <li className="flex items-center gap-3">
              <IconBubble>
                <MapPin />
              </IconBubble>
              <span>Corso Italia, Toronto, ON</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-3">
            <a href="https://www.etsy.com/ca/people/tgg9bpgjs03j492z" target="_blank" rel="noopener noreferrer">
                                <img
                                  src={etsyIcon}
                                  alt="Etsy"
                                  className="h-12 w-12 rounded"
                                />
                              </a>
                              <a href="https://www.tiktok.com/@drfab.biz" target="_blank" rel="noopener noreferrer">
                                <img
                                  src={tiktokIcon}
                                  alt="TikTok"
                                  className="h-15 w-30 rounded"
                                />
                              </a>
                            <a href="https://www.instagram.com/drfab.biz/" target="_blank" rel="noopener noreferrer">
                            
                              <i
                                className={`nes-icon is-medium instagram mt-1`}
                                aria-hidden="true"
                              ></i>
                            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

/** Small icon bubble (placeholder icons) */
function IconBubble({ children }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
      {children}
    </span>
  );
}

/** Social circle placeholder */
function SocialCircle({ label, image }) {
  return (
    <div>
      <img
        src={image}
        alt={label}
        className="h-12 w-12 object-cover bg-white rounded-full"
      />
    </div>
  );
}
