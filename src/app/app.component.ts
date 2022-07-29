import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'template';
  public exibirConteudo = false;
  public nomeUsuario = "Guga Ideão"

  ngOnInit(){
    console.log("ngOnInit: Componente iniciado");  
  }
  public toggleConteudo(){
    this.exibirConteudo = !this.exibirConteudo;
  }

  public changeUser(){
    this.nomeUsuario = "Wellington Ideão"
  }


}
