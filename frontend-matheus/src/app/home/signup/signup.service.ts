import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL= 'http://localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) {
  }

  // metodo para verificar se o usuario ja existe PAREI AQUIII!!!!!!
   userExist(userNick: string){
     return this.httpClient.get(`${API_URL}/usuarios/?userNick=${userNick}`);
   }
}


