import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import * as uuid from 'uuid/v1';

import { DataService } from '../data-service.interface';
import { CurrentUserService } from '../current-user/current-user.service';
import { CryptoService } from '../../core/crypto/crypto.service';
import { Room } from '../../models/room.model';

@Injectable()
export class RoomService {
    private ROOM_PATH = 'rooms';

    constructor(public db: AngularFireDatabase,
                private cryptoService: CryptoService,
                private currentUserService: CurrentUserService) {}

    public getRoom(id: string, password: string): Observable<Room> {
        const key = this.getRoomKey(id, password);
        return this.db.object<Room>(`${this.ROOM_PATH}/${key}`).valueChanges();
    }

    public createRoom(id: string, password: string, room: Room): Promise<Room> {
        const key = this.getRoomKey(id, password);
        const newRoom = JSON.parse( JSON.stringify(room));
        newRoom.id = uuid(); // Giving an id to the room.
        newRoom.supervisor = this.currentUserService.user.authId; // Noting who created this room.

        return new Promise<Room>((resolve, reject) => {
            const roomRef = this.db.object(`${this.ROOM_PATH}/${key}`);
            const obs = roomRef.valueChanges().subscribe(res => {
                if (!res) {
                    obs.unsubscribe();
                    roomRef.set(newRoom).then(() => resolve(newRoom))
                                     .catch(err => reject(err));
                }
                else {
                    reject("This room already exists");
                }
            });
        });

    }

    /*openConnection() {
        console.log("Room connection is opening");
        this.roomObservable = this.fetchRooms();
    }

    closeConnection() {
        console.log("Room connection is closing");
        this.roomObservable = null;
    }*/

    private getRoomKey(id: string, password: string): string {
        return this.cryptoService.encrypt(id + "_" + password);
    }
}
