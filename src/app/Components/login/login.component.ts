import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  message: string = '';
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/),
    ]),
  });
  handleLogin(): void {
    if (this.LoginForm.valid) {
      this.isLoading = true;
      this._AuthService.setLogin(this.LoginForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            localStorage.setItem('token', response.token);
            this.isLoading = false;
            this._Router.navigate(['/home']);
            console.log(response)
          }
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.message = error.error.message;
        },
      });
    }
    else{
       this.LoginForm.markAllAsTouched;
    }
  }
}
