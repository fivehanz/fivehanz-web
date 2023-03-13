import { Box, Link } from "@mui/material";

const BlogPostCard = ({ blog }) => {
  return (
    <Box
      sx={{
        alignSelf: "flex-start",
        position: "relative",
        width: "20rem",
        minWidth: "17.18rem",
        margin: "1.25rem 0.75rem",
        background: "",
      }}
    >
      <Box>card-image</Box>
      <Box>
        <Link
          target="_blank"
          rel="noreferrer"
          underline="none"
          href={blog.link}
        >
          {blog.title}
        </Link>
      </Box>
    </Box>
  );
};

export default BlogPostCard;
