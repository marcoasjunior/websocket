const app = require('express')()
const server = app.listen(3001, (socket) => console.log('Rodando server'))
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('room', function(room) {
        console.log(room)
        socket.join(room);
    });
    socket.on('SEND_MESSAGE', function(data) {
        console.log(data)
        socket.join(data.user);
        io.emit('MESSAGE', data)
    })
})