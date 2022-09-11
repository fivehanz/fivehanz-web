import Card from "./Card";

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <div className="projects-heading">
        <h2 className="projects-text">projects</h2>
      </div>
      <div className="projects-items">
        <div className="projects-item">
          <Card />
        </div>
        <div className="projects-item">
          <Card />
        </div>
        <div className="projects-item">
          <Card />
        </div>
        <div className="projects-item">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Projects;
