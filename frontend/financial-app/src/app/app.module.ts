import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';

import { CadastroService } from './cadastro/cadastro.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CadastroService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
