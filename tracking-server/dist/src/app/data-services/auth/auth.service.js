"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app/services/auth.service.ts
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var moment = require("moment");
// Services
var current_user_service_1 = require("../current-user/current-user.service");
var google_auth_service_1 = require("./google-auth/google-auth.service");
var AuthService = (function () {
    function AuthService(router, currentUserService, googleAuthService, zone, localStorageService) {
        this.router = router;
        this.currentUserService = currentUserService;
        this.googleAuthService = googleAuthService;
        this.zone = zone;
        this.localStorageService = localStorageService;
        this.hasLoaded = false;
        this.restoreFromSession();
    }
    AuthService.prototype.getAuthStateChangedObservable = function () {
        return this.authState;
    };
    AuthService.prototype.signInWithGoogle = function (googleUser) {
        var _this = this;
        // We have to run this code inside of an Angular zone since the Google api callback does not run in Angular.
        this.zone.run(function () {
            _this.googleAuthService.onSignedIn(googleUser).subscribe(function (response) {
                // If the user has changed with this sign in. This can occur if the user was restored from local storage.
                if (!_this.currentUserService.user || !response.user || _this.currentUserService.user.authId !== response.user.authId) {
                    _this.currentUserService.user = response.user;
                }
                _this.setSession(response);
                _this.router.navigate(['/home']);
            });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.currentUserService.getUser().value !== null || this.localStorageService.get("user") !== null;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.googleAuthService.disconnect().then(function () {
            // We have to run this code inside of an Angular zone since the Google api callback does not run in Angular.
            _this.zone.run(function () {
                _this.currentUserService.user = null;
                _this.clearSession();
                _this.router.navigateByUrl('/login');
            });
        });
        /*this._firebaseDatabase.database.goOffline();
        this._firebaseAuth.auth.signOut()
            .then((res) => this.router.navigate(['/home']));*/
    };
    AuthService.prototype.setSession = function (authResult) {
        var expiresAt = moment().add(authResult.tokenExpiresIn, 'second');
        this.localStorageService.set("user", authResult.user);
        this.localStorageService.set('auth_token', authResult.token);
        this.localStorageService.set("token_expires_at", JSON.stringify(expiresAt.valueOf()));
    };
    AuthService.prototype.restoreFromSession = function () {
        var currentUser = this.localStorageService.get("user");
        if (currentUser) {
            this.currentUserService.user = currentUser;
        }
    };
    AuthService.prototype.clearSession = function () {
        this.localStorageService.remove("user");
        this.localStorageService.remove('auth_token');
        this.localStorageService.remove('token_expires_at');
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            current_user_service_1.CurrentUserService,
            google_auth_service_1.GoogleAuthService,
            core_1.NgZone,
            angular_2_local_storage_1.LocalStorageService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map