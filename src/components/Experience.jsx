import './css/Experience.css'

export default function Experience(){

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="container">
        
        <div className="experience-content">
          
          <div className="experience-area">
            <h3>Web Development</h3>
            <p>
              I have hands-on experience building dynamic and responsive web applications using modern JavaScript frameworks. My focus is on creating clean, maintainable code and delivering robust user experiences.
            </p>
          </div>

          <div className="experience-area">
            <h3>Pentesting, Cybersecurity</h3>
            <p>
              My interest in cybersecurity has driven me to acquire fundamental certifications and practical skills in ethical hacking and network security. I hold a <strong>Cisco Certified Ethical Hacker</strong> certificate, demonstrating my understanding of security principles and methodologies. Furthermore, my <strong>Cisco Networking Certificate</strong> solidifies my knowledge in network infrastructure and its vulnerabilities.
            </p>
            <p>
              To complement theoretical knowledge with practical application, I have actively engaged in various simulated penetration testing scenarios by successfully completing <strong>several VulnHub machines</strong>. This hands-on experience has honed my skills in reconnaissance, exploitation, and post-exploitation techniques across diverse environments.
            </p>
            <p>
              Additionally, I possess a <strong>Linux Personalization Certificate from the Hack3You Academy</strong>, which has deepened my expertise in securing and optimizing Linux-based systems—a critical skill in cybersecurity.
            </p>
          </div>

          <div className="experience-area">
            <h3>Bash Scripting & Automation</h3>
            <p>
              Proficient in bash scripting for automating repetitive tasks and streamlining system administration processes, enhancing efficiency and reliability in Linux environments.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

