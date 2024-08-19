import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { product } from '../../../core/models/product';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf,NgFor,RouterLink,RouterModule],
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
///////////////////////////
//addProducts
removeProductsList(){
this.productService.getProducts().subscribe({
  next:(products)=>{
    console.log('products removed:',products);
    this.products=products;
  }
})
}
//adding properties to list 
removeList(){
  this.productService.getProducts().subscribe({
    next:(products)=>{
      console.log('products refreshed:',products);
      this.products=products
    }
  })
}}