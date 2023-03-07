import { AppBar, Box, Toolbar, Container, Link, useTheme } from "@mui/material";
import Brand from "./Brand";
import HamburgerButton from "./HamburgerButton";

const Navbar = ({ toggleMobileNav, isMobileNavOpen, navLinks }) => {
  const theme = useTheme();

  return (
    <Box>
      <AppBar position="static">
        <Box
          sx={{
            padding: "0.5rem 0",
          }}
        >
          <Container
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
                      color: theme.palette.text.primary,
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
                      color: theme.palette.text.primary,
                      fontSize: "1.15rem",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </Box>
          </Container>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
