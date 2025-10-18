import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamSection() {
  const team = [
    {
      name: 'Gustavo',
      role: 'Backend Developer',
      link: '/gustavo',
      image: '/img/avatar2.jpg'
    },
    {
      name: 'Gastón',
      role: 'UI/UX Designer',
      link: '/gaston',
      image: '/img/avatar3.jpg'
    }
  ];

  return (
    <section className="team-section">
      <h2 className="section-title">Nuestro Equipo</h2>
      <div className="team-grid">
        {team.map((member) => (
          <div key={member.name} className="team-card">
            <div className="card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <Link to={member.link} className="profile-link">
                Ver Perfil
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}