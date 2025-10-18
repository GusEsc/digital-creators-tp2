import React, { useState } from "react"

export default function ProfileGaston() {
  const [showSkills, setShowSkills] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [showMusic, setShowMusic] = useState(false)

  const skills = [
    { name: 'Figma', description: 'Prototipado y diseño colaborativo' },
    { name: 'Adobe Creative Suite', description: 'Photoshop, Illustrator, After Effects' },
    { name: 'User Research', description: 'Investigación y testing de usuarios' },
    { name: 'Design Systems', description: 'Creación de componentes escalables' },
    { name: 'Sketch', description: 'Diseño de interfaces móviles' },
    { name: 'Principios UX', description: 'Arquitectura de información y usabilidad' },
  ]

  const movies = [
    '🌸 Lost in Translation - Estética visual minimalista',
    '🎨 The Grand Budapest Hotel - Diseño cinematográfico perfecto',
    '🌈 Inside Out - Diseño emocional y storytelling',
    '🎭 Her - Interfaz y experiencia de usuario futurista',
    '🏛️ Midnight in Paris - Inspiración artística y creatividad',
  ]

  const music = [
    '🎤 Lorde - Melodrama - Pop indie con texturas únicas',
    '🎹 Thom Yorke - The Eraser - Electrónica experimental',
    '🎸 Turnstile - GLOW ON - Hardcore melódico innovador',
    '🎵 Oasis - (What\'s the Story) Morning Glory? - Britpop clásico',
    '🎧 The Cranberries - No Need to Argue - Rock alternativo irlandés',
  ]

  return (
    <section className="profile-page">
      <div className="profile-header">
        <img src="/img/avatar3.jpg" alt="Gastón" className="profile-avatar" />
        <h1>Gastón</h1>
        <p className="role">UI/UX Designer</p>
      </div>

      <div className="profile-content">
        <h2>🎨 Habilidades de Diseño</h2>
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

        <h2>✨ Sobre mí</h2>
        <p>
          Soy diseñador UI/UX con pasión por crear experiencias digitales que conecten emocionalmente 
          con los usuarios. Me especializo en research, prototipado y desarrollo de design systems que 
          faciliten la vida de las personas.
        </p>
      </div>
    </section>
  )
}