import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../../next-seo.config";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
