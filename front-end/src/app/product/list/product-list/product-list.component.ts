import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { product } from '../../../core/models/product';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf,NgFor,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: product[] = [];
  //inject the productService
constructor(private productService:ProductService){}
   // Display the product list
   displayProductList() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      }
    });
  }
}
