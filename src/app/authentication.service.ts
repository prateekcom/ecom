import { idpassword } from './../idpassword';

import { Injectable } from '@angular/core';
import { BuiltinTypeName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  idpassword = idpassword;
  validate = false;
  currentuser:String;
  constructor() { }
  authenticate(name:any,password:any){
    for(var item of idpassword){      
     if( item.id == name && item.password ==password){
       this.validate = true;
       this.currentuser = name;
      }
    }
    return this.validate
  }
}
