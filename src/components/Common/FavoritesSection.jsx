import React, { useState } from 'react';

export default function FavoritesSection({ type, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="favorites-section">
      <button 
        className="interactive-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? `Ocultar ${type}` : `Mostrar ${type}`}
      </button>
      
      {isOpen && (
        <ul className="media-list">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}