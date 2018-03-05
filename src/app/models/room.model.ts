export class Room {
    id?: string;
    name: string;
    supervisor?: string;

    constructor() {
        this.id = null;
        this.name = "";
        this.supervisor = null;
    }
}
