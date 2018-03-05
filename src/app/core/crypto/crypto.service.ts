import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js/sha256';
import { environment } from './../../../environments/environment';

@Injectable()
export class CryptoService {

    constructor() { }

    encrypt(value: string): string {
        return crypto(value, environment.encryptionSalt).toString();
    }

    decrypt(encripted: string): string {
        return crypto(encripted, environment.encryptionSalt);
    }

}
