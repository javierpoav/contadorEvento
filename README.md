# Cuenta regresiva · Auditoría del Consejo de Salubridad General

Página de una sola pantalla con la cuenta regresiva (días, horas, minutos y segundos) para la
Auditoría del Consejo de Salubridad General de **Esterinova**, los días **14 y 15 de enero de 2027**.

Hecha solo con HTML, CSS y JavaScript, sin dependencias. Se adapta a celular y computadora.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura de la página |
| `estilos.css` | Diseño y colores de Esterinova (morado `#670580`, verde `#7EBB04`) |
| `contador.js` | Lógica de la cuenta regresiva |
| `img/` | Logo, favicon e ícono para celulares |
| `.nojekyll` | Indica a GitHub Pages que publique los archivos tal cual |

## Cambiar la fecha u hora del evento

Edita las dos primeras líneas de `contador.js`:

```js
var INICIO_EVENTO = '2027-01-14T08:00:00-06:00'; // Inicio de la auditoría
var FIN_EVENTO = '2027-01-16T00:00:00-06:00';    // Fin del 15 de enero
```

`-06:00` es la hora del centro de México. Cuando llega la hora de inicio, el contador se cambia por
el mensaje «¡Llegó el día!», y al terminar el evento muestra un mensaje de agradecimiento.

## Publicar gratis en GitHub Pages

1. Sube estos archivos a la rama principal del repositorio (`main`).
2. En GitHub, entra a **Settings → Pages**.
3. En **Build and deployment**, elige **Source: Deploy from a branch**, rama **`main`** y carpeta **`/ (root)`**. Guarda.
4. En uno o dos minutos la página quedará publicada en
   `https://javierpoav.github.io/contadorEvento/`.

> Para cuentas gratuitas de GitHub, el repositorio debe ser público para usar GitHub Pages.

## Ver la página en tu computadora

Abre `index.html` con doble clic en cualquier navegador.
