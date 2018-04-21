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
var environment_1 = require("./../../../environments/environment");
var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
        this._config = this.fetchConfigs();
    }
    ConfigService.prototype.getConfig = function () {
        return this._config;
    };
    ConfigService.prototype.fetchConfigs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = environment_1.environment.apiUrl + "/configs";
            _this.http.get(url).subscribe(function (configs) { return resolve(configs); }, (function (err) { return reject(err); }));
        });
    };
    ConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
// this class is only for typescript autocomplete and type check.
var Config = (function () {
    function Config() {
    }
    return Config;
}());
//# sourceMappingURL=config.service.js.map