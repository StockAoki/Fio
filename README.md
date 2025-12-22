# 💕 Página de Aniversario - 10 Meses

Una página web romántica y creativa para celebrar 10 meses de amor, con una sección especial de distancia para cuando están en diferentes continentes.

## 🎨 Características

### ✨ Secciones Principales:

1. **Hero Section** - Contador en tiempo real de meses, días y horas juntos
2. **Sección de Distancia** (¡NUEVA!) 
   - Relojes en tiempo real de Costa Rica y Amsterdam
   - Visualización de la distancia (9,156 km)
   - Cuenta regresiva para el reencuentro
   - Animaciones de corazones viajeros y aviones
   - Mensajes románticos sobre la distancia
3. **Timeline** - Historia de su relación mes a mes
4. **Carta de Amor** - Mensaje personal romántico
5. **10 Razones** - Razones por las que la amas
6. **Mensaje Final** - Cierre emotivo

### 🎭 Efectos Especiales:
- Corazones flotantes animados
- Efectos parallax con scroll
- Animaciones de scroll reveal
- Hover effects en todas las tarjetas
- Relojes en tiempo real
- Contador regresivo en vivo
- Animaciones de conexión entre continentes
- Diseño 100% responsive

## ⚙️ Personalización

### 📅 Cambiar las Fechas (script.js)

```javascript
// Línea 7: Fecha de inicio (ya está configurada para el 22 de febrero)
const RELATIONSHIP_START = new Date('2025-02-22T00:00:00');

// Línea 10: Fecha de reencuentro (IMPORTANTE: cambia esta fecha)
const REUNION_DATE = new Date('2025-12-30T18:00:00');
```

**Formato de fecha:** `'YYYY-MM-DDTHH:MM:SS'`
- Ejemplo: `'2025-12-25T19:30:00'` = 25 de diciembre de 2025 a las 7:30 PM

### ✏️ Personalizar la Timeline (index.html)

Busca la sección `<!-- Timeline Section -->` y edita los textos de cada mes:

```html
<div class="timeline-month">Mes 1 💕</div>
<p class="timeline-text">Tu texto personalizado aquí</p>
```

### 💌 Editar la Carta de Amor (index.html)

Busca la sección `<!-- Love Letter Section -->` y reescribe el contenido de:

```html
<p class="letter-text">
    Aquí va tu carta personalizada...
</p>
```

### ❤️ Modificar las 10 Razones (index.html)

Busca la sección `<!-- Reasons Section -->` y edita cada tarjeta:

```html
<div class="reason-card">
    <div class="reason-icon">😊</div>
    <h3 class="reason-title">Tu Título</h3>
    <p class="reason-text">Tu descripción personalizada</p>
</div>
```

### 🌍 Ajustar Ubicaciones

Si necesitas cambiar las ubicaciones o zonas horarias, edita en `script.js`:

```javascript
// Línea 34-36: Costa Rica
const costaRicaTime = new Date(now.toLocaleString('en-US', { 
    timeZone: 'America/Costa_Rica' 
}));

// Línea 40-42: Amsterdam
const amsterdamTime = new Date(now.toLocaleString('en-US', { 
    timeZone: 'Europe/Amsterdam' 
}));
```

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador
2. Personaliza las fechas en `script.js`
3. Edita los textos en `index.html`
4. ¡Comparte el link con tu novia!

## 📱 Responsive

La página se adapta perfectamente a:
- 📱 Móviles
- 💻 Tablets
- 🖥️ Desktop

En móvil, la conexión entre Costa Rica y Amsterdam se muestra vertical en lugar de horizontal.

## 🎁 Notas Especiales

- Los relojes se actualizan cada segundo
- El contador de tiempo juntos se actualiza cada hora
- La cuenta regresiva cambia automáticamente cuando llega la fecha
- Todos los colores están en variables CSS para fácil personalización
- Incluye un Easter Egg en la consola del navegador 😄

## 💡 Tips

1. **Para hosting gratuito:** Puedes usar Netlify, Vercel, o GitHub Pages
2. **Para compartir rápido:** Usa Netlify Drop (arrastra y suelta los archivos)
3. **Prueba en móvil:** Usa las DevTools de Chrome (F12) para ver la vista móvil
4. **Personaliza colores:** Edita las variables CSS al inicio de `styles.css`

## 🎨 Paleta de Colores

```css
--primary: #FF6B9D     /* Rosa principal */
--secondary: #FFA07A   /* Coral */
--accent: #FFD700      /* Dorado */
--dark: #2C2C2C        /* Texto oscuro */
--light: #FFF5F5       /* Fondo claro */
```

## ❤️ Hecha con Amor

Cada línea de código fue creada pensando en celebrar su amor de la manera más especial posible.

¡Felices 10 meses! 🎉💕