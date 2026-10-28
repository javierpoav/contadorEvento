# Cuenta regresiva · Auditoría del Consejo de Salubridad General

## Qué se hizo

Una página web de una sola pantalla para **Esterinova** que muestra una cuenta regresiva en vivo
hacia la Auditoría Presencial del Consejo de Salubridad General en **Unidad Puebla**, los días **14 y 15 de enero de 2027**.

- Muestra el logo de la clínica, el mensaje «Faltan» y los **días, horas, minutos y segundos** restantes.
- El contador se actualiza cada segundo.
- Incluye el mensaje motivador «¡Con tu compromiso y trabajo en equipo lo vamos a lograr!».
- Al llegar la hora del evento, el contador se cambia por el mensaje «¡Llegó el día!» y, al terminar
  la auditoría, por un mensaje de agradecimiento al equipo.
- Se ve bien en celular y en computadora.

## Cómo se hizo

Con **HTML, CSS y JavaScript puros**, sin librerías ni dependencias externas.

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura de la página: logo, contador, nombre y fecha del evento |
| `estilos.css` | Diseño con los colores de Esterinova y adaptación a distintos tamaños de pantalla |
| `contador.js` | Calcula el tiempo restante y lo actualiza cada segundo |
| `img/` | Logo de la clínica e íconos para la pestaña del navegador y el celular |

- **Colores:** se tomaron directamente del logo: morado `#670580` y verde `#7EBB04`.
- **Contador:** `contador.js` resta la hora actual a la fecha del evento y la convierte en días, horas,
  minutos y segundos. La fecha y hora están al inicio del archivo (`INICIO_EVENTO` y `FIN_EVENTO`);
  actualmente, 14 de enero de 2027 a las 8:00 h, hora del centro de México (`-06:00`).
- **Diseño adaptable:** en computadora las cuatro tarjetas del contador van en una fila; en celular
  vertical se acomodan en dos filas de dos.
- **Seguridad:** la página no recibe datos, no usa cookies ni carga nada de otros sitios. Una política
  de seguridad de contenido (CSP) en `index.html` solo permite estilos, scripts e imágenes del propio
  sitio, y la etiqueta `noindex` evita que aparezca en buscadores. Se publica solo por HTTPS.
