const Navbar = ({
  BurgerMenu,
  burgerClass,
  handleClick,
  DesktopNav,
  navLinks,
}) => {
  return (
    <div className="navbar">
      <BurgerMenu handleClick={handleClick} burgerClass={burgerClass} />
      <DesktopNav navLinks={navLinks} />
    </div>
  );
};

export default Navbar;
