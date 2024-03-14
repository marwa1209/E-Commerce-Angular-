import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/Shared/Services/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston','Egypt'];
  constructor(private _PaymentService: PaymentService) {}
  CheckOut: FormGroup = new FormGroup({
    details: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    city: new FormControl(['']),
  });
  ngOnInit(): void {
    this._PaymentService.getuserOrders().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
