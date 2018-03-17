import { Injectable, OnDestroy } from '@angular/core';
// Rxjs
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { SocketService } from '../socket/socket.service';
import { ActionFactoryService } from './actions/action-factory.service';
import { BasicAction } from './actions/basic-action';


@Injectable()
export class StoreService implements OnDestroy {
    roomSubject = new Subject<BasicAction>();
    private subscriptions: Subscription[] = [];

    constructor(private socketService: SocketService,
        private actionFactoryService: ActionFactoryService) {

        this.socketService.on("locationChanged").subscribe((value: string) => {
            const action = this.actionFactoryService.createBasicAction("locationChanged", value);
            this.roomSubject.next(action);
        });
    }

    ngOnDestroy() {
        // Cleaning up subscriptions.
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
        // Closing up the subject.
        this.roomSubject.complete();
    }

}
