import { Injectable } from '@angular/core';

// Services
import { RoomService } from '../room/room.service';

@Injectable()
export class DataServiceManager {

    constructor(private roomService: RoomService) { }

    openDatabaseConnections() {
        // this.roomService.openConnection();
    }

    closeDatabaseConnections() {
        // this.roomService.closeConnection();
    }

}
