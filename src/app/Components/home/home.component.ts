import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/Shared/Interfaces/category';
import { IProduct } from 'src/app/Shared/Interfaces/iproduct';
import { CartService } from 'src/app/Shared/Services/cart.service';
import { GetProductsService } from 'src/app/Shared/Services/get-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private _GetProductsService: GetProductsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  term: string = '';
  Categories: ICategory[] = [];
  //Home Slider
  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };
  //categories Slider
  categoriesSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };
  Products: IProduct[] = [];
  private subscription: Subscription | undefined;
  AddToCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message)
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
  ngOnInit(): void {
    //get AllProducts
    this.subscription = this._GetProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.Products = response.data;
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
    this._GetProductsService.getCategories().subscribe({
      next: (response) => {
        this.Categories = response.data;
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}  
