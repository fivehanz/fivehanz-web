import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectSection from './project-section';

const projects: Project[] = [
  {
    id: '1',
    name: 'Project 1',
    subtitle: 'Subtitle 1',
    description: 'Description 1',
    tags: [{ id: '1', name: 'Tag 1' }],
    links: [{ id: '1', title: 'Link 1', href: 'https://link1.com' }],
  },
  {
    id: '2',
    name: 'Project 2',
    subtitle: 'Subtitle 2',
    description: 'Description 2',
    tags: [{ id: '2', name: 'Tag 2' }],
    links: [{ id: '2', title: 'Link 2', href: 'https://link2.com' }],
  },
];

test('renders the project section with no projects', () => {
  const { container } = render(<ProjectSection projects={[]} />);
  const projectSection = container.querySelector('#projects');

  expect(projectSection).toBeInTheDocument();
});

test('renders the project section with one project', () => {
  const { container } = render(<ProjectSection projects={[projects[0]]} />);
  const projectSection = container.querySelector('#projects');
  const projectCard = container.querySelector('.project-card');

  expect(projectSection).toBeInTheDocument();
  expect(projectCard).toBeInTheDocument();
  expect(projectCard).toHaveTextContent('Project 1');
  expect(projectCard).toHaveTextContent('Subtitle 1');
  expect(projectCard).toHaveTextContent('Description 1');
});

test('renders the project section with multiple projects', () => {
  const { container } = render(<ProjectSection projects={projects} />);
  const projectSection = container.querySelector('#projects');
  const projectCards = container.querySelectorAll('.project-card');

  expect(projectSection).toBeInTheDocument();
  expect(projectCards.length).toBe(projects.length);

  projectCards.forEach((projectCard, index) => {
    expect(projectCard).toHaveTextContent(projects[index].name);
    expect(projectCard).toHaveTextContent(projects[index].subtitle);
    expect(projectCard).toHaveTextContent(projects[index].description);
  });
});
