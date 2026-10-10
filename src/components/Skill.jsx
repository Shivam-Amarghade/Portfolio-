import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { skillsData } from "../assets/asstes";
import TiltCard from "./TiltCard";

export default function Skill() {
  const [activeTab, setActiveTab] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Capabilities" },
    { id: "backend", label: "Backend & APIs" },
    { id: "frontend", label: "Frontend" },
    { id: "database", label: "Databases" },
    { id: "tools", label: "Tools" },
    { id: "core", label: "Core CS" },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="Skills" className="py-28 relative apple-ambient-glow">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="text-xs font-mono text-[#86868b] uppercase tracking-widest mb-2">
              Expertise
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-apple-headline tracking-tight">
              Technical Stack.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white/15 text-white font-semibold"
                    : "text-[#86868b] hover:text-[#f5f5f7]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComp = skill.icon || FaCode;
            return (
              <TiltCard
                key={index}
                maxTilt={6}
                scale={1.01}
                className="rounded-3xl apple-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white text-xl">
                      <IconComp />
                    </div>
                    {skill.level && (
                      <span className="text-xs font-mono text-[#86868b]">
                        {skill.level}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-[#86868b] uppercase tracking-wider mb-5 font-mono">
                    {skill.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium text-[#f5f5f7] bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Minimalist Progress Meter */}
                <div className="mt-6 pt-4 border-t border-white/[0.05]">
                  <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white/70 rounded-full"
                      style={{ width: skill.level || "85%" }}
                    />
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}