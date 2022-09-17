import { useEffect, useState } from "react";
import Brand from "../components/Brand";
import BurgerMenu from "../components/BurgerMenu";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";

const navLinks: Link[] = [
  { id: "1", title: "home", link: "#home" },
  { id: "2", title: "projects", link: "#projects" },
  { id: "3", title: "about", link: "#about" },
  { id: "4", title: "contact", link: "#contact" },
  // { id: "5", title: "devBlog", link: "https://blog.fivehanz.xyz" },
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

  return (
    <div className="header">
      <MobileNav
        navLinks={navLinks}
        mobileNavClass={mobileNavClass}
        handleClick={handleClick}
      />
      <header className="container">
        <Brand />

        <Navbar
          BurgerMenu={BurgerMenu}
          burgerClass={burgerClass}
          handleClick={handleClick}
          DesktopNav={DesktopNav}
          navLinks={navLinks}
        />
      </header>
    </div>
  );
};

export default Header;
