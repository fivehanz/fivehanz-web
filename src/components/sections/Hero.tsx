import { Container, Box } from "@mui/material";
import Title from "../blocks/Title";

const Hero = () => {
  return (
<<<<<<< HEAD
    <section>
      <Container sx={{ height: "90vh" }}>
        <Title underlineWidth="10rem">recent blogposts</Title>
        <Box>wip.</Box>
      </Container>
    </section>
=======
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero container">
        <h1 className="hero-text">welcome</h1>
      </section>
    </motion.div>
>>>>>>> main
  );
};

export default Hero;
