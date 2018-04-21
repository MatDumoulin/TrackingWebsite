"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
var auth_1 = require("angularfire2/auth");
var firebaseui_angular_1 = require("firebaseui-angular");
var service_worker_1 = require("@angular/service-worker");
var angular_material_module_1 = require("./angular-material.module");
var environment_1 = require("../environments/environment");
require("hammerjs"); // To support angular material gestures
var core_2 = require("@agm/core"); // Google Maps
var route_module_1 = require("./route.module");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var core_module_1 = require("./core/core.module");
var client_create_module_1 = require("./pages/client-create/client-create.module");
var create_room_module_1 = require("./pages/create-room/create-room.module");
// Services
var current_user_service_1 = require("./data-services/current-user/current-user.service");
var trackee_service_1 = require("./data-services/trackee/trackee.service");
var room_service_1 = require("./data-services/room/room.service");
// Components
var toolbar_component_1 = require("./pages/toolbar/toolbar.component");
var app_component_1 = require("./app.component");
var maps_component_1 = require("./controls/maps/maps.component");
var maps_manager_component_1 = require("./pages/maps-manager/maps-manager.component");
var home_page_component_1 = require("./pages/home-page/home-page.component");
var client_component_1 = require("./pages/client/client.component");
var user_home_component_1 = require("./pages/user-home/user-home.component");
var auth_http_interceptor_service_1 = require("./data-services/auth/auth-http-interceptor.service");
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
//# sourceMappingURL=app.module.js.map