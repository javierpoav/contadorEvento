/* ============================================================
 * CONFIGURACIÓN
 * Fecha y hora del evento con su zona horaria.
 * "-06:00" corresponde a la hora del centro de México.
 * Formato: AAAA-MM-DDTHH:MM:SS-06:00
 * ============================================================ */
var INICIO_EVENTO = '2027-01-14T08:00:00-06:00'; // Inicio de la auditoría
var FIN_EVENTO = '2027-01-16T00:00:00-06:00';    // Fin del 15 de enero

(function () {
  'use strict';

  var inicio = new Date(INICIO_EVENTO).getTime();
  var fin = new Date(FIN_EVENTO).getTime();

  var unidades = [
    { id: 'dias', singular: 'día', plural: 'días' },
    { id: 'horas', singular: 'hora', plural: 'horas' },
    { id: 'minutos', singular: 'minuto', plural: 'minutos' },
    { id: 'segundos', singular: 'segundo', plural: 'segundos' }
  ];

  unidades.forEach(function (u) {
    u.numero = document.getElementById(u.id);
    u.etiqueta = document.getElementById(u.id + '-etiqueta');
  });

  var faltan = document.getElementById('faltan');
  var contador = document.getElementById('contador');
  var para = document.getElementById('para');
  var mensaje = document.getElementById('mensaje');
  var mensajeTitulo = document.getElementById('mensaje-titulo');
  var mensajeTexto = document.getElementById('mensaje-texto');

  var temporizador = null;

  function dosDigitos(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function mostrarMensaje(titulo, texto) {
    faltan.hidden = true;
    contador.hidden = true;
    para.hidden = true;
    mensajeTitulo.textContent = titulo;
    mensajeTexto.textContent = texto;
    mensaje.hidden = false;
  }

  function actualizar() {
    var ahora = Date.now();
    var restante = inicio - ahora;

    if (restante <= 0) {
      if (ahora < fin) {
        mostrarMensaje('¡Llegó el día!', 'La auditoría está en curso. ¡Mucho éxito, equipo!');
        // Volver a revisar al terminar el evento para cambiar el mensaje
        temporizador = setTimeout(actualizar, Math.min(fin - ahora, 60000));
      } else {
        mostrarMensaje('La auditoría ha concluido', 'Gracias a todo el equipo por su esfuerzo.');
      }
      return;
    }

    var totalSegundos = Math.floor(restante / 1000);
    var valores = [
      Math.floor(totalSegundos / 86400),
      Math.floor((totalSegundos % 86400) / 3600),
      Math.floor((totalSegundos % 3600) / 60),
      totalSegundos % 60
    ];

    unidades.forEach(function (u, i) {
      u.numero.textContent = dosDigitos(valores[i]);
      u.etiqueta.textContent = valores[i] === 1 ? u.singular : u.plural;
    });

    // Programa la siguiente actualización justo al cambiar el segundo
    temporizador = setTimeout(actualizar, (restante % 1000) + 20);
  }

  // Al volver a la pestaña, actualiza de inmediato (los navegadores pausan los temporizadores en segundo plano)
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
      clearTimeout(temporizador);
      actualizar();
    }
  });

  actualizar();
})();
