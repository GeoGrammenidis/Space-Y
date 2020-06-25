import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  classAdded:string = "";
  changedImage:string = "img1";
  changedImage2:string = "img1";
  changedImage3:string = "img1";
  firstTime:boolean = true;
  haveScrolled:boolean = false;
  addHidden:string = "isHidden";
  addHidden2:string = "isHidden";

  constructor() { }

  ngOnInit(): void {
  }

  attaching({ target, visible }: { target: Element; visible: boolean }){
    if(visible){
      if(!this.haveScrolled){
        this.classAdded="attached";
      }
    }
    else {
      this.classAdded="";
    }
  }

  changeImg(value:string){
    this.changedImage = value;
  }

  changeImg2(value:string){
    this.changedImage2 = value;
  }
  
  changeImg3(value:string){
    this.changedImage3 = value;
  }

  viewPortCheck({ target, visible }: { target: Element; visible: boolean }){
    if(visible){
      this.classAdded="";
      this.haveScrolled=true;
    }
    else {
      if(!this.firstTime){
        this.classAdded="attached";
        this.haveScrolled=false;
      }
      this.firstTime = false;
    }
  }

  videoPlay() {
    this.addHidden = "";
  }
  videoClose() {
    this.addHidden = "isHidden";
  }
  videoPlay2() {
    this.addHidden2 = "";
  }
  videoClose2() {
    this.addHidden2 = "isHidden";
  }
}
