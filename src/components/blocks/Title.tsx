import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react";

const Title = (props) => {
  const { reverse, children, underlineWidth } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <Typography
        //@ts-ignore
        sx={css`
          font-size: 1.875rem;
          font-weight: 800;
          line-height: 2;
          // padding: 0 0.8rem;
          position: relative;
          &:after {
            position: absolute;

            content: "";
            background-color: black;
            bottom: 0;
            ${reverse ? "right: 0;" : "left: 0;"}
            height: 0.35rem;
            width: ${underlineWidth || "4rem"};
          }
        `}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Title;
