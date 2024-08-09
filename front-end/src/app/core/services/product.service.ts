import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string= "assets/product.json"
productList:product[]=[];
newProduct:product

  constructor(private http:HttpClient) { }
//reading and retrieving the products from json file using httpCLient
getProducts(){
  return this.http.get(this.url).subscribe((response)=>{
      this.productList = (response as any[]).map(product => ({
        id: product.id,
        name: product.name,
        category: product.category,
        description: product.description
      }));

    });
  }


  //adding new product
  addProduct(product:product){
    this.productList.push(product)
  }
  //removing product by id
  removeProduct(id:number){
    this.productList = this.productList.filter(product => product.id !== id);
  }
  //filter a list of products par categories
  filterProduct(category:string){
    this.productList=this.productList.filter(product => product.category == category);
  }
}
