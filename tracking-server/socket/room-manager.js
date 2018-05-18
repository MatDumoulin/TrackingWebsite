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
        if (this._rooms.get(name) === undefined) {
            const newRoom = new Room(name, password, ownerSocketId);
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

        if (room && room.password === password) {
            room.members.push(socket.id);
            return true;
        }

        return false;
    }

    // Returns true if the deletion was successful.
    delete(name) {
        return this._rooms.delete(name);
    }

    // Gets all rooms of the user.
    getRoomsOfUser(userSocketId) {
        const allRoomsOfUser = {
            connectedAsTrackee: [],
            connectedAsManager: []
        };

        this._rooms.forEach(room => {
            // First, checking if he is a trackee of the room.
            const trackeeIndexOfUser = room.members.findIndex(member => member === userSocketId);
            if (trackeeIndexOfUser !== -1) {
                allRoomsOfUser.connectedAsTrackee.push(room);
            }
            // Then, checking if he is a manager
            if (room.owner === userSocketId) {
                allRoomsOfUser.connectedAsManager.push(room);
            }
        });

        return allRoomsOfUser;
    }

    // Removes the user from any room. If he is the owner of a room, it closes the room.
    removeUserFromRooms(userSocketId) {
        const allRoomsOfUser = this.getRoomsOfUser(userSocketId);

        for (const roomAsTrackee of allRoomsOfUser.connectedAsTrackee) {
            roomAsTrackee.members = roomAsTrackee.members.filter(user => user !== userSocketId);
        }

        for (const roomAsManager of allRoomsOfUser.connectedAsManager) {
            this.delete(roomAsManager.name);
        }
    }
}

// Keeping only a single instance of the room manager.
const roomManager = new RoomManager();

module.exports = roomManager;
