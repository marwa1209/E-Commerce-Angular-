import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Shared/Interfaces/iproduct';
import { CartService } from 'src/app/Shared/Services/cart.service';
import { GetProductsService } from 'src/app/Shared/Services/get-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private _GetProductsService: GetProductsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    //get AllProducts
    this._GetProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.Products = response.data;
        
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
  Products: IProduct[] = [];
  term: string = '';
  AddToCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message);
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}

  
