import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  constructor(
    private httpClient:HttpClient
  ) { }
  getname(){
    console.log("calling string");
    return this.httpClient.get('http://localhost:8080/hello?name=prateek',{responseType : 'text'});
  }
}
