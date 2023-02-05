import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import Brand from "../blocks/Brand";
import BurgerMenu from "../blocks/BurgerMenu";
import DesktopNav from "../blocks/DesktopNav";
import MobileNav from "../blocks/MobileNav";
import Navbar from "../blocks/Navbar";

const navLinks: Link[] = [
  { id: "1", title: "home", link: "#home", external: false },
  {
    id: "5",
    title: "devBlog",
    link: "https://blog.fivehanz.xyz",
    external: true,
  },
  { id: "2", title: "projects", link: "#projects", external: false },
  { id: "3", title: "about", link: "#about", external: false },
  { id: "4", title: "contact", link: "#contact", external: false },
];

const Header = () => {
  const [mobileNavClass, setMobileNavClass] = useState("mobile-nav hidden");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const toggleBurgerClass = () => {
    if (!isBurgerClicked) {
      setBurgerClass("burger-bar clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
    }

    setIsBurgerClicked(!isBurgerClicked);
  };

  const handleClick = () => {
    if (!isMobileNavOpen) {
      setMobileNavClass("mobile-nav visible");
    } else {
      setMobileNavClass("mobile-nav hidden");
    }

    toggleBurgerClass();
    setIsMobileNavOpen(() => !isMobileNavOpen);
  };

  // <div className="header">
  {
    /* <MobileNav
  navLinks={navLinks}
  mobileNavClass={mobileNavClass}
  handleClick={handleClick}
/> */
  }
  return (
    <header className="container">
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Brand />
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              "@media (max-width: 34.375rem)": { display: "none" },
            }}
          >
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  {link.external ? (
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.title}
                    </a>
                  ) : (
                    <a href={link.link}>{link.title}</a>
                  )}
                </li>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Navbar
          BurgerMenu={BurgerMenu}
          burgerClass={burgerClass}
          handleClick={handleClick}
          DesktopNav={DesktopNav}
          navLinks={navLinks}
        /> 
    </div> */}
    </header>
  );
};

export default Header;
