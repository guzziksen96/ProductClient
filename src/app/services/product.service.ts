import { Injectable, InjectionToken, Optional, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProductDto } from "../models/product.model";
import { environment } from "src/environments/environment";

export const API_BASE_URL = new InjectionToken<string>("API_BASE_URL");

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });
  }

  public get() {
    return this.http.get<ProductDto[]>(this.accessPointUrl, {
      headers: this.headers
    });
  }

  public getById(id: number) {
    return this.http.get<ProductDto>(this.accessPointUrl + "/" + id, {
      headers: this.headers
    });
  }

  public add(product) {
    return this.http.post(this.accessPointUrl, product, {
      headers: this.headers
    });
  }

  public delete(product) {
    return this.http.delete<number>(this.accessPointUrl + "/" + product.id, {
      headers: this.headers
    });
  }

  public update(product) {
    return this.http.put(this.accessPointUrl + "/" + product.id, product, {
      headers: this.headers
    });
  }
}
