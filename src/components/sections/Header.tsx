import { useState } from "react";

import Navbar from "../blocks/Navbar";
import MobileNav from "../blocks/MobileNav";

const navLinks: Link[] = [
  { id: "1", title: "home", href: "#home", external: false },
  {
    id: "5",
    title: "devBlog",
    href: "https://blog.fivehanz.xyz",
    external: true,
  },
  { id: "2", title: "projects", href: "#projects", external: false },
  { id: "3", title: "about", href: "#about", external: false },
  { id: "4", title: "contact", href: "#contact", external: false },
];

const Header = () => {
  const [mobileNavClass, setMobileNavClass] = useState("none");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // toggle function for mobileNav
  const toggleMobileNav = () => {
    if (isMobileNavOpen) {
      setMobileNavClass(() => "none");
    } else {
      setMobileNavClass(() => "inherit");
    }

    setIsMobileNavOpen(() => !isMobileNavOpen);
    console.log("INFO: toggleMobileNav called");
  };

  return (
    <header>
      <MobileNav
        mobileNavClass={mobileNavClass}
        navLinks={navLinks}
        toggleMobileNav={toggleMobileNav}
      />

      <Navbar
        toggleMobileNav={toggleMobileNav}
        isMobileNavOpen={isMobileNavOpen}
        navLinks={navLinks}
      />
    </header>
  );
};

export default Header;
