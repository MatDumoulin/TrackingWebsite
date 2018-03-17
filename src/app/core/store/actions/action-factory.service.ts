import { Injectable } from '@angular/core';

import { BasicAction } from './basic-action';

@Injectable()
export class ActionFactoryService {

    constructor() { }

    createBasicAction(type: string, value: any) {
        return new BasicAction(type, value);
    }
}
