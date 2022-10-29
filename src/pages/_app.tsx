import "../styles/globals.scss";
import type { AppProps } from "next/app";
import GoToTop from "../components/blocks/GoToTop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <GoToTop />
    </>
  );
}

export default MyApp;
