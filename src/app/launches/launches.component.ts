import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  addHidden:string = "isHidden";

  constructor() { }

  ngOnInit(): void {
  }

  videoPlay() {
    this.addHidden = "";
  }
  videoClose() {
    this.addHidden = "isHidden";
  }
}
