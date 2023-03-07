import { Box, Chip, Typography } from "@mui/material";

const Card = (props: Project) => {
  const { name, subtitle, description, tags, links } = props;
  return (
    <Box
      // className="card"
      sx={{ display: "grid", gap: "2rem" }}
    >
      <Box
        // className="thumb-box"
        sx={{
          width: "18rem",
          height: "18rem",
          background: "gray",
          position: "relative",
        }}
      >
        <Box className="thumb"></Box>
        <Box
          // className="tags"
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap-reverse",
          }}
        >
          {tags.map((tag: Tag) => (
            <Chip
              key={tag.id}
              sx={{
                margin: "0.25rem",
                fontWeight: "400",
              }}
              color="secondary"
              size="small"
              label={tag.name}
            />
          ))}
        </Box>
      </Box>

      <Box className="card-desc">
        <Box className="titles">
          <Typography className="title">
            {name || "title not provided"}
          </Typography>
          <Typography className="subtitle">
            {subtitle || "subtitle not provided"}
          </Typography>
        </Box>

        <Typography className="paragraph">
          {description || "description not provided"}
        </Typography>

        <Box className="links">
          {links.map((link: Link) => (
            <a
              key={link.id}
              href={link.href}
              className="link button"
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
