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
          <Link href="/">Home</Link>
          <Link href="https://blog.fivehanz.xyz">devBlog</Link>
          {/* <Link href="/blog">Blog</Link> */}
          <Link href="/contact">Contact</Link>
          <Box marginLeft="auto">
            <ThemeToggle />
          </Box>
        </HStack>
      </Flex>
      {isOpen ? (
        <Box m={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link href="/">Home</Link>
            <Link href="https://blog.fivehanz.xyz">devBlog</Link>
            {/* <Link href="/blog">Blog</Link> */}
            <Link href="/contact">Contact</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
