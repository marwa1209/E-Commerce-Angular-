import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: IProduct[], term: string): IProduct[] {
    return products.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase()));
  }
}
