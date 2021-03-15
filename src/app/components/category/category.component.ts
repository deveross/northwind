import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categories: Category[];
  currectCategory: Category;
  dataLoaded = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getcategory().subscribe(response => {
      if (response.success) {
        this.categories = response.data;
        this.dataLoaded = true;
      }
    })
  }

  setCurrectCategory(category:Category) {
    this.currectCategory = category;
  }

  getCurrectCategoryClass(category: Category) {
    if (category == this.currectCategory) {
      return "list-group-item active"
    }
    else {
      return "list-group-item list-group-item-action"
    }
  }

  getAllCategoryClass() {
    return "list-group-item list-group-item-action";
  }

  getAllCategory() {
  this.currectCategory = { categoryId: 0, categoryName: "Tüm ürünler"};
  }
}
