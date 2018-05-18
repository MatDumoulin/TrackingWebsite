import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

/* import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import * as uuid from 'uuid/v1';*/
import 'rxjs/add/operator/take';

// Services
import { CryptoService } from '../../core/crypto/crypto.service';
import { SocketService } from '../../core/socket/socket.service';
// Models
import { Room } from '../../models/room.model';
import { RoomInfo } from '../../models/room-info.model';


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

            this.http.post<Room>(url, room).take(1).subscribe(
                (result: Room) => resolve(result),
                (error) => {
                    console.log(error);
                    reject();
                });
        });

        return promise;
    }

    deleteRoom(name: string): Promise<any> {
        const promise = new Promise<any>((resolve, reject) => {
            const url = environment.apiUrl + "/room/" + name;

            this.http.delete(url).take(1).subscribe(
                (result: boolean) => resolve(result),
                (error) => {
                    console.log(error);
                    reject();
                });
        });

        return promise;
    }

    /**
     * Tries to connect the current user to the given room.
     * @param name The name of the room to join.
     * @param password The password of the room to join.
     * @returns If connection succeeds, the room information is returned.
     *          Otherwise, an error object is sent with the 'errorMessage' and 'isRelatedToCredentials' params.
     */
    joinRoom(name: string, password: string): Promise<Room> {
        const promise = new Promise<any>((resolve, reject) => {
            const url = environment.apiUrl + "/room/" + name;
            const encryptedPassword = this.cryptoService.encrypt(password);

            this.http.post<RoomInfo>(url, { name: name, password: encryptedPassword }).take(1).subscribe(
                (result: RoomInfo) => resolve(result),
                (errorResponse) => {
                    if (errorResponse.status === 404 || errorResponse.status === 403) {
                        reject({ isRelatedToCredentials: true });
                    }
                    else if (errorResponse.status === 401) {
                        reject({ errorMessage: "You must be logged in to join a room.", isRelatedToCredentials: false });
                    }
                    else {
                        console.log(errorResponse);
                        reject({ errorMessage: "An error occurred.", isRelatedToCredentials: false });
                    }
                });
        });

        return promise;
    }

}
