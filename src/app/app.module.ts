import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { RevistaComponent } from './revista/revista.component';
import { LivroComponent } from './livro/livro.component';
import { FilmeComponent } from './filme/filme.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLivrosComponent,
    RevistaComponent,
    LivroComponent,
    FilmeComponent,
    ProdutoComponent,
    ClickMeComponent,
    TextBoxComponent,
    ComponenteFilhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
