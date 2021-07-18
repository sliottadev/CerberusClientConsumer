import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UriHelperService } from '../helper/uri-helper.service'
import { FormGroup } from '@angular/forms';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})

export class CerberusApiService {

  constructor(
    private httpClient : HttpClient,
    private sessionService : SessionService
  ) {
  }

  public async getProduct(){

    var header = {
      headers: new HttpHeaders()
      .set('Authorization',  this.sessionService.getTokenSessionStoraged())
    };

    console.log(this.sessionService.getTokenSessionStoraged());
    console.log(this.sessionService.getUserSessionStoraged());
    console.log(header)
    return this.httpClient.get(UriHelperService.getUriProducts(), header)
  }

  public async getCategories(){

    var header = {
      headers: new HttpHeaders()
      .set('Authorization',  this.sessionService.getTokenSessionStoraged())
    };

    console.log(this.sessionService.getTokenSessionStoraged());
    console.log(this.sessionService.getUserSessionStoraged());
    console.log(header)
    return this.httpClient.get(UriHelperService.getUriCategories(), header)
  }

  public getProductById(id : number){
    return this.httpClient.get(UriHelperService.getUriProductById(id));
  }

  public async loginClient(nameOrMail : string, pass : string) {
    const body = {nameOrMail : nameOrMail, pass : pass };
    this.httpClient.post(UriHelperService.postClientLogin(), body, {responseType: "text"})
    .subscribe(
        succ => {
          console.log("Session Registrada");
          this.sessionService.LoginSessionRegister(succ, nameOrMail);
        },
        err => {
          console.log("Usuario No Existe");
        }
    );
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
