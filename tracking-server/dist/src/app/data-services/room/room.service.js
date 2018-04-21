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
var http_1 = require("@angular/common/http");
var environment_1 = require("../../../environments/environment");
/* import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import * as uuid from 'uuid/v1';*/
require("rxjs/add/operator/take");
// Services
var crypto_service_1 = require("../../core/crypto/crypto.service");
var socket_service_1 = require("../../core/socket/socket.service");
// Models
var room_model_1 = require("../../models/room.model");
var RoomService = (function () {
    function RoomService(cryptoService, http, socketService) {
        this.cryptoService = cryptoService;
        this.http = http;
        this.socketService = socketService;
        this.ROOM_PATH = 'rooms';
    }
    RoomService.prototype.createRoom = function (name, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var url = environment_1.environment.apiUrl + "/room";
            // Setting up the room to add.
            var encryptedPassword = _this.cryptoService.encrypt(password);
            var room = new room_model_1.Room(name, encryptedPassword);
            _this.http.post(url, room).take(1).subscribe(function (result) { return resolve(result); }, function (error) {
                console.log(error);
                reject();
            });
        });
        return promise;
    };
    RoomService.prototype.deleteRoom = function (name) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var url = environment_1.environment.apiUrl + "/room/" + name;
            _this.http.delete(url).take(1).subscribe(function (result) { return resolve(result); }, function (error) {
                console.log(error);
                reject();
            });
        });
        return promise;
    };
    /**
     * Tries to connect the current user to the given room.
     * @param name The name of the room to join.
     * @param password The password of the room to join.
     * @returns If connection succeeds, the room information is returned.
     *          Otherwise, an error object is sent with the 'errorMessage' and 'isRelatedToCredentials' params.
     */
    RoomService.prototype.joinRoom = function (name, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var url = environment_1.environment.apiUrl + "/room/" + name;
            var encryptedPassword = _this.cryptoService.encrypt(password);
            _this.http.post(url, { name: name, password: encryptedPassword }).take(1).subscribe(function (result) { return resolve(result); }, function (errorResponse) {
                if (errorResponse.status === 404 || errorResponse.status === 403) {
                    reject({ isRelatedToCredentials: true });
                }
                else if (errorResponse.status === 401) {
                    reject({ errorMessage: "You must be logged in to join a room.", isRelatedToCredentials: false });
                }
                else {
                    console.log(errorResponse);
                    reject({ errorMessage: "An error occurred.", isRelatedToCredentials: false });
                }
            });
        });
        return promise;
    };
    RoomService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [crypto_service_1.CryptoService,
            http_1.HttpClient,
            socket_service_1.SocketService])
    ], RoomService);
    return RoomService;
}());
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map