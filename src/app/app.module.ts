import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

// Services
import { TrackeeService } from './data-services/trackee.service';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [TrackeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

