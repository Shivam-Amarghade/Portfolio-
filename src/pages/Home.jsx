import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Skill from "../components/Skill";
import About from "../components/About";
import Contect from "../components/Contect";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Skill />
      <About />
      <Contect />
      <Footer />
    </div >

  );
};

export default Home;
