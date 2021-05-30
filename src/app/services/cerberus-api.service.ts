import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UriHelperService } from '../helper/uri-helper.service'

@Injectable({
  providedIn: 'root'
})

export class CerberusApiService {

  constructor(private httpClient : HttpClient) {
  }

  public getProduct(){
    return this.httpClient.get(UriHelperService.getUriProducts());
  }

  public getCategories(){
    return this.httpClient.get(UriHelperService.getUriCategories())
  }

  public getProductById(id : number){
    return this.httpClient.get(UriHelperService.getUriProductById(id));
  }
}
