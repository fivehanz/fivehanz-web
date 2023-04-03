import { Container, Box } from "@mui/material";
import AboutCard from "../blocks/AboutCard";
import Title from "../blocks/Title";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Title underlineWidth="3rem">about</Title>
        <Box
          className="about-card-box"
          sx={{
            padding: "2.5rem 0",
            margin: "4rem 1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AboutCard />
        </Box>
        {/* <div className="wip">
          <h2>WIP/TBC</h2>
        </div> */}
      </Container>
    </section>
  );
};

export default About;
