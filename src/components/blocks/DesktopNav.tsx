const DesktopNav = ({ navLinks }) => {
  return (
    <nav>
      <ul className="nav-list">
        {navLinks.map((link) => {
          return (
            <li key={link.id} className="nav-list-item">
              {link.external ? (
                <a href={link.link} target="_blank" rel="noreferrer">
                  {link.title}
                </a>
              ) : (
                <a href={link.link}>{link.title}</a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
