import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from './project-card';

describe('ProjectCard', () => {
  const project: Project = {
    id: '1',
    name: 'Test Project',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
    tags: [
      { id: '1', name: 'Tag 1' },
      { id: '2', name: 'Tag 2' },
    ],
    links: [{ id: '1', title: 'Link 1', href: 'https://link1.com' }],
  };

  it('renders project card component with correct content', () => {
    render(<ProjectCard project={project} />);

    // Check if the project name is rendered
    expect(screen.getByText('Test Project')).toBeInTheDocument();

    // Check if the project subtitle is rendered
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();

    // Check if the project description is rendered
    expect(screen.getByText('Test Description')).toBeInTheDocument();

    // Check if the tags are rendered
    expect(screen.getByText('Tag 1')).toBeInTheDocument();
    expect(screen.getByText('Tag 2')).toBeInTheDocument();

    // Check if the link button is rendered
    expect(screen.getByRole('link', { name: 'Link 1' })).toBeInTheDocument();
  });
});
