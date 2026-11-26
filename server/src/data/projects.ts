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
    description: 'This site — a React frontend with a Node.js and TypeScript API.',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
];
