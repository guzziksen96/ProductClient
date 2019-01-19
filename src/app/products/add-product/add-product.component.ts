import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {}

  addProductForm: FormGroup;

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      id: [],
      name: ["", Validators.required],
      cost: ["", Validators.required],
      categoryName: ["", Validators.required]
    });
  }

  onSubmit() {
    this.productService.add(this.addProductForm.value).subscribe(data => {
      this.router.navigate(["product-list"]);
    });
  }
}
