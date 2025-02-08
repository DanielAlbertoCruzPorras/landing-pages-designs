# Proyecto Web

Este proyecto está estructurado de manera que la **página principal** (Home Page) se encuentra en el archivo `index.html` en la carpeta raíz. Desde esta página, los usuarios podrán navegar a las diferentes páginas que se encuentran organizadas dentro de la carpeta `pages`.

## Estructura del Proyecto

```
landing-pages-designs/
│── index.html  # Página principal
│── css/      # Archivos CSS correspondientes a la Home Page
│    ├── style.css
│    ├── variables.css
│── storage/      # Recursos generales (imágenes, fuentes, etc.)
│    ├── fonts
│    ├── img
│── pages/       # Carpeta con las páginas internas
│    ├── page001/
│    │   ├── page001.html
│    │   ├── css/
│    │   ├── storage/
│    │   │   ├── fonts/
│    │   │   ├── img/
│    ├── page002/
│    │   ├── page002.html
│    │   ├── css/
│    │   ├── storage/
│    │   │   ├── fonts/
│    │   │   ├── img/
│    ├── ... (otras páginas)
```

## Descripción
- **index.html**: Es la página principal desde donde se podrá acceder a las demás secciones del sitio.
- **pages/**: Contiene las diferentes páginas organizadas en subcarpetas, cada una con su propia estructura de archivos.
- **styles/**: Carpeta donde se pueden almacenar archivos CSS globales o reutilizables.
- **assets/**: Sección general para almacenar imágenes, fuentes y otros recursos compartidos.
- **scripts/** (opcional dentro de cada página): Para almacenar archivos JavaScript específicos de cada sección.

## Notas
- Cada página dentro de `pages` puede tener su propia carpeta `css/`, `images/`, `fonts/` y otros recursos necesarios.