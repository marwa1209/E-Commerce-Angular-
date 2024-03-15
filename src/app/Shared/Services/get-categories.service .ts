import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  Baseurl: string = `https://ecommerce.routemisr.com/api/v1`;
  constructor(private _HttpClient: HttpClient) {}
  getAllCategories(): Observable<any> {
    return this._HttpClient.get(`${this.Baseurl}/categories`);
  }
  getAllbrands(): Observable<any> {
    return this._HttpClient.get(`${this.Baseurl}/brands`);
  }
}
