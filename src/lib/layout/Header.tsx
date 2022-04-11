import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "home", href: "/" },
  {
    name: "devBlog",
    href: "https://blog.fivehanz.xyz",
  },
  { name: "blog", href: "/blog" },
  { name: "projects", href: "/projects" },
  { name: "resources", href: "/resources" },
  { name: "contact", href: "/contact" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        as="header"
        width="full"
        align="center"
        justifyContent="space-between"
      >
        <HStack>
          <Heading as="h1" size="md">
            <Link href="/">fivehanz</Link>
          </Heading>
        </HStack>

        <HStack>
          <Box display={{ md: "none" }}>
            <ThemeToggle />
          </Box>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </HStack>

        <HStack as="nav" spacing={10} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link href={link.href}>{link.name}</Link>
          ))}
          <Box marginLeft="auto">
            <ThemeToggle />
          </Box>
        </HStack>
      </Flex>
      {isOpen ? (
        <Box m={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <Link href={link.href}>{link.name}</Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
