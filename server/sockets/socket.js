const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado.');
    });

    //Escuchar la parte cliente
    client.on('enviarMensaje', (message, callback) => {
        console.log(message);
        client.broadcast.emit('enviarMensaje', message);
        // if (message.usuario) {
        //     callback({
        //         response: 'Todo salió bien.'
        //     });
        // } else {
        //     callback({
        //         response: 'Todo salió MAL.'
        //     });
        // }
    });
});