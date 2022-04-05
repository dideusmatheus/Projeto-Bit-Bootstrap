import { SignupService } from './signup.service';

import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserExistService {

  constructor(private signUpService: SignupService) {
  }

  //validador assincrono (NAO retorna null ou um objeto js) retorna um observable
  checkUserExist() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userNick =>{
          return this.signUpService.userExist(userNick);
        }
        ))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first());
    }
  }

}
