
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate
} from "react-router-dom"
import { useEffect, useRef } from 'react'

import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);

  const routes = ["/", "/experience", "/projects"];

  const themes = {
    "/": "theme-about",
    "/experience": "theme-experience",
    "/projects": "theme-projects"
  }

  const themeClass = themes[location.pathname] || "theme-about"

  useEffect(() => {
    document.body.className = themeClass;
  }, [themeClass]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling.current) return;

      const currentIndex = routes.indexOf(location.pathname);
      
      if (e.deltaY > 0 && currentIndex < routes.length - 1) {
        // Scroll Down -> Next Page
        isScrolling.current = true;
        navigate(routes[currentIndex + 1]);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll Up -> Previous Page
        isScrolling.current = true;
        navigate(routes[currentIndex - 1]);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [location.pathname, navigate]);

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
            <NavLink to="/" className="about-link link" end>
              <span>❯ </span>
              <span className="prompt-user">guest@portfolio</span>
              <span className="prompt-symbol">:~$</span>
              <span className="prompt-command"> cd ./about</span>
            </NavLink>
            <NavLink to="/experience" className="experience-link link">
              <span>❯ </span>
              <span className="prompt-user">guest@portfolio</span>
              <span className="prompt-symbol">:~$</span>
              <span className="prompt-command"> cd ./experience</span>
            </NavLink>
            <NavLink to="/projects" className="projects-link link">
              <span>❯ </span>
              <span className="prompt-user">guest@portfolio</span>
              <span className="prompt-symbol">:~$</span>
              <span className="prompt-command"> cd ./projects</span>
            </NavLink>
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
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" exact element={<About />} />
            <Route path="/experience" exact element={<Experience />} />
            <Route path="/projects" exact element={<Projects />} />
          </Routes>
        </div>
      </section>
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
