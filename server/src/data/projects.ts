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
    slug: 'inventory-management-app',
    title: 'Stock.app — Inventory Management',
    description:
      'Stock.app is a full-stack inventory platform with real-time tracking, low-stock email alerts, analytics, CSV import and PDF valuation reports.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    repository: 'https://github.com/Savaxc/inventory-management-app',
  },
  {
    slug: 'medisync',
    title: 'MediSync AI',
    description:
      'A health SaaS that turns lab results into plain language with GPT-4o, trend charts and downloadable PDF reports.',
    tags: ['React', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
    repository: 'https://github.com/Savaxc/MediSync',
  },
  {
    slug: 'charades',
    title: 'Charades',
    description:
      'A React Native party game — pick categories, put the phone on your forehead and tilt to score. 342 terms across 7 categories.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    repository: 'https://github.com/Savaxc/Charades',
  },
];
