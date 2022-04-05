import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //5E- criando a variavel a baixo (o loginForm que vai controlar o formulario, a valiação )
  loginForm!: FormGroup;

  //5F- injetar o AuthenticationService
  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    //5G- aqui faz a ligação do formulario no html e a validação do formulario (para isso foi utilizado o formcontrolName e os nomes tem que ser igual dos de baixo)
    //5G- para a mensagem de validação, vamos criar um component de mensagem
    this.loginForm = this.formBuilder.group({
      userNick: ['', Validators.required],
      userPassword: ['', Validators.required],
    });

  }


  login() {
    // recebendo os valores do input do usuario e senha e salvando no user_Nick e user_Password
    const user_Nick = this.loginForm.get('userNick')?.value;
    const user_Password = this.loginForm.get('userPassword')?.value;

    this.authService.authenticate(user_Nick).subscribe({
      next: (user) => {
        if (user.length == 0) { // se o tamanho da lista de usuario for 0, ou seja, usuario nao ta cadastrado a resposta é User not found!
          console.log("User not found!");
          alert('User not found!');
        } else
          if (user[0].userPassword == user_Password) { // para entrar nesse if deve ter um usuario cadastrado com o nome que foi colocado no input,
            // caso a senha desse usuario for igual a digitado no input ele é User logged!
            console.log("User logged!");
            this.router.navigate(['crud']);
          } else
            if (user[0].userPassword != user_Password) { // se tiver o usuario cadastrado e a senha for diferente, retornará Password invalid!
              console.log("Password invalid!");
              alert("Password invalid!");
            }
      },
      error: err => {
        alert("Error!");
        console.log(err);
      }
    })





    //5I- terminando o metodo login
    //   this.authService.authenticate(this.usuarioNick, this.senha).subscribe({
    //     next: (user) => {

    //       if(user)
    //       console.log("autenticado com sucesso meu 10!!!");

    //     },
    //     error: err => {
    //       alert("Usúario invalido");
    //       console.log(err);
    //     }
    //   })
    // }

  }
}
