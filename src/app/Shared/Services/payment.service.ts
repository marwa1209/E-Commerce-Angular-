import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 userId:any= localStorage.getItem('token');
  constructor(private _HttpClient: HttpClient) { }
  getuserOrders(): Observable<any>{
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${this.userId}`
    );
  }
}
