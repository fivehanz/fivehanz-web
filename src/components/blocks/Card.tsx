import { Box, Button, Chip, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Card = (props: Project) => {
  const { name, subtitle, description, tags, links } = props;
  const theme = useTheme();
  const isSmallMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      // className="card"
      sx={{
        display: "grid",
        gap: "2rem",

        ...(!isSmallMediaQuery && {
          width: "55rem",
          gridTemplateColumns: "18rem auto",
        }),
        ...(isSmallMediaQuery && {
          height: "35rem",
          gridTemplateRows: "18rem auto",
        }),
      }}
    >
      <Box
        // className="thumb-box"
        sx={{
          width: "18rem",
          height: "18rem",
          background: theme.palette.secondary.light,
          position: "relative",

          ...(isSmallMediaQuery && {
            minWidth: "92vw",
          }),
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
                fontWeight: "600",
              }}
              color="secondary"
              size="small"
              label={tag.name}
            />
          ))}
        </Box>
      </Box>

      <Box
        // className="card-desc"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          // className="titles"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            lineHeight: "1.5",
          }}
        >
          <Typography
            // className="title"
            sx={{
              fontSize: "1.25rem",
              fontWeight: "800",
              color: theme.palette.primary.dark,
            }}
          >
            {name || "title not provided"}
          </Typography>
          <Typography
            // className="subtitle"
            sx={{
              color: theme.palette.secondary.dark,
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            {subtitle || "subtitle not provided"}
          </Typography>
        </Box>

        <Typography
          // className="paragraph"
          sx={{
            color: theme.palette.secondary.dark,
          }}
        >
          {description || "description not provided"}
        </Typography>

        <Box
          // className="links"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
        >
          {links.map((link: Link) => (
            <Button
              variant="contained"
              size="small"
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
