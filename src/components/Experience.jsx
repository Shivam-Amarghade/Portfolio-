import { FaArrowUpRightFromSquare, FaBuildingColumns } from "react-icons/fa6";
import { experienceData } from "../assets/asstes";
import TiltCard from "./TiltCard";
import LaptopMockup from "./LaptopMockup";

export default function Experience() {
  return (
    <section id="Experience" className="py-24 relative apple-ambient-glow scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-[#86868b] uppercase tracking-widest mb-2">
            Professional Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-apple-headline tracking-tight">
            Work Experience.
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <TiltCard
              key={index}
              maxTilt={4}
              scale={1.01}
              className="rounded-3xl apple-card p-8 sm:p-10 border border-white/[0.08]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#86868b] mb-3">
                    <FaBuildingColumns className="text-white text-xs" />
                    <span>{exp.type}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                    {exp.role}
                  </h3>

                  <div className="text-base text-[#a1a1a6] font-medium">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-2 text-xs font-mono text-[#86868b]">
                  <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    {exp.duration}
                  </span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-6 font-normal">
                {exp.description}
              </p>

              {/* Grid: 3D Laptop Mockup + Key Points */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-center">
                {exp.image && (
                  <div className="lg:col-span-6 flex justify-center">
                    <LaptopMockup
                      image={exp.image}
                      alt="E-DAK Portal Interface"
                      url={exp.liveUrl}
                      badge="Live e-Governance"
                    />
                  </div>
                )}

                <div className={`${exp.image ? "lg:col-span-6" : "lg:col-span-12"} space-y-2.5`}>
                  {exp.keyPoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-3 text-xs text-[#a1a1a6]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live E-DAK Link Action */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#86868b]">
                  <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                  <span>Deployed on State-Level e-Governance Infrastructure</span>
                </div>

                <a
                  href={exp.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold apple-btn-primary shadow-lg hover:scale-105 transition-all"
                >
                  <span>Visit Live Portal: edak.mponline.gov.in</span>
                  <FaArrowUpRightFromSquare className="text-[10px]" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
