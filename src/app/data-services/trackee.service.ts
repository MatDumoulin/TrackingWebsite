import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Trackee } from '../models/trackee.model';

@Injectable()
export class TrackeeService {
	//trackees: Trackee[];
	private TRACKEE_PATH = '/trackees';
	trackeeObservable: Observable<any[]>;

  	constructor(public db: AngularFireDatabase) {
      this.trackeeObservable = this.fetchTrackees();
    }

    getObservable(): Observable<any[]> {
    	return this.trackeeObservable;
    }

    private fetchTrackees(): Observable<any[]> {
    	return this.db.list(this.TRACKEE_PATH).valueChanges();
    }

}
