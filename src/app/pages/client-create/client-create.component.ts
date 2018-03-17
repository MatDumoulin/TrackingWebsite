import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { RoomService } from '../../data-services/room/room.service';
import { Room } from '../../models/room.model';
import { LoggerService } from '../../core/logger/logger.service';

@Component({
    selector: 'tm-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
    currentRoom: string;
    password = "";
    allRooms: Room[];


    constructor(private roomService: RoomService,
                private logger: LoggerService,
                public dialogRef: MatDialogRef<ClientCreateComponent>) {
    }

    ngOnInit() {

    }

    joinRoom() {
        /*this.roomService.getRoom(this.currentRoom, this.password).subscribe(
            room => {
                if (!room) {
                    this.logger.info("Invalid room or password.");
                }
                else {
                    this.dialogRef.close({ room: room, hasJoined: true });
                }
            },
            err => {
                this.logger.info("You don't have the permissions needed to join this room.");
                console.log(err);
            });*/

            alert("TODO: Commented");
    }

    /** To move in the supervisor window. */
    createRoom() {
        this.roomService.createRoom(this.currentRoom, this.password)
                        .then(res => console.log(res))
                        .catch(err => console.error(err));
    }

}
