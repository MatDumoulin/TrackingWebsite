import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularMaterialModule } from './angular-material.module';
import { environment } from '../environments/environment';
import 'hammerjs'; // To support angular material gestures


// Services
import { TrackeeService } from './data-services/trackee.service';

// Components
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    AngularMaterialModule
  ],
  providers: [TrackeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

