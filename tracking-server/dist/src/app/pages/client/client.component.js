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
require("rxjs/add/operator/skip");
var current_user_service_1 = require("../../data-services/current-user/current-user.service");
var ClientComponent = (function () {
    function ClientComponent(currentUserService) {
        this.currentUserService = currentUserService;
        this.isTracking = false;
        this.currentTrackee = null;
        this.hasOpenDialog = false;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Client!");
        this.userObs = this.currentUserService.getUser().subscribe(function (userProfile) {
            _this.currentTrackee = userProfile;
        });
        this.startTracking();
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        // Cleaning up the resources used.
        this.pauseTracking();
        this.userObs.unsubscribe();
    };
    ClientComponent.prototype.startTracking = function () {
        var _this = this;
        this.isTracking = true;
        // An interval is only trigerred after X ms. We want to send the location right away.
        this.emitLocation();
        this.interval = setInterval(function () {
            _this.emitLocation();
            console.log("Location changed!");
        }, 5000);
    };
    ClientComponent.prototype.emitLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.currentUserService.updateLocation({ id: _this.currentTrackee.authId, lat: pos.coords.latitude, lon: pos.coords.longitude });
        });
    };
    ClientComponent.prototype.pauseTracking = function () {
        this.isTracking = false;
        clearInterval(this.interval);
    };
    ClientComponent.prototype.resumeTracking = function () {
        this.startTracking();
    };
    ClientComponent.prototype.toggleTracking = function () {
        if (this.isTracking) {
            this.pauseTracking();
        }
        else {
            this.resumeTracking();
        }
    };
    ClientComponent.prototype.getTrackingTooltip = function () {
        if (this.isTracking) {
            return "Pause tracking";
        }
        else {
            return "Resume tracking";
        }
    };
    ClientComponent = __decorate([
        core_1.Component({
            selector: 'tm-client',
            templateUrl: './client.component.html',
            styleUrls: ['./client.component.css']
        }),
        __metadata("design:paramtypes", [current_user_service_1.CurrentUserService])
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;
//# sourceMappingURL=client.component.js.map