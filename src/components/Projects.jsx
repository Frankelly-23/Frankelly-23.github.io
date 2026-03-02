import './css/Projects.css'

export default function Projects(){

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="container">
        
        <div className="projects-grid">
          
          <div className="project-widget">
            <h3>
              <a href="https://github.com/Frankelly-23/Books-and-Quotes.git" target="_blank" rel="noopener noreferrer">
                Books & Quotes
              </a>
            </h3>
            <p>
              A web application for managing and exploring a personal collection of books and quotes, built with a focus on a clean, user-friendly interface.
            </p>
          </div>

          <div className="project-widget">
            <h3>
              <a href="https://github.com/Frankelly-23/terminal-typer.git" target="_blank" rel="noopener noreferrer">
                Terminal Typer
              </a>
            </h3>
            <p>
              A Python-based terminal user interface (TUI) that provides a typing speed test directly in the command line, designed for developers who love the terminal.
            </p>
          </div>

          <div className="project-widget">
            <h3>
              <a href="#" target="_blank" rel="noopener noreferrer">
                This Portfolio
              </a>
            </h3>
            <p>
              The interactive portfolio you are currently viewing, built with React and designed to showcase my skills in a creative, terminal-inspired theme.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}
