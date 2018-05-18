import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    // private authService: AuthService = null; // Got to load it async to prevent circular import.

    constructor(private localStorageService: LocalStorageService,
        private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Request are immutable. We must clone them to modify them.
        if (this.localStorageService.get("auth_token")) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.localStorageService.get("auth_token")}`
                }
            });
        }

        return next.handle(request).do(() => { }, (err: any) => {
            // Handling 401 unauthorized errors.
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    console.log("You are not logged in. Redirecting you to the login page");
                    this.router.navigateByUrl('/');
                }
            }
        });
    }
}
