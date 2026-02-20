import { useEffect } from 'react';
// import './css/Projects.css'

export default function Projects(){
  useEffect(() => {
    document.body.style.backgroundColor = '#aa3322';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">my projects</p>
    </div>
  )
} 
