import { Component, OnInit } from '@angular/core';
import { Ibrand } from 'src/app/Shared/Interfaces/ibrand';
import { CategoriesService } from 'src/app/Shared/Services/get-categories.service ';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  constructor(private _CategoriesService: CategoriesService) {}
  brands: Ibrand[] = [];
  ngOnInit(): void {
    this._CategoriesService.getAllbrands().subscribe({
      next: (response) => {
        this.brands = response.data;
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
