# Portfolio Website

A full-stack portfolio site built with React, Node.js and TypeScript.

## Structure

```
portfolio-website/
├── client/          # React + Vite + TypeScript frontend
├── server/          # Express + TypeScript API
├── package.json     # npm workspaces root
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

Vite proxies all `/api` requests from the client to the server, so the frontend
can call `/api/...` without any CORS setup in development.

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

## API

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| GET    | `/api/health`        | Health check       |
| GET    | `/api/projects`      | List all projects  |
| GET    | `/api/projects/:slug`| Get one project    |

## Environment variables

Server (`server/.env`):

```env
PORT=3001
CLIENT_ORIGIN=http://localhost:5173
```

## Next steps

- Add routing (React Router) and pages: home, projects, about, contact.
- Move project data to a database or CMS.
- Add a contact form endpoint and validation.
- Set up deployment (e.g. static client on Vercel/Netlify, API on Railway/Fly.io).
