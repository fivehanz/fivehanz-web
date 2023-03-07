import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";

const Brand = () => {
  const theme = useTheme();

  return (
    <Typography
      // @ts-ignore
      sx={css`
        font-size: 2rem;
        font-weight: 800;
      `}
    >
      fivehanz.
    </Typography>
  );
};

export default Brand;
