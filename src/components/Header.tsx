import { useState } from "react";
import Brand from "./Brand";

const Header = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [mobileMenuClass, setMobileMenuClass] = useState("nav-menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMobileMenuClass("nav-menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMobileMenuClass("nav-menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="header container">
      <Brand />
      <nav>
        {/* mobile nav */}
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>

        {/* <div className={mobileMenuClass}></div> */}

        {/* desktop / tablet nav */}
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#home">home </a>
          </li>
          <li className="nav-list-item">
            <a href="#projects">projects </a>
          </li>
          <li className="nav-list-item">
            <a href="#about">about </a>
          </li>
          <li className="nav-list-item">
            <a href="#contact">contact </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
