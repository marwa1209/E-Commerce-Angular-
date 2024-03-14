import { Component } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
})
export class NavBlankComponent {
  constructor(private _AuthService: AuthService) {}
  logOut(): void {
    this._AuthService.logOut();
  }
}
