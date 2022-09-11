import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <section className="about container" id="about">
      <div className="about-heading">
        <h2 className="about-text">about</h2>
      </div>
      <div className="about-card-box">
        <AboutCard />
      </div>
      <div className="wip">
        <h2>WIP/TBC</h2>
      </div>
    </section>
  );
};

export default About;
