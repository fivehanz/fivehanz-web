import { useState } from "react";

const BurgerMenu = () => {
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

  return (
    <div
      className="burger-menu"
      onClick={() => {
        toggleBurgerClass();
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
