import { Container, Typography } from '@mui/material';
import Brand from '../brand/brand';

/* eslint-disable-next-line */
export interface FooterSectionProps {}

/**
 * Footer section component.
 *
 * @component
 */
const FooterSection: React.FC<FooterSectionProps> = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Footer container */}
      <Container
        sx={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        data-testid="footer"
      >
        {/* Brand component */}
        <Brand />

        {/* Copyright */}
        <Typography>&copy; {currentYear}</Typography>
      </Container>
    </footer>
  );
};

export default FooterSection;
