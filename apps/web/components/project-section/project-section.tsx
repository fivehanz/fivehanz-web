import { Box, Container } from '@mui/material';
import ProjectCard from '../project-card/project-card';
import Title from '../title/title';

/* eslint-disable-next-line */
export interface ProjectSectionProps {
  projects: Project[];
}

/**
 * Renders the project section of the page.
 *
 * @param {Project[]} projects - An array of projects to be displayed.
 * @return {JSX.Element} The rendered project section.
 */
const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section id="projects">
      <Container>
        <Title reverse={true}>projects</Title>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {projects.map((project: Project) => {
            return (
              <Box sx={{ margin: '4rem auto' }} key={project.id}>
                <ProjectCard project={project} />
              </Box>
            );
          })}
        </Box>
      </Container>
    </section>
  );
};

export default ProjectSection;
