import { useTheme } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
import MuiBox, { BoxProps } from '@mui/material/Box';
import React from 'react';

/* eslint-disable-next-line */
export interface ProgressBarProps {}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
// eslint-disable-next-line react/display-name
const BoxComponent = React.forwardRef((props: BoxProps, ref) => (
  <MuiBox {...props} ref={ref} />
));

const MotionBox = motion(BoxComponent);

const ProgressBar = (props: ProgressBarProps) => {
  const { scrollYProgress } = useScroll();
  const theme = useTheme();

  return (
    <MotionBox
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        height: '0.4rem',
        background: theme.palette.secondary.main,
        transformOrigin: '0%',
        zIndex: '99',
      }}
      style={{ scaleX: scrollYProgress }}
    ></MotionBox>
  );
};

export default ProgressBar;
