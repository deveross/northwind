import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
  
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = "https://localhost:44392/api/";

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsbyCategory(categoryId: number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategoryid?id=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}

  