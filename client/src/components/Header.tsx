import { site } from '../data/site'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home">
          {site.name.toLowerCase()}
          <span className="logo-dot">.</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <a className="btn btn-ghost btn-sm header-cta" href="#contact">
          Let&apos;s talk
        </a>

        <ThemeToggle />
      </div>
    </header>
  )
}
