import Brand from "../blocks/Brand";

const Footer = () => {
  return (
    <footer className="footer container">
      <Brand />
      <p className="copyright">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
