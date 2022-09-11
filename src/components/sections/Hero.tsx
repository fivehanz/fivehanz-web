import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <section className="hero container">
        <h1 className="hero-text">front-end engineer</h1>
      </section>
    </motion.div>
  );
};

export default Hero;
