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
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var auth_service_1 = require("../../data-services/auth/auth.service");
var current_user_service_1 = require("../../data-services/current-user/current-user.service");
var ToolbarComponent = (function () {
    function ToolbarComponent(authService, currentUserService, router) {
        var _this = this;
        this.authService = authService;
        this.currentUserService = currentUserService;
        this.router = router;
        this.subscriptions = [];
        this.subscriptions.push(this.currentUserService.getUser().subscribe(function (userProfile) { return _this.currentUser = userProfile; }));
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        gapi.signin2.render('signin-with-google', {
            'scope': 'profile email',
            'width': 200,
            'height': 40,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': function (param) { return _this.authService.signInWithGoogle(param); }
        });
    };
    ToolbarComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", material_1.MatSidenav)
    ], ToolbarComponent.prototype, "sidenav", void 0);
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'tm-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            current_user_service_1.CurrentUserService,
            router_1.Router])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map