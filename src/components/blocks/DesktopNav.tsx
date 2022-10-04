const DesktopNav = ({ navLinks }) => {
  return (
    <nav>
      <ul className="nav-list">
        {navLinks.map((link) => {
          return (
            <li key={link.id} className="nav-list-item">
              <a href={link.link}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
