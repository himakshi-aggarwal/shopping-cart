import { Component, Input, OnInit } from '@angular/core';
import {Cart} from "../../types";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: Cart;

  constructor() {
  }
  ngOnInit(): void {
    console.log('in', this.cart)
  }


}
