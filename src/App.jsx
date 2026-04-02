
import {
  HashRouter as Router,
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

const routes = ["/", "/experience", "/projects"];

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);

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
    let startY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current) return;
      if (window.innerWidth > 768) return;

      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;
      const currentIndex = routes.indexOf(location.pathname);

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      const isAtTop = window.scrollY <= 10;

      if (deltaY > 50 && isAtBottom && currentIndex < routes.length - 1) {
        isScrolling.current = true;
        navigate(routes[currentIndex + 1]);
        window.scrollTo(0, 0);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      } else if (deltaY < -50 && isAtTop && currentIndex > 0) {
        isScrolling.current = true;
        navigate(routes[currentIndex - 1]);
        window.scrollTo(0, 0);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      }
    };

    const handleScroll = (e) => {
      if (isScrolling.current) return;

      const currentIndex = routes.indexOf(location.pathname);
      
      // On mobile, only change page if at extreme top/bottom
      if (window.innerWidth <= 768) {
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
        const isAtTop = window.scrollY <= 10;
        
        if (e.deltaY > 0 && !isAtBottom) return;
        if (e.deltaY < 0 && !isAtTop) return;
      }

      if (e.deltaY > 0 && currentIndex < routes.length - 1) {

        isScrolling.current = true;
        navigate(routes[currentIndex + 1]);
        window.scrollTo(0, 0);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      } else if (e.deltaY < 0 && currentIndex > 0) {

        isScrolling.current = true;
        navigate(routes[currentIndex - 1]);
        window.scrollTo(0, 0);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
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
