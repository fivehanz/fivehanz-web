import Head from "next/head";
import { motion, useScroll } from "framer-motion";
import { gql } from "@apollo/client";
import client from "../../apolloClient";

import type { NextPage } from "next";

import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import LineBreak from "../components/components/LineBreak";

const Home: NextPage = ({ data }: any) => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <Head>
        <title>fivehanz.xyz | Haniel</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>

      {/* progress bar on top */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />
      <Hero />
      <LineBreak />
      <Projects projects={data.projects} />
      <LineBreak />
      <About />
      <LineBreak />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        projects {
          id
          name
          subtitle
          description
          tags {
            id
            name
          }
          links {
            id
            link
            title
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data,
    },
  };
}
