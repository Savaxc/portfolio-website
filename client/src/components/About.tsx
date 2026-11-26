import { site } from '../data/site'

export function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="section-label">02 — About</p>
          <h2>A bit about me</h2>

          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <a className="text-link" href="#contact">
            Let&apos;s work together <span aria-hidden="true">→</span>
          </a>
        </div>

        <aside className="toolbox" aria-label="Tools and technologies">
          <h3>Toolbox</h3>

          {site.about.toolbox.map((group) => (
            <div className="toolbox-group" key={group.label}>
              <h4>{group.label}</h4>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
