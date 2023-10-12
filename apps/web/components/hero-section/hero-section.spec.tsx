import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from './hero-section';

test('renders the hero section with recent blog posts', () => {
  const blogs: Blogpost[] = [
    {
      title: 'Blog Post 1',
      pubDate: '2022-01-01',
      link: 'https://example.com',
    },
    {
      title: 'Blog Post 2',
      description: 'Consectetur adipiscing elit',
      pubDate: '2022-01-02',
      link: 'https://example.com',
    },
    {
      title: 'Blog Post 3',
      pubDate: '2022-01-03',
      link: 'https://example.com',
    },
  ];

  render(<HeroSection blogs={blogs} />);

  // Assert that the section title is rendered
  const titleElement = screen.getByText('recent blogs');
  expect(titleElement).toBeInTheDocument();

  // Assert that the correct number of blog post cards are rendered
  const blogPostCards = screen.getAllByTestId('blogpost-card');
  expect(blogPostCards).toHaveLength(blogs.length);
});
