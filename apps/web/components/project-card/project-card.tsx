import { Box, Button, Chip, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/* eslint-disable-next-line */
export interface ProjectCardProps {
  project: Project;
}

/**
 * Renders a project card component.
 *
 * @param {ProjectCardProps} project - The project object containing information about the project.
 * @return {JSX.Element} The rendered project card component.
 */
const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme();
  const isSmallMediaQuery = useMediaQuery(theme.breakpoints.down('md'));

  const {
    name = 'title not provided',
    subtitle = 'subtitle not provided',
    description = 'description not provided',
    tags = [],
    links = [],
  } = project;

  const cardStyles = {
    display: 'grid',
    gap: '2rem',
    ...(isSmallMediaQuery
      ? {
          height: '35rem',
          gridTemplateRows: '18rem auto',
        }
      : {
          width: '55rem',
          gridTemplateColumns: '18rem auto',
        }),
  };

  const thumbBoxStyles = {
    width: '18rem',
    height: '18rem',
    background: theme.palette.secondary.dark,
    position: 'relative',
    ...(isSmallMediaQuery ? { minWidth: '92vw' } : {}),
  };

  const tagsStyles = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap-reverse',
  };

  const titlesStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    lineHeight: '1.5',
  };

  const titleStyles = {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: theme.palette.primary.dark,
  };

  const subtitleStyles = {
    color: theme.palette.secondary.dark,
    fontSize: '1rem',
    fontWeight: '600',
  };

  const paragraphStyles = {
    color: theme.palette.secondary.dark,
  };

  const linksStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    gap: '0.5rem',
  };

  return (
    <Box sx={cardStyles} className="project-card">
      <Box sx={thumbBoxStyles}>
        {/* Outer box for the thumbnail */}
        <Box className="thumb"></Box>
        {/* Box for the tags */}
        <Box sx={tagsStyles}>
          {/* Mapping over the tags array */}
          {tags.map((tag: Tag) => (
            <Chip
              key={tag.id}
              sx={{
                margin: '0.25rem',
                fontWeight: '600',
              }}
              color="secondary"
              size="small"
              label={tag.name}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Box sx={titlesStyles}>
          {/* Title */}
          <Typography sx={titleStyles}>{name}</Typography>
          {/* Subtitle */}
          <Typography sx={subtitleStyles}>{subtitle}</Typography>
        </Box>

        {/* Description */}
        <Typography sx={paragraphStyles}>{description}</Typography>

        <Box sx={linksStyles}>
          {links.map((link: Link) => (
            // Link Button
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

export default ProjectCard;
