import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class ConfigService {
    private _config: Promise<Config>;

    constructor(private http: HttpClient) {
        this._config = this.fetchConfigs();
    }

    getConfig(): Promise<Config> {
        return this._config;
    }

    private fetchConfigs(): Promise<Config> {
        return new Promise<Config>( (resolve, reject) => {
            const url = `${environment.apiUrl}/configs`;
            this.http.get<Config>(url).subscribe( configs => resolve(configs),
                                                ( err => reject(err)));
        });
    }

}


// this class is only for typescript autocomplete and type check.
class Config {
    JWT_SALT: string;
    CLIENT_ID: string;
}
