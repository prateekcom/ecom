import { idpassword } from './../idpassword';

import { Injectable } from '@angular/core';
import { BuiltinTypeName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  idpassword = idpassword;
  validate = false;
  constructor() { }
  authenticate(name:any,password:any){
    for(var item of idpassword){      
     if( item.id == name && item.password ==password){
       this.validate = true;
      }
    }
    return this.validate
  }
}
