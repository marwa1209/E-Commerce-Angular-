import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  userdata: any;
  loogedIn: boolean = false;
  decodeUserData() {
    if (localStorage.getItem('token') !== null) {
      let incodeToken: any = localStorage.getItem('token');
      let decodeToken = jwtDecode(incodeToken);
      this.userdata = decodeToken;
      console.log(decodeToken);
    }
  }
  setRegister(userData: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      userData
    );
  }
  setLogin(userData: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signin`,
      userData
    );
  }
  logOut(): void {
    localStorage.removeItem('token');
    this._Router.navigate(['/login']);
  }
  handlenotFound():boolean{
    if(localStorage.getItem('token')!=null){
    this.loogedIn==true
    return true;
    }
    else{
      this.loogedIn==false
      return false;
    }
  }
}
