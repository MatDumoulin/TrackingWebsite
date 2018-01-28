// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';

import { TrackeeService } from './trackee.service';
import { Trackee } from '../models/trackee.model';


@Injectable()
export class AuthService {
    private user: any;
    private userDetails: firebase.User;
    private userInfo: any = null;
    hasLoaded: boolean = false;

	constructor(private _firebaseAuth: AngularFireAuth, private router: Router, public trackeeService: TrackeeService) { 
        this.user = _firebaseAuth.authState;

        this.user.subscribe((user) => {
	          if (user) {
	            this.userDetails = user;
	            this.getUserInfo().subscribe(info => {

	            	/*if(info.length === 0) {
	            		this.addUser(this.userDetails.uid, {isSupervisor: false});
	            	}*/

	            	if(info.length === 0 || !info[0].isSupervisor) {
	            		this.router.navigate(['/client']);
	            	}
	            	else {
	            		 this.router.navigate(['/maps']);
	            	}


	            });
	          }
	          else {
	            this.userDetails = null
	          }
	          this.hasLoaded = true;
	    });
    }

    getObservable(): any {
    	return this.user;
    }

    signInWithGoogle() {
	    return this._firebaseAuth.auth.signInWithPopup(
	        new firebase.auth.GoogleAuthProvider()
	    );
	}

	isLoggedIn() {
		return this.userDetails != null;
	}
	  
	logout() {
	    this._firebaseAuth.auth.signOut()
	                           .then((res) => this.router.navigate(['/home']));
  	}

	getUser(): firebase.User {
		return this.userDetails;
	}

	// Gets the user infos if they are already in the database.
    getUserInfo(): any {
    	if(this.userInfo === null) {
    		this.userInfo = this.trackeeService.fetchTrackee(this.userDetails.uid);
    	}
		return this.userInfo;
	}

	/*updateUser(user, changes){
		this.trackeeService.updateTrackee(user, changes);
	}

	addUser(userid, user) {
		this.trackeeService.addTrackee(userid, user);
	}*/
}