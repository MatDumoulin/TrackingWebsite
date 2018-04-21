webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/angular-material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var AngularMaterialModule = (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                material_1.MatDialogModule,
                material_1.MatSidenavModule,
                material_1.MatToolbarModule,
                material_1.MatSnackBarModule,
                material_1.MatTooltipModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                animations_1.BrowserAnimationsModule
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());
exports.AngularMaterialModule = AngularMaterialModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.website-container {\r\n    min-width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n.main-container {\r\n\twidth: 100%;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n::ng-deep .mat-sidenav-content {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1 ;\r\n        -ms-flex-positive: 1 ;\r\n            flex-grow: 1 ;\r\n}\r\n\r\n.sidenav-title {\r\n    text-align: center;\r\n}\r\n\r\n.sidenav {\r\n    width: 300px;\r\n}\r\n\r\n.stretch-width {\r\n    width: 100%;\r\n}\r\n\r\nmat-list-item mat-icon {\r\n    margin-right: 10px;\r\n}\r\n\r\n:host ::ng-deep router-outlet + * {\r\n   \twidth: 100%;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<tm-toolbar [sidenav]=\"sidenav\"></tm-toolbar>\r\n\r\n<mat-sidenav-container class=\"website-container\">\r\n\r\n    <mat-sidenav class=\"sidenav\" #sidenav>\r\n        <mat-nav-list>\r\n            <mat-list-item [routerLink]=\"['/track']\" (click)=\"sidenav.close()\">\r\n                <mat-icon color=\"primary\" matListIcon>home</mat-icon>Join Room\r\n            </mat-list-item>\r\n            <mat-list-item [routerLink]=\"['/manage']\" (click)=\"sidenav.close()\">\r\n                <mat-icon color=\"primary\" matListIcon>library_books</mat-icon>Create Room\r\n            </mat-list-item>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <div class=\"main-container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var config_service_1 = __webpack_require__("../../../../../src/app/core/config/config.service.ts");
var AppComponent = (function () {
    // Loading the configs right off the bat since we need it ASAP.
    function AppComponent(configService) {
        this.configService = configService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'tm-app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [config_service_1.ConfigService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var angularfire2_1 = __webpack_require__("../../../../angularfire2/index.js");
var database_1 = __webpack_require__("../../../../angularfire2/database/index.js");
var auth_1 = __webpack_require__("../../../../angularfire2/auth/index.js");
var firebaseui_angular_1 = __webpack_require__("../../../../firebaseui-angular/index.js");
var service_worker_1 = __webpack_require__("../../../service-worker/esm5/service-worker.js");
var angular_material_module_1 = __webpack_require__("../../../../../src/app/angular-material.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../hammerjs/hammer.js"); // To support angular material gestures
var core_2 = __webpack_require__("../../../../@agm/core/index.js"); // Google Maps
var route_module_1 = __webpack_require__("../../../../../src/app/route.module.ts");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var core_module_1 = __webpack_require__("../../../../../src/app/core/core.module.ts");
var client_create_module_1 = __webpack_require__("../../../../../src/app/pages/client-create/client-create.module.ts");
var create_room_module_1 = __webpack_require__("../../../../../src/app/pages/create-room/create-room.module.ts");
// Services
var current_user_service_1 = __webpack_require__("../../../../../src/app/data-services/current-user/current-user.service.ts");
var trackee_service_1 = __webpack_require__("../../../../../src/app/data-services/trackee/trackee.service.ts");
var room_service_1 = __webpack_require__("../../../../../src/app/data-services/room/room.service.ts");
// Components
var toolbar_component_1 = __webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var maps_component_1 = __webpack_require__("../../../../../src/app/controls/maps/maps.component.ts");
var maps_manager_component_1 = __webpack_require__("../../../../../src/app/pages/maps-manager/maps-manager.component.ts");
var home_page_component_1 = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
var client_component_1 = __webpack_require__("../../../../../src/app/pages/client/client.component.ts");
var user_home_component_1 = __webpack_require__("../../../../../src/app/pages/user-home/user-home.component.ts");
var auth_http_interceptor_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/auth-http-interceptor.service.ts");
/* To render the authentication buttons */
var firebaseUiAuthConfig = {
    providers: [
        firebaseui_angular_1.AuthProvider.Google
    ],
    method: firebaseui_angular_1.AuthMethods.Popup,
    credentialHelper: firebaseui_angular_1.CredentialHelper.AccountChooser
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                toolbar_component_1.ToolbarComponent,
                maps_component_1.MapsComponent,
                maps_manager_component_1.MapsManagerComponent,
                home_page_component_1.HomePageComponent,
                client_component_1.ClientComponent,
                user_home_component_1.UserHomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                database_1.AngularFireDatabaseModule,
                auth_1.AngularFireAuthModule,
                firebaseui_angular_1.FirebaseUIModule.forRoot(firebaseUiAuthConfig),
                environment_1.environment.production ? service_worker_1.ServiceWorkerModule.register('/ngsw-worker.js') : [],
                angular_material_module_1.AngularMaterialModule,
                route_module_1.AppRoutingModule,
                core_module_1.CoreModule,
                client_create_module_1.ClientCreateModule,
                create_room_module_1.CreateRoomModule,
                // Google maps
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAEuO9LAxQuSLlUWdW9-jAoA5_W5Xryvss',
                    libraries: ["places"]
                }),
                angular_2_local_storage_1.LocalStorageModule.withConfig({
                    prefix: 'tm-',
                    storageType: 'localStorage'
                })
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_http_interceptor_service_1.AuthHttpInterceptor, multi: true },
                current_user_service_1.CurrentUserService,
                trackee_service_1.TrackeeService,
                room_service_1.RoomService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/controls/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  maps works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/maps/maps.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = __decorate([
        core_1.Component({
            selector: 'app-maps',
            template: __webpack_require__("../../../../../src/app/controls/maps/maps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/controls/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());
exports.MapsComponent = MapsComponent;


/***/ }),

/***/ "../../../../../src/app/core/config/config.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
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


/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var action_factory_service_1 = __webpack_require__("../../../../../src/app/core/store/actions/action-factory.service.ts");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/auth-guard.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/auth.service.ts");
var config_service_1 = __webpack_require__("../../../../../src/app/core/config/config.service.ts");
var crypto_service_1 = __webpack_require__("../../../../../src/app/core/crypto/crypto.service.ts");
var global_error_handler_service_1 = __webpack_require__("../../../../../src/app/core/global-error-handler/global-error-handler.service.ts");
var google_auth_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/google-auth/google-auth.service.ts");
var logger_service_1 = __webpack_require__("../../../../../src/app/core/logger/logger.service.ts");
var redirect_connected_guard_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/redirect-connected-guard.service.ts");
var socket_service_1 = __webpack_require__("../../../../../src/app/core/socket/socket.service.ts");
var store_service_1 = __webpack_require__("../../../../../src/app/core/store/store.service.ts");
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


/***/ }),

/***/ "../../../../../src/app/core/crypto/crypto.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var crypto = __webpack_require__("../../../../crypto-js/sha256.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var CryptoService = (function () {
    function CryptoService() {
    }
    CryptoService.prototype.encrypt = function (value) {
        return crypto(value, environment_1.environment.encryptionSalt).toString();
    };
    CryptoService.prototype.decrypt = function (encripted) {
        return crypto(encripted, environment_1.environment.encryptionSalt);
    };
    CryptoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CryptoService);
    return CryptoService;
}());
exports.CryptoService = CryptoService;


/***/ }),

/***/ "../../../../../src/app/core/global-error-handler/global-error-handler.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var GlobalErrorHandler = (function () {
    function GlobalErrorHandler() {
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        console.error(error);
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    };
    GlobalErrorHandler = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());
exports.GlobalErrorHandler = GlobalErrorHandler;


/***/ }),

