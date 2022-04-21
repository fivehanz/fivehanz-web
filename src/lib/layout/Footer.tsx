// import { Flex, Link, Text } from "@chakra-ui/react";
import { Container, Text, Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <Container display="flex" as="footer" alignContent="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link
          href="https://fivehanz.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          fivehanz.xyz
        </Link>
      </Text>
    </Container>
  );
};

export default Footer;
