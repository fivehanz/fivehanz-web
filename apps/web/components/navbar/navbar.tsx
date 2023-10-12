import { AppBar, Box, Container, Link, useTheme } from '@mui/material';
import Brand from '../brand/brand';
import HamburgerButton from '../hamburger-button/hamburger-button';

/* eslint-disable-next-line */
export interface NavbarProps {
  toggleMobileNav: () => void;
  isMobileNavOpen: boolean;
  navLinks: readonly Link[];
}

/**
 * Renders the navigation bar component.
 *
 * @param toggleMobileNav - Function to toggle the mobile navigation.
 * @param isMobileNavOpen - Flag indicating whether the mobile navigation is open.
 * @param navLinks - Array of navigation links.
 * @returns The rendered navigation bar component.
 */
const Navbar: React.FC<NavbarProps> = ({
  toggleMobileNav,
  isMobileNavOpen,
  navLinks,
}) => {
  return (
    <Box>
      <AppBar position="static">
        <Box sx={{ padding: '0.5rem 0' }}>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Brand />
            <HamburgerButton
              toggleMobileNav={toggleMobileNav}
              isMobileNavOpen={isMobileNavOpen}
            />
            {/* desktop menu */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                '@media (max-width:34.375rem)': { display: 'none' },
              }}
            >
              <Links links={navLinks} />
            </Box>
          </Container>
        </Box>
      </AppBar>
    </Box>
  );
};

/**
 * Render a list of links.
 *
 * @param {ReadonlyArray<Link>} links - The list of links to render.
 * @returns {JSX.Element} - The rendered links.
 */
const Links = ({ links }: { links: readonly Link[] }): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      {links.map((item: Link) => (
        <Link
          key={item.id}
          href={item.href}
          underline="hover"
          sx={{
            color: theme.palette.text.primary,
            fontSize: '1.15rem',
            fontWeight: 400,
          }}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
