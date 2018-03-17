const socketIO = require('socket.io');
const socketManager = require('./socket-manager');
const roomManager = require('./room-manager');
const getUserId = require("../jwt-reader");

function initSockets(server) {
    const io = socketIO(server);

    io.on('connection', (socket) => {
        console.log("A new connection has appeared but is not connected.");

        socket.on('join', (userAuthId) => {
            console.log("The connection is now connected. User auth id=", userAuthId);
            socketManager.set(socket.id, { socket: socket, userId: userAuthId});
        });

        socket.on('create-room', (room) => {
            console.log("new room: ", room);
            if(roomManager.create(room.name, room.password, socket.id)) {
                socket.emit("room-creation", {error: null});
            }
        });

        socket.on('location', (newPos) => {
            console.log(newPos);
            socket.broadcast.emit("locationChanged", newPos);
            console.log("Emitted!");
        });

        socket.on('disconnect', ()  => {
            console.log('user disconnected');
            socketManager.delete(socket.id);
        });
    });
}

module.exports = initSockets;
