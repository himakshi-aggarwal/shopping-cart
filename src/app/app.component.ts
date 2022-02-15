import { CartItem } from './../types/cart';
import { Component } from '@angular/core';
import { Cart, Product } from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  cart: Cart;

  constructor() {
    this.cart = {
      items: []
    } as Cart
  }

  ngOnInit() {
    this.products = [...PRODUCTS].map((product, index) => {
      product.id = index + 1;
      product.image = `/assets/images/items/${product.name.toLocaleLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    });
  }

  addToCart(product: Product) {
    let prod = this.products.find(item => item.id === product.id)

    let checkCart = this.findProduct(prod.id)
    if (checkCart)
      this.updateCart(product)
    else {
      let cartItem: CartItem = {
        id: prod.id,
        item: prod.name,
        quantity: prod.cartQuantity
      }
      this.cart.items.push(cartItem)
    }


  }

  findProduct(id: number): CartItem {
    return this.cart.items.find(prod => prod.id == id)
  }

  updateCart(product: Product) {
    let item = this.findProduct(product.id)
    if (product.cartQuantity) {
      item.quantity = product.cartQuantity
    } else
      this.cart.items = this.cart.items.filter(prod => prod.id != item.id)
  }
}


export const PRODUCTS: Product[] = [
  {
    name: "Cap",
    price: 5
  },
  {
    name: "HandBag",
    price: 30
  },
  {
    name: "Shirt",
    price: 35
  },
  {
    name: "Shoe",
    price: 50
  },
  {
    name: "Pant",
    price: 35
  },
  {
    name: "Slipper",
    price: 25
  }
];
