import { Injectable, NgZone } from '@angular/core';
import { environment } from '../../../environments/environment';
// Socket IO
import * as io from 'socket.io-client';
// Rxjs
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SocketService {
    private socket;

    constructor(private zone: NgZone) {
    }

    connect(userAuthId: string) {
        this.socket = io(environment.serverUrl, {reconnect: false});
        // Once connected,
        this.socket.once('connect', () => {
            // Send the user id to the server.
            // This id will be used to identify the client's socket.
            if (userAuthId) {
                this.socket.emit('join', userAuthId);
            }
        });
    }

    emit(eventName: string, value: any): void {
        this.socket.emit(eventName, value);
        // this.socket.id
    }

    on(eventName: string): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on(eventName, (value: any) => this.zone.run(() => observer.next(value)));
        });
    }

}
