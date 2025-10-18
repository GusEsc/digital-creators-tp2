import React, { useState, useEffect } from 'react'
import gamesData from '../../data/games.json'

export default function GamesGallery() {
  const [games, setGames] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setGames(gamesData)
    setFiltered(gamesData)
  }, [])

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    setFiltered(
      games.filter(game => 
        game.title.toLowerCase().includes(term) ||
        game.genre.toLowerCase().includes(term)
      )
    )
  }

  return (
    <div className="games-page">
      <div className="games-header">
        <h1>🎮 Galería de Videojuegos</h1>
        <p>Explora nuestra colección de clásicos y favoritos</p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Busca por título o género..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="games-grid">
        {filtered.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-header">
              <h3>{game.title}</h3>
              <span className="rating">⭐ {game.rating}</span>
            </div>
            <p className="game-genre"><strong>Género:</strong> {game.genre}</p>
            <p className="game-year"><strong>Año:</strong> {game.year}</p>
            <p className="game-platform"><strong>Plataforma:</strong> {game.platform}</p>
            <p className="game-description">{game.description}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>No se encontraron videojuegos que coincidan con tu búsqueda</p>
        </div>
      )}
    </div>
  )
}