/***/ "../../../../../src/app/core/logger/logger.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var LoggerService = (function () {
    function LoggerService(snackBar) {
        this.snackBar = snackBar;
        this.infoDuration = 2000;
        this.errorDuration = 4000;
    }
    LoggerService.prototype.info = function (message) {
        this.snackBar.open(message, 'Ok', { duration: this.infoDuration });
    };
    LoggerService.prototype.error = function (message, action) {
        this.snackBar.open("An error occurred: " + message, action, { duration: this.errorDuration });
    };
    LoggerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [material_1.MatSnackBar])
    ], LoggerService);
    return LoggerService;
}());
exports.LoggerService = LoggerService;


/***/ }),

/***/ "../../../../../src/app/core/socket/socket.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
// Socket IO
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
// Rxjs
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var SocketService = (function () {
    function SocketService(zone) {
        this.zone = zone;
    }
    SocketService.prototype.connect = function (userAuthId) {
        var _this = this;
        console.log("Trying to connect!");
        this.socket = io(environment_1.environment.serverUrl, { reconnection: false });
        // Once connected,
        this.socket.once('connect', function () {
            // Send the user id to the server.
            // This id will be used to identify the client's socket.
            if (userAuthId) {
                _this.socket.emit('join', userAuthId);
            }
        });
    };
    SocketService.prototype.emit = function (eventName, value) {
        this.socket.emit(eventName, value);
        // this.socket.id
    };
    SocketService.prototype.on = function (eventName) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on(eventName, function (value) { return _this.zone.run(function () { return observer.next(value); }); });
        });
    };
    SocketService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;


/***/ }),

/***/ "../../../../../src/app/core/store/actions/action-factory.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var basic_action_1 = __webpack_require__("../../../../../src/app/core/store/actions/basic-action.ts");
var ActionFactoryService = (function () {
    function ActionFactoryService() {
    }
    ActionFactoryService.prototype.createBasicAction = function (type, value) {
        return new basic_action_1.BasicAction(type, value);
    };
    ActionFactoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ActionFactoryService);
    return ActionFactoryService;
}());
exports.ActionFactoryService = ActionFactoryService;


/***/ }),

/***/ "../../../../../src/app/core/store/actions/basic-action.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BasicAction = (function () {
    function BasicAction(type, value) {
        this._type = type;
        this._value = value;
    }
    Object.defineProperty(BasicAction.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicAction.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return BasicAction;
}());
exports.BasicAction = BasicAction;


/***/ }),

/***/ "../../../../../src/app/core/store/store.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// Rxjs
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var socket_service_1 = __webpack_require__("../../../../../src/app/core/socket/socket.service.ts");
var action_factory_service_1 = __webpack_require__("../../../../../src/app/core/store/actions/action-factory.service.ts");
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


