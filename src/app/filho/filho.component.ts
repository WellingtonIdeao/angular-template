import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  private _name="";

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set name(name:string){
    this._name = ( name && name.trim()) || '<Nome em branco>';
  }

  get name(): string{ return this._name;}
}
