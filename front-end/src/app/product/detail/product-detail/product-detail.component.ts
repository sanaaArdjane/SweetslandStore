import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { product } from '../../../core/models/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product:product
  constructor( private route: ActivatedRoute, private productService: ProductService
  ) {}
ngOnInit(){
  const id = parseInt(this.route.snapshot.paramMap.get('id')!);
  this.product = this.productService.filterProduct('').find(product => product.id === id);
}

}
