
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom"
import { useEffect } from 'react'

import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function AppContent() {
  const location = useLocation();

  const themes = {
    "/": "theme-about",
    "/experience": "theme-experience",
    "/projects": "theme-projects"
  }

  const themeClass = themes[location.pathname] || "theme-about"

  useEffect(() => {
    document.body.className = themeClass;
  }, [themeClass]);

  return (
    <main>
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="name-header">
            <span>❯ </span>
            <span className="prompt-user">Frankelly@portfolio</span>
            <span className="prompt-symbol">:~$</span>
          </h1>
          <ul className="nav-links">
            <Link to="/projects" className="projects-link link">
              <span>❯ </span>
              <span className="prompt-user">guest@portfolio</span>
              <span className="prompt-symbol">:~$</span>
              <span className="prompt-command"> cd ./projects</span>
            </Link>
            <Link to="/experience" className="experience-link link">
              <span>❯ </span>
              <span className="prompt-user">guest@portfolio</span>
              <span className="prompt-symbol">:~$</span>
              <span className="prompt-command"> cd ./experience</span>
            </Link>
            <Link to="/" className="about-link link">
              <span>❯ </span>
              <span className="prompt-user">guest@portfolio</span>
              <span className="prompt-symbol">:~$</span>
              <span className="prompt-command"> cd ./about</span>
            </Link>
          </ul>
          <ul className="nav-social-icons">
            <li>
              <a href="https://www.linkedin.com/in/frankelly-cordero-9b17b0260" className="linkedin" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Frankelly-23" className="github" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className='main-content'>
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/experience" exact element={<Experience />} />
          <Route path="/projects" exact element={<Projects />} />
        </Routes>
      </section>
      <footer className="footer">
        <p>Frankelly Cordero TM • portfolio</p>
      </footer>
    </main>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
