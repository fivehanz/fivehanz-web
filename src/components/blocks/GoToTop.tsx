import { useTheme, Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isSmallMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let hiddenUntil = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > hiddenUntil ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {isVisible && (
        <Box
          onClick={goToTop}
          sx={{
            fontSize: "2.4rem",
            color: theme.palette.secondary.main,
            width: "4rem",
            height: "4rem",

            backgroundColor: "",
            boxShadow: theme.palette.primary.main,
            borderRadius: "50%",

            postion: "fixed",
            bottom: "4rem",
            right: "4rem",
            zIndex: "999",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",

            ...(isSmallMediaQuery && {
              right: "2rem",
              bottom: "2rem",
            }),
          }}
        >
          <FaArrowUp />
        </Box>
      )}
    </Box>
  );
};

export default GoToTop;
