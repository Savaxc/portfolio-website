import { useEffect, useState } from 'react'
import './App.css'
import type { Project } from './types'

type ApiStatus = 'loading' | 'online' | 'offline'

const currentYear = new Date().getFullYear()

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [status, setStatus] = useState<ApiStatus>('loading')

  useEffect(() => {
    const controller = new AbortController()

    fetch('/api/projects', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        return response.json() as Promise<{ projects: Project[] }>
      })
      .then((data) => {
        setProjects(data.projects)
        setStatus('online')
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }
        setStatus('offline')
      })

    return () => controller.abort()
  }, [])

  return (
    <div className="page">
      <header className="site-header">
        <span className="logo">
          portfolio<span>.</span>
        </span>
        <span className={`status status--${status}`}>API: {status}</span>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">React · Node.js · TypeScript</p>
          <h1>
            Hi, I&apos;m Sava.
            <br />
            I build things for the web.
          </h1>
          <p className="lead">
            Welcome to my portfolio. This is the starting point — projects and
            case studies will live here.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>

          {status === 'offline' && (
            <p className="empty">
              The API is not reachable. Start the app with <code>npm run dev</code>.
            </p>
          )}

          {status !== 'offline' && projects.length === 0 && (
            <p className="empty">Loading projects…</p>
          )}

          {projects.length > 0 && (
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.slug} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <p>© {currentYear} Portfolio Website</p>
      </footer>
    </div>
  )
}

export default App
