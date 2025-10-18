# Digital Creators - Trabajo Práctico Grupal 2

Migración de sitio web estático a React SPA con componentes reutilizables, enrutamiento dinámico, integración de datos locales y APIs públicas.

## Integrantes

- **Gustavo** - Backend Developer | Corrientes, Argentina | 31 años
- **Gastón** - UI/UX Designer | Corrientes, Argentina | 29 años

## Tecnologías

- **React 18** - Librería de UI con componentes
- **React Router DOM 6** - Enrutamiento SPA
- **Vite** - Build tool moderno
- **CSS3** - Estilos con variables CSS
- **JavaScript ES6+** - Lógica de aplicación
- **JSON** - Datos locales (25 videojuegos)
- **OpenWeatherMap API** - Datos de clima

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
│   │   └── games.json
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

## Diagramas de Arquitectura

### Árbol de Componentes
![Árbol de Componentes](/public/diagrama-componentes.png)

Jerarquía de componentes React mostrando cómo App.jsx contiene Sidebar y Routes, con todas las páginas conectadas.

### Estructura de Carpetas
![Estructura de Carpetas](/public/diagrama-carpetas.png)

Organización del proyecto mostrando la distribución de componentes, estilos, datos y configuración.

## Secciones Principales

### 1. Home (/)
Página principal con:
- Sección hero animada
- Tarjetas del equipo interactivas
- Contador de estadísticas

### 2. Perfil Gustavo (/gustavo)
Backend Developer
- Habilidades: Node.js, Python, MongoDB, PostgreSQL, Docker, AWS
- Películas: Blade Runner 2049, The Matrix, Arrival, Ex Machina, Ready Player One
- Música: Daft Punk, Boards of Canada, Pink Floyd, Radiohead, Aphex Twin

### 3. Perfil Gastón (/gaston)
UI/UX Designer
- Habilidades: Figma, Adobe Suite, User Research, Design Systems, Sketch, UX
- Películas: Lost in Translation, The Grand Budapest Hotel, Inside Out, Her, Midnight in Paris
- Música: Lorde, Thom Yorke, Turnstile, Oasis, The Cranberries

### 4. Galería de Videojuegos (/games)
- 25 videojuegos desde JSON local
- Búsqueda y filtrado en tiempo real
- Información: título, género, año, plataforma, rating, descripción

### 5. Clima (/clima)
- Consulta API pública OpenWeatherMap
- Muestra temperatura, humedad, viento
- Pronóstico de 3 días

### 6. Bitácora (/bitacora)
Documentación del proyecto:
- Decisiones de diseño
- Dificultades encontradas
- Cambios durante desarrollo
- Metodología de trabajo

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

## Instalación Local

### Requisitos
- Node.js v16+
- npm o yarn

### Pasos

1. Clonar repositorio
```bash
git clone https://github.com/usuario/digital-creators-tp2.git
cd digital-creators-tp2
```

2. Instalar dependencias
```bash
npm install
```

3. Ejecutar en desarrollo
```bash
npm run dev
```

4. Abrir en navegador
```
http://localhost:5173/
```

## Build para Producción

```bash
npm run build
```

Genera carpeta `dist/` optimizada.

## Deploy en Vercel

1. Sube código a GitHub
```bash
git add .
git commit -m "TP2 completado"
git push origin main
```

2. Ve a https://vercel.com
3. Importa repositorio desde GitHub
4. Vercel detecta automáticamente que es Vite
5. Haz clic en "Deploy"

Tu sitio estará en: `https://digital-creators-tp2.vercel.app`

## Paleta de Colores

- Primario: `#2563eb` (Azul)
- Secundario: `#1e40af` (Azul oscuro)
- Acento: `#f59e0b` (Amarillo/Naranja)
- Fondo: `#ffffff` (Blanco)
- Superficie: `#f8fafc` (Gris claro)

## Tipografía

- **Títulos**: Playfair Display (serif)
- **Cuerpo**: Inter (sans-serif)

## Responsividad

Breakpoints implementados:
- ≤ 400px: Móviles pequeños
- 401px - 900px: Tablets
- ≥ 1200px: Desktop

## Decisiones de Desarrollo

### Migración a React
Conversión de estructura HTML/CSS a componentes React reutilizables con manejo de estado mediante hooks.

### Gestión de Datos
- Datos estáticos: JSON local (videojuegos)
- Datos dinámicos: API OpenWeatherMap

### Navegación
React Router para SPA sin recargas de página.

## Requisitos Cumplidos

- React SPA con componentes reutilizables
- React Router para navegación
- Sidebar fijo con menú
- Secciones del TP1 migradas
- 25 videojuegos desde JSON
- API pública integrada
- Diagramas de arquitectura
- Responsividad (3 breakpoints)
- Deploy en Vercel
- Repositorio en GitHub

## Dificultades Encontradas

### Importación de datos
Soluciono rutas relativas correctas para importar games.json

### Imágenes en Vite
Uso de rutas públicas `/img/` para archivos estáticos

### Estilos CSS
Centralización en index.css con variables CSS para evitar conflictos

## Próximas Mejoras

- Backend con Node.js/Express
- Base de datos MongoDB/PostgreSQL
- Autenticación de usuarios
- Sistema de comentarios
- Más integraciones de APIs
- Testing automatizado

## Enlaces

- **GitHub**: https://github.com/usuario/digital-creators-tp2
- **Vercel**: https://digital-creators-tp2.vercel.app
- **TP1**: https://github.com/usuario/digital-creators-tp1

## Licencia

Proyecto académico - Trabajo Práctico 2 de Programación Web

**Fecha**: Octubre 2025  
**Versión**: 2.0.0  
**Estado**: Completado y desplegado

---

**Digital Creators** © 2025 - Gustavo & Gastón
