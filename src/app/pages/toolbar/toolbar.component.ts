import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { AuthService } from '../../data-services/auth/auth.service';
import { CurrentUserService } from '../../data-services/current-user/current-user.service';

declare const gapi: any;

@Component({
    selector: 'tm-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

    @Input()
    sidenav: MatSidenav;

    constructor(public authService: AuthService,
                public currentUserService: CurrentUserService,
                public router: Router) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        gapi.signin2.render('signin-with-google', {
            'scope': 'profile email',
            'width': 200,
            'height': 40,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': param => this.authService.signInWithGoogle(param)
          });
    }

}
