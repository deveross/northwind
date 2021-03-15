import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsbyCategory(params["categoryId"]);
      }
      else {
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  getProductsbyCategory(categoryId:number) {
    this.productService.getProductsbyCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
}