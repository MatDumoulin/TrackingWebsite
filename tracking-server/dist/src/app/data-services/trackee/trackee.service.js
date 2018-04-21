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
var database_1 = require("angularfire2/database");
var Observable_1 = require("rxjs/Observable");
var TrackeeService = (function () {
    function TrackeeService(db) {
        this.db = db;
        this.TRACKEE_PATH = '/trackees';
        this.userRoom = -10000;
        this.trackeeObservable = Observable_1.Observable.of([]);
    }
    TrackeeService.prototype.getObservable = function () {
        return this.trackeeObservable;
    };
    TrackeeService.prototype.fetchTrackeesByRoom = function (room) {
        return this.db.list(this.TRACKEE_PATH, function (trackee) { return trackee.orderByChild('room').equalTo(room); })
            .valueChanges();
    };
    TrackeeService.prototype.fetchTrackee = function (id) {
        return this.db.object(this.TRACKEE_PATH + "/" + id).valueChanges();
    };
    TrackeeService.prototype.updateTrackee = function (trackeeId, changes) {
        return this.db.object(this.TRACKEE_PATH + "/" + trackeeId).update(changes);
    };
    TrackeeService.prototype.addTrackee = function (trackeeId, trackee) {
        this.db.object(this.TRACKEE_PATH + "/" + trackeeId).set(trackee);
    };
    TrackeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], TrackeeService);
    return TrackeeService;
}());
exports.TrackeeService = TrackeeService;
//# sourceMappingURL=trackee.service.js.map