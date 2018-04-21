"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./data-services/auth/auth-guard.service");
var redirect_connected_guard_service_1 = require("./data-services/auth/redirect-connected-guard.service");
var home_page_component_1 = require("./pages/home-page/home-page.component");
var user_home_component_1 = require("./pages/user-home/user-home.component");
var maps_manager_component_1 = require("./pages/maps-manager/maps-manager.component");
var client_component_1 = require("./pages/client/client.component");
var appRoutes = [
    { path: 'login', component: home_page_component_1.HomePageComponent, canActivate: [redirect_connected_guard_service_1.RedirectConnectedGuardService] },
    { path: 'home', component: user_home_component_1.UserHomeComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'manage', component: maps_manager_component_1.MapsManagerComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'track', component: client_component_1.ClientComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=route.module.js.map