var socket = io();
//escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log("Perdimos conexion con el servidor");
})

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
})

//enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: "Gaston",
    mensaje: 'Hola servidor!'
}, function(respuesta) {
    console.log(respuesta.resp);
})