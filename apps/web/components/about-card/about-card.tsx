import { Link, Box, useTheme, Typography, useMediaQuery } from '@mui/material';

/* eslint-disable-next-line */
export interface AboutCardProps {
  socialMediaLinks: SocialMediaLink[];
}

const AboutCard = ({ socialMediaLinks }: AboutCardProps) => {
  const theme = useTheme();
  const isSmallMediaQuery = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      className="about-card"
      sx={{
        maxWidth: '60rem',
        display: 'grid',
        gap: '2rem',

        ...(isSmallMediaQuery && {
          minWidth: '85vw',
          // gridTemplateRows: "18rem auto",
        }),
        ...(!isSmallMediaQuery && {
          width: '55rem',
          gridTemplateColumns: '18rem auto',
        }),
      }}
    >
      <Box
        className="thumb-box"
        sx={{
          width: '14rem',
          height: '14rem',
          borderRadius: '50%',
          background: theme.palette.secondary.dark,
          margin: '1rem auto',
        }}
      >
        <Box className="thumb"></Box>
      </Box>

      <Box
        className="card-desc"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          lineHeight: '1.5',
          color: theme.palette.primary.main,
        }}
      >
        <Box
          className="titles"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <Typography
            className="title"
            sx={{
              fontSize: '1.5rem',
              fontWeight: '800',
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
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            margin: '1.5rem 0',
          }}
        >
          {socialMediaLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              sx={{ color: theme.palette.secondary.main }}
            >
              {link.icon}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
