import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  counter:number[] = [0, 0, 0];
  timer:any[] = [null, null, null];
  changedImage:string = "img1";

  constructor() { }

  ngOnInit(): void {
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
      this.animateValue(0, 0, 88, 2000);
      this.animateValue(1, 0, 53, 2000);
      this.animateValue(2, 0, 36, 2000);
    }
    else {
      clearInterval(this.timer[0]);
      clearInterval(this.timer[1]);
      clearInterval(this.timer[2]);
    }
  }

  changeImg(value:string){
    this.changedImage = value;
  }
}
