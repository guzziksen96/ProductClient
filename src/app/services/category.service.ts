import { Injectable, InjectionToken, Optional, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CategoryDto } from "../models/category.model";

export const API_BASE_URL = new InjectionToken<string>("API_BASE_URL");

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + "category";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });
  }

  public get() {
    return this.http.get<CategoryDto[]>(this.accessPointUrl, {
      headers: this.headers
    });
  }

  public getById(id: number) {
    return this.http.get<CategoryDto>(this.accessPointUrl + "/" + id, {
      headers: this.headers
    });
  }
}
