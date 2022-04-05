import { Router } from '@angular/router';
import { CrudService } from './../crud.service';
import { Component, Input, OnInit } from '@angular/core';
import { NovoUsuario } from 'src/app/home/signup/novo-usuario';

@Component({
  selector: 'app-crud-read',
  templateUrl: './crud-read.component.html',
  styleUrls: ['./crud-read.component.css']
})
export class CrudReadComponent implements OnInit {

  @Input() public users!: NovoUsuario[];

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.crudService.read().subscribe(user => {
      this.users = user;
    })
  }

  update(user: any): void{
  this.router.navigate(['crud/update/', user.id]);
  }

  delete1(user: any): void{
    this.router.navigate(['crud/delete/', user.id]);
  }


}