/***/ }),

/***/ "../../../../../src/app/data-services/auth/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/auth.service.ts");
var logger_service_1 = __webpack_require__("../../../../../src/app/core/logger/logger.service.ts");
var AuthGuardService = (function () {
    function AuthGuardService(router, authService, logger) {
        this.router = router;
        this.authService = authService;
        this.logger = logger;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            logger_service_1.LoggerService])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "../../../../../src/app/data-services/auth/auth-http-interceptor.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
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


/***/ }),

/***/ "../../../../../src/app/data-services/auth/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
// src/app/services/auth.service.ts
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var angular_2_local_storage_1 = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// Services
var current_user_service_1 = __webpack_require__("../../../../../src/app/data-services/current-user/current-user.service.ts");
var google_auth_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/google-auth/google-auth.service.ts");
var AuthService = (function () {
    function AuthService(router, currentUserService, googleAuthService, zone, localStorageService) {
        this.router = router;
        this.currentUserService = currentUserService;
        this.googleAuthService = googleAuthService;
        this.zone = zone;
        this.localStorageService = localStorageService;
        this.hasLoaded = false;
        this.restoreFromSession();
    }
    AuthService.prototype.getAuthStateChangedObservable = function () {
        return this.authState;
    };
    AuthService.prototype.signInWithGoogle = function (googleUser) {
        var _this = this;
        // We have to run this code inside of an Angular zone since the Google api callback does not run in Angular.
        this.zone.run(function () {
            _this.googleAuthService.onSignedIn(googleUser).subscribe(function (response) {
                // If the user has changed with this sign in. This can occur if the user was restored from local storage.
                if (!_this.currentUserService.user || !response.user || _this.currentUserService.user.authId !== response.user.authId) {
                    _this.currentUserService.user = response.user;
                }
                _this.setSession(response);
                _this.router.navigate(['/home']);
            });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.currentUserService.getUser().value !== null || this.localStorageService.get("user") !== null;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.googleAuthService.disconnect().then(function () {
            // We have to run this code inside of an Angular zone since the Google api callback does not run in Angular.
            _this.zone.run(function () {
                _this.currentUserService.user = null;
                _this.clearSession();
                _this.router.navigateByUrl('/login');
            });
        });
        /*this._firebaseDatabase.database.goOffline();
        this._firebaseAuth.auth.signOut()
            .then((res) => this.router.navigate(['/home']));*/
    };
    AuthService.prototype.setSession = function (authResult) {
        var expiresAt = moment().add(authResult.tokenExpiresIn, 'second');
        this.localStorageService.set("user", authResult.user);
        this.localStorageService.set('auth_token', authResult.token);
        this.localStorageService.set("token_expires_at", JSON.stringify(expiresAt.valueOf()));
    };
    AuthService.prototype.restoreFromSession = function () {
        var currentUser = this.localStorageService.get("user");
        if (currentUser) {
            this.currentUserService.user = currentUser;
        }
    };
    AuthService.prototype.clearSession = function () {
        this.localStorageService.remove("user");
        this.localStorageService.remove('auth_token');
        this.localStorageService.remove('token_expires_at');
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            current_user_service_1.CurrentUserService,
            google_auth_service_1.GoogleAuthService,
            core_1.NgZone,
            angular_2_local_storage_1.LocalStorageService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/data-services/auth/google-auth/google-auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var logger_service_1 = __webpack_require__("../../../../../src/app/core/logger/logger.service.ts");
var config_service_1 = __webpack_require__("../../../../../src/app/core/config/config.service.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
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


/***/ }),

/***/ "../../../../../src/app/data-services/auth/redirect-connected-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/auth.service.ts");
var RedirectConnectedGuardService = (function () {
    function RedirectConnectedGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    RedirectConnectedGuardService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/home');
            return false;
        }
        else {
            return true;
        }
    };
    RedirectConnectedGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], RedirectConnectedGuardService);
    return RedirectConnectedGuardService;
}());
exports.RedirectConnectedGuardService = RedirectConnectedGuardService;


/***/ }),

/***/ "../../../../../src/app/data-services/current-user/current-user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
// Services
var socket_service_1 = __webpack_require__("../../../../../src/app/core/socket/socket.service.ts");
var trackee_service_1 = __webpack_require__("../../../../../src/app/data-services/trackee/trackee.service.ts");
var CurrentUserService = (function () {
    function CurrentUserService(socketService, trackeeService) {
        this.socketService = socketService;
        this.trackeeService = trackeeService;
        this._user = new BehaviorSubject_1.BehaviorSubject(null);
        this._userTrackee = new BehaviorSubject_1.BehaviorSubject(null);
    }
    Object.defineProperty(CurrentUserService.prototype, "user", {
        get: function () {
            return this._user.getValue();
        },
        set: function (currentUser) {
            this._user.next(currentUser);
            // The user is set to null when he disconnects.
            if (this._user.value) {
                this.socketService.connect(this._user.value.authId);
                /* this._latestTrackeeSubscription = this.trackeeService.fetchTrackee(this.user.authId).subscribe(trackee => {
                    // If the trackee exists, emit it.
                    if (trackee) {
                        this._userTrackee.next(trackee);
                    }
                    // Otherwise, create a new trackee for the user.
                    else {
                        // this.trackeeService.addTrackee(this.user.authId, {name: this.user.fullName});  TODO
                    }
                }); */
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentUserService.prototype, "room", {
        // Gets the user infos if they are already in the database. These infos
        // are coming from the trackee table.
        /* get userTrackee(): BehaviorSubject<Trackee> {
            return this._userTrackee;
        }*/
        get: function () {
            return this._room;
        },
        set: function (room) {
            this._room = room;
        },
        enumerable: true,
        configurable: true
    });
    CurrentUserService.prototype.getUser = function () {
        return this._user;
    };
    CurrentUserService.prototype.updateLocation = function (newLocation) {
        // this.trackeeService.updateTrackee(this.user.authId, changes).then(res => console.log(res));
        this.socketService.emit("location", newLocation);
    };
    CurrentUserService.prototype.initWithLocalStorage = function () {
    };
    CurrentUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [socket_service_1.SocketService,
            trackee_service_1.TrackeeService])
    ], CurrentUserService);
    return CurrentUserService;
}());
exports.CurrentUserService = CurrentUserService;


