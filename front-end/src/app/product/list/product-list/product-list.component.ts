import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { product } from '../../../core/models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: product[] = [];
  //inject the productService
constructor(private productService:ProductService){}
  //display the productList
displayProductList(){
  return this.productService.getProducts().subscribe({next:(products)=>{
    this.products = products;
  }})
}
}
