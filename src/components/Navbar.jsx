import { useState, useEffect } from "react";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";
import { navMenu, personalInfo } from "../assets/asstes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navMenu.map((item) => document.getElementById(item));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#121215]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#Home"
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-xs font-bold text-white tracking-wider group-hover:bg-white/15 transition-all">
              SA
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#f5f5f7] tracking-tight group-hover:text-white transition-colors">
                Shivam Amarghade
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-full backdrop-blur-xl">
            {navMenu.map((item) => {
              const isActive = activeSection === item;
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 font-semibold"
                      : "text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/[0.04]"
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Hiring Status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-[#86868b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] inline-block" />
              Available for hire
            </div>

            <a
              href={personalInfo.resumeLink}
              download="Shivam_Amarghade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-medium apple-btn-primary flex items-center gap-1.5"
            >
              Resume
              <FaArrowRight className="text-[10px]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#86868b] hover:text-white rounded-full bg-white/[0.04] border border-white/[0.08]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaXmark className="text-base" /> : <FaBars className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto px-6 py-5 bg-[#121215]/95 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navMenu.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item
                    ? "bg-white/10 text-white font-semibold"
                    : "text-[#86868b] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item}
              </a>
            ))}

            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href={personalInfo.resumeLink}
                download="Shivam_Amarghade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-semibold apple-btn-primary text-center flex items-center justify-center gap-2"
              >
                Download Resume <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
