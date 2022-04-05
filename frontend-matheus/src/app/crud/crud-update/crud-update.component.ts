import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NovoUsuario } from 'src/app/home/signup/novo-usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from './../crud.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.component.html',
  styleUrls: ['./crud-update.component.css']
})
export class CrudUpdateComponent implements OnInit {

  user!: NovoUsuario;
  userUpdateForm!: FormGroup;
  model: any ={};

  constructor(private crudService: CrudService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readById(id!).subscribe(users => {
      this.user = users;

    });

    this.userUpdateForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userNick: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    })


    setTimeout(() => {
      this.preencherCampo()
     }, 100);
  }

  updateUser(user: any): void {
    const data = this.userUpdateForm.getRawValue()

    this.crudService.update(user.id, data).subscribe(() => {
      alert('Usuário atualizado!');
      this.router.navigate(['/crud']);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }

  preencherCampo() {
    this.userUpdateForm.get('userName')?.setValue(this.user?.userName);
    this.userUpdateForm.get('userNick')?.setValue(this.user?.userNick);
    this.userUpdateForm.get('userEmail')?.setValue(this.user?.userEmail);
    this.userUpdateForm.get('userPassword')?.setValue(this.user?.userPassword);
  }

}
