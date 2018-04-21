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
var logger_service_1 = require("../../../core/logger/logger.service");
var config_service_1 = require("../../../core/config/config.service");
var environment_1 = require("./../../../../environments/environment");
var GoogleAuthService = (function () {
    function GoogleAuthService(http, configService, loggerService) {
        this.http = http;
        this.configService = configService;
        this.loggerService = loggerService;
        this.googleInit("912799812928-c9unjtu48ir2c2tg1dkod61rseoevlus.apps.googleusercontent.com");
        /*this.configService.getConfig()
            .then(config => this.googleInit(config.CLIENT_ID))
            .catch(err => this.loggerService.error("Unable to load the configurations of the app.", "Ok"));*/
    }
    GoogleAuthService.prototype.googleInit = function (clientId) {
        gapi.load('auth2', function () {
            var auth = gapi.auth2.init({
                client_id: clientId,
                cookie_policy: 'single_host_origin',
                scope: 'profile email'
            });
        });
    };
    GoogleAuthService.prototype.onSignedIn = function (googleUser) {
        // We need to get a jwt from the server in order to access the database.
        var url = environment_1.environment.apiUrl + "/login";
        var body = { googleToken: googleUser.getAuthResponse().id_token };
        return this.http.post(url, body);
    };
    GoogleAuthService.prototype.disconnect = function () {
        return gapi.auth2.getAuthInstance().disconnect();
    };
    GoogleAuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            config_service_1.ConfigService,
            logger_service_1.LoggerService])
    ], GoogleAuthService);
    return GoogleAuthService;
}());
exports.GoogleAuthService = GoogleAuthService;
//# sourceMappingURL=google-auth.service.js.map