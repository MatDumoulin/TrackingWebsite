import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatIconModule,
        MatInputModule
       }                from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  exports: [
            MatButtonModule,
            MatCheckboxModule,
            MatDialogModule,
            MatSidenavModule,
            MatToolbarModule,
            MatSnackBarModule,
            MatTooltipModule,
            MatIconModule,
            MatInputModule,
            BrowserAnimationsModule
           ]
})
export class AngularMaterialModule { }