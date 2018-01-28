import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularMaterialModule } from './angular-material.module';
import { environment } from '../environments/environment';
import 'hammerjs'; // To support angular material gestures
import { AgmCoreModule } from '@agm/core'; // Google Maps
import { AppRoutingModule } from "./route.module";


// Services
import { TrackeeService } from './data-services/trackee.service';

// Components
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { MapsComponent } from './controls/maps/maps.component';
import { MapsManagerComponent } from './pages/maps-manager/maps-manager.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MapsComponent,
    MapsManagerComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    AngularMaterialModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEuO9LAxQuSLlUWdW9-jAoA5_W5Xryvss',
      libraries: ["places"]
    })
  ],
  providers: [TrackeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

