import { useState, useRef } from "react";
import { FaLock, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function LaptopMockup({
  image,
  alt = "Project Preview",
  url = "",
  badge = "Live System",
  className = "",
}) {
  const [transform, setTransform] = useState(
    "perspective(1200px) rotateX(4deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(
      `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.02, 1.02, 1.02)`
    );

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1200px) rotateX(4deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const cleanDomain = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full max-w-2xl mx-auto cursor-pointer group ${className}`}
    >
      {/* LAPTOP SCREEN LID */}
      <div className="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 bg-gradient-to-b from-[#3a3a42] via-[#232328] to-[#16161a] shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(255,255,255,0.03)] border border-white/10">

        {/* Top Camera Dot */}
        <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/20 inline-block shadow-inner" />
        </div>

        {/* Display Glass Bezel */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#09090c] border border-black/80 aspect-[16/10] flex flex-col">

          {/* Safari / Browser Minimal Top Bar */}
          <div className="bg-[#141418] px-3 py-1.5 sm:py-2 border-b border-white/[0.08] flex items-center justify-between gap-2 z-20">
            {/* Window Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ff5f56]/90 inline-block" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ffbd2e]/90 inline-block" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27c93f]/90 inline-block" />
            </div>

            {/* URL Search Pill */}
            {cleanDomain ? (
              <div className="flex-1 max-w-[240px] sm:max-w-xs mx-auto py-0.5 px-2.5 rounded-md bg-black/50 border border-white/[0.06] flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-[#86868b] font-mono truncate">
                <FaLock className="text-[9px] text-[#30d158] flex-shrink-0" />
                <span className="truncate">{cleanDomain}</span>
              </div>
            ) : (
              <div className="text-[10px] text-[#86868b] font-mono">Production View</div>
            )}

            {/* Live Indicator */}
            {badge && (
              <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-[#30d158]/15 border border-[#30d158]/30 text-[#30d158] font-medium hidden sm:inline-block">
                {badge}
              </span>
            )}
          </div>

          {/* Screen Display Content */}
          <div className="relative flex-1 overflow-hidden group/screen bg-[#070709]">
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-100"
            />

            {/* Specular Glare Layer */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
              style={{
                opacity: glarePosition.opacity,
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
              }}
            />

            {/* Overlay Action Prompt */}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 transition-opacity flex items-center justify-center z-20"
              >
                <span className="px-4 py-2 rounded-full apple-btn-primary text-xs font-semibold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                  <span>Open Live Application</span>
                  <FaArrowUpRightFromSquare className="text-[10px]" />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* LAPTOP BOTTOM BASE / CHASSIS */}
      <div className="relative -mt-1 mx-auto w-[106%] -left-[3%] h-3.5 sm:h-4 rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-b from-[#2a2a30] via-[#1a1a1e] to-[#0f0f12] border-t border-white/20 border-b border-white/[0.05] shadow-[0_15px_30px_rgba(0,0,0,0.9)] flex items-start justify-center">
        {/* Trackpad Opening Notch */}
        <div className="w-16 sm:w-24 h-1 sm:h-1.5 rounded-b-md bg-[#111115] border-x border-b border-white/10" />
      </div>

      {/* Surface Ambient Shadow */}
      <div className="w-3/4 mx-auto h-3 bg-black/80 blur-lg rounded-full -mt-1" />
    </div>
  );
}
