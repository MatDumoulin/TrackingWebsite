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
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/takeUntil");
// Services
var socket_service_1 = require("../../core/socket/socket.service");
var trackee_service_1 = require("../trackee/trackee.service");
var CurrentUserService = (function () {
    function CurrentUserService(socketService, trackeeService) {
        this.socketService = socketService;
        this.trackeeService = trackeeService;
        this._user = new BehaviorSubject_1.BehaviorSubject(null);
        this._userTrackee = new BehaviorSubject_1.BehaviorSubject(null);
    }
    Object.defineProperty(CurrentUserService.prototype, "user", {
        get: function () {
            return this._user.getValue();
        },
        set: function (currentUser) {
            this._user.next(currentUser);
            // The user is set to null when he disconnects.
            if (this._user.value) {
                this.socketService.connect(this._user.value.authId);
                /* this._latestTrackeeSubscription = this.trackeeService.fetchTrackee(this.user.authId).subscribe(trackee => {
                    // If the trackee exists, emit it.
                    if (trackee) {
                        this._userTrackee.next(trackee);
                    }
                    // Otherwise, create a new trackee for the user.
                    else {
                        // this.trackeeService.addTrackee(this.user.authId, {name: this.user.fullName});  TODO
                    }
                }); */
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUserService.prototype, "room", {
        // Gets the user infos if they are already in the database. These infos
        // are coming from the trackee table.
        /* get userTrackee(): BehaviorSubject<Trackee> {
            return this._userTrackee;
        }*/
        get: function () {
            return this._room;
        },
        set: function (room) {
            this._room = room;
        },
        enumerable: true,
        configurable: true
    });
    CurrentUserService.prototype.getUser = function () {
        return this._user;
    };
    CurrentUserService.prototype.updateLocation = function (newLocation) {
        // this.trackeeService.updateTrackee(this.user.authId, changes).then(res => console.log(res));
        this.socketService.emit("location", newLocation);
    };
    CurrentUserService.prototype.initWithLocalStorage = function () {
    };
    CurrentUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [socket_service_1.SocketService,
            trackee_service_1.TrackeeService])
    ], CurrentUserService);
    return CurrentUserService;
}());
exports.CurrentUserService = CurrentUserService;
//# sourceMappingURL=current-user.service.js.map