import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import { CartService } from 'src/app/Shared/Services/cart.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  user: any;
  orders: any[] = [];
  isDelivered: boolean = false;
  isPaid: boolean = false;
  constructor(
    private _CartService: CartService,
    private _AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this.user = this._AuthService.decodeUserData();
    this._CartService.getAllOrders(this.user.id).subscribe({
      next: (data) => {
        this.orders = data;
        this.orders.forEach((order) => {
          this.isDelivered = order.isDelivered;
          this.isPaid = order.isPaid;
        });
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
