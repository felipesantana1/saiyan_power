import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css'],
})
export class HumanComponent implements OnInit {

  @Input() power;

  text = function(){
    if(this.power >= 50000){
      return "THE ONE!";
    }else if (this.power >= 20000){
      return "Superlative!";
    }else if (this.power >= 9000){
      return "Over 9000"
    }else{
      return null;
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
