'use client';

import { Box, CSSObject, useTheme } from '@mui/material';
import HeaderSection from '../components/header-section/header-section';
import HeroSection from '../components/hero-section/hero-section';
import ProjectSection from '../components/project-section/project-section';
import AboutSection from '../components/about-section/about-section';
import ContactSection from '../components/contact-section/contact-section';
import FooterSection from '../components/footer-section/footer-section';
import ProgressBar from '../components/progress-bar/progress-bar';
import axios from 'axios';
import { request } from 'graphql-request';
import useSWR from 'swr';

const gqlFetcher = (query: string): Promise<HashnodeBlogApiResponse> =>
  request('https://api.hashnode.com/', query);

const axiosFetcher = (url: string) => {
  return axios
    .get(url, { headers: { Authorization: 'Bearer ' + 'some token' } })
    .then((res) => res.data);
};

export default function Index() {
  const theme = useTheme();

  const { data: blogData, isLoading: blogIsLoading } = useSWR<
    HashnodeBlogApiResponse,
    unknown
  >(
    `{
    user(username: "fivehanz") {
      publication {
        posts(page: 0) {
          slug
          title
          views
          dateAdded
          dateUpdated
        }
      }
      publicationDomain
      numPosts
    }
  }`,
    gqlFetcher
  );
  const { data: projectData, isLoading: projectIsLoading } = useSWR(
    '//fivehanz.xyz/api/projects',
    axiosFetcher
  );

  // Define the styles object
  const styles: CSSObject = {
    fontFamily: 'Manrope, sans-serif',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  // Render the component
  return (
    <Box sx={styles}>
      <ProgressBar />
      <HeaderSection />
      <HeroSection data={blogData?.user} isLoading={blogIsLoading} />
      <ProjectSection
        projects={projectData?.projects}
        isLoading={projectIsLoading}
      />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </Box>
  );
}
