import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
// Models
import { Room } from '../../models/room.model';
// Services
import { LoggerService } from '../../core/logger/logger.service';
import { RoomService } from '../../data-services/room/room.service';

@Component({
    selector: 'tm-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
    currentRoom: string;
    password = "";

    @ViewChild("form") private ngForm: NgForm;

    constructor(private roomService: RoomService,
        private logger: LoggerService,
        public dialogRef: MatDialogRef<ClientCreateComponent>) {
    }

    ngOnInit() {

    }

    joinRoom() {
        this.roomService.joinRoom(this.currentRoom, this.password)
            .then(room => {
                if (!room) {
                    this.logger.info("Invalid room or password.");
                }
                else {
                    this.dialogRef.close({ room: room, hasJoined: true });
                }
            })
            .catch(error => {
                if (error.isRelatedToCredentials) {
                    this.logger.info("Invalid room or password.");
                }
                else {
                    this.logger.info(error.errorMessage);
                }
            });
    }

    /** To move in the supervisor window. */
    createRoom() {
        this.roomService.createRoom(this.currentRoom, this.password)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

}
