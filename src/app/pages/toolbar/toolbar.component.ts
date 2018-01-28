import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../data-services/auth.service';


@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
