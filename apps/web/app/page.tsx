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

/**
 * Fetches data from the Hashnode API using a GraphQL query.
 *
 * @param {string} query - The GraphQL query string.
 * @return {Promise<HashnodeBlogApiResponse>} - A promise that resolves with the API response data.
 */
const gqlFetcher = (query: string): Promise<HashnodeBlogApiResponse> =>
  request('https://api.hashnode.com/', query);

/**
 * Fetches data from the given URL using Axios.
 *
 * @param {string} url - The URL to fetch data from.
 * @return {Promise<any>} A promise that resolves to the fetched data.
 */
const axiosFetcher = (url: string) => {
  return axios.get(url).then((res) => res.data);
};

export default function Index() {
  const theme = useTheme();
// // {
//   user(username: "fivehanz") {
//     publications(first: 1) {
//       edges {
//         node {
//           posts(first: 3) {
//             edges {
//               node {
//                 url
//                 title
//                 brief
//                 views
//                 tags {
//                   name
//                 }
//                 coverImage {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
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
    '//web.hanz.lol/api/projects',
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
