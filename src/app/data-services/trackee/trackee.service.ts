import { Injectable } from '@angular/core';
 import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Trackee } from '../../models/trackee.model';

@Injectable()
export class TrackeeService  {
    private TRACKEE_PATH = '/trackees';
    trackeeObservable: any;
    userRoom = -10000;

    constructor(public db: AngularFireDatabase) {
        this.trackeeObservable = Observable.of([]);
    }

    getObservable(): any {
        return this.trackeeObservable;
    }

    fetchTrackeesByRoom(room: number): any {

        return this.db.list<Trackee>(this.TRACKEE_PATH,
            (trackee) => trackee.orderByChild('room').equalTo(room))
            .valueChanges();
    }

    public fetchTrackee(id: string): Observable<Trackee> {
        return this.db.object<Trackee>(this.TRACKEE_PATH + "/" + id).valueChanges();
    }

    public updateTrackee(trackeeId: string, changes): Promise<any> {
        return this.db.object(`${this.TRACKEE_PATH}/${trackeeId}`).update(changes);
    }

    public addTrackee(trackeeId: string, trackee: any): void {
        this.db.object(`${this.TRACKEE_PATH}/${trackeeId}`).set(trackee);
    }
}
