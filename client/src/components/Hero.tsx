import { site } from '../data/site'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <p className="hero-eyebrow">{site.hero.eyebrow}</p>

        <h1>
          {site.hero.title}
          <br />
          <span className="gradient-text">{site.hero.highlight}</span>
        </h1>

        <p className="hero-lead">{site.hero.lead}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects
            <span aria-hidden="true">↓</span>
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>

        <ul className="hero-stack" aria-label="Technologies I work with">
          {site.hero.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a className="scroll-hint" href="#projects">
          <span className="scroll-line" aria-hidden="true" />
          Scroll to explore
        </a>
      </div>
    </section>
  )
}