/***/ }),

/***/ "../../../../../src/app/data-services/room/room.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
/* import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import * as uuid from 'uuid/v1';*/
__webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
// Services
var crypto_service_1 = __webpack_require__("../../../../../src/app/core/crypto/crypto.service.ts");
var socket_service_1 = __webpack_require__("../../../../../src/app/core/socket/socket.service.ts");
// Models
var room_model_1 = __webpack_require__("../../../../../src/app/models/room.model.ts");
var RoomService = (function () {
    function RoomService(cryptoService, http, socketService) {
        this.cryptoService = cryptoService;
        this.http = http;
        this.socketService = socketService;
        this.ROOM_PATH = 'rooms';
    }
    RoomService.prototype.createRoom = function (name, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var url = environment_1.environment.apiUrl + "/room";
            // Setting up the room to add.
            var encryptedPassword = _this.cryptoService.encrypt(password);
            var room = new room_model_1.Room(name, encryptedPassword);
            _this.http.post(url, room).take(1).subscribe(function (result) { return resolve(result); }, function (error) {
                console.log(error);
                reject();
            });
        });
        return promise;
    };
    RoomService.prototype.deleteRoom = function (name) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var url = environment_1.environment.apiUrl + "/room/" + name;
            _this.http.delete(url).take(1).subscribe(function (result) { return resolve(result); }, function (error) {
                console.log(error);
                reject();
            });
        });
        return promise;
    };
    /**
     * Tries to connect the current user to the given room.
     * @param name The name of the room to join.
     * @param password The password of the room to join.
     * @returns If connection succeeds, the room information is returned.
     *          Otherwise, an error object is sent with the 'errorMessage' and 'isRelatedToCredentials' params.
     */
    RoomService.prototype.joinRoom = function (name, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var url = environment_1.environment.apiUrl + "/room/" + name;
            var encryptedPassword = _this.cryptoService.encrypt(password);
            _this.http.post(url, { name: name, password: encryptedPassword }).take(1).subscribe(function (result) { return resolve(result); }, function (errorResponse) {
                if (errorResponse.status === 404 || errorResponse.status === 403) {
                    reject({ isRelatedToCredentials: true });
                }
                else if (errorResponse.status === 401) {
                    reject({ errorMessage: "You must be logged in to join a room.", isRelatedToCredentials: false });
                }
                else {
                    console.log(errorResponse);
                    reject({ errorMessage: "An error occurred.", isRelatedToCredentials: false });
                }
            });
        });
        return promise;
    };
    RoomService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [crypto_service_1.CryptoService,
            http_1.HttpClient,
            socket_service_1.SocketService])
    ], RoomService);
    return RoomService;
}());
exports.RoomService = RoomService;


/***/ }),

/***/ "../../../../../src/app/data-services/trackee/trackee.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var database_1 = __webpack_require__("../../../../angularfire2/database/index.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var TrackeeService = (function () {
    function TrackeeService(db) {
        this.db = db;
        this.TRACKEE_PATH = '/trackees';
        this.userRoom = -10000;
        this.trackeeObservable = Observable_1.Observable.of([]);
    }
    TrackeeService.prototype.getObservable = function () {
        return this.trackeeObservable;
    };
    TrackeeService.prototype.fetchTrackeesByRoom = function (room) {
        return this.db.list(this.TRACKEE_PATH, function (trackee) { return trackee.orderByChild('room').equalTo(room); })
            .valueChanges();
    };
    TrackeeService.prototype.fetchTrackee = function (id) {
        return this.db.object(this.TRACKEE_PATH + "/" + id).valueChanges();
    };
    TrackeeService.prototype.updateTrackee = function (trackeeId, changes) {
        return this.db.object(this.TRACKEE_PATH + "/" + trackeeId).update(changes);
    };
    TrackeeService.prototype.addTrackee = function (trackeeId, trackee) {
        this.db.object(this.TRACKEE_PATH + "/" + trackeeId).set(trackee);
    };
    TrackeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], TrackeeService);
    return TrackeeService;
}());
exports.TrackeeService = TrackeeService;


/***/ }),

