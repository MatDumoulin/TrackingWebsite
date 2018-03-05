import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggerService } from '../../../core/logger/logger.service';
import { ConfigService } from '../../../core/config/config.service';
import { environment } from './../../../../environments/environment';

declare const gapi: any;

@Injectable()
export class GoogleAuthService {

    constructor(private http: HttpClient,
        private configService: ConfigService,
        private loggerService: LoggerService) {

        this.googleInit("912799812928-c9unjtu48ir2c2tg1dkod61rseoevlus.apps.googleusercontent.com");
        /*this.configService.getConfig()
            .then(config => this.googleInit(config.CLIENT_ID))
            .catch(err => this.loggerService.error("Unable to load the configurations of the app.", "Ok"));*/
    }

    googleInit(clientId: string) {
        gapi.load('auth2', () => {
            const auth = gapi.auth2.init({
                client_id: clientId,
                cookie_policy: 'single_host_origin',
                scope: 'profile email'
            });
        });
    }

    onSignedIn(googleUser: any) {
        // We need to get a jwt from the server in order to access the database.
        const url = `${environment.apiUrl}/login`;
        const body = { googleToken: googleUser.getAuthResponse().id_token };
        return this.http.post(url, body);
    }

    disconnect(): Promise<any> {
        return gapi.auth2.getAuthInstance().disconnect();
    }
}
