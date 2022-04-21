// import { IconButton, useColorMode } from "@chakra-ui/react";

// const ThemeToggle = () => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <IconButton
//       aria-label="theme toggle"
//       icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
//       onClick={toggleColorMode}
//     />
//   );
// };

// export default ThemeToggle;

import type { SwitchProps } from "@nextui-org/react";
import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import { RiMoonFill } from "react-icons/ri";

// import { Moon } from "../icons";

export const ThemeToggle: React.FC<Partial<SwitchProps>> = ({ ...props }) => {
  const [isSelfDark, setIsSelfDark] = React.useState(false);

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const handleToggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setIsSelfDark(nextTheme === "dark");
    setTheme(nextTheme);
  };

  return (
    <Switch
      size="md"
      checked={isSelfDark || isDark}
      icon={<RiMoonFill />}
      onChange={handleToggleTheme}
      {...props}
    />
  );
};

export default ThemeToggle;
