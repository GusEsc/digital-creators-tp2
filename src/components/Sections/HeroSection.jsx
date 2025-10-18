import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const messages = [
    "¡Bienvenido a Digital Creators! 🚀",
    "Somos Gustavo y Gastón, apasionados por la tecnología 💻",
    "¡Explora nuestros perfiles individuales! 👥",
    "Juntos creamos experiencias increíbles ✨"
  ];

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setOffsetX((x - 50) * 0.1);
      setOffsetY((y - 50) * 0.1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWelcome = () => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    alert(msg);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Digital Creators</h1>
        <p className="hero-subtitle">Desarrolladores Web Creativos y Apasionados</p>
        <p className="hero-description">
          Somos Gustavo y Gastón, un dúo de estudiantes dedicado al desarrollo web moderno, 
          enfocados en crear experiencias digitales innovadoras y funcionales.
        </p>
        <button className="cta-button" onClick={handleWelcome}>
          ¡Conoce nuestro dúo!
        </button>
      </div>
      
      <div className="hero-animation">
        <div 
          className="floating-card"
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`
          }}
        >
          <div className="card-content">
            <h3>🚀 Innovación</h3>
            <p>Creatividad digital</p>
          </div>
        </div>
      </div>
    </section>
  );
}