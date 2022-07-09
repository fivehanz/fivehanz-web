import { About, Header, Footer, Skills, Work } from "../../containers";
import { Navbar } from "../../components";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
