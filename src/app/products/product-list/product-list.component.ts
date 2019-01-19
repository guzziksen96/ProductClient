import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { ProductDto } from "src/app/models/product.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: ProductDto[];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.productService.get().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(product: ProductDto): void {
    this.productService.delete(product).subscribe(data => {
      this.products = this.products.filter(u => u !== product);
    });
  }

  editProduct(product: ProductDto): void {
    this.router.navigate(["edit-product"], {
      queryParams: { productId: product.id }
    });
  }

  addProduct(): void {
    this.router.navigate(["add-product"]);
  }
}
