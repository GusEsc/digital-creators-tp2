# Digital Creators - Trabajo Práctico Grupal 2

## Descripción del Proyecto

**Digital Creators** es la evolución del Trabajo Práctico 1, ahora migrado a **React como Single Page Application (SPA)**. Este proyecto demuestra la conversión de un sitio web estático en una aplicación moderna con componentes reutilizables, enrutamiento dinámico y gestión de estado.

El sitio presenta a nuestro dúo de desarrolladores web (Gustavo y Gastón) con todas las secciones del TP1, más nuevas funcionalidades de React, integración de datos locales (JSON) y consulta de APIs públicas.

## Integrantes del Dúo

- **Gustavo** - Backend Developer | Corrientes, Argentina | 31 años
- **Gastón** - UI/UX Designer | Corrientes, Argentina | 29 años

## Tecnologías Utilizadas

### Frontend
- **React 18** - Librería para construir interfaces con componentes
- **React Router DOM 6** - Enrutamiento SPA
- **Vite** - Build tool moderno y rápido
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript ES6+** - Lógica de la aplicación

### Herramientas
- **Git** - Control de versiones
- **GitHub** - Repositorio remoto
- **Vercel** - Plataforma de despliegue
- **draw.io** - Diagramas de arquitectura

## Estructura del Proyecto

```
digital-creators-tp2/
├── public/
│   ├── img/
│   │   ├── avatar2.jpg
│   │   └── avatar3.jpg
│   ├── diagrama-componentes.png
│   ├── diagrama-carpetas.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Header.jsx
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProfileGustavo.jsx
│   │   │   ├── ProfileGaston.jsx
│   │   │   ├── GamesGallery.jsx
│   │   │   ├── WeatherSection.jsx
│   │   │   ├── Bitacora.jsx
│   │   │   └── NotFound.jsx
│   │   └── Sections/
│   │       ├── HeroSection.jsx
│   │       ├── TeamSection.jsx
│   │       └── StatsSection.jsx
│   ├── data/
│   │   └── games.json (25 videojuegos)
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

## Secciones Principales

### 1. Portada (Home)
- Presentación del equipo con animaciones
- Sección hero con contenido dinámico
- Tarjetas del equipo interactivas
- Contador animado de estadísticas

### 2. Perfiles Individuales
- **Perfil Gustavo**: Backend Developer
  - Habilidades técnicas (Node.js, Python, MongoDB, PostgreSQL, Docker, AWS)
  - Películas favoritas (Blade Runner 2049, The Matrix, Arrival, Ex Machina, Ready Player One)
  - Música favorita (Daft Punk, Boards of Canada, Pink Floyd, Radiohead, Aphex Twin)

- **Perfil Gastón**: UI/UX Designer
  - Habilidades de diseño (Figma, Adobe Suite, User Research, Design Systems, Sketch, UX)
  - Películas favoritas (Lost in Translation, The Grand Budapest Hotel, Inside Out, Her, Midnight in Paris)
  - Música favorita (Lorde, Thom Yorke, Turnstile, Oasis, The Cranberries)

### 3. Galería de Videojuegos
- Carga datos desde archivo JSON local (25 videojuegos)
- Sistema de búsqueda y filtrado en tiempo real
- Muestra información: título, género, año, plataforma, rating, descripción
- Tarjetas interactivas con efecto hover

### 4. Sección de Clima
- Consulta API pública (OpenWeatherMap)
- Muestra clima actual de una ciudad
- Datos: temperatura, humedad, velocidad del viento
- Pronóstico de 3 días

### 5. Bitácora del Proyecto
- Documentación del proceso de desarrollo
- Decisiones de diseño tomadas
- Dificultades encontradas y soluciones
- Cambios durante el desarrollo
- Metodología de trabajo en equipo

## Diagramas de Arquitectura

### Árbol de Componentes (Component Tree)
![Árbol de Componentes](/diagrama-componentes.png)

Muestra la jerarquía de componentes React, cómo App.jsx es el raíz y se ramifica en Sidebar y Routes, con todas las páginas y secciones anidadas.

### Estructura de Carpetas
![Estructura de Carpetas](/diagrama-carpetas.png)

Representa la organización del proyecto en carpetas, ubicación de componentes, estilos, datos y configuración.

## Funcionalidades Principales

- **Navegación SPA**: Cambio de páginas sin recargar usando React Router
- **Componentes Reutilizables**: Card, Button, SkillsGrid, FavoritesSection
- **Datos Locales**: JSON con 25 videojuegos
- **API Pública**: Integración con OpenWeatherMap
- **Estado Dinámico**: Uso de hooks (useState, useEffect)
- **Responsive Design**: Adaptable a móvil, tablet y desktop
- **Interactividad**: Botones con toggle, búsqueda, filtrado

## Requisitos Técnicos Cumplidos

✅ React SPA con componentes reutilizables
✅ React Router para navegación interna
✅ Sidebar fijo con menú de navegación
✅ Secciones del TP1 migradas (Portada, Bitácora, Perfiles)
✅ Datos desde JSON (25 videojuegos)
✅ Consumo de API pública (Clima)
✅ Dos diagramas (Componentes y Carpetas)
✅ Responsividad (3 breakpoints)
✅ Deploy en Vercel
✅ Repositorio en GitHub

## Instalación Local

### Requisitos
- Node.js v16 o superior
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/usuario/digital-creators-tp2.git
cd digital-creators-tp2
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

Verás algo como:
```
  VITE v4.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

