import { Component, OnInit } from '@angular/core';
import { TrackeeService } from '../../data-services/trackee.service';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(public trackeeService: TrackeeService) {}

  ngOnInit() {
  }

}
