import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  addHidden:string = "isHidden";

  constructor() { }

  ngOnInit(): void {
  }


  closeMenu1 ($event) {
    if($event.target.getAttribute('closing')=="yes")
      this.addHidden = "isHidden";
  }
  closeMenu2 () {
    this.addHidden = "isHidden";
  }
  openMenu () {
    this.addHidden = "";
  }
}
