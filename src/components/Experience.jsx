import { useEffect } from 'react';
// import './css/Experience.css'

export default function Experience(){
  useEffect(() => {
    document.body.style.backgroundColor = '#FF00FF'
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <p className="experience-subtitle">my experience</p>
    </div>
  )
} 
