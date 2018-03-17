class Room {

    constructor(password, ownerSocketId) {
        this.password = password;
        this.owner = ownerSocketId;
        this.members = [];
    }
}


module.exports = Room;
