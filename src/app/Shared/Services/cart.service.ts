import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  headers: any = { token: localStorage.getItem('token') };
  constructor(private _HttpClient: HttpClient) {}
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: productId,
      },
      {
        headers: this.headers,
      }
    );
  }
  getUserCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: this.headers,
    });
  }
  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        headers: this.headers,
      }
    );
  }
  updateCart(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count: count,
      },
      {
        headers: this.headers,
      }
    );
  }
  clearCart(): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: this.headers,
      }
    );
  }
}
