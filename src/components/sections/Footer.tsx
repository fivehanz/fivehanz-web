import { Container, Typography } from "@mui/material";
import Brand from "../blocks/Brand";

const Footer = () => {
  return (
    <footer>
      <Container
        sx={{
          marginTop: "1rem",
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
