import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product.service';
import { Subject } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [NgIf,FormsModule,ReactiveFormsModule],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss'
})
export class ManageProductsComponent {
  //Creating a reactive formu;ar without initializing it
productForm!:FormGroup
//inject a form builder and product service
constructor(private fb:FormBuilder,private productService: ProductService){
  this.productForm=this.fb.group({
    id:new FormControl(["",Validators.required]),
    name:new FormControl(["",Validators.required]),
    category:new FormControl(["",Validators.required]),
    description:new FormControl(["",Validators.required]),
  })

}
//add new product on formSubmit
onSubmit() {
  if (this.productForm.valid) {
    const products=this.productForm.value
    this.productService.addProduct(products);
    console.log('New product added:', products);
    this.productForm.reset();
  }
}
//function to update an existing product
updateProduct(product: product): void {
  this.productForm.patchValue({
    id: product.id,
    name: product.name,
    category: product.category,
    description: product.description,
  });

}

}
