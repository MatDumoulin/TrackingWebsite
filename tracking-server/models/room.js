class Room {

    constructor(name, password, ownerSocketId) {
        this.name = name;
        this.password = password;
        this.owner = ownerSocketId;
        this.members = [];
    }

    getInfo() {
        return {
            owner: this.owner,
            memberCount: this.members.length
        };
    }
}


module.exports = Room;
