import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userName:String;
  isloggedin:Boolean;
  constructor(
    public authService:AuthenticationService,
  ) {}

  ngOnInit(): void {}

}
 