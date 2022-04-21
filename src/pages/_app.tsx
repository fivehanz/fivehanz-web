/* eslint-disable react/jsx-props-no-spreading */
import { NextUIProvider } from "@nextui-org/react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

import defaultSEOConfig from "../../next-seo.config";
import { lightTheme, darkTheme } from "../theme/shared";
import Layout from "lib/layout";
// import customTheme from "lib/styles/customTheme";
// import "lib/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </ThemeProvider>
  );
};

export default MyApp;
