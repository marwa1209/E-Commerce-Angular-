import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IProduct } from 'src/app/Shared/Interfaces/iproduct';
import { CartService } from 'src/app/Shared/Services/cart.service';
import { GetProductsService } from 'src/app/Shared/Services/get-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    items: 1,
    nav: false,
  };
  product: IProduct = {} as IProduct;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _GetProductsService: GetProductsService,
    private _CartService: CartService
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let productId: any = params.get('id');
        this._GetProductsService.getProduct(productId).subscribe({
          next: (response) => {
            this.product = response.data;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }
  AddToCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
