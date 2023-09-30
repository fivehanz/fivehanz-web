import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

/* eslint-disable-next-line */
export interface HamburgerButtonProps {
  toggleMobileNav: () => void;
  isMobileNavOpen: boolean;
}

export function HamburgerButton({
  toggleMobileNav,
  isMobileNavOpen,
}: HamburgerButtonProps) {
  return (
    <IconButton
      sx={{
        '@media (min-width:34.375rem)': { display: 'none' },
        zIndex: '1',
      }}
      onClick={toggleMobileNav}
      data-testid="hamburger-button"
    >
      {isMobileNavOpen ? (
        <CloseIcon
          fontSize="large"
          sx={{ color: 'white' }}
          data-testid="close-icon"
        />
      ) : (
        <MenuIcon
          fontSize="large"
          sx={{ color: 'white' }}
          data-testid="menu-icon"
        />
      )}
    </IconButton>
  );
}

export default HamburgerButton;
