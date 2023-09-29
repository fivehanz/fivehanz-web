'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

/* eslint-disable-next-line */
export interface ThemeRegistryProps {
  children: React.ReactNode;
}

// default theme
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function ThemeRegistry(props: ThemeRegistryProps) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeRegistry;
