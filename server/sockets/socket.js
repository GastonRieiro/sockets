const { io } = require('../server')

io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    cliente.on('disconnect', () => {
        console.log("Usuario desconectado");
    })

    //escuchar al cliente
    cliente.on('enviarMensaje', (data, callback) => {

        console.log(data);

        cliente.broadcast.emit('enviarMensaje', {
                saludoGeneral: `Hola a todos! soy ${data.usuario}`
            }) //con broadcast emito a todos los clientes el mensaje especificado. 
            //A excepcion del usuario que lo envió, 
            //a ese se le envia una respuesta propia del servidor.


        //     if (data.usuario) {
        //         callback({
        //             resp: 'Todo salio bien!'
        //         });
        //     } else {
        //         callback({
        //             resp: 'Todo salio MAL!!!'
        //         });
        //     }
    })

    cliente.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: `Hola! Bienvenido a la aplicacion`
    })
})