import { FaCode, FaArrowRight, FaCircleCheck, FaAward } from "react-icons/fa6";
import { profileData, achievementsData, assets, personalInfo } from "../assets/asstes";
import TiltCard from "./TiltCard";

export default function About() {
  return (
    <section id="About" className="py-28 relative apple-grid-pattern scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 pb-8 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-[#86868b] uppercase tracking-widest mb-2">
            Background & Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-apple-headline tracking-tight">
            Behind the Craft.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Precision Image Frame (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <TiltCard maxTilt={6} scale={1.01} className="w-full max-w-sm">
              <div className="rounded-3xl p-1 bg-gradient-to-b from-white/[0.1] to-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                <div className="rounded-[22px] bg-[#121215] overflow-hidden p-5 border border-white/[0.06]">
                  
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] mb-5 group bg-[#0a0a0c]">
                    <img
                      src={assets.aboutImg}
                      alt="Shivam Amarghade"
                      className="w-full h-72 object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">Shivam Amarghade</span>
                      <span className="text-[#30d158] font-mono font-medium">OIST Bhopal</span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2 text-xs text-[#a1a1a6]">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="text-white text-xs flex-shrink-0" />
                      <span>Software & AI Intern @ MPOnline (Govt + TCS)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="text-white text-xs flex-shrink-0" />
                      <span>B.Tech CSBS: 8.14 CGPA (9.3 SGPA in 7th Sem)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="text-white text-xs flex-shrink-0" />
                      <span>15+ REST APIs, JWT Auth & AI Integration</span>
                    </div>
                  </div>

                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Story & Credentials (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Aspiring Software & Systems Engineer with enterprise e-Governance experience.
            </h3>

            <p className="text-base text-[#86868b] leading-relaxed mb-4 font-normal">
              I am a recent Computer Science and Business Systems graduate from <strong className="text-white font-semibold">Oriental Institute of Science and Technology (OIST), Bhopal (CGPA: 8.14/10, 9.3 SGPA in 7th sem)</strong>.
            </p>

            <p className="text-sm text-[#86868b] leading-relaxed mb-8 font-normal">
              During my 6-month Software Engineering and AI Foundation internship at <strong className="text-white font-semibold">MPOnline Limited (Joint Venture between Government of Madhya Pradesh and TCS)</strong>, I contributed to the <strong className="text-[#f5f5f7]">E-DAK enterprise Correspondence Management System</strong>. I focus on developing clean, testable frontend code in React.js and architecting high-throughput backend APIs with Node.js, Express, MongoDB, and MySQL.
            </p>

            {/* Profile Data Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
              {profileData.map((data, index) => {
                const IconComp = data.icon || FaCode;
                return (
                  <div
                    key={index}
                    className="apple-card p-4 rounded-2xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white text-sm mb-3">
                        <IconComp />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-2">
                        {data.title}
                      </h4>
                      <ul className="text-[11px] text-[#86868b] space-y-1">
                        {data.technologies.map((t, idx) => (
                          <li key={idx} className="leading-tight">
                            • {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={personalInfo.resumeLink}
                download="Shivam_Amarghade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs font-semibold apple-btn-primary flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FaArrowRight className="text-[10px]" />
              </a>

              <a
                href="#Contact"
                className="px-6 py-3 rounded-full text-xs font-medium apple-btn-secondary"
              >
                Contact Shivam
              </a>
            </div>

          </div>

        </div>

        {/* Certifications & Key Honors */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-[#86868b] uppercase tracking-widest mb-6">
            Certifications & Recognitions
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievementsData.map((item, idx) => (
              <div key={idx} className="apple-card p-5 rounded-2xl border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#a1a1a6] mb-2">
                  <FaAward className="text-white text-sm" />
                  <span>{item.issuer}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-[#86868b] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}