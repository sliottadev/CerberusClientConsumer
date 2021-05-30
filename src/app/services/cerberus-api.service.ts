import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UriHelperService } from '../helper/uri-helper.service'
import { FormGroup } from '@angular/forms';

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

  public loginClient(usrName : string, pass : string){
    const body = {userName : usrName, mail : usrName, pass : pass };
    return this.httpClient.post(UriHelperService.postClientLogin(), body)
      .subscribe(
        succ => console.log(succ),
        err => console.log(err)
      )
  }

  clientRegister(dataForm: FormGroup) {
    const body = {userName: dataForm.get('userName').value, mail: dataForm.get('mail').value, pass:dataForm.get('pass').value}
    return this.httpClient.post(UriHelperService.postClientRegister(), body)
      .subscribe(
        succ => console.log(succ),
        err => console.log(err)
      )
  }


}
