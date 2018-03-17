import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

// Components
import { ClientCreateComponent } from '../client-create/client-create.component';
import { CreateRoomComponent } from '../create-room/create-room.component';
// Services
import { CurrentUserService } from '../../data-services/current-user/current-user.service';

@Component({
    selector: 'tm-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

    constructor(private currentUserService: CurrentUserService,
        private dialog: MatDialog,
        private router: Router) { }

    ngOnInit() {
    }

    openCreateClientDialog() {
        this.dialog.open(ClientCreateComponent).afterClosed()
            .subscribe(response => {
                // Ignoring when the user cancels zone search.
                if (response && response.hasJoined) {
                    this.currentUserService.room = response.room;
                    this.router.navigateByUrl("/track");
                }
            });
    }

    openCreateRoomDialog() {
        this.dialog.open(CreateRoomComponent).afterClosed()
            .subscribe(response => {
                console.log("Create room dialog response:", response);
                // Ignoring when the user cancels zone search.
                if (response && response.hasJoined) {
                    this.currentUserService.room = response.room;
                    this.router.navigateByUrl("/manage");
                }
            });
    }

}
