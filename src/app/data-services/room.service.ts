import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Room } from '../models/room.model';

@Injectable()
export class RoomService {
	private ROOM_PATH = '/rooms';
	roomObservable: any;

  	constructor(public db: AngularFireDatabase) {
      this.roomObservable = this.fetchRooms();
    }

    getObservable(): any {
    	return this.roomObservable;
    }

    private fetchRooms(): any {
    	return this.db.list<Room>(this.ROOM_PATH).valueChanges();
    }

    public getRoom(id:number, password?:string): any {
    	if(password != null) {
    		return this.db.list<Room>(`${this.ROOM_PATH}/${id}`, room => room.orderByChild('password').equalTo(password)).valueChanges();
    	}
    	else {
    		return this.db.list<Room>(`${this.ROOM_PATH}/${id}`).valueChanges();
    	}
    }
}