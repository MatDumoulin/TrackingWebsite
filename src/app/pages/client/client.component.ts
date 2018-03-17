import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/skip';
import { CurrentUserService } from '../../data-services/current-user/current-user.service';
import { Trackee } from '../../models/trackee.model';

@Component({
    selector: 'tm-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnDestroy {
    interval: any;
    isTracking: boolean = null;
    currentTrackee: Trackee = null;
    private hasOpenDialog = false;
    private userObs: Subscription;

    constructor(public currentUserService: CurrentUserService) { }

    ngOnInit() {
        console.log("Client!");
        this.userObs = this.currentUserService.userTrackee.subscribe(trackee => {
            this.currentTrackee = trackee;
        });
    }

    ngOnDestroy() {
        // Cleaning up the resources used.
        this.pauseTracking();
        this.userObs.unsubscribe();
    }

    startTracking() {
        this.isTracking = true;

        // An interval is only trigerred after X ms. We want to send the location right away.
        this.emitLocation();
        this.interval = setInterval(() => {
            this.emitLocation();
            console.log("Location changed!");
        }, 5000);
    }

    private emitLocation() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.currentUserService.updateLocation({ id: 5, lat: pos.coords.latitude, lon: pos.coords.longitude });
        });
    }

    private pauseTracking() {
        this.isTracking = false;
        clearInterval(this.interval);
    }

    private resumeTracking() {
        this.startTracking();
    }

    toggleTracking() {
        if (this.isTracking) {
            this.pauseTracking();
        }
        else {
            this.resumeTracking();
        }
    }

    getTrackingTooltip() {
        if (this.isTracking) {
            return "Pause tracking";
        }
        else {
            return "Resume tracking";
        }
    }

}
