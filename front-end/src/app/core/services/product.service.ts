import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ProductService {
  private productData:string= "assets/products.json"
  private productList:product[]=[];
  newProduct:product

  constructor(private http:HttpClient) { }
//reading and retrieving the products from json file using httpCLient
private productListSubject = new BehaviorSubject<product[]>([]);
productList$ = this.productListSubject.asObservable();

getProducts(): Observable<product[]> {
  return this.http.get<product[]>(this.productData).pipe(
    map(response => response.map(product => ({
      id: product.id,
      name: product.name,
      category: product.category,
      description: product.description
    }))),

  );
}
  //adding new product
  addProduct(product:product){
    this.productList.push(product)
    this.productListSubject.next(this.productList);
  }
  //removing product by id
  removeProduct(id:number){
    this.productList = this.productList.filter(product => product.id !== id);
    this.productListSubject.next(this.productList);
  }
  //filter a list of products by categories
  filterProduct(category:string):product[]{
    return this.productList.filter(product => product.category == category);
  }

}
