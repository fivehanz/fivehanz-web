import { IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const HamburgerButton = ({ isMobileNavOpen, toggleMobileNav }) => {
  return (
    <>
      <IconButton
        sx={{
          "@media (min-width:34.375rem)": { display: "none" },
          zIndex: "1",
        }}
        onClick={toggleMobileNav}
      >
        {!isMobileNavOpen && (
          <MenuIcon fontSize="large" sx={{ color: "white" }} />
        )}

        {isMobileNavOpen && (
          <CloseIcon fontSize="large" sx={{ color: "white" }} />
        )}
      </IconButton>
    </>
  );
};

export default HamburgerButton;
