export const site = {
  name: 'Sava',
  github: 'https://github.com/Savaxc',
  email: 'hello@example.com', // TODO: replace with your real email

  hero: {
    eyebrow: 'Frontend developer',
    title: "Hi, I'm Sava.",
    highlight: 'I build for the web.',
    lead: 'Frontend developer focused on clean interfaces, smooth interactions and solid TypeScript. I turn ideas into fast, accessible websites — from the first sketch to the final deploy.',
    stack: ['React', 'TypeScript', 'Node.js', 'Vite'],
  },

  about: {
    paragraphs: [
      "I'm a developer who likes turning ideas into clean, fast interfaces. Most of my work happens in React and TypeScript, with a Node.js API behind it when a project needs one.",
      "I care about the details — readable code, thoughtful interactions and pages that feel good to use on any screen. Right now I'm building out this portfolio and looking for interesting projects to collaborate on.",
    ],
    toolbox: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'HTML & CSS', 'Vite'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
      { label: 'Tooling', items: ['Git & GitHub', 'VS Code', 'Figma'] },
    ],
  },
} as const
