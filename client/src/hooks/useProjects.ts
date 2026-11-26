import { useCallback, useEffect, useState } from 'react'
import type { Project } from '../types'

export type ProjectsStatus = 'loading' | 'online' | 'offline'

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [status, setStatus] = useState<ProjectsStatus>('loading')
  const [attempt, setAttempt] = useState(0)

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
  }, [attempt])

  const retry = useCallback(() => {
    setStatus('loading')
    setAttempt((value) => value + 1)
  }, [])

  return { projects, status, retry }
}
