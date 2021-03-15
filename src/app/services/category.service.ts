import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://localhost:44392/api/categories/getall'

  getcategory():Observable<ListResponseModel<Category>> {
    return this.http.get<ListResponseModel<Category>>(this.apiUrl);
  }

}
