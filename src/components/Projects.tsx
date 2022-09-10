import Card from "./Card";

const Projects = () => {
  return (
    <div className="projects" id="projects">
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
    </div>
  );
};

export default Projects;
