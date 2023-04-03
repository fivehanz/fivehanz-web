import {
  Linkedin,
  Github,
  Twitter,
  Gitlab,
  Hashnode,
} from "@icons-pack/react-simple-icons";
import { Link, Box, useTheme, Typography, useMediaQuery } from "@mui/material";

const AboutCard = () => {
  const theme = useTheme();
  const isSmallMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className="about-card"
      sx={{
        maxWidth: "60rem",
        display: "grid",
        gap: "2rem",

        ...(isSmallMediaQuery && {
          minWidth: "85vw",
          // gridTemplateRows: "18rem auto",
        }),
        ...(!isSmallMediaQuery && {
          width: "55rem",
          gridTemplateColumns: "18rem auto",
        }),
      }}
    >
      <Box
        className="thumb-box"
        sx={{
          width: "14rem",
          height: "14rem",
          borderRadius: "50%",
          background: theme.palette.secondary.light,
          margin: "1rem auto",
        }}
      >
        <Box className="thumb"></Box>
      </Box>

      <Box
        className="card-desc"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          lineHeight: "1.5",
          color: theme.palette.primary.main,
        }}
      >
        <Box
          className="titles"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <Typography
            className="title"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "800",
            }}
          >
            haniel rameshbabu (hanz)
          </Typography>
        </Box>

        <Typography
          className="paragraph"
          sx={{
            color: theme.palette.secondary.main,
          }}
        >
          WIP / TBC.
        </Typography>

        <Box
          className="social-icons"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            margin: "1.5rem 0",
          }}
        >
          <Link
            href="https://www.linkedin.com/in/fivehanz/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin width={40} height={40} />
          </Link>
          <Link
            href="https://twitter.com/fivehanz"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter width={40} height={40} />
          </Link>
          <Link
            href="https://github.com/fivehanz"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Github width={40} height={40} />
          </Link>
          <Link
            href="https://gitlab.com/fivehanz/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Gitlab width={40} height={40} />
          </Link>
          <Link
            href="https://hashnode.com/@fivehanz"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Hashnode width={40} height={40} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
