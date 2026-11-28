# Portfolio Website

A one-page portfolio site with a dark, responsive design — built with React,
TypeScript, Vite and a small Express API.

Live sections: **Home**, **Projects**, **About** and **Contact**, with smooth
scrolling and active-section navigation. A header button switches between the
default dark theme and a light theme, and the choice is saved in `localStorage`.

## Structure

```
portfolio-website/
├── client/                  # React + Vite + TypeScript frontend
│   ├── src/components/      # Header, Hero, Projects, About, Contact, Footer
│   ├── src/hooks/           # useActiveSection, useProjects, useTheme
│   ├── src/data/site.ts     # Edit your name, email, bio and toolbox here
│   └── vite.config.ts       # /api proxy → localhost:3001
├── server/                  # Express + TypeScript API
│   └── src/data/projects.ts # Project list served by the API
├── package.json             # npm workspaces root
└── README.md
```

## Requirements

- Node.js >= 20
- npm >= 10

## Getting started

```bash
npm install
cp server/.env.example server/.env   # optional, defaults work out of the box
npm run dev
```

- Frontend: http://localhost:5173
- API: http://localhost:3001

Vite proxies all `/api` requests to the server, so no CORS setup is needed in
development.

## Scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start client and server together (watch) |
| `npm run dev:client` | Start only the Vite dev server           |
| `npm run dev:server` | Start only the API in watch mode         |
| `npm run build`      | Build server and client for production   |
| `npm start`          | Run the compiled API server              |
| `npm run typecheck`  | Type-check both workspaces               |
| `npm run lint`       | Lint the client                          |

## Customizing

- **Personal info & copy** — `client/src/data/site.ts` (name, email, GitHub,
  hero text, about text, toolbox).
- **Projects** — `server/src/data/projects.ts` (Stock.app, MediSync AI, Charades).
- **Colors & spacing** — CSS variables at the top of `client/src/index.css`.
  The default dark palette lives in `:root`; the light palette overrides those
  tokens under `[data-theme='light']`.
- **Fonts** — Space Grotesk (headings), Inter (body) and JetBrains Mono
  (labels/tags), self-hosted via Fontsource and imported in `client/src/main.tsx`.

The email in `site.ts` (`hello@example.com`) is a placeholder — update it before
publishing.

## API

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| GET    | `/api/health`         | Health check      |
| GET    | `/api/projects`       | List all projects |
| GET    | `/api/projects/:slug` | Get one project   |

## Environment variables

Server (`server/.env`):

```env
PORT=3001
CLIENT_ORIGIN=http://localhost:5173
```

## Deployment notes

- Build with `npm run build`.
- Serve `client/dist` as a static site and run the API with `npm start`.
- Point the frontend at the API origin (or keep `/api` behind the same reverse
  proxy) and set `CLIENT_ORIGIN` on the server.

## Next steps

- Replace the placeholder email and adjust the project list.
- Add a contact form endpoint with validation and email delivery.
- Add analytics and Open Graph metadata.