/***/ "../../../../../src/app/models/room.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Room = (function () {
    function Room(name, password) {
        this.name = name;
        this.password = password;
        this.owner = null;
    }
    return Room;
}());
exports.Room = Room;


/***/ }),

/***/ "../../../../../src/app/pages/client-create/client-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.description {\r\n    color: gray;\r\n    width: 100%;\r\n}\r\n\r\n.zone-input {\r\n\twidth: 300px;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n\t.modal-container {\r\n\t\twidth: 500px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 501px) {\r\n\t.modal-container {\r\n\t\twidth: 100vw;\r\n\t}\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/client-create/client-create.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"modal-container\" #form=\"ngForm\" autocomplete=\"off\">\r\n\t<div>\r\n\t\t<h1 mat-dialog-title>Enter the room you want to join</h1>\r\n\t\t<p class=\"description\">The manager of this room will be able to track your position once you accept. The geo localisation will only occur when this site is opened and you have joined a room.</p>\r\n\t</div>\r\n\r\n\t<div class=\"full-width\" mat-dialog-content>\r\n\t\t<mat-form-field class=\"zone-input\">\r\n\t\t\t<input matInput placeholder=\"Enter room name\" [(ngModel)]=\"currentRoom\"  name=\"roomInput\" #roomInput=\"ngModel\" required>\r\n\t\t\t<mat-error *ngIf=\"!roomInput.valid\">You must enter a room name</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"zone-input\">\r\n\t\t\t<input type=\"password\" matInput placeholder=\"Room password\" [(ngModel)]=\"password\"  name=\"roomPassword\" #roomPassword=\"ngModel\" required>\r\n\t\t\t<mat-error *ngIf=\"!roomPassword.valid\">You must enter a password</mat-error>\r\n\t\t</mat-form-field>\r\n\t</div>\r\n\r\n\t<div mat-dialog-actions align=\"end\">\r\n\t\t<button mat-button color=\"primary\" (click)=\"joinRoom()\" [disabled]=\"!form.valid\">Join</button>\r\n\t</div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/client-create/client-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
// Services
var logger_service_1 = __webpack_require__("../../../../../src/app/core/logger/logger.service.ts");
var room_service_1 = __webpack_require__("../../../../../src/app/data-services/room/room.service.ts");
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
            template: __webpack_require__("../../../../../src/app/pages/client-create/client-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/client-create/client-create.component.css")]
        }),
        __metadata("design:paramtypes", [room_service_1.RoomService,
            logger_service_1.LoggerService,
            material_1.MatDialogRef])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());
exports.ClientCreateComponent = ClientCreateComponent;


/***/ }),

/***/ "../../../../../src/app/pages/client-create/client-create.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var angular2_text_mask_1 = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
var client_create_component_1 = __webpack_require__("../../../../../src/app/pages/client-create/client-create.component.ts");
var room_service_1 = __webpack_require__("../../../../../src/app/data-services/room/room.service.ts");
var core_module_1 = __webpack_require__("../../../../../src/app/core/core.module.ts");
var ClientCreateModule = (function () {
    function ClientCreateModule() {
    }
    ClientCreateModule = __decorate([
        core_1.NgModule({
            declarations: [client_create_component_1.ClientCreateComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                core_module_1.CoreModule,
                material_1.MatButtonModule,
                material_1.MatDialogModule,
                material_1.MatTooltipModule,
                material_1.MatInputModule,
                angular2_text_mask_1.TextMaskModule
            ],
            providers: [room_service_1.RoomService],
            entryComponents: [client_create_component_1.ClientCreateComponent],
            exports: [client_create_component_1.ClientCreateComponent]
        })
    ], ClientCreateModule);
    return ClientCreateModule;
}());
exports.ClientCreateModule = ClientCreateModule;


/***/ }),

