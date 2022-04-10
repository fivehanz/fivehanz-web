import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://fivehanz.xyz" isExternal rel="noopener noreferrer">
          fivehanz.xyz
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
