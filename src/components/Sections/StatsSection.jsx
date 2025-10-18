import React, { useState, useEffect } from 'react';

export default function StatsSection() {
  const [projectCounter, setProjectCounter] = useState(0);
  const [experienceCounter, setExperienceCounter] = useState(0);
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, target) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setter(Math.floor(current));
      }, 40);
    };

    animateCounter(setProjectCounter, 8);
    animateCounter(setExperienceCounter, 2);
    animateCounter(setClientCounter, 12);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">{projectCounter}+</span>
          <span className="stat-label">Proyectos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{experienceCounter}+</span>
          <span className="stat-label">Años Experiencia</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{clientCounter}+</span>
          <span className="stat-label">Clientes Felices</span>
        </div>
      </div>
    </section>
  );
}