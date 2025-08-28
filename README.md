# Frontend – Sistema de Asesorías Académicas

Este directorio contiene el frontend del proyecto (vistas, estilos y scripts).

Tecnologías:

- HTML5
- CSS3
- JavaScript
- Bootstrap 5 

# Estructura
```
/css/     → estilos (style.css)
/docs/    → documentación
/img/     → imágenes del sitio
/js/      → scripts (script.js)
/prototipos/ → login, registro y dashboards
index.html → página de landing
```

# Rutas Absolutas
Como las vistas están en /prototipos/, para enlazar recursos se usa `/`:
- CSS: `<link rel="stylesheet" href="/css/style.css">`
- JS: `<script src="/js/script.js"></script>`
- IMG (HTML): `<img src="/img/archivo.png">`
- IMG (CSS): `background-image: url("/img/archivo.png");`

# Cómo ejecutar
1. Clona/descarga el repositorio.
2. Abre cualquiera de las vistas en `/prototipos/` con tu navegador o ejecuta `index.html` con Live Server de VS Code.

# Estado actual
- Diseño de Login y Registro
- Panel de administración/estudiante/docente (UI).
- Modales, tablas y botones con estilos institucionales.

# Próximos pasos
- Conectar a backend/API.
- Validaciones y manejo real de datos.
