import { Container, Typography } from "@mui/material";
import Brand from "../blocks/Brand";

const Footer = () => {
  return (
    <footer>
      <Container
        sx={{
          margin: "1rem auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Brand />
        <Typography>&copy; {new Date().getFullYear()}</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
