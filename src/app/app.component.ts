import { Component, OnInit } from '@angular/core';
import { ConfigService } from './core/config/config.service';

@Component({
    selector: 'tm-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    // Loading the configs right off the bat since we need it ASAP.
    constructor(private configService: ConfigService) { }

    ngOnInit() {

    }
}
