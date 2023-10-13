import { Box, Container } from '@mui/material';
import ProjectCard from '../project-card/project-card';
import Title from '../title/title';

/* eslint-disable-next-line */
export interface ProjectSectionProps {
  projects: Project[];
  isLoading: boolean;
}

/**
 * Renders the project section of the page.
 *
 * @param {Project[]} projects - An array of projects to be displayed.
 * @param {boolean} isLoading - A boolean indicating whether the projects are loading.
 * @return {JSX.Element} The rendered project section.
 */
const ProjectSection = ({ projects, isLoading }: ProjectSectionProps) => {
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
          {isLoading && (
            <Box sx={{ margin: '4rem auto' }}>
              <ProjectCard skeleton={true} />
            </Box>
          )}

          {/* load only if there are projects and is not loading */}
          {!isLoading &&
            projects?.length > 0 &&
            projects.map((project: Project) => {
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
