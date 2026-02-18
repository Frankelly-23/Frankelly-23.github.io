
// import { useState } from 'react'

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
  return (
    <Router>
      <main>
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-links">
            <Link to="/projects" className="projects-link link"><li>projects</li></Link>
            <Link to="/experience" className="experience-link link"><li>experience</li></Link>
            <Link to="/about" className="about-link link"><li>about</li></Link>
            <Link to="/" className="home-link link"><li>Home</li></Link>
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
        <p>Frankelly Cordero TM • Books & Thoughts</p>
      </footer>
      </main>
    </Router>
  )
}

export default App
