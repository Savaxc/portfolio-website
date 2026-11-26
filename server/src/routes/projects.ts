import { Router } from 'express';
import { projects } from '../data/projects.js';

export const projectsRouter = Router();

projectsRouter.get('/', (_req, res) => {
  res.json({ projects });
});

projectsRouter.get('/:slug', (req, res) => {
  const project = projects.find((item) => item.slug === req.params.slug);

  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  res.json({ project });
});
