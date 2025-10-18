import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner';

const API_KEY = 'e12345'; // Reemplaza con una clave real de OpenWeatherMap
const CITY = 'Corrientes';

export default function WeatherSection() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      // Simulamos datos de clima
      const mockData = {
        city: CITY,
        temperature: 28,
        condition: 'Parcialmente nublado',
        humidity: 65,
        windSpeed: 12,
        forecast: [
          { day: 'Lunes', high: 30, low: 22, condition: 'Soleado' },
          { day: 'Martes', high: 28, low: 20, condition: 'Nublado' },
          { day: 'Miércoles', high: 25, low: 18, condition: 'Lluvioso' },
        ]
      };
      
      setWeather(mockData);
      setError(null);
    } catch (err) {
      setError('Error al cargar el clima');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="weather-page">
      <h1>🌤️ Clima en {weather?.city}</h1>
      
      <div className="weather-current">
        <div className="temperature">{weather?.temperature}°C</div>
        <p className="condition">{weather?.condition}</p>
        <div className="details">
          <div>💧 Humedad: {weather?.humidity}%</div>
          <div>💨 Viento: {weather?.windSpeed} km/h</div>
        </div>
      </div>

      <div className="weather-forecast">
        <h2>Pronóstico</h2>
        <div className="forecast-grid">
          {weather?.forecast.map((day, idx) => (
            <div key={idx} className="forecast-card">
              <h4>{day.day}</h4>
              <p>{day.condition}</p>
              <div className="temps">
                <span>📈 {day.high}°C</span>
                <span>📉 {day.low}°C</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}