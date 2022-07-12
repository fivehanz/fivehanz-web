import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { images } from "../../constants";

const abouts = [
  {
    title: "Web 1",
    description: "I am a good description 1.",
    imgURL: images.about01,
  },
  {
    title: "Web 2",
    description: "I am a good description 2.",
    imgURL: images.about02,
  },
  {
    title: "Web 3",
    description: "I am a good description 3.",
    imgURL: images.about03,
  },
  {
    title: "Web X",
    description: "I am a good description X.",
    imgURL: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>good design</span> means <span>good business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.15, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgURL} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default About;
