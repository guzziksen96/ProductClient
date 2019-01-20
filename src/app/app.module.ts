import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { AddProductComponent } from "./products/add-product/add-product.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { ProductService } from "./services/product.service";
import { routing } from "./app.routing";
import { CategoryService } from "./services/category.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [BrowserModule, routing, HttpClientModule, ReactiveFormsModule],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
