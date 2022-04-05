import { HomeModule } from './home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudModule } from './crud/crud.module';
import { CrudReadComponent } from './crud/crud-read/crud-read.component';
import { RouterModule } from '@angular/router';
import { VmessageComponent } from './home/vmessage/vmessage.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, //5G- importando o HttpClientModule, depois volte para login.component.ts
    //2B- vamos tirar daqui o homemodule e chamar ele nas rotas, depois vamos para app-routing.module.ts
    //HomeModule, //3A- importando o home.module para ser exibido app.component.html
    ReactiveFormsModule,

  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
