import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

/* import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import * as uuid from 'uuid/v1';*/

// Services
import { CryptoService } from '../../core/crypto/crypto.service';
import { SocketService } from '../../core/socket/socket.service';
// Models
import { Room } from '../../models/room.model';

@Injectable()
export class RoomService {
    private ROOM_PATH = 'rooms';

    constructor(private cryptoService: CryptoService,
        private http: HttpClient,
        private socketService: SocketService) { }

    createRoom(name: string, password: string): Promise<Room> {
        const promise = new Promise<Room>((resolve, reject) => {
            const url = environment.apiUrl + "/room";
            // Setting up the room to add.
            const encryptedPassword = this.cryptoService.encrypt(password);
            const room = new Room(name, encryptedPassword);

            this.http.post(url, room).subscribe(
                (result: Room) => resolve(result),
                (error) => {
                    console.log(error);
                    reject();
                });
        });

        return promise;
    }

    deleteRoom(name: string): Promise<any> {
        const promise = new Promise<any>( (resolve, reject) => {
            const url = environment.apiUrl + "/room/" + name;

            this.http.delete(url).subscribe(
                (result: boolean) => resolve(result),
                (error) => {
                    console.log(error);
                    reject();
                });
        });

        return promise;
    }

}
