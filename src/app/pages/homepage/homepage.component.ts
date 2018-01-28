import { Component, OnInit } from '@angular/core';
import { TrackeeService } from '../../data-services/trackee.service';
import { AuthService } from '../../data-services/auth.service';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  signInWithGoogle() {
  	  this.authService.signInWithGoogle();
  }

}
