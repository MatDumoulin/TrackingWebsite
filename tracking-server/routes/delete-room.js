const roomManager = require('../socket/room-manager');
const socketManager = require('../socket/socket-manager');
const getUserId = require('../jwt-reader');
// This function deletes the room with the given name.
//
// Params: The body of the request must be empty
function routeFactory() {
    return function deleteRoom(req, res) {
        const roomName = req.params.name;
        // Getting the auth id of the current user.
        const owner = getUserId(req);
        const socket = socketManager.getSocketOfUser(owner);
        // If the socket exists,
        if(socket !== null) {
            // Getting the room to delete.
            const room = roomManager.get(roomName);

            // If there is no matching room, send an error.
            if(!room) {
                res.status(404).send({error: "Room not found"});
                return;
            }
            console.log(room, socket.id);
            // If the user is the owner of this room
            if(room.owner === socket.id) {
                //Notifying all other trackee that the room is closing.
                socket.to(roomName).emit("room-closed", roomName);
                roomManager.delete(roomName);
                // Set the room of the socket to the given room.
                socket.leave(roomName);
                // Emit a success message.
                res.status(200).send(true);
            }
            else {
                // Else, emit an error message.
                res.status(401).send({error: "You are not the owner of this room"});
            }
        }
        else {
            res.status(401).send({error: "Socket not found"});
        }
    }
}

module.exports = routeFactory;
