import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
constructor(private productService:ProductService){}
displayProductList(){
  return this.productService.getProducts()
}
}