/***/ "../../../../../src/app/pages/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".client-container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n}\r\n\r\n.fill-space {\r\n\t-webkit-box-flex: 2;\r\n\t    -ms-flex-positive: 2;\r\n\t        flex-grow: 2;\r\n}\r\n\r\n.footer {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"client-container\">\r\n\t<div class=\"fill-space\">\r\n\t\t<span *ngIf=\"currentTrackee\">Transmitting data!</span>\r\n    </div>\r\n\r\n\t<div class=\"footer\">\r\n        <button mat-fab color=\"primary\" (click)=\"toggleTracking()\" *ngIf=\"isTracking !== null\" [matTooltip]=\"getTrackingTooltip()\">\r\n            <mat-icon *ngIf=\"isTracking\">pause</mat-icon>\r\n            <mat-icon *ngIf=\"!isTracking\">wifi</mat-icon>\r\n        </button>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/client/client.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/skip.js");
var current_user_service_1 = __webpack_require__("../../../../../src/app/data-services/current-user/current-user.service.ts");
var ClientComponent = (function () {
    function ClientComponent(currentUserService) {
        this.currentUserService = currentUserService;
        this.isTracking = false;
        this.currentTrackee = null;
        this.hasOpenDialog = false;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Client!");
        this.userObs = this.currentUserService.getUser().subscribe(function (userProfile) {
            _this.currentTrackee = userProfile;
        });
        this.startTracking();
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        // Cleaning up the resources used.
        this.pauseTracking();
        this.userObs.unsubscribe();
    };
    ClientComponent.prototype.startTracking = function () {
        var _this = this;
        this.isTracking = true;
        // An interval is only trigerred after X ms. We want to send the location right away.
        this.emitLocation();
        this.interval = setInterval(function () {
            _this.emitLocation();
            console.log("Location changed!");
        }, 5000);
    };
    ClientComponent.prototype.emitLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.currentUserService.updateLocation({ id: _this.currentTrackee.authId, lat: pos.coords.latitude, lon: pos.coords.longitude });
        });
    };
    ClientComponent.prototype.pauseTracking = function () {
        this.isTracking = false;
        clearInterval(this.interval);
    };
    ClientComponent.prototype.resumeTracking = function () {
        this.startTracking();
    };
    ClientComponent.prototype.toggleTracking = function () {
        if (this.isTracking) {
            this.pauseTracking();
        }
        else {
            this.resumeTracking();
        }
    };
    ClientComponent.prototype.getTrackingTooltip = function () {
        if (this.isTracking) {
            return "Pause tracking";
        }
        else {
            return "Resume tracking";
        }
    };
    ClientComponent = __decorate([
        core_1.Component({
            selector: 'tm-client',
            template: __webpack_require__("../../../../../src/app/pages/client/client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [current_user_service_1.CurrentUserService])
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;


/***/ }),

/***/ "../../../../../src/app/pages/create-room/create-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.description {\r\n    color: gray;\r\n    width: 100%;\r\n}\r\n\r\n.zone-input {\r\n\twidth: 300px;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n\t.modal-container {\r\n\t\twidth: 500px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 501px) {\r\n\t.modal-container {\r\n\t\twidth: 100vw;\r\n\t}\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/create-room/create-room.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"modal-container\" #form=\"ngForm\" autocomplete=\"off\">\n\t<div>\n\t\t<h1 mat-dialog-title>Enter the information of the room to create</h1>\n\t\t<p class=\"description\">Any user will be able to join the room if they enter these credentials.</p>\n\t</div>\n\n\t<div class=\"full-width\" mat-dialog-content>\n\t\t<mat-form-field class=\"zone-input\">\n\t\t\t<input matInput placeholder=\"Enter room name\" [(ngModel)]=\"room.name\"  name=\"roomInput\" #roomInput=\"ngModel\" required>\n\t\t\t<mat-error *ngIf=\"!roomInput.valid\">You must enter a room name</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"zone-input\">\n\t\t\t<input type=\"password\" matInput placeholder=\"Room password\" [(ngModel)]=\"room.password\"  name=\"roomPassword\" #roomPassword=\"ngModel\" required>\n\t\t\t<mat-error *ngIf=\"!roomPassword.valid\">You must enter a password</mat-error>\n\t\t</mat-form-field>\n\t</div>\n\n\t<div mat-dialog-actions align=\"end\">\n\t\t<button mat-button color=\"primary\" (click)=\"createRoom()\" [disabled]=\"!form.valid\">Join</button>\n\t</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/pages/create-room/create-room.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
// Models
var room_model_1 = __webpack_require__("../../../../../src/app/models/room.model.ts");
// Services
var logger_service_1 = __webpack_require__("../../../../../src/app/core/logger/logger.service.ts");
var room_service_1 = __webpack_require__("../../../../../src/app/data-services/room/room.service.ts");
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
            template: __webpack_require__("../../../../../src/app/pages/create-room/create-room.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/create-room/create-room.component.css")]
        }),
        __metadata("design:paramtypes", [room_service_1.RoomService,
            logger_service_1.LoggerService,
            material_1.MatDialogRef])
    ], CreateRoomComponent);
    return CreateRoomComponent;
}());
exports.CreateRoomComponent = CreateRoomComponent;


/***/ }),

/***/ "../../../../../src/app/pages/create-room/create-room.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var angular2_text_mask_1 = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
var create_room_component_1 = __webpack_require__("../../../../../src/app/pages/create-room/create-room.component.ts");
var room_service_1 = __webpack_require__("../../../../../src/app/data-services/room/room.service.ts");
var core_module_1 = __webpack_require__("../../../../../src/app/core/core.module.ts");
var CreateRoomModule = (function () {
    function CreateRoomModule() {
    }
    CreateRoomModule = __decorate([
        core_1.NgModule({
            declarations: [create_room_component_1.CreateRoomComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                core_module_1.CoreModule,
                material_1.MatButtonModule,
                material_1.MatDialogModule,
                material_1.MatTooltipModule,
                material_1.MatInputModule,
                angular2_text_mask_1.TextMaskModule
            ],
            providers: [room_service_1.RoomService],
            entryComponents: [create_room_component_1.CreateRoomComponent],
            exports: [create_room_component_1.CreateRoomComponent]
        })
    ], CreateRoomModule);
    return CreateRoomModule;
}());
exports.CreateRoomModule = CreateRoomModule;


