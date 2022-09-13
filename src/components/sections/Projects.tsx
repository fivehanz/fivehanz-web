import Card from "../components/Card";

const data: Project[] = [
  {
    id: 1,
    name: "project name 1",
    subtitle: "few lines of some descriptive subtitle",
    description:
      "Lorem ipsum dolor. Praesentium eaque placeat eius, accusamus esse, laudantium qui, suscipit odit alias nesciunt velit?",
    tags: [
      { id: 1, name: "nextjs" },
      { id: 2, name: "ethersjs" },
      { id: 3, name: "scss" },
      { id: 4, name: "solana" },
      {
        id: 5,
        name: "polygon",
      },
      { id: 6, name: "zksync" },
    ],
    links: [],
  },
  {
    id: 2,
    name: "project name 2",
    subtitle: "few lines of some descriptive subtitle",
    description:
      "Lorem ipsum dolor. Praesentium eaque placeat eius, accusamus esse, laudantium qui, suscipit odit alias nesciunt velit?",
    tags: [{ id: 1, name: "nextjs" }],
    links: [],
  },
  {
    id: 3,
    name: "project name 3",
    subtitle: "few lines of some descriptive subtitle",
    description:
      "Lorem ipsum dolor. Praesentium eaque placeat eius, accusamus esse, laudantium qui, suscipit odit alias nesciunt velit?",
    tags: [{ id: 1, name: "nextjs" }],
    links: [],
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
