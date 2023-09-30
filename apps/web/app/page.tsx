'use client';

import { Box, CSSObject, useTheme } from '@mui/material';
import HeaderSection from '../components/header-section/header-section';

export default function Index() {
  const theme = useTheme();

  // Define the styles object
  const styles: CSSObject = {
    fontFamily: 'Manrope, sans-serif',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  // Render the component
  return (
    <Box sx={styles}>
      <HeaderSection />
    </Box>
  );
}
