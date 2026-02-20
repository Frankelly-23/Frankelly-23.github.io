import { useEffect } from 'react';
import './css/Home.css'

export default function Home(){
  useEffect(() => {
    document.body.style.backgroundColor = '#FF0000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Frankelly Cordero</h1>
      <p className="home-subtitle">software dev</p>
    </div>
  )
} 
