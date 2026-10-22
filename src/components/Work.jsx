import { useState } from "react";
import { FaGithub, FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projectData } from "../assets/asstes";
import TiltCard from "./TiltCard";
import LaptopMockup from "./LaptopMockup";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Enterprise & Govt", "AI & Full Stack", "Backend & Systems"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  // Flagship E-DAK Project
  const edakProject = projectData[0];
  const otherProjects = projectData.slice(1);

  return (
    <section id="Work" className="py-28 relative apple-grid-pattern scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="text-xs font-mono text-[#86868b] uppercase tracking-widest mb-2">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-apple-headline tracking-tight">
              Selected Work.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white/15 text-white font-semibold shadow-sm"
                    : "text-[#86868b] hover:text-[#f5f5f7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D FEATURED LAPTOP SHOWCASE (E-DAK) */}
        {(selectedCategory === "All" || selectedCategory === "Enterprise & Govt") && (
          <div className="mb-16 apple-card p-8 sm:p-12 rounded-3xl border border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Details & Specs */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#30d158]/15 border border-[#30d158]/30 text-[#30d158] font-mono">
                    🟢 Live e-Governance Platform
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.05] border border-white/10 text-[#86868b]">
                    MPOnline & TCS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {edakProject.title}
                </h3>

                <p className="text-[#86868b] text-sm leading-relaxed font-normal">
                  {edakProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {edakProject.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#a1a1a6] bg-white/[0.03] border border-white/[0.06]"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={edakProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full text-xs font-semibold apple-btn-primary flex items-center gap-2 shadow-lg"
                  >
                    <span>Launch edak.mponline.gov.in</span>
                    <FaArrowUpRightFromSquare className="text-[10px]" />
                  </a>

                  <a
                    href={edakProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full text-xs font-medium apple-btn-secondary flex items-center gap-2"
                  >
                    <FaGithub className="text-sm" />
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 3D Animated Laptop Mockup */}
              <div className="lg:col-span-7 flex justify-center py-4">
                <LaptopMockup
                  image={edakProject.image}
                  alt="E-DAK Enterprise Portal"
                  url={edakProject.demo}
                  badge="Govt of MP & TCS"
                />
              </div>

            </div>
          </div>
        )}

        {/* OTHER PROJECTS GRID WITH 3D LAPTOP / DEVICE FRAMES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(selectedCategory === "All"
            ? otherProjects
            : filteredProjects.filter((p) => p !== edakProject)
          ).map((project, index) => (
            <TiltCard
              key={index}
              maxTilt={6}
              scale={1.01}
              className="rounded-3xl apple-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* 3D Laptop Preview inside Card */}
                <div className="mb-6 pt-2">
                  <LaptopMockup
                    image={project.image}
                    alt={project.title}
                    url={project.demo}
                    badge={project.category}
                  />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.stats && (
                    <span className="text-[11px] font-mono text-[#a1a1a6]">
                      {project.stats}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-[#2997ff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#86868b] text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#a1a1a6] bg-white/[0.03] border border-white/[0.06]"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#86868b] hover:text-white transition-colors"
                >
                  <FaGithub className="text-sm" />
                  <span>Source Code</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2997ff] hover:text-[#70b8ff] transition-colors"
                >
                  <span>Architecture Details</span>
                  <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* GitHub Direct Link */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/Shivam-Amarghade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold apple-btn-secondary"
          >
            <FaGithub className="text-sm" />
            <span>Explore All Repositories on GitHub ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
