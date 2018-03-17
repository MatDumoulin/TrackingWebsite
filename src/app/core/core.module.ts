import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import { ActionFactoryService } from './store/actions/action-factory.service';
import { AuthGuardService } from '../data-services/auth/auth-guard.service';
import { AuthService } from '../data-services/auth/auth.service';
import { ConfigService } from './config/config.service';
import { CryptoService } from './crypto/crypto.service';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler.service';
import { GoogleAuthService } from '../data-services/auth/google-auth/google-auth.service';
import { LoggerService } from './logger/logger.service';
import { RedirectConnectedGuardService } from '../data-services/auth/redirect-connected-guard.service';
import { SocketService } from './socket/socket.service';
import { StoreService } from './store/store.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatSnackBarModule // For the logger.
    ],
    providers: [
        ActionFactoryService,
        AuthGuardService,
        AuthService,
        ConfigService,
        CryptoService,
        GoogleAuthService,
        LoggerService,
        RedirectConnectedGuardService,
        SocketService,
        StoreService,
        { provide: ErrorHandler, useClass: GlobalErrorHandler }
    ]
})
export class CoreModule { }
