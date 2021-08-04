import { idpassword } from './../../idpassword';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginform
  responce:boolean
  
  
  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private authService:AuthenticationService
    ) {
      this.loginform = this.formBuilder.group({
        id:'',
        Password:''
      })  
    }

  ngOnInit(): void {}
  onSubmit(Customerdata){
    console.log("details are",Customerdata)
    if(this.authService.authenticate(Customerdata.id,Customerdata.Password)){
      
       this.router.navigate([''])
       this.responce=true;
       console.log(this.responce)
     }
     // onsubmit function passing 2 inputs directly 
     else {
        this.responce=false;
        console.log(this.responce)
        alert("incorrect Id/pass")
     }
  }
  
}
      