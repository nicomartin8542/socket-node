const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //recibir informacion del cliente
    client.on('enviarMensaje', (message, callback) => {
        // console.log(message);

        client.broadcast.emit('enviarMensaje', message);
        // if (message.usuario) {
        //     callback({
        //         mensaje: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         mensaje: 'Todo salio mal!'
        //     });
        // }

    });

    //Enviar informacion al cliente
    client.emit('enviarMensaje', {
        usuario: 'Nicolas',
        mensaje: 'Bienvenido Admin'
    });

});