import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  //   const [mobileMenuClass, setMobileMenuClass] = useState("nav-menu hidden");
  //   setMobileMenuClass("nav-menu visible");
  //   setMobileMenuClass("nav-menu hidden");
  return (
    <nav>
      <BurgerMenu />

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
  );
};

export default Navbar;
