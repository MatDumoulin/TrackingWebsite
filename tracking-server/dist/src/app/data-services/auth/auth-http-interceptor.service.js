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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var AuthHttpInterceptor = (function () {
    // private authService: AuthService = null; // Got to load it async to prevent circular import.
    function AuthHttpInterceptor(localStorageService, router) {
        this.localStorageService = localStorageService;
        this.router = router;
    }
    AuthHttpInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        // Request are immutable. We must clone them to modify them.
        if (this.localStorageService.get("auth_token")) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.localStorageService.get("auth_token")
                }
            });
        }
        return next.handle(request).do(function () { }, function (err) {
            // Handling 401 unauthorized errors.
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401) {
                    console.log("You are not logged in. Redirecting you to the login page");
                    _this.router.navigateByUrl('/');
                }
            }
        });
    };
    AuthHttpInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular_2_local_storage_1.LocalStorageService,
            router_1.Router])
    ], AuthHttpInterceptor);
    return AuthHttpInterceptor;
}());
exports.AuthHttpInterceptor = AuthHttpInterceptor;
//# sourceMappingURL=auth-http-interceptor.service.js.map