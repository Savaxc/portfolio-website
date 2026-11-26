import { site } from '../data/site'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {currentYear} {site.name}. Built with React, TypeScript &amp; Node.js.
        </p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
