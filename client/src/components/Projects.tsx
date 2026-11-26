import { site } from '../data/site'
import { useProjects } from '../hooks/useProjects'
import type { Project } from '../types'

const skeletonCards = ['one', 'two', 'three']

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.url ?? project.repository

  const content = (
    <>
      <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags" aria-label={`Technologies used in ${project.title}`}>
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      {href && (
        <span className="project-cta" aria-hidden="true">
          View project <span>→</span>
        </span>
      )}
    </>
  )

  return (
    <li className="project-item">
      {href ? (
        <a className="project-card" href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <div className="project-card">{content}</div>
      )}
    </li>
  )
}

export function Projects() {
  const { projects, status, retry } = useProjects()

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">01 — Projects</p>
          <h2>Selected projects</h2>
          <p className="section-desc">
            A few things I&apos;ve built — from full-stack platforms to a mobile
            party game. More experiments live on GitHub.
          </p>
        </div>

        {status === 'loading' && (
          <>
            <div className="project-grid" aria-hidden="true">
              {skeletonCards.map((key) => (
                <div className="project-card skeleton-card" key={key}>
                  <span className="skeleton skeleton-index" />
                  <span className="skeleton skeleton-title" />
                  <span className="skeleton skeleton-line" />
                  <span className="skeleton skeleton-line skeleton-line--short" />
                  <span className="skeleton skeleton-tag" />
                </div>
              ))}
            </div>
            <p className="visually-hidden" role="status">
              Loading projects…
            </p>
          </>
        )}

        {status === 'offline' && (
          <div className="notice">
            <p>
              Projects couldn&apos;t load. Make sure the API is running with{' '}
              <code>npm run dev</code>.
            </p>
            <button type="button" className="btn btn-ghost btn-sm" onClick={retry}>
              Try again
            </button>
          </div>
        )}

        {status === 'online' && projects.length === 0 && (
          <p className="empty-state">No projects yet — check back soon.</p>
        )}

        {projects.length > 0 && (
          <ul className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </ul>
        )}

        <a
          className="section-footer-link"
          href={site.github}
          target="_blank"
          rel="noreferrer"
        >
          More on GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
