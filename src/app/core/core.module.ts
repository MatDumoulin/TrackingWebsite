import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material';
import { LoggerService } from './logger/logger.service';
import { AuthService } from '../data-services/auth.service';
import { AuthGuardService } from '../data-services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule // For the logger.
  ],
  providers: [LoggerService,
              AuthService,
              AuthGuardService]
})
export class CoreModule { }