## Introducción a CSS Grid
CSS Grid es un sistema de diseño bidimensional que permite organizar elementos en filas y columnas de manera eficiente. Es ideal para crear estructuras complejas sin necesidad de usar `float` o `flexbox`.

---

## Propiedades Principales
- `display: grid;` → Convierte un elemento en un contenedor de Grid.
- `grid-template-columns` → Define el número y tamaño de las columnas.
- `grid-template-rows` → Define el número y tamaño de las filas.
- `gap` → Espaciado entre filas y columnas.
- `grid-column` y `grid-row` → Permiten posicionar elementos en una ubicación específica.
- `grid-template-areas` → Permite asignar nombres a las áreas del grid.

---

## Ejemplos de Uso

### Grid Simple
#### CSS
```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px;
    gap: 10px;
}

.item {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
}
```
#### HTML
```html
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
```

### Grid con Columnas Flexibles (`fr`)
#### CSS
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}
```
#### HTML
```html
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

### Colocación Específica de Elementos
#### CSS
```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px 100px;
}

.item:nth-child(1) {
    grid-column: 1 / 3;
}
```
#### HTML
```html
<div class="container">
    <div class="item">Header</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
```

### Grid Responsive con `minmax()`
#### CSS
```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```
#### HTML
```html
<div class="container">
    <div class="item">Box 1</div>
    <div class="item">Box 2</div>
    <div class="item">Box 3</div>
</div>
```

---

## Uso de Grid Areas

### Definiendo áreas en una cuadrícula
#### CSS
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```
#### HTML
```html
<div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Main Content</div>
    <div class="footer">Footer</div>
</div>
```

### Diseño Responsive con Grid Areas
#### CSS
```css
@media (max-width: 600px) {
    .container {
        grid-template-areas:
            "header"
            "content"
            "sidebar"
            "footer";
        grid-template-columns: 1fr;
    }
}
```

---

## Ordenación de Elementos

### Cambiando el orden de los elementos
#### CSS
```css
.container {
    grid-template-areas:
        "footer footer footer"
        "header header header"
        "sidebar content content";
}
```

### Ordenación en diseños responsivos
#### CSS
```css
@media (max-width: 600px) {
    .container {
        grid-template-areas:
            "header"
            "content"
            "sidebar"
            "footer";
    }
}
```

## Tips Importantes

- Usa `fr` en lugar de valores fijos para crear columnas flexibles y adaptables.
- La propiedad `grid-auto-flow: dense;` ayuda a evitar espacios vacíos en la cuadrícula.
- Puedes combinar CSS Grid con Flexbox: Grid organiza el layout y Flexbox maneja detalles dentro de cada celda.
- `minmax()` es útil para crear columnas y filas responsivas sin necesidad de media queries.
- Usa `grid-template-areas` para mejorar la legibilidad y facilitar la reordenación de elementos.
- Usa `align-items` y `justify-items` para centrar o alinear contenido dentro de las celdas.
- Si necesitas superponer elementos, puedes usar `grid-column` y `grid-row` para que ocupen más de una celda.
- Usa `auto-fit` y `auto-fill` con `repeat()` para hacer diseños más adaptables sin necesidad de definir explícitamente el número de columnas o filas.
- Evita el uso excesivo de `grid-gap` si trabajas con elementos que deben estar visualmente juntos, en su lugar usa `margin` en los elementos internos.
- Si necesitas compatibilidad con navegadores más antiguos, usa `display: inline-grid;` en casos específicos donde `grid` no esté soportado.

# Recursos

https://web.dev/learn/css/grid?hl=es
https://mardeasa.es/descargas/curso-Confeccion-y-publicacion-de-paginas-web/22-CSS-Flexbox-y-Grid.pdf

## Ejercicios

 https://www.figma.com/community/file/792958512200684153

https://www.figma.com/community/file/1357420478444356869