import { Product } from './../../types/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<Product> = new EventEmitter();

  ngOnInit() { }

  addToCart(product: Product, quantity: number) {
    product.cartQuantity = quantity
    this.onAddToCart.emit(product);
  }

  increaseQuantity(product: Product) {
    ++product.cartQuantity;
    this.updateQuantity(product)
  }
  decreaseQuantity(product: Product) {
    --product.cartQuantity;
    this.updateQuantity(product)
  }

  updateQuantity(product: Product) {
    this.onQuantityUpdate.emit(product)
  }

  cartValue(quantity: number, prod: Product) {
    if (quantity) {
      this.addToCart(prod, quantity)
    }
    else this.updateQuantity(prod)

  }
}


