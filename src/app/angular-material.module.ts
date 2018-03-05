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
    MatInputModule,
    MatListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        MatListModule,
        BrowserAnimationsModule
    ]
})
export class AngularMaterialModule { }
