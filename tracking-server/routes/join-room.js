const roomManager = require('../socket/room-manager');
const socketManager = require('../socket/socket-manager');
const getUserId = require('../jwt-reader');
// This function joins a user to the room with the given name and password.
//
// Params: The body of the request must contain
// - roomName: The name of the room to create
// - password: The password of the room to create.
function routeFactory() {
    return function joinRoom(req, res) {
        const roomName = req.body.name;
        const password = req.body.password;
        // Getting the socketid of the current user.
        const owner = getUserId(req);
        const socket = socketManager.getSocketOfUser(owner);
        // If the socket of the user exists,
        if(socket !== null) {
            // We are retrieving the room to send back the room info to the user.
            const room = roomManager.get(roomName);
            // If the user can join the room,
            if(roomManager.join(roomName, password, socket)) {
                socket.join(roomName); // Joining the socketio room.
                res.status(200).send(room.getInfo());
            }
            else if(room === undefined) {
                res.status(404).send({errorMessage: "Not found"});
            }
            else {
                // Else, emit an error message. 403 = Forbidden.
                res.status(403).send({errorMessage: "Invalid credentials"});
            }
        }
        else {
            // Else, unauthorized
            res.status(401).send({errorMessage: "Socket not found"});
        }
    }
}

module.exports = routeFactory;
