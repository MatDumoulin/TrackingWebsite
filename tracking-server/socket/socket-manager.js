class SocketManager {

    constructor() {
        this._sockets = new Map();
    }

    get(socketId) {
        return this._sockets.get(socketId);
    }

    getSocketOfUser(userId) {
        const iterator = this._sockets.values();
        for(const value of iterator) {
            if(value && value.userId === userId) {
                return value.socket;
            }
        }

        // Not found
        return null;
    }

    set(socketId, value) {
        this._sockets.set(socketId, value);
    }

    // Returns true if the deletion was successful.
    delete(socketId) {
        return this._sockets.delete(socketId);
    }
}

// Keeping only a single instance of the socket manager.
const socketManager = new SocketManager();

module.exports = socketManager;
