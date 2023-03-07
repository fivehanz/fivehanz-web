import { AppBar, Box, Toolbar, IconButton, Link } from "@mui/material";
import Brand from "./Brand";
import HamburgerButton from "./HamburgerButton";

const Navbar = ({ toggleMobileNav, isMobileNavOpen, navLinks }) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              "@media (max-width:34.375rem)": { display: "none" },
            }}
          >
            {navLinks.map((item: Link) =>
              item.external ? (
                <Link
                  key={item.id}
                  href={item.href}
                  underline="hover"
                  sx={{
                    color: "white",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  underline="hover"
                  sx={{
                    color: "white",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </Link>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
