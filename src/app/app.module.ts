import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLivrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
