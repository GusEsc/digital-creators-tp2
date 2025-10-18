import React, { useState } from "react"

export default function ProfileGustavo() {
  const [showSkills, setShowSkills] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [showMusic, setShowMusic] = useState(false)

  const skills = [
    { name: 'Node.js', description: 'Desarrollo de APIs escalables' },
    { name: 'Python', description: 'Data science y automatización' },
    { name: 'MongoDB', description: 'Base de datos NoSQL' },
    { name: 'PostgreSQL', description: 'Base de datos relacionales' },
    { name: 'Docker', description: 'Containerización y DevOps' },
    { name: 'AWS', description: 'Cloud computing y microservicios' },
  ]

  const movies = [
    '🤖 Blade Runner 2049 - Ciencia ficción cyberpunk',
    '🧠 The Matrix - Filosofía y realidad virtual',
    '🚀 Arrival - Comunicación y algoritmos',
    '💻 Ex Machina - Inteligencia artificial y ética',
    '🌐 Ready Player One - Mundo virtual y tecnología',
  ]

  const music = [
    '🎧 Daft Punk - Random Access Memories - Electrónica francesa',
    '🎹 Boards of Canada - Music Has the Right - IDM y ambient',
    '🎸 Pink Floyd - Dark Side of the Moon - Rock progresivo',
    '🎤 Radiohead - OK Computer - Art rock alternativo',
    '🎵 Aphex Twin - Selected Ambient Works - Música experimental',
  ]

  return (
    <section className="profile-page">
      <div className="profile-header">
        <img src="/img/avatar2.jpg" alt="Gustavo" className="profile-avatar" />
        <h1>Gustavo</h1>
        <p className="role">Backend Developer</p>
      </div>

      <div className="profile-content">
        <h2>⚙️ Habilidades Backend</h2>
        <button className="interactive-button" onClick={() => setShowSkills(!showSkills)}>
          {showSkills ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
        </button>
        {showSkills && (
          <ul className="skills-list">
            {skills.map((skill, idx) => (
              <li key={idx}>
                <strong>{skill.name}:</strong> {skill.description}
              </li>
            ))}
          </ul>
        )}

        <h2>🎬 Películas Favoritas</h2>
        <button className="interactive-button" onClick={() => setShowMovies(!showMovies)}>
          {showMovies ? 'Ocultar Películas' : 'Mostrar Películas'}
        </button>
        {showMovies && (
          <ul className="skills-list">
            {movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
          </ul>
        )}

        <h2>🎵 Música Favorita</h2>
        <button className="interactive-button" onClick={() => setShowMusic(!showMusic)}>
          {showMusic ? 'Ocultar Música' : 'Mostrar Música'}
        </button>
        {showMusic && (
          <ul className="skills-list">
            {music.map((song, idx) => <li key={idx}>{song}</li>)}
          </ul>
        )}

        <h2>🛠️ Sobre mí</h2>
        <p>
          Soy un desarrollador backend especializado en arquitecturas escalables y sistemas distribuidos. 
          Me fascina resolver problemas complejos y optimizar el rendimiento de aplicaciones que manejan 
          grandes volúmenes de datos.
        </p>
      </div>
    </section>
  )
}