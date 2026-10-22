import { FaLinkedin, FaGithub, FaInstagram, FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  const footerNav = ["Home", "Experience", "Work", "Skills", "About", "Contact"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#000000] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-sm font-semibold text-white tracking-tight">
              Shivam Amarghade
            </span>
            <span className="text-xs text-[#86868b] font-mono mt-0.5">
              Full-Stack & Backend Systems Engineer
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#86868b]">
                {footerNav.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-2">
              <a
                href="https://www.linkedin.com/in/shivam-amarghade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-[#86868b] hover:text-white transition-all text-sm"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Shivam-Amarghade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-[#86868b] hover:text-white transition-all text-sm"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/shivamcode99?igsh=dWRkdndtdmhkYXk1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-[#86868b] hover:text-white transition-all text-sm"
              >
                <FaInstagram />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-[#86868b] hover:text-white transition-all cursor-pointer text-xs"
              title="Back to Top"
            >
              <FaArrowUp />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6e6e73] font-mono">
          <div>
            © {new Date().getFullYear()} Shivam Amarghade. All rights reserved.
          </div>
          <div>
            Built with React & Vite
          </div>
        </div>

      </div>
    </footer>
  );
}