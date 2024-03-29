import { Container, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Title from '../title/title';
import BlogpostCard from '../blogpost-card/blogpost-card';

/* eslint-disable-next-line */
export interface HeroSectionProps {
  data: BlogData | undefined;
  isLoading: boolean;
}

/**
 * Renders the hero section of the website with a list of recent blog posts.
 *
 * @param blogs - An array of Blogpost objects.
 */
export function HeroSection({ data, isLoading }: HeroSectionProps) {
  const theme = useTheme(); // Get the theme object from the Material-UI hook.
  const isMediumMediaQuery = useMediaQuery(theme.breakpoints.down('md')); // Check if the current screen size matches the 'md' breakpoint.

  return (
    <section>
      <Container sx={{ minHeight: '80vh' }}>
        <Title underlineWidth="7rem">recent blogs</Title>
        {/* Display the title of the section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            margin: '4rem 0',
            minHeight: 'inherit',

            ...(isMediumMediaQuery && {
              flexDirection: 'column', // Change the direction of the flex container to column if the screen size matches the 'md' breakpoint.
              gap: '3rem', // Increase the gap between items in the column layout.
            }),
          }}
        >
          {isLoading && <BlogpostCard skeleton={true} />}
          {isLoading && <BlogpostCard skeleton={true} />}
          {isLoading && <BlogpostCard skeleton={true} />}

          {!isLoading &&
            data?.publication?.posts &&
            data?.publication?.posts?.map((post, index) => (
              // Render a BlogpostCard component for each blog post in the array.
              <BlogpostCard
                key={index}
                post={post}
                publicationDomain={data?.publicationDomain}
              />
            ))}
        </Box>
      </Container>
    </section>
  );
}

export default HeroSection;
