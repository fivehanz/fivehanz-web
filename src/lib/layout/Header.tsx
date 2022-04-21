// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Flex,
//   Heading,
//   HStack,
//   Stack,
//   IconButton,
//   useDisclosure,
// } from "@chakra-ui/react";
import { Container, Text, Link } from "@nextui-org/react";

// eslint-disable-next-line import/no-named-as-default
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
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container
        as="header"
        wrap="nowrap"
        display="flex"
        justify="space-between"
        alignItems="baseline"
      >
        <Container>
          <Text h2 weight="bold">
            <Link color="secondary" href="/">
              fivehanz.xyz
            </Link>
          </Text>
        </Container>

        {/* <HStack>
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
        </HStack> */}

        <Container
          as="nav"
          display="flex"
          direction="row"
          wrap="nowrap"
          justify="space-between"
        >
          {links.map((link) => (
            <Text h4 weight="bold">
              <Link href={link.href}>{link.name}</Link>
            </Text>
          ))}
          {/* < marginLeft="auto"> */}
          <ThemeToggle />
          {/* </Box> */}
        </Container>
      </Container>
      {/* {isOpen ? (
        <Box m={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <Link href={link.href}>{link.name}</Link>
            ))}
          </Stack>
        </Box>
            ) : null} */}
    </>
  );
};

export default Header;
