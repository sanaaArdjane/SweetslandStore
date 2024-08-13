import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { product } from '../../../core/models/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss'
})
export class ProductFiltersComponent {
  products: product[] = [];
  Category: string = '';
  constructor(private productService:ProductService){}
  filterByCategory(category: string){
    this.Category = category;
    return this.productService.filterProduct(category);

  }
}
