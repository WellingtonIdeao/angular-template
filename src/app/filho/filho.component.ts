import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit, OnChanges {

  @Input() pais: string|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges):void{
    for (let change in changes){
      this.pais = (changes[change].currentValue && changes[change].currentValue.trim()) || '<País não informado>';
    }
  }

}
