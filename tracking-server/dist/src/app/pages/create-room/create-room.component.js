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
var material_1 = require("@angular/material");
// Models
var room_model_1 = require("../../models/room.model");
// Services
var logger_service_1 = require("../../core/logger/logger.service");
var room_service_1 = require("../../data-services/room/room.service");
var CreateRoomComponent = (function () {
    function CreateRoomComponent(roomService, logger, dialogRef) {
        this.roomService = roomService;
        this.logger = logger;
        this.dialogRef = dialogRef;
        this.room = new room_model_1.Room();
    }
    CreateRoomComponent.prototype.ngOnInit = function () {
    };
    /** To move in the supervisor window. */
    CreateRoomComponent.prototype.createRoom = function () {
        var _this = this;
        this.roomService.createRoom(this.room.name, this.room.password)
            .then(function (res) { return _this.dialogRef.close({ room: res, hasJoined: true }); })
            .catch(function (err) { return _this.logger.info("Room name already exists"); });
    };
    CreateRoomComponent = __decorate([
        core_1.Component({
            selector: 'tm-create-room',
            templateUrl: './create-room.component.html',
            styleUrls: ['./create-room.component.css']
        }),
        __metadata("design:paramtypes", [room_service_1.RoomService,
            logger_service_1.LoggerService,
            material_1.MatDialogRef])
    ], CreateRoomComponent);
    return CreateRoomComponent;
}());
exports.CreateRoomComponent = CreateRoomComponent;
//# sourceMappingURL=create-room.component.js.map