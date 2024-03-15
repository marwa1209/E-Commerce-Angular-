import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Shared/Interfaces/iproduct';
import { CategoriesService } from 'src/app/Shared/Services/get-categories.service ';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private _CategoriesService: CategoriesService) {}
  Categories: Category[] = [];
  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: (response) => {
        this.Categories = response.data;
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
