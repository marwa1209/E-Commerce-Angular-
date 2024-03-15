import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Shared/Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Egypt'];
  cartid: any = '';
  constructor(
    private _CartService: CartService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
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
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.cartid = param.get('id');
      },
    });
  }
  handleClick() {
    this._CartService.checkOut(this.cartid, this.CheckOut.value).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          window.open(response.session.url,'_self');
        }
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
