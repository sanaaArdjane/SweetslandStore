import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { product } from '../../../core/models/product';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf,RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product
  constructor( private route: ActivatedRoute, private productService: ProductService
  ) {}
ngOnInit(){
  const id = +this.route.snapshot.paramMap.get('id')!;
  // console.log('Product Id:', id);
  this.product = this.productService.getProducts().pipe(
    map(products => products.find(product => product.id === id))
  ).subscribe({
    next: (product) => this.product = product,
    error: (err) => console.error('error fetching product detail:', err)
  });
}


}
//
