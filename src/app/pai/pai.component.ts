import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  public paises = ["Brasil","Estados Unidos", "Japão", "Israel"];

  @Input() votado: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(votado: string):void{
    this.votado = votado;
  }



}
