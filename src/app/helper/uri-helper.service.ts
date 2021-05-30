import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UriHelperService {

  private static readonly uri_base = "http://localhost:8888/";
  private static readonly uri_getProducts = "products";
  private static readonly uri_getCategories = "products/categories";
  private static readonly uri_getProductById = "products/";

  public static getUriProducts() : string {
    return this.uri_base+this.uri_getProducts;
  }

  public static getUriCategories(): string {
    return this.uri_base+this.uri_getCategories;
  }

  public static getUriProductById(id : number): string{
    return this.uri_base + this.uri_getProductById + id;
  }
}
