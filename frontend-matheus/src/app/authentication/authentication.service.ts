import { NovoUsuario } from './../home/signup/novo-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API= 'http://localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //4A- SERVIÇO DE AUTENTICAÇÃO
  //4A- injetando o httpclient
  constructor(private httpClient: HttpClient) { }

  //4B- criando o metodo para autenticar o usuario, depois vamos começar a fazer a verificação no login mas primeiro vamos para o home.module
  authenticate(user: string): Observable<any>{
    return this.httpClient.get<any>(`${API}/usuarios/?userNick=${user}`);
  }

  // metodo para cadastrar usuario
  register(novoUsuario: NovoUsuario): Observable<NovoUsuario>{
    return this.httpClient.post<NovoUsuario>(`${API}/usuarios`, novoUsuario);
  }

}
