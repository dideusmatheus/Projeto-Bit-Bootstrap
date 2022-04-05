
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { //5B- criando a rota principal para a rota home, depois vamos criar a parte de login e seu template em login.component.html
    path: '',
    component: HomeComponent,
    //3C- criando a rota de llogin
    children: [ //3D- dentro de home tera sub rotas e uma delas é a de login, depois vamos fazer a autenticação e ir para authentication.ts
      {
        path: '', //3D- como a tela de login é a tela default e o default vai ser a de login
        component: LoginComponent,
      },
      //HORA ERRADA 1D- criando a rota do signup, depois vamos criar o template no signup.component.html
      {
        path: 'signup',
        component: SignupComponent
      },

    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
