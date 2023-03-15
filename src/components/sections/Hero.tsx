import { Container, Box } from "@mui/material";
import BlogPostCard from "../blocks/BlogPostCard";
import Title from "../blocks/Title";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Hero = ({ blogs }) => {
  const theme = useTheme();
  const isMediumMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section>
      <Container sx={{ minHeight: "80vh" }}>
        <Title underlineWidth="7rem">recent blogs</Title>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            margin: "4rem 0",
            minHeight: "inherit",

            ...(isMediumMediaQuery && {
              flexDirection: "column",
              gap: "3rem",
            }),
          }}
        >
          {blogs.map((blog, index) => {
            return <BlogPostCard key={index} blog={blog} />;
          })}
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
