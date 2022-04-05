import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NovoUsuario } from './../../home/signup/novo-usuario';
import { CrudService } from './../crud.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.css']
})
export class CrudCreateComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router) { }

  ngOnInit(): void {

    this.newUserForm = this.formbuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userNick: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]

    })
  }

  createUser() {
    const newUser = this.newUserForm.getRawValue() as NovoUsuario;

    if (this.newUserForm.valid) {
      this.crudService.create(newUser).subscribe(() => {
        alert('New user created!');
        this.router.navigate(['crud']);
      })
    } else {
      this.newUserForm.markAsTouched();
    }
  }

  //metodo cancel para retornar na pagina de exibição dos dados
  cancel() {
    this.router.navigate(['crud']);
  }

}