4. **Abre en tu navegador**
```
http://localhost:5173/
```

## Build para Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` optimizada para producción.

## Deploy en Vercel

1. **Sube tu código a GitHub**
```bash
git add .
git commit -m "TP2 completado"
git push origin main
```

2. **Conecta con Vercel**
   - Ve a https://vercel.com
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es Vite
   - Haz clic en "Deploy"

3. **Tu sitio estará en vivo** en una URL como:
```
https://digital-creators-tp2.vercel.app
```

## Variables de Entorno

Si necesitas usar una API key real para OpenWeatherMap:

1. Crea archivo `.env.local` en la raíz:
```
VITE_WEATHER_API_KEY=tu_clave_aqui
```

2. Úsalo en WeatherSection.jsx:
```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
```

## Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Página principal |
| `/gustavo` | ProfileGustavo | Perfil de Gustavo |
| `/gaston` | ProfileGaston | Perfil de Gastón |
| `/games` | GamesGallery | Galería de videojuegos |
| `/clima` | WeatherSection | Consulta de clima |
| `/bitacora` | Bitacora | Bitácora del proyecto |
| `*` | NotFound | Página 404 |

## Metodología de Trabajo

### División de Tareas
- **Gustavo**: Lógica React, hooks, integración de APIs, estado
- **Gastón**: Diseño de componentes, estilos CSS, UX
- **Colaboración**: Arquitectura general, estructura de componentes

### Control de Versiones
- Commits descriptivos y frecuentes
- Ramas para features principales
- Merge a main después de revisión

### Testing
- Pruebas en múltiples navegadores
- Testing responsivo en diferentes dispositivos
- Validación de funcionalidades

## Decisiones de Diseño

### Paleta de Colores
- **Primario**: #2563eb (Azul moderno)
- **Secundario**: #1e40af (Azul oscuro)
- **Acento**: #f59e0b (Amarillo/Naranja)
- **Fondo**: #ffffff (Blanco)
- **Superficie**: #f8fafc (Gris muy claro)

### Tipografía
- **Titles**: Playfair Display (serif elegante)
- **Body**: Inter (sans-serif legible)

### Breakpoints Responsivos
- **≤ 400px**: Móviles pequeños
- **401px - 900px**: Tablets
- **≥ 1200px**: Desktop

## Dificultades Encontradas y Soluciones

### 1. Migración de JavaScript vanilla a React
**Problema**: Adaptar lógica imperative a componentes reactivos
**Solución**: Usar hooks (useState, useEffect) para manejar estado y efectos

### 2. Importación de datos JSON
**Problema**: Rutas incorrectas de importación
**Solución**: Usar rutas relativas correctas desde cada componente

### 3. Imágenes en Vite
**Problema**: Confusión entre public/ y src/assets/
**Solución**: Usar rutas públicas `/img/` para archivos estáticos

### 4. Estilos CSS
**Problema**: CSS en múltiples archivos causaba conflictos
**Solución**: Centralizar todo en index.css con variables CSS

## Próximas Mejoras (TP3)

- Backend con Node.js/Express
- Base de datos (MongoDB o PostgreSQL)
- Autenticación de usuarios
- Sistema de comentarios dinámico
- Integración de más APIs
- Testing automatizado
- PWA (Progressive Web App)

## Enlaces Importantes

- **Repositorio GitHub**: https://github.com/usuario/digital-creators-tp2
- **Sitio en Vercel**: https://digital-creators-tp2.vercel.app
- **TP1 (Versión anterior)**: https://github.com/usuario/digital-creators-tp1

## Créditos

**Equipo de Desarrollo**
- Gustavo - Backend Developer & Lógica React
- Gastón - UI/UX Designer & Estilos

**Tecnologías**
- React - Librería de UI
- Vite - Build tool
- React Router - Enrutamiento
- OpenWeatherMap - API de clima

## Licencia y Uso Académico

Este proyecto fue desarrollado con fines académicos como parte del Trabajo Práctico 2 de Programación Web.

**Fecha de creación**: Octubre 2025
**Versión**: 2.0.0
**Estado**: ✅ Completado y desplegado

---

**Digital Creators** © 2025 - Gustavo & Gastón | Todos los derechos reservados