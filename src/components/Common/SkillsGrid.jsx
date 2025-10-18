import React, { useState } from 'react';

export default function SkillsGrid({ skills }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="skills-section">
      <button 
        className="interactive-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
      </button>
      
      {isOpen && (
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-item">
              <strong>{skill.name}</strong>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}