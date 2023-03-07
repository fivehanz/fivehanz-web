import { Container } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <Container sx={{ height: "90vh" }}>
          <h1 className="hero-text">recent blogposts</h1>
        </Container>
      </section>
    </motion.div>
  );
};

export default Hero;
