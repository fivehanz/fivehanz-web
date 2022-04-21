/* eslint-disable react/jsx-no-useless-fragment */
// import {
//   Box,
//   Button,
//   Heading,
//   Image,
//   Text,
//   Link as ChakraLink,
//   useColorMode,
//   Flex,
// } from "@chakra-ui/react";
// import Link from "next/link";

// import MotionBox from "lib/components/motion/Box";

const Page404 = () => {
  // const { colorMode } = useColorMode();

  return (
    <>
      {/* <Flex my={6} minHeight="70vh" direction="column" justifyContent="center">
      <Box>
        <Heading textAlign="center">Page not Found.</Heading>
      </Box>
      <MotionBox
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={["100%", "70%", "60%", "60%"]}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink
          href="https://stories.freepik.com/web"
          isExternal
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={2}>
        <Box textAlign="center" marginTop={4}>
          {/* <Text my={5}>It&apos;s Okay!</Text> 
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              It&apos;s Okay! Let&apos;s Head Back.
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex> */}
    </>
  );
};

export default Page404;
