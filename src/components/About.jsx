import './css/About.css'


export default function About(){

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">[+] About Me</h2>
      <div className="container">
        
        <div className="about-content">
          
          <div className="about-text">
            <p>
              Hi, I’m <strong>Frankelly Cordero</strong>, a 20-year-old Software Engineering student currently pursuing my degree at UCE.
              I’m passionate about building things for the web and understanding how systems work beneath the surface.
            </p>
            
            <p>
              My interests live at the intersection of <strong>web development and cybersecurity</strong>,
              where clean interfaces meet secure architecture.
            </p>
            
            <p>
              I work comfortably with JavaScript/TypeScript (node), Linux environments,
              bash scripting, and networking fundamentals. I enjoy creating dynamic web experiences,
              but I’m equally focused on understanding vulnerabilities and how to build resilient systems.
            </p>
            
            <p>
              My long-term goal is to specialize in <strong>penetration testing</strong>.
              I believe secure software is not an afterthought — it’s part of the design.
            </p>
            
            <p>
              Outside of tech, I’m deeply interested in literature, structured thinking,
              and exploring complex narratives — influences that subtly shape how I design
              systems and approach problem solving.
            </p>
            
            <p>
              For me, software engineering is not just about writing code.
              It’s about building systems that make sense — technically, logically, and humanly.
            </p>
          </div>
          
          <div className="about-skills">
            <h3>Technologies</h3>
            <ul className="skills-list">
              <li>Node ecosystem    <i className="fa-brands fa-node-js"></i></li>
              <li>Linux lover     <i className="fa-brands fa-linux"></i></li>
              <li>Bash Scripting</li>
              <li>Python    <i className="fa-brands fa-python"></i></li>
              <li>Networking</li>
            </ul>
            <img src="/img/portfolio-picture1.jpg" alt="Frankelly Cordero" className="about-image" />
          </div>
          
        </div>
        
      </div>
    </section>
  )
} 
