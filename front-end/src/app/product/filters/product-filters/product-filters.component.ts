import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() productsFiltered = new EventEmitter<product[]>();
  Category: string = '';
  filteredProducts: product[] = [];
  constructor(private productService:ProductService){}
  filterByCategory(category:Event){
    const target = event.target as HTMLSelectElement;
    this.Category = target.value;
    const filteredProducts=this.productService.filterProduct(this.Category);
    this.productsFiltered.emit(filteredProducts);

  }
}
