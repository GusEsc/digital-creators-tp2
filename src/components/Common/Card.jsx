import React from 'react';

export default function Card({ title, image, description, link, onClick, children }) {
  return (
    <div className="card" onClick={onClick}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-info">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {link && <a href={link} className="card-link">Ver más</a>}
        {children}
      </div>
    </div>
  );
}