import { useState } from "react";

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleClick = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div
      className="burger-menu"
      onClick={() => {
        toggleClick();
      }}
    >
      <div>
        <span className={burgerClass}></span>
        <span className={burgerClass}></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
