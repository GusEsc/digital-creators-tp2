import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Layout/Sidebar'
import Home from './components/Pages/Home'
import ProfileGustavo from './components/Pages/ProfileGustavo'
import ProfileGaston from './components/Pages/ProfileGaston'
import Bitacora from './components/Pages/Bitacora'
import GamesGallery from './components/Pages/GamesGallery'
import WeatherSection from './components/Pages/WeatherSection'
import NotFound from './components/Pages/NotFound'
import './styles/index.css'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gustavo" element={<ProfileGustavo />} />
          <Route path="/gaston" element={<ProfileGaston />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/games" element={<GamesGallery />} />
          <Route path="/clima" element={<WeatherSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
