const MobileNav = ({ navLinks, mobileNavClass, handleClick }) => {
  return (
    <nav className={mobileNavClass}>
      <div className="links">
        {navLinks.map((link) => {
          return (
            <div key={link.id} className="link">
              <a href={link.link} onClick={handleClick}>
                {link.title}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
