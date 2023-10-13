import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  LIBSQL_DB_URL: string;
  CORS_ORIGIN_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// Add CORS configs
app.use('*', async (c, next) => {
  const corsConfig = cors({
    // Replace with your frontend URL in ENVIRONMENT VARIABLES
    origin: c.env.CORS_ORIGIN_URL,
    allowMethods: ['POST', 'GET', 'OPTIONS', 'HEAD'],
    maxAge: 600,
    credentials: true,
  });

  return corsConfig(c, next);
});
app.all('/api/', (c) => c.json({ hello: 'world' }));

// GET endpoints for all projects (READ ALL)
app.get('/api/projects', (c) => {
  // Mock data
  const projects: Project[] = [
    {
      id: '1',
      name: 'Project 1 from api',
      subtitle: 'Subtitle 1',
      description: 'Description 1',
      tags: [{ id: '1', name: 'Tag 1' }],
      links: [{ id: '1', title: 'Link 1', href: 'https://link1.com' }],
    },
    {
      id: '2',
      name: 'Project 2 from api',
      subtitle: 'Subtitle 2',
      description: 'Description 2',
      tags: [{ id: '2', name: 'Tag 2' }],
      links: [{ id: '2', title: 'Link 2', href: 'https://link2.com' }],
    },
  ];

  return c.json({ projects });
});

// GET endpoints for project by id (READ ONE)
app.get('/api/projects/:id', (c) => {
  // Mock data
  const project: Project = {
    id: '1',
    name: 'Project 1',
    subtitle: 'Subtitle 1',
    description: 'Description 1',
    tags: [{ id: '1', name: 'Tag 1' }],
    links: [{ id: '1', title: 'Link 1', href: 'https://link1.com' }],
  };
  return c.json({ project });
});

// PUT endpoints for project by id (UPDATE)
app.put('/api/projects/:id', (c) => {
  // Mock data
  const project: Project = {
    id: '1',
    name: 'Project 1',
    subtitle: 'Subtitle 1',
    description: 'Description 1',
    tags: [{ id: '1', name: 'Tag 1' }],
    links: [{ id: '1', title: 'Link 1', href: 'https://link1.com' }],
  };
  return c.json(project);
});

// DELETE endpoints for project by id (DELETE)
app.delete('/api/projects/:id', (c) => {
  return c.json({ id: c.req.param('id'), deleted: true });
});

// POST endpoints for projects (CREATE)
app.post('/api/projects', (c) => {
  // Mock data
  const project: Project = {
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
