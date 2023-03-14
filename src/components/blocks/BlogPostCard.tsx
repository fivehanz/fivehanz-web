import { Box, Link, Typography, useTheme } from "@mui/material";

const BlogPostCard = ({ blog }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        alignSelf: "flex-start",
        position: "relative",
        width: "20rem",
        minWidth: "17.18rem",
        margin: "1.25rem 0.75rem",
        // background: theme.palette.background.default,
        boxShadow: `0.2rem 0.2rem 10rem ${theme.palette.secondary.main}`,
      }}
    >
      <Box>
        <Link
          target="_blank"
          rel="noreferrer"
          underline="none"
          href={blog.link}
        >
          <Box
            sx={{
              paddingBottom: "60%",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              background: theme.palette.secondary.light,
            }}
          ></Box>
          <Box
            sx={{
              padding: "1.25rem",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: theme.palette.primary.dark,
              }}
            >
              {blog.title}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                marginTop: "2rem",
                color: theme.palette.secondary.dark,
              }}
            >
              {blog.creator}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default BlogPostCard;
