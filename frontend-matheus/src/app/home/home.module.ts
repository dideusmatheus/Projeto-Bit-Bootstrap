import { VmessageComponent } from './vmessage/vmessage.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SignupComponent } from './signup/signup.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent, //declara o LoginComponent
    VmessageComponent, //declarando o VmessageComponent
    SignupComponent, //declarando o SignupComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule, //4C- importar o ReactiveFormsModule e depois vamos para login.component.html
  ],
  exports: [
    HomeComponent, //2A- expondo o home component, depois vamos para app.module
    VmessageComponent
  ]
})
export class HomeModule { }
