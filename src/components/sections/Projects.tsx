import { Box, Container, Typography } from "@mui/material";
import Card from "../blocks/Card";
import { css } from "@emotion/react";
import Title from "../blocks/Title";

const Projects = ({ projects }: any) => {
  return (
    <section id="projects">
      <Container>
        <Title reverse={true}>projects</Title>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {projects.map((project: Project) => {
            return (
              <Box sx={{ margin: "4rem auto" }} key={project.id}>
                <Card {...project} />
              </Box>
            );
          })}
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
