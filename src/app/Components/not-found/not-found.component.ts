import { Component } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private _AuthService: AuthService) {}
   checkLoggedIn():boolean {
   return this._AuthService.handlenotFound();
   }
}
