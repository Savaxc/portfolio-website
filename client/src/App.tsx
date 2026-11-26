import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { useActiveSection } from './hooks/useActiveSection'
import './App.css'

const sectionIds = ['home', 'projects', 'about', 'contact'] as const

function App() {
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <div className="page-glow" aria-hidden="true" />

      <Header activeSection={activeSection} />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
