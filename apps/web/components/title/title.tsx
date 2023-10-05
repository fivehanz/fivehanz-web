import { Box, Typography, useTheme } from '@mui/material';
import { css } from '@emotion/react';

/* eslint-disable-next-line */
export interface TitleProps {
  reverse?: boolean;
  underlineWidth?: string;
  children: React.ReactNode;
}

const Title = ({ reverse, children, underlineWidth }: TitleProps) => {
  const theme = useTheme();
  const flexDirection = reverse ? 'row-reverse' : 'row';
  const underlineStyle = css`
    color: ${theme.palette.text.primary};
    font-size: 1.875rem;
    font-weight: 800;
    line-height: 2;
    position: relative;
    &:after {
      position: absolute;
      content: '';
      background-color: ${theme.palette.text.primary};
      bottom: 0;
      ${reverse ? 'right: 0;' : 'left: 0;'}
      height: 0.35rem;
      width: ${underlineWidth || '4rem'};
    }
  `;

  return (
    <Box sx={{ display: 'flex', flexDirection }}>
      <Typography
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        sx={underlineStyle}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Title;
