import './css/Projects.css'

export default function Projects(){

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">[+] Projects</h2>
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
              <a href="https://github.com/Frankelly-23/terminal-currency.git" target="_blank" rel="noopener noreferrer">
                Terminal Currency 
              </a>
            </h3>
            <p>This is a sleek, Terminal User Interface (TUI) that brings world currency rates directly to your command line. No browser, no ads, just pure data and ASCII boxes.
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
          <div className="project-widget">
            <h3>
              <a href="https://github.com/Frankelly-23/Thot.git" target="_blank" rel="noopener noreferrer">
                Thot
              </a>
            </h3>
            <p>
An interpreter for Thot, a programming language I created, inspired by the fantastic book "Crafting Interpreters" by Robert Nystrom.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}
