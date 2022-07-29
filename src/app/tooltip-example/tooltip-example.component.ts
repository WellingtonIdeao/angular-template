import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.css']
})
export class TooltipExampleComponent implements OnInit {

  public visible = false;
  public mouse_pos = {x: 0, y: 0}; 

  constructor() { }

  ngOnInit(): void {
  }

  showTooltip(){
    this.visible = true;
  }
  
  hideTooltip(){
    this.visible = false;
  }

  changePositionTooltip(x: number, y: number){
    this.mouse_pos = {x, y};
  }


}
