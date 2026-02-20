import { useEffect } from 'react';
// import './css/About.css'

export default function About(){
  useEffect(() => {
    document.body.style.backgroundColor = '#440055';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <p className="about-subtitle">about me</p>
    </div>
  )
} 
