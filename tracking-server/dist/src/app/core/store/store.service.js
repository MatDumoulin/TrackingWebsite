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
// Rxjs
var Subject_1 = require("rxjs/Subject");
var socket_service_1 = require("../socket/socket.service");
var action_factory_service_1 = require("./actions/action-factory.service");
var StoreService = (function () {
    function StoreService(socketService, actionFactoryService) {
        var _this = this;
        this.socketService = socketService;
        this.actionFactoryService = actionFactoryService;
        this.roomSubject = new Subject_1.Subject();
        this.subscriptions = [];
        this.socketService.on("locationChanged").subscribe(function (value) {
            var action = _this.actionFactoryService.createBasicAction("locationChanged", value);
            _this.roomSubject.next(action);
        });
    }
    StoreService.prototype.ngOnDestroy = function () {
        // Cleaning up subscriptions.
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
        // Closing up the subject.
        this.roomSubject.complete();
    };
    StoreService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [socket_service_1.SocketService,
            action_factory_service_1.ActionFactoryService])
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map