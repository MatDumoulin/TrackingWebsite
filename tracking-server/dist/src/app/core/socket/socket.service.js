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
var environment_1 = require("../../../environments/environment");
// Socket IO
var io = require("socket.io-client");
// Rxjs
var Observable_1 = require("rxjs/Observable");
var SocketService = (function () {
    function SocketService(zone) {
        this.zone = zone;
    }
    SocketService.prototype.connect = function (userAuthId) {
        var _this = this;
        console.log("Trying to connect!");
        this.socket = io(environment_1.environment.serverUrl, { reconnection: false });
        // Once connected,
        this.socket.once('connect', function () {
            // Send the user id to the server.
            // This id will be used to identify the client's socket.
            if (userAuthId) {
                _this.socket.emit('join', userAuthId);
            }
        });
    };
    SocketService.prototype.emit = function (eventName, value) {
        this.socket.emit(eventName, value);
        // this.socket.id
    };
    SocketService.prototype.on = function (eventName) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on(eventName, function (value) { return _this.zone.run(function () { return observer.next(value); }); });
        });
    };
    SocketService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map