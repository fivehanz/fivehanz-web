import { CSSObject } from '@emotion/react';
import { Box, useTheme, Link } from '@mui/material';
import hexRgb from 'hex-rgb';

/* eslint-disable-next-line */
export interface MobileNavProps {
  toggleMobileNav: () => void;
  mobileNavClass: MobileNavClass;
  navLinks: readonly Link[];
}

/**
 * Renders a mobile navigation component.
 * @param toggleMobileNav - Function to toggle the mobile navigation.
 * @param mobileNavClass - CSS class for the mobile navigation.
 * @param navLinks - Array of navigation links.
 * @returns The mobile navigation component.
 */
const MobileNav: React.FC<MobileNavProps> = ({
  toggleMobileNav,
  mobileNavClass,
  navLinks,
}) => {
  const theme = useTheme();

  /**
   * Calculate the background color with primary color from the theme.
   * @returns The background color in rgba format.
   */
  const backgroundColor = (): string => {
    const { red, green, blue, alpha } = hexRgb(
      theme.palette.background.default,
      {
        alpha: 0.75,
        format: 'object',
      }
    );
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

  // CSS styles for mobile links
  const mobileLinkStyle: CSSObject = {
    color: theme.palette.text.primary,
    fontSize: '1.25rem',
    fontWeight: '600',
    display: 'block',
    margin: '0.5rem 0',
    padding: '0.5rem',
    border: `2px solid ${theme.palette.text.primary}`,
  };

  // Render the mobile navigation component
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '0',
        zIndex: '1',
        padding: '1rem',
        backgroundColor: backgroundColor(),
        backdropFilter: 'blur(16px) saturate(100%)',
        webkitBackdropFilter: 'blur(16px) saturate(100%)',
        display: mobileNavClass,
      }}
    >
      <Box
        sx={{
          marginTop: '5rem',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        {navLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            underline="none"
            sx={mobileLinkStyle}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            onClick={toggleMobileNav}
          >
            {item.title}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default MobileNav;
