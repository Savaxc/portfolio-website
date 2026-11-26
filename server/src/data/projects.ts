export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repository?: string;
}

export const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'A one-page portfolio with a React frontend, a typed Express API and a dark, responsive design.',
    tags: ['React', 'TypeScript', 'Node.js'],
    repository: 'https://github.com/Savaxc/portfolio-website',
  },
  {
    slug: 'taskflow',
    title: 'Taskflow',
    description:
      'A Kanban board for planning personal projects, with drag-and-drop columns and local persistence.',
    tags: ['React', 'TypeScript', 'Zustand'],
  },
  {
    slug: 'weatherly',
    title: 'Weatherly',
    description:
      'A minimal weather app with location search, hourly forecasts and a clean, focused interface.',
    tags: ['React', 'Vite', 'REST API'],
  },
];
