// import { Box } from "@chakra-ui/react";
import { Container, Spacer } from "@nextui-org/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container responsive>
      <Spacer y={1} />
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </Container>
  );
};

export default Layout;
