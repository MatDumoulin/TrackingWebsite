import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import { LoggerService } from './logger/logger.service';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler.service';
import { AuthService } from '../data-services/auth/auth.service';
import { GoogleAuthService } from '../data-services/auth/google-auth/google-auth.service';
import { AuthGuardService } from '../data-services/auth/auth-guard.service';
import { RedirectConnectedGuardService } from '../data-services/auth/redirect-connected-guard.service';
import { CryptoService } from './crypto/crypto.service';
import { ConfigService } from './config/config.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatSnackBarModule // For the logger.
    ],
    providers: [
        LoggerService,
        AuthService,
        GoogleAuthService,
        AuthGuardService,
        RedirectConnectedGuardService,
        CryptoService,
        ConfigService,
        { provide: ErrorHandler, useClass: GlobalErrorHandler }
    ]
})
export class CoreModule { }
