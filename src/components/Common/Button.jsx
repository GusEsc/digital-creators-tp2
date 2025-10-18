import React from 'react';

export default function Button({ text, onClick, variant = 'primary', className = '' }) {
  return (
    <button 
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}