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
            socketManager.set(socket.id, { socket: socket, userId: userAuthId });
        });

        socket.on('leave', () => {
            closeOrLeaveRooms(socket, io);
        });

        socket.on('location', (newPos) => {
            console.log(newPos);
            // Getting the user's room.
            const rooms = roomManager.getRoomsOfUser(socket.id);
            console.log(rooms);
            // Then, emitting the position to the room.
            for(let room of rooms.connectedAsTrackee) {
                socket.broadcast.to(room.owner).emit("locationChanged", {userId: socketManager.get(socket.id).userId, pos: newPos});
            }
            console.log("Emitted!");
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
            closeOrLeaveRooms(socket, io);
            socketManager.delete(socket.id);
        });
    });
}

function closeOrLeaveRooms(socket, io) {
    console.log("The user with the following socket id is leaving:", socket.id);
    // Getting all the rooms of the user.
    const allRoomsOfUser = roomManager.getRoomsOfUser(socket.id);
    // For each room that he is connected as a manager, close the room.
    for (let room of allRoomsOfUser.connectedAsManager) {
        closeRoom(room.name, socket, io);
    }

    // For each room in which he is connected as a trackee, leave the room
    for (let room of allRoomsOfUser.connectedAsTrackee) {
        leaveRoom(room, socket);
    }
    // Finally, remove the user from its rooms. If he's the manager of the room,
    // it will close the room.
    roomManager.removeUserFromRooms(socket.id);
}

function closeRoom(roomName, socket, io) {
    socket.broadcast.to(roomName).emit("closing-room");
    // Kicking everyone out of the room.
    /*io.sockets.clients(roomName).forEach((s) => {
        s.leave(roomName);
    });*/
}

function leaveRoom(room, socket) {
    socket.broadcast.to(room.name).emit("user-left-room", { user: socketManager.get(socket.id).userId });
    socket.leave(room.name);
}

module.exports = initSockets;