/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.container {\r\n    height: 300px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.action-buttons a {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .container {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .container {\r\n        width: 100%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to the Geo Tracking Manager</h1>\r\n<p>Please, log in</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'tm-home-page',
            template: __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;


/***/ }),

/***/ "../../../../../src/app/pages/maps-manager/maps-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-container {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.map {\r\n\theight: 80vh;\r\n\twidth: 100%;\r\n}\r\n\r\n.search-bar {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpadding: 0 10px 0 10px;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    margin: 10px;\r\n}\r\n\r\n.search-field, .search-field input {\r\n\twidth: 300px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/maps-manager/maps-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container mat-elevation-z5\">\r\n\t<div class=\"search-bar mat-elevation-z8\">\r\n\t\t<mat-form-field class=\"search-field\">\r\n\t\t\t<input matInput placeholder=\"Search for destination\" [formControl]=\"searchControl\" #search>\r\n\t\t\t<mat-hint>Press 'Enter' to search</mat-hint>\r\n\t\t</mat-form-field>\r\n\t\t<!--<button mat-icon-button matTooltip=\"Search\" (click)=\"searchDestination()\">\r\n\t\t\t <mat-icon aria-label=\"Search for destination\">search</mat-icon>\r\n\t\t</button>-->\r\n\t</div>\r\n\r\n\t<agm-map class=\"map\" [latitude]=\"45.497011\" [longitude]=\"-74.02066\" (mapClick)=\"updateDestination($event)\">\r\n\r\n\t    <agm-marker *ngFor=\"let marker of markers; let i = index\" \r\n\t  \t\t\t    [latitude]=\"marker.lat\" \r\n\t  \t\t\t    [longitude]=\"marker.long\" \r\n\t  \t\t\t    [label]=\"getLetter(i)\"\r\n\t  \t\t\t    (markerClick)=\"onMarkerClick(info)\"\r\n\t  \t\t\t    openInfoWindow=\"false\">\r\n\r\n\t\t\t<agm-info-window #info>\r\n\t\t      <strong>{{marker.name}}</strong>\r\n\t\t    </agm-info-window>\r\n\t    </agm-marker>\r\n\r\n\t</agm-map>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/maps-manager/maps-manager.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
// Services
var store_service_1 = __webpack_require__("../../../../../src/app/core/store/store.service.ts");
var current_user_service_1 = __webpack_require__("../../../../../src/app/data-services/current-user/current-user.service.ts");
var trackee_service_1 = __webpack_require__("../../../../../src/app/data-services/trackee/trackee.service.ts");
var room_service_1 = __webpack_require__("../../../../../src/app/data-services/room/room.service.ts");
var Marker = (function () {
    function Marker(long, lat, isTrackee, name) {
        this.long = long;
        this.lat = lat;
        this.isTrackee = isTrackee;
        this.name = name;
    }
    return Marker;
}());
var MapsManagerComponent = (function () {
    function MapsManagerComponent(trackeeService, mapsAPILoader, ngZone, currentUserService, roomService, storeService) {
        this.trackeeService = trackeeService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.currentUserService = currentUserService;
        this.roomService = roomService;
        this.storeService = storeService;
        this.destination = {
            latitude: null,
            longitude: null,
            zoom: 12,
            location: null,
            indexInMarkers: 0
        };
        this.subscriptions = [];
    }
    MapsManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // create search FormControl
        this.searchControl = new forms_1.FormControl();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            _this.geocoder = new google.maps.Geocoder();
            _this.autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = _this.autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude, address and zoom
                    _this.destination.latitude = place.geometry.location.lat();
                    _this.destination.longitude = place.geometry.location.lng();
                    _this.destination.location = place.formatted_address;
                    _this.destination.zoom = 12;
                    _this.updateDestinationInMap();
                });
            });
        });
        this.subscriptions.push(this.storeService.roomSubject.subscribe(function (action) {
            _this.updatePositionOfUser(action);
        }));
    };
    MapsManagerComponent.prototype.ngOnDestroy = function () {
        this.roomService.deleteRoom(this.currentUserService.room.name);
        // Cleaning up streams.
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    // Not working
    MapsManagerComponent.prototype.onMarkerClick = function (infoWindow) {
        if (infoWindow) {
            if (infoWindow.isOpen) {
                infoWindow.close();
                infoWindow.isOpen = false;
            }
            else {
                infoWindow.open();
                infoWindow.isOpen = true; // Somehow, it is not updating automatically.
            }
        }
    };
    // Gets the letter equivalent for the number. 0 => A, 1 => B, ...
    MapsManagerComponent.prototype.getLetter = function (n) {
        return String.fromCharCode(65 + n);
    };
    MapsManagerComponent.prototype.updateDestination = function ($event) {
        var _this = this;
        this.destination.latitude = $event.coords.lat;
        this.destination.longitude = $event.coords.lng;
        var latlon = new google.maps.LatLng(this.destination.latitude, this.destination.longitude);
        var request = {
            latLng: latlon
        };
        this.geocoder.geocode(request, function (results, status) {
            _this.ngZone.run(function () {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0] != null) {
                        _this.destination.location = results[0].formatted_address;
                    }
                }
                _this.updateDestinationInMap();
            });
        });
    };
    MapsManagerComponent.prototype.updatePositionOfUser = function (updateAction) {
        console.log("Position changed:", updateAction);
    };
    MapsManagerComponent.prototype.updateMarkerList = function (trackees) {
        this.markers = [];
        for (var _i = 0, trackees_1 = trackees; _i < trackees_1.length; _i++) {
            var trackee = trackees_1[_i];
            this.markers.push(new Marker(trackee.lon, trackee.lat, true, trackee.name));
        }
        this.destination.indexInMarkers = this.markers.length;
        this.markers.push(new Marker(this.destination.longitude, this.destination.latitude, false, this.destination.location));
    };
    MapsManagerComponent.prototype.updateDestinationInMap = function () {
        this.searchControl.setValue(this.destination.location);
        this.markers[this.destination.indexInMarkers] = new Marker(this.destination.longitude, this.destination.latitude, false, this.destination.location);
    };
    MapsManagerComponent.prototype.getMarkerIcon = function (marker) {
        return marker.isTrackee ? "../assets/blue-dot.png" : null;
    };
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], MapsManagerComponent.prototype, "searchElementRef", void 0);
    MapsManagerComponent = __decorate([
        core_1.Component({
            selector: 'tm-maps-manager',
            template: __webpack_require__("../../../../../src/app/pages/maps-manager/maps-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/maps-manager/maps-manager.component.css")]
        }),
        __metadata("design:paramtypes", [trackee_service_1.TrackeeService,
            core_2.MapsAPILoader,
            core_1.NgZone,
            current_user_service_1.CurrentUserService,
            room_service_1.RoomService,
            store_service_1.StoreService])
    ], MapsManagerComponent);
    return MapsManagerComponent;
}());
exports.MapsManagerComponent = MapsManagerComponent;


