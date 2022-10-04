const BurgerMenu = ({ burgerClass, handleClick }) => {
  return (
    <div className="burger-menu" onClick={handleClick}>
      <div>
        <span className={burgerClass}></span>
        <span className={burgerClass}></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
