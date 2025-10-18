import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Digital Creators</h2>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/">🏠 Inicio</Link></li>
          <li><Link to="/gustavo">👨‍💻 Gustavo</Link></li>
          <li><Link to="/gaston">🎨 Gastón</Link></li>
          <li><Link to="/bitacora">📋 Bitácora</Link></li>
          <li><Link to="/games">🎮 Juegos</Link></li>
          <li><Link to="/clima">🌤️ Clima</Link></li>
        </ul>
      </nav>
    </aside>
  )
}