import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiNodedotjs, SiReact } from "react-icons/si";
import { assets, personalInfo } from "../assets/asstes";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden apple-ambient-glow apple-grid-pattern scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Apple Keynote Style Presentation (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Minimalist Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-pill text-xs text-[#86868b] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#30d158] inline-block" />
              <span className="text-[#f5f5f7] font-medium">Software Engineering Intern @ MPOnline</span>
              <span className="text-white/20">•</span>
              <span className="font-mono text-[11px]">Bhopal, MP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-[1.08] text-apple-headline">
              Shivam Amarghade
              <br />
              <span className="text-[#f5f5f7]">Software Engineer building scalable products.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#86868b] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              Full-stack developer focused on React, Node.js, and backend systems. I build reliable, user-focused software and contributed to enterprise e-Governance systems like <a href="https://edak.mponline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#2997ff] hover:underline font-medium">E-DAK</a> at MPOnline Limited (Govt of MP + TCS).
            </p>

            {/* Apple Style CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-12">
              <a
                href="#Work"
                className="px-6 py-3 rounded-full text-sm font-semibold apple-btn-primary flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>View Selected Work</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="https://edak.mponline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-sm font-medium apple-btn-secondary flex items-center gap-2 cursor-pointer text-[#f5f5f7]"
              >
                <span>E-DAK Live Portal</span>
                <FaArrowUpRightFromSquare className="text-xs text-[#2997ff]" />
              </a>

              <a
                href={personalInfo.resumeLink}
                download="Shivam_Amarghade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full text-xs font-mono text-[#86868b] hover:text-white transition-colors"
              >
                Download Resume ↗
              </a>

              <a
                href="#Contact"
                className="px-5 py-3 rounded-full text-sm font-medium apple-btn-secondary flex items-center gap-2"
              >
                Contact Me
              </a>
            </div>

            {/* Clean Spec Metrics (Apple Keynote Style) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  6 Mo.
                </div>
                <div className="text-xs text-[#86868b] mt-0.5">MPOnline / TCS Exp</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  15+
                </div>
                <div className="text-xs text-[#86868b] mt-0.5">REST APIs Built</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  8.14
                </div>
                <div className="text-xs text-[#86868b] mt-0.5">OIST Bhopal CGPA</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  ~40%
                </div>
                <div className="text-xs text-[#86868b] mt-0.5">API Speed Boost</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Titanium Precision Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <TiltCard maxTilt={8} scale={1.01} className="w-full max-w-sm">
              <div className="rounded-3xl p-1 bg-gradient-to-b from-white/[0.12] to-white/[0.03] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                <div className="rounded-[22px] bg-[#121215] overflow-hidden p-5 border border-white/[0.06]">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono text-[#86868b]">
                      shivam.profile
                    </span>
                  </div>

                  {/* Profile Picture in Precision Frame */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 border border-white/[0.08] group bg-[#0a0a0c]">
                    <img
                      src={assets.profileImg}
                      alt="Shivam Amarghade"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-50" />
                    
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] text-white font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
                      Associate System / Software Engineer
                    </div>
                  </div>

                  {/* Minimal Code Spec Box */}
                  <div className="rounded-xl bg-black/50 p-3.5 border border-white/[0.05] font-mono text-xs text-[#86868b] space-y-1">
                    <p className="text-[#f5f5f7]">
                      <span className="text-[#2997ff]">const</span> intern = &#123;
                    </p>
                    <p className="pl-4 text-[#a1a1a6]">
                      company: <span className="text-white">"MPOnline (Govt + TCS)"</span>,
                    </p>
                    <p className="pl-4 text-[#a1a1a6]">
                      project: <span className="text-[#30d158]">"E-DAK e-Governance"</span>,
                    </p>
                    <p className="pl-4 text-[#a1a1a6]">
                      stack: [<span className="text-white">"React"</span>, <span className="text-white">"Node"</span>, <span className="text-white">"MySQL"</span>, <span className="text-white">"MongoDB"</span>]
                    </p>
                    <p className="text-[#f5f5f7]">&#125;;</p>
                  </div>

                </div>
              </div>
            </TiltCard>

            {/* Floating Tech Badges */}
            <div className="hidden sm:flex absolute -top-3 -left-4 px-3 py-1.5 rounded-full apple-pill text-xs text-white items-center gap-2 shadow-xl animate-subtle-float">
              <SiNodedotjs className="text-sm text-[#30d158]" />
              <span className="font-medium text-[11px]">Node.js / Express</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full apple-pill text-xs text-white items-center gap-2 shadow-xl animate-subtle-float">
              <SiReact className="text-sm text-[#2997ff]" />
              <span className="font-medium text-[11px]">React.js / Redux</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
