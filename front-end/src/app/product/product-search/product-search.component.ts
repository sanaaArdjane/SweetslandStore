import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { product } from '../../core/models/product';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [NgIf,FormsModule,NgFor],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent {
  filteredProducts: product[] = [];
  errorMessage: string = '';

  constructor(private productService: ProductService) {}

  // Method to search products based on the keyword
  searchProducts(form: NgForm) {
    if (form.valid) {
      const keyword = form.value.keyword;
      this.filteredProducts = this.productService.searchProducts(keyword);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Please enter a valid keyword';
    }
  }
}
