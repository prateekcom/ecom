import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

  
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private cartService: CartService

  ) {}
  items = this.cartService.getItems();
  ngOnInit(): void {
  }


  
}

