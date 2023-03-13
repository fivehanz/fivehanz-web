import { Container, Box } from "@mui/material";
import BlogPostCard from "../blocks/BlogPostCard";
import Title from "../blocks/Title";

const Hero = ({ blogs }) => {
  return (
    <section>
      <Container sx={{ height: "90vh" }}>
        <Title underlineWidth="7rem">recent blogs</Title>
        <Box>
          {blogs.map((blog, index) => {
            return <BlogPostCard key={index} blog={blog} />;
          })}
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
