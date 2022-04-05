import { CrudUpdateModule } from './crud-update/crud-update.module';
import { VmessageComponent } from './../home/vmessage/vmessage.component';
import { HomeModule } from './../home/home.module';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CrudComponent } from './crud.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudReadComponent } from './crud-read/crud-read.component';
import { CrudCreateComponent } from './crud-create/crud-create.component';
import { CrudMessageComponent } from './crud-message/crud-message.component';
import { CrudUpdateComponent } from './crud-update/crud-update.component';
import { CrudDeleteComponent } from './crud-delete/crud-delete.component';



@NgModule({
  declarations: [
    CrudComponent,
    CrudReadComponent,
    CrudCreateComponent,
    CrudMessageComponent,
    CrudUpdateComponent,
    CrudDeleteComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CrudUpdateModule
  ],
  exports: []
})
export class CrudModule { }
