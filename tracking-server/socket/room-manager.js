const Room = require('../models/room');

class RoomManager {

    constructor() {
        // This map contains all of the rooms to manage.
        this._rooms = new Map();
    }

    get(name) {
        return this._rooms.get(name);
    }

    // Returns true if there is no room with this name.
    create(name, password, ownerSocketId) {
        if(this._rooms.get(name) === undefined) {
            const newRoom = new Room(password, ownerSocketId);
            this._rooms.set(name, newRoom);

            return newRoom;
        }
        else {
            return null;
        }
    }

    // Returns true if the join was successful, false otherwise.
    join(name, password, socket) {
        const room = this._rooms.get(name);

        if(room && room.password === password) {
            room.members.push(socket.id);
            return true;
        }
        else {
            return false;
        }
    }

    // Returns true if the deletion was successful.
    delete(name) {
        return this._rooms.delete(name);
    }
}

// Keeping only a single instance of the room manager.
const roomManager = new RoomManager();

module.exports = roomManager;
