import { Container } from "@mui/material";
import AboutCard from "../blocks/AboutCard";
import Title from "../blocks/Title";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Title underlineWidth="3rem">about</Title>
        <div className="about-card-box">
          <AboutCard />
        </div>
        <div className="wip">
          <h2>WIP/TBC</h2>
        </div>
      </Container>
    </section>
  );
};

export default About;
