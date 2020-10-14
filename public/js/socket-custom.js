let socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('perdimos conexion con el servidor');
})

//recibir informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Informacion', mensaje);
});

//ENVIAR INFORMACION
socket.emit('enviarMensaje', {
    usuario: 'Nicolas',
    nombre: 'Martin'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});