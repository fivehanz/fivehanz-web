import { Hono } from 'hono';

const app = new Hono();

app.get('/api/', (c) => c.text('Hello Cloudflare Workers!'));

// GET endpoints for all projects
app.get('/api/projects', (c) => {
  // Mock data
  const projects = [
    {
      id: '',
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

  return c.json({ projects });
});

// GET endpoints for project by id
app.get('/api/projects/:id', (c) => {
  // Mock data
  const project = {
    id: '1',
    name: 'Project 1',
    subtitle: 'Subtitle 1',
    description: 'Description 1',
    tags: [{ id: '1', name: 'Tag 1' }],
    links: [{ id: '1', title: 'Link 1', href: 'https://link1.com' }],
  };
  return c.json({ project });
});

// POST endpoints for projects
app.post('/api/projects', (c) => {
  // Mock data
  const project = {
    id: '1',
    name: 'Project 1',
    subtitle: 'Subtitle 1',
    description: 'Description 1',
    tags: [{ id: '1', name: 'Tag 1' }],
    links: [{ id: '1', title: 'Link 1', href: 'https://link1.com' }],
  };
  return c.json(project);
});

export default app;
