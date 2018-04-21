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
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
// Services
var logger_service_1 = require("../../core/logger/logger.service");
var room_service_1 = require("../../data-services/room/room.service");
var ClientCreateComponent = (function () {
    function ClientCreateComponent(roomService, logger, dialogRef) {
        this.roomService = roomService;
        this.logger = logger;
        this.dialogRef = dialogRef;
        this.password = "";
    }
    ClientCreateComponent.prototype.ngOnInit = function () {
    };
    ClientCreateComponent.prototype.joinRoom = function () {
        var _this = this;
        this.roomService.joinRoom(this.currentRoom, this.password)
            .then(function (room) {
            if (!room) {
                _this.logger.info("Invalid room or password.");
            }
            else {
                _this.dialogRef.close({ room: room, hasJoined: true });
            }
        })
            .catch(function (error) {
            if (error.isRelatedToCredentials) {
                _this.logger.info("Invalid room or password.");
            }
            else {
                _this.logger.info(error.errorMessage);
            }
        });
    };
    /** To move in the supervisor window. */
    ClientCreateComponent.prototype.createRoom = function () {
        this.roomService.createRoom(this.currentRoom, this.password)
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.error(err); });
    };
    __decorate([
        core_1.ViewChild("form"),
        __metadata("design:type", forms_1.NgForm)
    ], ClientCreateComponent.prototype, "ngForm", void 0);
    ClientCreateComponent = __decorate([
        core_1.Component({
            selector: 'tm-client-create',
            templateUrl: './client-create.component.html',
            styleUrls: ['./client-create.component.css']
        }),
        __metadata("design:paramtypes", [room_service_1.RoomService,
            logger_service_1.LoggerService,
            material_1.MatDialogRef])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());
exports.ClientCreateComponent = ClientCreateComponent;
//# sourceMappingURL=client-create.component.js.map