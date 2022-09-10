import type { NextPage } from "next";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import LineBreak from "../components/LineBreak";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <LineBreak />
      <Projects />
      <LineBreak />
      <About />
      <LineBreak />
      <Contact />
      <LineBreak />
      <Footer />
    </div>
  );
};

export default Home;
