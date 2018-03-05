// src/app/services/auth.service.ts
import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { LocalStorageService } from 'angular-2-local-storage';
import * as moment from 'moment';

// Services
import { CurrentUserService } from '../current-user/current-user.service';
import { DataServiceManager } from '../data-service-manager/data-service-manager.service';
import { GoogleAuthService } from './google-auth/google-auth.service';
// Models
import { UserProfile } from '../../models/user-profile.model';
import { Trackee } from '../../models/trackee.model';

@Injectable()
export class AuthService {
    private authState: Observable<firebase.User>;
    private userObs: Subscription;
    hasLoaded = false;

    constructor(
        private router: Router,
        private _dataServiceManager: DataServiceManager,
        private currentUserService: CurrentUserService,
        private googleAuthService: GoogleAuthService,
        private zone: NgZone,
        private localStorageService: LocalStorageService) {

        this.restoreFromSession();
        /*this.authState = _firebaseAuth.authState;

        this.authState.subscribe((user) => {
            if (user) {
                this._firebaseDatabase.database.goOnline();

                this.currentUserService.user = user;

                this.router.navigate(['/home']);
            }
            else {
                this.currentUserService.user = null;
                this.router.navigate(['/']);
            }
            this.hasLoaded = true;
        });*/
    }

    getAuthStateChangedObservable(): any {
        return this.authState;
    }

    signInWithGoogle(googleUser: any) {
        // We have to run this code inside of an Angular zone since the Google api callback does not run in Angular.
        this.zone.run(() => {
            this.googleAuthService.onSignedIn(googleUser).subscribe((response: any) => {
                this.currentUserService.user = response.user;
                this.setSession(response);
                this.router.navigate(['/home']);
            });
        });
    }

    isLoggedIn() {
        return this.currentUserService.user != null || this.localStorageService.get("user") != null;
    }

    logout() {

        this.googleAuthService.disconnect().then(() => {
            // We have to run this code inside of an Angular zone since the Google api callback does not run in Angular.
            this.zone.run(() => {
                this.currentUserService.user = null;
                this.clearSession();
                this.router.navigateByUrl('/login');
            });
        });

        /*this._firebaseDatabase.database.goOffline();
        this._firebaseAuth.auth.signOut()
            .then((res) => this.router.navigate(['/home']));*/
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.tokenExpiresIn, 'second');
        this.localStorageService.set("user", authResult.user);
        this.localStorageService.set('auth_token', authResult.token);
        this.localStorageService.set("token_expires_at", JSON.stringify(expiresAt.valueOf()));
    }

    private restoreFromSession(): void {
        const currentUser = <UserProfile>this.localStorageService.get("user");
        if (currentUser) {
            this.currentUserService.user = currentUser;
        }
    }

    public clearSession() {
        this.localStorageService.remove("user");
        this.localStorageService.remove('auth_token');
        this.localStorageService.remove('token_expires_at');
    }
}
