const roomManager = require('../socket/room-manager');
const socketManager = require('../socket/socket-manager');
const getUserId = require('../jwt-reader');
// This function creates a room with the given name and password.
//
// Params: The body of the request must contain
// - roomName: The name of the room to create
// - password: The password of the room to create.
function routeFactory() {
    return function createRoom(req, res) {
        const roomName = req.body.name;
        const password = req.body.password;
        // Getting the socketid of the current user.
        const owner = getUserId(req);
        const socket = socketManager.getSocketOfUser(owner);
        // If the socket exists,
        if(socket !== null) {
            // If the user is able to create a room,
            if(roomManager.create(roomName, password, socket.id)) {
                // Set the room of the socket to the given room.
                socket.join(roomName);
                // Emit a success message.
                res.status(200).send({name: roomName, password: password, owner: owner});
            }
            else {
                // Else, emit an error message. 409 = Conflict.
                res.status(409).send({error: "Name already exists"});
            }
        }
        else {
            res.status(401).send({error: "Socket not found"});
        }
    }
}

module.exports = routeFactory;
