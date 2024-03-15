import { Data, Product } from './../../Shared/Interfaces/cart-item';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Shared/Interfaces/cart-item';
import { IProduct } from 'src/app/Shared/Interfaces/iproduct';
import { CartService } from 'src/app/Shared/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  CartItem: CartItem | null = null;
  constructor(private _CartService: CartService) {}
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: (data) => {
        this.CartItem = data;
        console.log(this.CartItem);
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
  removeItem(id: string): void {
    this._CartService.removeCartItem(id).subscribe({
      next: (data) => {
        this.CartItem = data;
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
  changeCount(id: string, count: number) {
    if (count > 0) {
      this._CartService.updateCart(id, count).subscribe({
        next: (data) => {
          this.CartItem = data;
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });
    }
  }
  clearCart() {
    this._CartService.clearCart().subscribe({
      next: (data) => {
        if (data.message == 'success') {
          this.CartItem = null;
        }
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
