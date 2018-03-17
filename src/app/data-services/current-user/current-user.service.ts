import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/takeUntil';
// Services
import { SocketService } from '../../core/socket/socket.service';
import { TrackeeService } from '../trackee/trackee.service';
// Models
import { Room } from '../../models/room.model';
import { Trackee } from '../../models/trackee.model';
import { UserProfile } from '../../models/user-profile.model';

@Injectable()
export class CurrentUserService {
    private _user: UserProfile;
    private _userTrackee = new BehaviorSubject<Trackee>(null);
    private _latestTrackeeSubscription: Subscription;
    private _room: Room;

    constructor(private socketService: SocketService,
        private trackeeService: TrackeeService) {
    }

    set user(currentUser: UserProfile) {
        this._user = currentUser;

        // Subscribing to the trackee value for the corresponding user.
        if (this._latestTrackeeSubscription) {
            this._latestTrackeeSubscription.unsubscribe();
        }

        // The user is set to null when he disconnects.
        if (this.user) {
            this.socketService.connect(this.user.authId);
            this._latestTrackeeSubscription = this.trackeeService.fetchTrackee(this.user.authId).subscribe(trackee => {
                // If the trackee exists, emit it.
                if (trackee) {
                    this._userTrackee.next(trackee);
                }
                // Otherwise, create a new trackee for the user.
                else {
                    // this.trackeeService.addTrackee(this.user.authId, {name: this.user.fullName});  TODO
                }
            });
        }
    }

    set room(room: Room) {
        this._room = room;
    }

    get user(): UserProfile {
        return this._user;
    }

    // Gets the user infos if they are already in the database. These infos
    // are coming from the trackee table.
    get userTrackee(): BehaviorSubject<Trackee> {
        return this._userTrackee;
    }

    get room(): Room {
        return this._room;
    }

    updateLocation(newLocation: any): void {
        // this.trackeeService.updateTrackee(this.user.authId, changes).then(res => console.log(res));
        this.socketService.emit("location", newLocation);
    }

    private initWithLocalStorage() {

    }

}
