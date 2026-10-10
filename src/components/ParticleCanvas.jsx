import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY + window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Subtle Apple-style ambient light render loop
    const render = () => {
      // Smooth interpolation for fluid light movement
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Subtle top header glow
      const topGlow = ctx.createRadialGradient(
        width / 2,
        0,
        0,
        width / 2,
        0,
        width * 0.6
      );
      topGlow.addColorStop(0, "rgba(41, 151, 255, 0.035)");
      topGlow.addColorStop(0.5, "rgba(255, 255, 255, 0.01)");
      topGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = topGlow;
      ctx.fillRect(0, 0, width, height);

      // Interactive cursor spotlight (very subtle, Apple Pro style)
      const relativeY = mouseY - window.scrollY;
      if (relativeY > -200 && relativeY < height + 200) {
        const cursorGlow = ctx.createRadialGradient(
          mouseX,
          relativeY,
          0,
          mouseX,
          relativeY,
          450
        );
        cursorGlow.addColorStop(0, "rgba(41, 151, 255, 0.03)");
        cursorGlow.addColorStop(0.6, "rgba(255, 255, 255, 0.008)");
        cursorGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