/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.section {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.section :not(:last-child) {\r\n    margin-right: 10px;\r\n}\r\n\r\nh1 {\r\n\tcursor: pointer;\r\n\tfont-size: inherit;\r\n\t-webkit-transition: font-size ease 0.5s;\r\n\ttransition: font-size ease 0.5s;\r\n}\r\n\r\nh1:focus {\r\n\toutline: none;\r\n}\r\n\r\nh1:hover {\r\n\tfont-size: 1.05em;\r\n}\r\n\r\n.profile-picture {\r\n\tborder-radius: 10px;\r\n\twidth: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n\t<mat-toolbar-row class=\"toolbar\">\r\n        <div class=\"section\">\r\n            <button mat-icon-button *ngIf=\"router.url !== '/login'\" (click)=\"sidenav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n            <h1 [routerLink]=\"['/home']\">Tracking Manager</h1>\r\n        </div>\r\n\r\n\r\n\t\t<button mat-button *ngIf=\"authService.isLoggedIn() && currentUser\" (click)=\"authService.logout()\">\r\n\t\t\t<img class=\"profile-picture\" [src]=\"currentUser.profilePicture\">\r\n\t\t\t{{ currentUser.fullName }}\r\n        </button>\r\n\r\n        <!--<firebase-ui *ngIf=\"!authService.isLoggedIn()\"></firebase-ui>-->\r\n        <div id=\"signin-with-google\" [hidden]=\"authService.isLoggedIn()\"></div>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/auth.service.ts");
var current_user_service_1 = __webpack_require__("../../../../../src/app/data-services/current-user/current-user.service.ts");
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
            template: __webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            current_user_service_1.CurrentUserService,
            router_1.Router])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;


/***/ }),

/***/ "../../../../../src/app/pages/user-home/user-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    height: 300px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.action-buttons button {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .container {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .container {\r\n        width: 100%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user-home/user-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mat-elevation-z8\">\n    <h1>Hi there, what can I do for you?</h1>\n    <div class=\"action-buttons\">\n        <button color=\"primary\" (click)=\"openCreateClientDialog()\" mat-raised-button>Join a room</button>\n        <button color=\"primary\" (click)=\"openCreateRoomDialog()\" mat-raised-button>Create a room</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/user-home/user-home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// Components
var client_create_component_1 = __webpack_require__("../../../../../src/app/pages/client-create/client-create.component.ts");
var create_room_component_1 = __webpack_require__("../../../../../src/app/pages/create-room/create-room.component.ts");
// Services
var current_user_service_1 = __webpack_require__("../../../../../src/app/data-services/current-user/current-user.service.ts");
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
            template: __webpack_require__("../../../../../src/app/pages/user-home/user-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/user-home/user-home.component.css")]
        }),
        __metadata("design:paramtypes", [current_user_service_1.CurrentUserService,
            material_1.MatDialog,
            router_1.Router])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;


/***/ }),

/***/ "../../../../../src/app/route.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/auth-guard.service.ts");
var redirect_connected_guard_service_1 = __webpack_require__("../../../../../src/app/data-services/auth/redirect-connected-guard.service.ts");
var home_page_component_1 = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
var user_home_component_1 = __webpack_require__("../../../../../src/app/pages/user-home/user-home.component.ts");
var maps_manager_component_1 = __webpack_require__("../../../../../src/app/pages/maps-manager/maps-manager.component.ts");
var client_component_1 = __webpack_require__("../../../../../src/app/pages/client/client.component.ts");
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


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    serverUrl: "http://localhost:4200",
    apiUrl: "http://localhost:4200/api",
    encryptionSalt: "h$!mdsa4$!78%&94i;^`¸",
    firebase: {
        apiKey: "AIzaSyAEuO9LAxQuSLlUWdW9-jAoA5_W5Xryvss",
        authDomain: "tracking-22229.firebaseapp.com",
        databaseURL: "https://tracking-22229.firebaseio.com",
        projectId: "tracking-22229",
        storageBucket: "gs://tracking-22229.appspot.com/",
        messagingSenderId: "912799812928"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map