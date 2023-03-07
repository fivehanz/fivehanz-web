import { Box, Container, Typography } from "@mui/material";
import Card from "../blocks/Card";
import { css } from "@emotion/react";

const Projects = ({ projects }: any) => {
  return (
    <section id="projects">
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Typography
            //@ts-ignore
            sx={css`
              font-size: 1.875rem;
              font-weight: 800;
              line-height: 2;
              padding: 0 0.8rem;
              position: relative;
              &:after {
                position: absolute;

                content: "";
                background-color: black;
                bottom: 0;
                right: 0.8rem;
                height: 0.35rem;
                width: 4rem;
              }
            `}
          >
            projects
          </Typography>
        </Box>
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
