import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Trackee } from '../models/trackee.model';

@Injectable()
export class TrackeeService {
	private TRACKEE_PATH = '/trackees';
	trackeeObservable: any;
  userRoom: number = -10000;

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

    public fetchTrackee(id: string) {
        return this.db.list<Trackee>(this.TRACKEE_PATH + "/" + id).valueChanges();
    }

    public updateTrackee(trackee, changes) {
      this.db.list(this.TRACKEE_PATH).update(trackee, changes);
    }

    public addTrackee(trackeeId, trackee) {
      //this.db.list(this.TRACKEE_PATH +"/" + trackeeId).push(trackee);
      this.db.object(`list${this.TRACKEE_PATH}`).set({trackeeId: trackee});
    }
}
