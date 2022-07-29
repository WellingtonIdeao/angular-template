import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  public paises = ["Brasil","Estados Unidos", "Japão", "Israel"];

  @Input() votado: string = "";

  @ViewChild(FilhoComponent, {static: false})
  private filhoComponent: FilhoComponent | any;
  
  public name:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(votado: string):void{
    this.votado = votado;
  }

  ngAfterViewInit(){
    setTimeout(()=> this.name = this.filhoComponent.name, 0);
  }






}
