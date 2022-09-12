import Card from "../components/Card";

const data: Project[] = [
  {
    id: 1,
    name: "project name 1",
    subtitle: "few lines of some descriptive subtitle",
    description:
      "Lorem ipsum dolor. Praesentium eaque placeat eius, accusamus esse, laudantium qui, suscipit odit alias nesciunt velit?",
  },
  {
    id: 2,
    name: "project name 2",
    subtitle: "few lines of some descriptive subtitle",
    description:
      "Lorem ipsum dolor. Praesentium eaque placeat eius, accusamus esse, laudantium qui, suscipit odit alias nesciunt velit?",
  },
  {
    id: 3,
    name: "project name 3",
    subtitle: "few lines of some descriptive subtitle",
    description:
      "Lorem ipsum dolor. Praesentium eaque placeat eius, accusamus esse, laudantium qui, suscipit odit alias nesciunt velit?",
  },
  {
    id: 4,
    name: "project name 4",
    subtitle: "few lines of some descriptive subtitle",
    description:
      "Lorem ipsum dolor. Praesentium eaque placeat eius, accusamus esse, laudantium qui, suscipit odit alias nesciunt velit?",
  },
  {
    id: 5,
    name: "project name 5",
    subtitle: "few lines of some descriptive subtitle",
    description:
      "Lorem ipsum dolor. Praesentium eaque placeat eius, accusamus esse, laudantium qui, suscipit odit alias nesciunt velit?",
  },
];

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <div className="projects-heading">
        <h2 className="projects-text">projects</h2>
      </div>
      <div className="projects-items">
        {data.map((project) => {
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
