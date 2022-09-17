import Card from "../components/Card";

const Projects = ({ projects }: any) => {
  return (
    <section className="projects container" id="projects">
      <div className="projects-heading">
        <h2 className="projects-text">projects</h2>
      </div>
      <div className="projects-items">
        {projects.map((project: Project) => {
          return (
            <div className="projects-item" key={project.id}>
              <Card {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
