import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from './../crud.service';
import { Router, ActivatedRoute } from '@angular/router';

import { NovoUsuario } from './../../home/signup/novo-usuario';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-crud-delete',
  templateUrl: './crud-delete.component.html',
  styleUrls: ['./crud-delete.component.css']
})
export class CrudDeleteComponent implements OnInit {

  modalRef!: BsModalRef;
  message?: string;

  user!: NovoUsuario;
  userDeleteForm!: FormGroup;

  constructor(private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readById(id!).subscribe(use => {
      this.user = use;
    })

    this.userDeleteForm = this.formbuilder.group({
      userName: ['', [Validators.required]],
      userNick: ['', [Validators.required]],
      userEmail: ['', [Validators.required]],
      userPassword: ['', [Validators.required]]
    })

    setTimeout(() => {
      this.preencherCampo()
    }, 200);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  deleteUser(): void {
    this.crudService.delete(this.user.id).subscribe(() => {
      alert('Usuário deletado com sucesso!');
      this.modalRef?.hide();
      this.message = 'Confirmed!';
    })

    this.router.navigate(['crud']);
  }

  cancel(): void {
    this.router.navigate(['crud']);
    this.modalRef?.hide();
  }

  preencherCampo() {
    this.userDeleteForm.get('userName')?.setValue(this.user?.userName);
    this.userDeleteForm.get('userNick')?.setValue(this.user?.userNick);
    this.userDeleteForm.get('userEmail')?.setValue(this.user?.userEmail);
    this.userDeleteForm.get('userPassword')?.setValue(this.user?.userPassword);
  }


}
