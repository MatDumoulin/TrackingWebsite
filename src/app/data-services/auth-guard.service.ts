import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { LoggerService } from '../core/logger/logger.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private logger: LoggerService) {}

  canActivate() {

	  if(this.authService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}