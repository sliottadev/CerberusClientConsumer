import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  //#region Constants Key Session
  private readonly KEY_TOKEN = "CerbToken";
  private readonly KEY_USERLOGIN = "CerbUser";

  public getKeyToken(){
    return this.KEY_TOKEN;
  }

  public getKeyUserLogin(){
    return this.KEY_USERLOGIN;
  }
  //#endregion

  public LoginSessionRegister(token: string, userLogin: string) {
    localStorage.clear();
    if (token.length > 0 && userLogin.length > 0) {
      localStorage.setItem(this.getKeyToken(), token);
      localStorage.setItem(this.getKeyUserLogin(), userLogin);
    }
  }

  public LoginSessionRemove(){
    localStorage.clear();
  }

  public getTokenSessionStoraged (){
    return localStorage.getItem(this.getKeyToken());
  }

  public getUserSessionStoraged(){
    return localStorage.getItem(this.getKeyUserLogin());
  }
}
