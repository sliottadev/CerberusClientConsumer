import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CerberusApiService } from '../cerberusApiServices/cerberus-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private cerberusApiService: CerberusApiService) { }

  public async login(nameOrMail: string, pass: string) {
    return this.cerberusApiService.loginClient(nameOrMail, pass);
  }

}
