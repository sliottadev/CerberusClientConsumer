import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UriHelperService {

  //#region URIs
  private static readonly uri_base = "http://localhost:8888/";
  //private static readonly uri_base = "/";

  private static readonly uri_postClientLogin = "auth"
  private static readonly uri_postClientRegister = "auth/register"

  private static readonly uri_getProducts = "products";
  private static readonly uri_getCategories = "products/categories";
  private static readonly uri_getProductById = "products/";

  private static readonly uri_getClientIdByNameOrMail = "client/getClientIdByNameOrMail"
  //#endregion

  public static getUriProducts() : string {
    return this.uri_base+this.uri_getProducts;
  }

  public static getUriCategories(): string {
    return this.uri_base + this.uri_getCategories;
  }

  public static getUriProductById(id : number): string{
    return this.uri_base + this.uri_getProductById + id;
  }

  public static postClientLogin(): string {
    return this.uri_base + this.uri_postClientLogin;
  }

  static postClientRegister(): string {
    return this.uri_base + this.uri_postClientRegister;
  }

  static getUriGetClientIdByValue(): string{
    return this.uri_base + this.uri_getClientIdByNameOrMail;
  }

}
