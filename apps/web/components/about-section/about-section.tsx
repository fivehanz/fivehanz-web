import { Container, Box, Typography } from '@mui/material';
import AboutCard from '../about-card/about-card';
import Title from '../title/title';
import {
  SiLinkedin,
  SiGithub,
  SiTwitter,
  SiGitlab,
  SiHashnode,
} from '@icons-pack/react-simple-icons';

/* eslint-disable-next-line */
export interface AboutSectionProps {}

const socialMediaLinks: SocialMediaLink[] = [
  {
    href: 'https://www.linkedin.com/in/fivehanz/',
    icon: <SiLinkedin width={40} height={40} />,
  },
  {
    href: 'https://twitter.com/fivehanz',
    icon: <SiTwitter width={40} height={40} />,
  },
  {
    href: 'https://github.com/fivehanz',
    icon: <SiGithub width={40} height={40} />,
  },
  {
    href: 'https://gitlab.com/fivehanz/',
    icon: <SiGitlab width={40} height={40} />,
  },
  {
    href: 'https://hashnode.com/@fivehanz',
    icon: <SiHashnode width={40} height={40} />,
  },
];

export function AboutSection(props: AboutSectionProps) {
  return (
    <section id="about">
      <Container>
        <Title underlineWidth="3rem">about</Title>
        <Box
          id="about-card-box"
          sx={{
            padding: '2.5rem 0',
            margin: '4rem 1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AboutCard socialMediaLinks={socialMediaLinks} />
        </Box>
      </Container>
    </section>
  );
}

export default AboutSection;
