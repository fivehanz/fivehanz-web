'use client';

import { Box, useTheme } from '@mui/material';

export default async function Index() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        fontFamily: 'Manrope, sans-serif',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    ></Box>
  );
}
