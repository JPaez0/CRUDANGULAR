import { Component, Input, Output, EventEmitter, inject, signal } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {

  @Output() addToCart = new EventEmitter();
  @Input({required:true}) product!: Product;


  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;


  addToCartHandler(){
    this.addToCart.emit(this.product);
  }
}
