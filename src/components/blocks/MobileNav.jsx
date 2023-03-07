import { Box, useTheme, Link } from "@mui/material";
import hexRgb from "hex-rgb";
import { css } from "@emotion/react";

const MobileNav = ({ mobileNavClass, navLinks, toggleMobileNav }) => {
  const theme = useTheme();

  // backgroundcolor calculator with primary color from theme
  const backgroundColor = () => {
    const rgb = hexRgb(theme.palette.background.default, { alpha: 0.75 });
    return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${rgb.alpha})`;
  };

  const MobileLinkStyle = css`
    color: ${theme.palette.text.primary};
    font-size: 1.25rem;
    font-weight: 600;
    display: block;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 2px solid ${theme.palette.text.primary};
  `;

  return (
    <>
      {/* mobile menu -- default hidden */}
      <Box
        sx={css`
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          z-index: 1;
          padding: 1rem;
          background-color: ${backgroundColor()};
          backdrop-filter: blur(16px) saturate(100%);
          -webkit-backdrop-filter: blur(16px) saturate(100%);
          display: ${mobileNavClass};
        `}
      >
        <Box
          sx={css`
            margin-top: 5rem;
            display: flex;
            flex-direction: column;
            text-align: center;
          `}
        >
          {navLinks.map((item) =>
            item.external ? (
              <Link
                key={item.id}
                href={item.href}
                underline="none"
                sx={MobileLinkStyle}
                target="_blank"
                rel="noreferrer"
                onClick={toggleMobileNav}
              >
                {item.title}
              </Link>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                underline="none"
                sx={MobileLinkStyle}
                onClick={toggleMobileNav}
              >
                {item.title}
              </Link>
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default MobileNav;
