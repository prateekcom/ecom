import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items= [];
  bill=0
  
  constructor() { }
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  getbill(){
    for(let x in this.items){
      this.bill += this.items[x].price; 
    }
    return this.bill;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
}

