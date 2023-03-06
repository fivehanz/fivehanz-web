import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";

const Brand = () => {
  const theme = useTheme();

  return (
    <Typography
      // @ts-ignore
      sx={css`
        font-size: ${theme.custom.fontSize.brand};
        font-weight: ${theme.custom.fontWeight.extraBold};
      `}
    >
      fivehanz.
    </Typography>
  );
};

export default Brand;
