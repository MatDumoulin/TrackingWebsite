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
var router_1 = require("@angular/router");
// Components
var client_create_component_1 = require("../client-create/client-create.component");
var create_room_component_1 = require("../create-room/create-room.component");
// Services
var current_user_service_1 = require("../../data-services/current-user/current-user.service");
var UserHomeComponent = (function () {
    function UserHomeComponent(currentUserService, dialog, router) {
        this.currentUserService = currentUserService;
        this.dialog = dialog;
        this.router = router;
    }
    UserHomeComponent.prototype.ngOnInit = function () {
    };
    UserHomeComponent.prototype.openCreateClientDialog = function () {
        var _this = this;
        this.dialog.open(client_create_component_1.ClientCreateComponent).afterClosed()
            .subscribe(function (response) {
            // Ignoring when the user cancels zone search.
            if (response && response.hasJoined) {
                _this.currentUserService.room = response.room;
                _this.router.navigateByUrl("/track");
            }
        });
    };
    UserHomeComponent.prototype.openCreateRoomDialog = function () {
        var _this = this;
        this.dialog.open(create_room_component_1.CreateRoomComponent).afterClosed()
            .subscribe(function (response) {
            console.log("Create room dialog response:", response);
            // Ignoring when the user cancels zone search.
            if (response && response.hasJoined) {
                _this.currentUserService.room = response.room;
                _this.router.navigateByUrl("/manage");
            }
        });
    };
    UserHomeComponent = __decorate([
        core_1.Component({
            selector: 'tm-user-home',
            templateUrl: './user-home.component.html',
            styleUrls: ['./user-home.component.css']
        }),
        __metadata("design:paramtypes", [current_user_service_1.CurrentUserService,
            material_1.MatDialog,
            router_1.Router])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;
//# sourceMappingURL=user-home.component.js.map