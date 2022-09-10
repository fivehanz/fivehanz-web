import Brand from "./Brand";

const Header = () => {
  return (
    <header className="header container">
      <Brand />
      <nav>
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
