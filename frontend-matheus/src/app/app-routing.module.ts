import { CrudDeleteComponent } from './crud/crud-delete/crud-delete.component';
import { CrudUpdateComponent } from './crud/crud-update/crud-update.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudCreateComponent } from "./crud/crud-create/crud-create.component";
import { CrudComponent } from "./crud/crud.component";

const routes: Routes = [
  { //3B- criando a rota
    path: '', // caso o usuario acessar o site sem nenhuma rota difinida ele vai acessar a pagina de home
    pathMatch: 'full', // esse atributo informa o angula para tirar os espaços em branco da rota
    redirectTo: 'home', // se acessar a rota em branco sera redirecionado para home
  },
  { //4B- configurando a rota home, depois vá para home.routing.module.ts
    path: 'home',
    // usando a tecnica do lazyloading para a rota home, assim que o usuario acessar essa home ela será carregada dinamicamente
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'crud/create',
    component: CrudCreateComponent,
  },
  {
    path: 'crud/update/:id',
    component: CrudUpdateComponent,
  },
  {
    path: 'crud/delete/:id',
    component: CrudDeleteComponent,
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
