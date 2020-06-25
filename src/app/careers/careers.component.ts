import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  addHidden:string = "isHidden";

  constructor() { }

  ngOnInit(): void {
  }

  videoPlay(): void {
    this.addHidden = "";
  }
  videoClose(): void {
    this.addHidden = "isHidden";
  }
  refreshPage(): void {
    window.location.reload();
  }
}
