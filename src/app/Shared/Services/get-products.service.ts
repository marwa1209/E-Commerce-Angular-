import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  Baseurl:string=`https://ecommerce.routemisr.com/api/v1`;
  constructor(private _HttpClient: HttpClient) {}
  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${this.Baseurl}/products`);
  }
  getProduct(id: string): Observable<any> {
    return this._HttpClient.get(`${this.Baseurl}/products/${id}`);
  }
  getCategories(): Observable<any> {
    return this._HttpClient.get(`${this.Baseurl}/categories`);
  }
}
