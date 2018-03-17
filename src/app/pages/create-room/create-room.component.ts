import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
// Models
import { Room } from '../../models/room.model';
// Services
import { LoggerService } from '../../core/logger/logger.service';
import { RoomService } from '../../data-services/room/room.service';

@Component({
    selector: 'tm-create-room',
    templateUrl: './create-room.component.html',
    styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
    room = new Room();

    constructor(private roomService: RoomService,
        private logger: LoggerService,
        public dialogRef: MatDialogRef<CreateRoomComponent>) {
    }

    ngOnInit() {
    }

    /** To move in the supervisor window. */
    createRoom() {
        this.roomService.createRoom(this.room.name, this.room.password)
            .then(res => this.dialogRef.close({ room: res, hasJoined: true }))
            .catch(err => this.logger.info("Room name already exists"));
    }

}
