import type { NextPage } from "next";
import { motion, useScroll } from "framer-motion";

import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import LineBreak from "../components/components/LineBreak";

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      {/* <LineBreak /> */}
      <Hero />
      <LineBreak />
      <Projects />
      <LineBreak />
      <About />
      <LineBreak />
      <Contact />
      {/* <LineBreak /> */}
      <Footer />
    </div>
  );
};

export default Home;
