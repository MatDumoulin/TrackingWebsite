"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var action_factory_service_1 = require("./store/actions/action-factory.service");
var auth_guard_service_1 = require("../data-services/auth/auth-guard.service");
var auth_service_1 = require("../data-services/auth/auth.service");
var config_service_1 = require("./config/config.service");
var crypto_service_1 = require("./crypto/crypto.service");
var global_error_handler_service_1 = require("./global-error-handler/global-error-handler.service");
var google_auth_service_1 = require("../data-services/auth/google-auth/google-auth.service");
var logger_service_1 = require("./logger/logger.service");
var redirect_connected_guard_service_1 = require("../data-services/auth/redirect-connected-guard.service");
var socket_service_1 = require("./socket/socket.service");
var store_service_1 = require("./store/store.service");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                material_1.MatSnackBarModule // For the logger.
            ],
            providers: [
                action_factory_service_1.ActionFactoryService,
                auth_guard_service_1.AuthGuardService,
                auth_service_1.AuthService,
                config_service_1.ConfigService,
                crypto_service_1.CryptoService,
                google_auth_service_1.GoogleAuthService,
                logger_service_1.LoggerService,
                redirect_connected_guard_service_1.RedirectConnectedGuardService,
                socket_service_1.SocketService,
                store_service_1.StoreService,
                { provide: core_1.ErrorHandler, useClass: global_error_handler_service_1.GlobalErrorHandler }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map