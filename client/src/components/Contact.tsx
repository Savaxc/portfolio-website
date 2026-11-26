import { useEffect, useState } from 'react'
import { site } from '../data/site'

type CopyState = 'idle' | 'copied' | 'failed'

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle')

  useEffect(() => {
    if (copyState === 'idle') {
      return
    }

    const timeout = window.setTimeout(() => setCopyState('idle'), 2000)
    return () => window.clearTimeout(timeout)
  }, [copyState])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
  }

  const copyLabel =
    copyState === 'copied'
      ? 'Copied ✓'
      : copyState === 'failed'
        ? 'Copy failed'
        : 'Copy email'

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <p className="section-label">03 — Contact</p>
        <h2>Let&apos;s build something together.</h2>
        <p className="contact-lead">
          Have a project in mind, or just want to say hi? My inbox is always
          open — I&apos;ll get back to you as soon as I can.
        </p>

        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={copyEmail}
            aria-live="polite"
          >
            {copyLabel}
          </button>
          <a
            className="btn btn-ghost"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
