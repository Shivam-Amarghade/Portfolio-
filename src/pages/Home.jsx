import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Skill from "../components/Skill";
import About from "../components/About";
import Contect from "../components/Contect";
import Footer from "../components/Footer";
import ParticleCanvas from "../components/ParticleCanvas";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#000000] text-[#f5f5f7] overflow-x-hidden selection:bg-[#2997ff] selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] px-4 py-2 rounded-full apple-btn-primary text-xs font-semibold"
      >
        Skip to main content
      </a>
      {/* Apple Subtle Ambient Light */}
      <ParticleCanvas />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <Hero />
          <Experience />
          <Work />
          <Skill />
          <About />
          <Contect />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
