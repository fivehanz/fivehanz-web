import styles from "./Navbar.module.scss";
// import { Image } from "next/image";
// import { images } from "../../constants";

const Navbar = () => {
  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navba}>
        {/* <Image src={images.logo} /> */}LOGO
      </div>
      <ul>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
