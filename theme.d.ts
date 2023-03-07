import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    custom: {
      fontSize: {
        heading: string;
        hero: string;
        heroMobile: string;
        brand: string;
        nav: string;
        mobileNav: string;
      };
      fontWeight: {
        light: number;
        regular: number;
        bold: number;
        extraBold: number;
      };
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    custom?: {
      fontSize?: {
        heading?: string;
        hero?: string;
        heroMobile?: string;
        brand?: string;
        nav?: string;
        mobileNav?: string;
      };
      fontWeight: {
        light?: number;
        regular?: number;
        bold?: number;
        extraBold?: number;
      };
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
