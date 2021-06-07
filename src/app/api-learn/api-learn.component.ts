import { HttpClientService } from './../service/http-client.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-api-learn',
  templateUrl: './api-learn.component.html',
  styleUrls: ['./api-learn.component.css']
})
export class ApiLearnComponent implements OnInit {
  name : string;
  constructor(
    private httpClientService : HttpClientService
  ) { }


  ngOnInit(): void {
    this.httpClientService.getname().subscribe(response => this.handleSuccessfulResponse(response))
  }
  handleSuccessfulResponse(response) {
    this.name = response;
  }

}
