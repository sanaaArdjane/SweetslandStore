import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss'
})
export class ManageProductsComponent {
  //Creating a reactive formu;ar without initializing it
productForm!:FormGroup
//inject aform builder and product service
constructor(private fb:FormBuilder,private productService: ProductService){
  this.productForm=this.fb.group({
    id:new FormControl(["",Validators.required]),
    name:new FormControl(["",Validators.required]),
    category:new FormControl(["",Validators.required]),
    description:new FormControl(["",Validators.required]),
  })

}

onSubmit() {
  if (this.productForm.valid) {
    const product=this.productForm.value
    console.log(this.productForm.value);
    this.productService.addProduct(product);
    console.log('New product added:', product);
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
  this.productForm.reset();

}


}
