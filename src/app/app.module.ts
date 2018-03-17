import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {
    AuthMethods,
    AuthProvider,
    AuthProviderWithCustomConfig,
    CredentialHelper,
    FirebaseUIAuthConfig,
    FirebaseUIModule
  } from 'firebaseui-angular';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularMaterialModule } from './angular-material.module';
import { environment } from '../environments/environment';
import 'hammerjs'; // To support angular material gestures
import { AgmCoreModule } from '@agm/core'; // Google Maps
import { AppRoutingModule } from "./route.module";
import { LocalStorageModule } from 'angular-2-local-storage';
import { CoreModule } from './core/core.module';
import { ClientCreateModule } from './pages/client-create/client-create.module';
import { CreateRoomModule } from './pages/create-room/create-room.module';


// Services
import { DataServiceManager } from './data-services/data-service-manager/data-service-manager.service';
import { CurrentUserService } from './data-services/current-user/current-user.service';
import { TrackeeService } from './data-services/trackee/trackee.service';
import { RoomService } from './data-services/room/room.service';


// Components
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { MapsComponent } from './controls/maps/maps.component';
import { MapsManagerComponent } from './pages/maps-manager/maps-manager.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientComponent } from './pages/client/client.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { AuthHttpInterceptor } from './data-services/auth/auth-http-interceptor.service';


/* To render the authentication buttons */
const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
    providers: [
        AuthProvider.Google
    ],
    method: AuthMethods.Popup,
    credentialHelper: CredentialHelper.AccountChooser
};


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MapsComponent,
    MapsManagerComponent,
    HomePageComponent,
    ClientComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    AngularMaterialModule,
    AppRoutingModule,
    CoreModule,
    ClientCreateModule,
    CreateRoomModule,
    // Google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEuO9LAxQuSLlUWdW9-jAoA5_W5Xryvss',
      libraries: ["places"]
    }),
    LocalStorageModule.withConfig({
        prefix: 'tm-',
        storageType: 'localStorage'
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true},
    DataServiceManager,
    CurrentUserService,
    TrackeeService,
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

