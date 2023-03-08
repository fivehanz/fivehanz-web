import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "../styles/globals.scss";

import type { AppProps } from "next/app";
// import GoToTop from "../components/blocks/GoToTop";

const theme = createTheme({
  custom: {
    fontSize: {
      heading: "1.875rem",
      hero: "2.8125rem",
      heroMobile: "2.25rem",
      brand: "2.25rem",
      nav: "1.15rem",
      mobileNav: "1.6rem",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 600,
      extraBold: 800,
    },
  },
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Box
          sx={
            {
              // position: "relative",
            }
          }
        >
          <Component {...pageProps} />
          {/* <GoToTop /> */}
        </Box>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default MyApp;
