import {
  Box,
  Link,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

/* eslint-disable-next-line */
export interface BlogpostCardProps {
  post?: Blogpost;
  publicationDomain?: string;
  skeleton?: boolean;
}

/**
 * Renders a blog post card component.
 *
 * @param {object} post - The blog post object.
 * @param {string} post.link - The link to the blog post.
 * @param {string} post.title - The title of the blog post.
 * @param {string} post.pubDate - The publication date of the blog post.
 */
const BlogpostCard = ({
  post,
  skeleton,
  publicationDomain,
}: BlogpostCardProps): JSX.Element => {
  // Get the current theme
  const theme = useTheme();

  // Check if the screen size is small
  const isSmallMediaQuery = useMediaQuery(theme.breakpoints.down('sm'));

  // Define the styles for the card
  const cardStyle = {
    alignSelf: 'flex-start',
    position: 'relative',
    width: '22.5rem',
    minWidth: '17.18rem',
    margin: '1.25rem 0',
    background: theme.palette.background.default,
    boxShadow: `0.2rem 0.2rem 10rem ${theme.palette.secondary.dark}`,
    ...(isSmallMediaQuery && {
      minWidth: '90vw',
    }),
  };

  // Define the styles for the image
  const imageStyle = {
    paddingBottom: '60%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    background: theme.palette.secondary.dark,
  };

  // Define the styles for the text container
  const textContainerStyle = {
    padding: '1.25rem',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  // Define the styles for the title
  const titleStyle = {
    fontSize: '1.25rem',
    color: theme.palette.secondary.main,
    textTransform: 'lowercase',
  };

  // Define the styles for the publication date
  const dateStyle = {
    fontWeight: 'bold',
    textTransform: 'lowercase',
    fontSize: '0.75rem',
    letterSpacing: '0.05em',
    marginTop: '2rem',
    color: theme.palette.primary.main,
  };

  // Render the blog post card
  return (
    <Box sx={cardStyle} data-testid="blogpost-card">
      {skeleton ? (
        <Link target="_blank" rel="noreferrer" underline="none">
          <Skeleton sx={imageStyle} variant="rectangular" animation="wave" />
          <Box sx={textContainerStyle}>
            <Skeleton sx={titleStyle} variant="text" animation="wave" />
            <Skeleton sx={dateStyle} variant="text" animation="wave" />
          </Box>
        </Link>
      ) : (
        <Link
          target="_blank"
          rel="noreferrer"
          underline="none"
          href={`https://${publicationDomain}/${post?.slug}`}
        >
          <Box sx={imageStyle} />
          <Box sx={textContainerStyle}>
            <Typography sx={titleStyle}>{post?.title}</Typography>
            <Typography sx={dateStyle}>{post?.views} views</Typography>
          </Box>
        </Link>
      )}
    </Box>
  );
};

export default BlogpostCard;
