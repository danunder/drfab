import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SidePanel from "./SidePanel";
import ServiceDropdown from "./ServiceDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import { Mail, Clock, Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/images/drfablogo.png";
import etsyIcon from "../../assets/social-icons/etsy.png";
import tiktokIcon from "../../assets/social-icons/tiktok.png";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  // Services dropdown
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef(null);

  // Projects dropdown
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsCloseTimerRef = useRef(null);

  const navItems = useMemo(
    () => [
      { label: "Services", to: "/services", hasDropdown: true },
      { label: "Projects", to: "/projects", hasDropdown: true },
      { label: "About", to: "/about", hasDropdown: false },
      { label: "Contact", to: "/#get-in-touch", hasDropdown: false },
    ],
    [],
  );

  // ✅ NEW: refs + state to pin ONLY the main navbar after top bar scrolls away
  const topBarRef = useRef(null);
  const mainNavRef = useRef(null);
  const [pinMainNav, setPinMainNav] = useState(false);
  const [mainNavHeight, setMainNavHeight] = useState(0);

  // ESC closes
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
        setProjectsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Helpers for premium hover (delay close + cancel close)
  const openServices = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 140);
  };

  const openProjects = () => {
    if (projectsCloseTimerRef.current)
      window.clearTimeout(projectsCloseTimerRef.current);
    setProjectsOpen(true);
  };

  const scheduleCloseProjects = () => {
    if (projectsCloseTimerRef.current)
      window.clearTimeout(projectsCloseTimerRef.current);
    projectsCloseTimerRef.current = window.setTimeout(() => {
      setProjectsOpen(false);
    }, 140);
  };

  // ✅ NEW: pin main nav after scrolling past top bar
  useEffect(() => {
    const measure = () => {
      const h = mainNavRef.current?.offsetHeight || 0;
      setMainNavHeight(h);
    };

    const onScroll = () => {
      const topBarH = topBarRef.current?.offsetHeight || 0;
      setPinMainNav(window.scrollY > topBarH);
    };

    measure();
    onScroll();

    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Top utility bar (desktop) */}
      <div
        ref={topBarRef}
        className="hidden w-full bg-[#1F2A30] text-white md:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded bg-white/10">
                <i className="nes-icon gmail is-small" aria-hidden="true"></i>
              </span>
              <span><a href="mailto:hello@drfab.biz">hello@drfab.biz</a></span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <nav className="flex items-center gap-6">
              <Link className="opacity-90 hover:opacity-100" to="/faq">
                Faq
              </Link>
              <Link className="opacity-90 hover:opacity-100" to="/#get-in-touch">
                Contact
              </Link>
            </nav>

            <span className="h-4 w-px bg-white/20" />

            <div className="flex items-center">
                  <a href="https://www.etsy.com/ca/people/tgg9bpgjs03j492z" target="_blank" rel="noopener noreferrer">
                    <img
                      src={etsyIcon}
                      alt="Etsy"
                      className="h-8 w-8 rounded"
                    />
                  </a>
                  <a href="https://www.tiktok.com/@drfab.biz" target="_blank" rel="noopener noreferrer">
                    <img
                      src={tiktokIcon}
                      alt="TikTok"
                      className="h-10 w-20 rounded"
                    />
                  </a>
                <a
                  href="https://www.instagram.com/drfab.biz/" target="_blank" rel="noopener noreferrer">
                  <i
                    className={`nes-icon instagram`}
                    aria-hidden="true"
                  ></i>
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Spacer only when main nav is pinned (prevents jump) */}
      {pinMainNav ? <div style={{ height: mainNavHeight }} /> : null}

      {/* Main navbar */}
      <div
        ref={mainNavRef}
        className={[
          "w-full bg-white border-b border-gray-400 transition-all",
          pinMainNav ? "fixed top-0 left-0 right-0 z-50" : "",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo + (subtitle / nav) column */}
          <div className="flex items-center gap-4">
            <NavLink to="/" className="shrink-0">
              <img
                src={logo}
                alt="drfab"
                className="h-24 md:h-30 w-auto rotate-[5deg]"
              />
            </NavLink>

            <div className="ml-6">
              <div className="text-2xl text-[#5C6B73]">
                3d modelling & printshop
              </div>

              {/* Desktop nav */}
              <nav className="relative mt-4 hidden md:grid grid-flow-col auto-cols-max items-center">
                {navItems.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.label}
                    className="relative md:inline-block px-4"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          "!inline-flex items-center gap-2 text-[10px] md:text-[14px] font-semibold text-[#1F2A30] hover:text-black",
                          isActive ? "text-black" : "",
                        ].join(" ")
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </NavLink>

                    <ServiceDropdown
                      open={servicesOpen}
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                      onClose={() => setServicesOpen(false)}
                    />
                  </div>
                );
              }

              if (item.label === "Projects") {
                return (
                  <div
                    key={item.label}
                    className="relative md:inline-block px-4"
                    onMouseEnter={openProjects}
                    onMouseLeave={scheduleCloseProjects}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          "!inline-flex items-center gap-2 text-[10px] md:text-[14px] font-semibold text-[#1F2A30] hover:text-black",
                          isActive ? "text-black" : "",
                        ].join(" ")
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </NavLink>

                    <ProjectsDropdown
                      open={projectsOpen}
                      onMouseEnter={openProjects}
                      onMouseLeave={scheduleCloseProjects}
                      onClose={() => setProjectsOpen(false)}
                    />
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "!inline-flex items-center gap-4 px-4 text-[10px] md:text-[14px] font-semibold text-[#1F2A30] hover:text-black",
                      isActive ? "text-black" : "",
                    ].join(" ")
                  }
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? (
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  ) : null}
                </NavLink>
              );
            })}
              </nav>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">

            <Link
              to="/#get-in-touch"
              className="nes-btn is-primary inline-flex px-2 py-1 text-xs font-semibold text-white md:px-7 md:py-3 md:text-sm"
            >
              Get Quote
            </Link>

             <button
              type="button"
              className="nes-btn inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC] md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="nes-btn hidden h-12 w-12 items-center justify-center pb-4 rounded-2xl bg-[#F2F3F4] text-[#1F2A30] text-3xl hover:bg-[#E9EBEC] md:inline-flex"
              aria-label="Open side panel"
              onClick={() => setSidePanelOpen(true)}
            >
              ≡
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu backdrop"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-xl">
            {/* Header: logo top-left, close button top-right */}
            <div className="flex items-center justify-between p-4">
              <img src={logo} alt="drfab" className="h-12 w-auto" />

              <button
                type="button"
                className="nes-btn is-error inline-flex h-10 w-10 items-center justify-center bg-[#1F2A30] text-white text-3xl"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >X
              </button>
            </div>

            <div className="px-6 pb-8">
              <div className="pb-6 text-xs text-[#5C6B73]">
                3d modelling & printshop
              </div>

              <div className="divide-y divide-gray-100 border-t border-gray-100">
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Projects
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Blog
                </Link>
                <Link
                  to="/#get-in-touch"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex items-center gap-4">
               <a href="https://www.etsy.com/ca/people/tgg9bpgjs03j492z" target="_blank" rel="noopener noreferrer">
                    <img
                      src={etsyIcon}
                      alt="Etsy"
                      className="h-8 w-8 rounded"
                    />
                  </a>
                  <a href="https://www.tiktok.com/@drfab.biz" target="_blank" rel="noopener noreferrer">
                    <img
                      src={tiktokIcon}
                      alt="TikTok"
                      className="h-10 w-20 rounded"
                    />
                  </a>
                <a
                  
                  href="https://www.instagram.com/drfab.biz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`nes-icon instagram`}
                    aria-hidden="true"
                  ></i>
                </a>
            </div>
            </div>
          </aside>
        </div>
      )}

      <SidePanel open={sidePanelOpen} onClose={() => setSidePanelOpen(false)} />
    </header>
  );
}

