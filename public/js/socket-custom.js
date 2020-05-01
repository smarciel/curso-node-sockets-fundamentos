var socket = io();

//Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.on('enviarMensaje', function(message) {
    console.log('Servidor:', message);
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Sarah',
    mensaje: 'Hola Mundo!'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});