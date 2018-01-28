import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../data-services/room.service';
import { Room } from '../../models/room.model';
import {MatDialogRef} from '@angular/material';
import { LoggerService } from '../../core/logger/logger.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
	currentRoom: number;
	password : string;
	allRooms: Room[];

  constructor(private roomService: RoomService, public dialogRef: MatDialogRef<ClientCreateComponent>) { 
  }

  ngOnInit() {
  	this.roomService.roomObservable.subscribe(rooms => {
  		this.allRooms = rooms;
  	});
  }

  joinRoom() {
  	this.roomService.getRoom(this.currentRoom, this.password).subscribe(room => {
  		if(!room) {
  			alert("Invalid number or password.");
  		}
  		else {
  			this.dialogRef.close({roomNumber: this.currentRoom, hasJoined: true});
  		}
  	});
  }

}
