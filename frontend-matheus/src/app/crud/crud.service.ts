import { NovoUsuario } from './../home/signup/novo-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


const API= 'http://localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(private httpClient: HttpClient) { }

  //metodo create para o component crud-create
  create(user: NovoUsuario): Observable<NovoUsuario>{
    return this.httpClient.post<NovoUsuario>(`${API}/usuarios`, user);
  }

  //metodo read para o component crud-read
  read(): Observable<NovoUsuario[]>{
    return this.httpClient.get<NovoUsuario[]>(`${API}/usuarios`);
  }

  //metodo readById
  readById(id: string): Observable<NovoUsuario>{
    return this.httpClient.get<NovoUsuario>(`${API}/usuarios/${id}`);
  }

  //metodo update
  update(userId: any, data: NovoUsuario){
    return this.httpClient.put(`${API}/usuarios/${userId}`, data)
      .pipe(map((res: any)=> {
        return res
      }))
  }
  //metodo delete
  delete(id: number): Observable<NovoUsuario>{
    return this.httpClient.delete<NovoUsuario>(`${API}/usuarios/${id}`);
  }

}
