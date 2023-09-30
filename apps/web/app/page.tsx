'use client';

import { Box, CSSObject, useTheme } from '@mui/material';
import HeaderSection from '../components/header-section/header-section';
import HeroSection from '../components/hero-section/hero-section';
import ProjectSection from '../components/project-section/project-section';
import AboutSection from '../components/about-section/about-section';
import ContactSection from '../components/contact-section/contact-section';
import FooterSection from '../components/footer-section/footer-section';

export default function Index() {
  const theme = useTheme();

  // Define the styles object
  const styles: CSSObject = {
    fontFamily: 'Manrope, sans-serif',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  // Render the component
  return (
    <Box sx={styles}>
      <HeaderSection />
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </Box>
  );
}
