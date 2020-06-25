import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-falcon9',
  templateUrl: './falcon9.component.html',
  styleUrls: ['./falcon9.component.css']
})
export class Falcon9Component implements OnInit{

  counter:number[] = [0, 0, 0];
  timer:any[] = [null, null, null];
  classAdded:string = "";
  changedImage:string = "img1";
  changedImage2:string = "img1";
  changedImage3:string = "img1";
  firstTime:boolean = true;
  haveScrolled:boolean = false;
  addHidden:string = "isHidden";

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.counter[1] = 53;
    this.counter[2] = 51;
    this.classAdded = "";
  }

  animateValue(i:number, start:number, end:number, duration:number) {
    var range:number = end - start;
    var current:number = start;
    var increment:number = end > start? 1 : -1;
    var stepTime:number = Math.abs(Math.floor(duration / range));
    this.timer[i] = setInterval(()=>{
        current += increment;
        this.counter[i] = current;
        stepTime *= 20
        if (current == end) {
            clearInterval(this.timer[i]);
        }
    }, stepTime);
  }

  counting({ target, visible }: { target: Element; visible: boolean }){
    if(visible){
      this.animateValue(0, 0, 85, 2000);
      this.animateValue(1, 0, 46, 2000);
      this.animateValue(2, 0, 32, 2000);
    }
    else {
      clearInterval(this.timer[0]);
      clearInterval(this.timer[1]);
      clearInterval(this.timer[2]);
    }
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
}
