
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import './App.css'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  const [view, setView] = useState("Home")

  return (
    <Router>
      <main>
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-links">
            <Link to="/projects" onClick={() => setView("Projects")} className="projects-link link"><li>projects</li></Link>
            <Link to="/experience" onClick={() => setView("Experience")} className="experience-link link"><li>experience</li></Link>
            <Link to="/about" onClick={() => setView("About")} className="about-link link"><li>about</li></Link>
            <Link to="/" onClick={() => setView("Home")} className="home-link link"><li>Home</li></Link>
          </ul>
        </div>
      </nav>
      <section className='main-content'> 
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/experience" exact element={<Experience/>}/>
          <Route path="/projects" exact element={<Projects/>}/>
        </Routes>
      </section>
      <footer className="footer">
        <p>Frankelly Cordero TM • portfolio</p>
      </footer>
      </main>
    </Router>
  )
}

export default App
