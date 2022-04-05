import { UserExistService } from './user-exist.validator.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private userExist: UserExistService) { }

  ngOnInit(): void {
    // '' - valor padrao do validador, [] - validador ssincrono, validador assincrono
    this.signupForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userNick: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  signup(){
    //desse jeito (const newUser = this.signupForm.getRawValue() as NovoUsuario;) é mais facil pegar todos as informações do formulario de uma vez,
    //melhor do que fazer a linha de baixo (ela geralmente é usada paara pegar poucos dados no formulario)
     //const user_Name = this.signupForm.get('userName')?.value;
    const newUser = this.signupForm.getRawValue() as NovoUsuario;

    this.authService.register(newUser).subscribe({
      next: () =>{
        alert('User registered!');
        this.router.navigate(['']);
      },
      error: err =>{
        alert('Register Error!')
      console.log(err);
      }
    });

  }

}
