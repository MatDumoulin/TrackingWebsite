import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../data-services/auth.service';
import { Trackee } from '../../models/trackee.model';
import { MatDialog } from '@angular/material';
import { ClientCreateComponent } from '../client-create/client-create.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
	clientInfo = new Trackee();
  interval: any;
  locations = [];

  constructor(public authService: AuthService, private dialog: MatDialog) { }

  ngOnInit() {
	    this.authService.getUserInfo().subscribe(info => {
	    	this.clientInfo = info[0];

        if(info.length === 0) {
          this.openCreateClientDialog();
        }
	    });
  }

  openCreateClientDialog() {
      this.dialog.open(ClientCreateComponent).afterClosed()
               .subscribe(response => {
                 // Ignoring when the user cancels zone search.
                 if(response && response.hasJoined) {

                      //this.authService.updateUser(this.clientInfo, {room: response.roomNumber});
                      this.startTracking();
                 }
               });
  }

  startTracking() {
    this.interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
          console.log("Tracking...");
          this.locations.push({lat: pos.coords.latitude, lon:pos.coords.longitude});
      });
    }, 5000);
  }

  cancelTracking() {
    console.log("Stopping");
    clearInterval(this.interval);
  }

}
