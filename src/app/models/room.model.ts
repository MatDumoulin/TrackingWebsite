export class Room {
    name: string;
    password: string;
    owner?: string;

    constructor(name?: string, password?: string) {
        this.name = name;
        this.password = password;
        this.owner = null;
    }
}
