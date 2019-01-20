import { Component, OnInit } from "@angular/core";
import { ProductDto } from "src/app/models/product.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { first } from "rxjs/operators";
import { CategoryDto } from "src/app/models/category.model";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"]
})
export class EditProductComponent implements OnInit {
  productId: number;
  product: ProductDto;
  editProductForm: FormGroup;
  categories: CategoryDto[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productId = +params["productId"] || 0;
    });

    this.editProductForm = this.formBuilder.group({
      id: [],
      name: ["", Validators.required],
      cost: ["", Validators.required],
      categoryId: ["", Validators.required]
    });

    this.productService.getById(this.productId).subscribe(data => {
      this.product = data;
      this.editProductForm.setValue(data);
    });

    this.categoryService.get().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    this.productService.update(this.editProductForm.value).subscribe(data => {
      this.router.navigate(["product-list"]);
    });
  }
}
