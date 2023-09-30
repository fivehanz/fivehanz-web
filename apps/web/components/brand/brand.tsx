import { Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface BrandProps {}

export function Brand(props: BrandProps) {
  return (
    <Typography
      sx={{
        fontSize: '2rem',
        fontWeight: '800',
      }}
    >
      fivehanz.
    </Typography>
  );
}

export default Brand;
