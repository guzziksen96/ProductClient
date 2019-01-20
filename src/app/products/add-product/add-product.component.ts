import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "src/app/services/product.service";
import { CategoryDto } from "src/app/models/category.model";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  categories: CategoryDto[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  addProductForm: FormGroup;

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      name: ["", Validators.required],
      cost: [100, Validators.required],
      categoryId: [1, Validators.required]
    });
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    this.productService.add(this.addProductForm.value).subscribe(data => {
      this.router.navigate(["product-list"]);
    });
  }
}
