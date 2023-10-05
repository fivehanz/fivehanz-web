import { ByRoleOptions, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogpostCard from './blogpost-card';

test('renders blog post card with correct title and publication date', () => {
  const post = {
    link: 'https://example.com',
    title: 'Test Blog Post',
    pubDate: '2022-01-01',
  };

  render(<BlogpostCard post={post} />);

  const titleElement = screen.getByText(/Test Blog Post/i);
  expect(titleElement).toBeInTheDocument();

  const dateElement = screen.getByText(/2022-01-01/i);
  expect(dateElement).toBeInTheDocument();
});

test('renders blog post card with correct link', () => {
  const post = {
    link: 'https://example.com',
    title: 'Test Blog Post',
    pubDate: '2022-01-01',
  };

  render(<BlogpostCard post={post} />);

  const linkElement = screen.getByRole('link', {
    href: 'https://example.com',
  } as ByRoleOptions);
  expect(linkElement).toBeInTheDocument();
});
