import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { product } from '../../../core/models/product';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductFiltersComponent } from "../../filters/product-filters/product-filters.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, RouterModule, ProductFiltersComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: product[] = [];
  //inject the productService
constructor(private productService:ProductService){}
ngOnInit() {
  this.displayProductList();
}
   // Display the product list
   displayProductList() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        console.log('Products fetched:', products);
        this.products = products;
       
      }
    });
  }
   // Handle filtered products emitted from the filter component
   onProductsFiltered(filteredProducts: product[]) {
    this.products = filteredProducts;
  }

}
