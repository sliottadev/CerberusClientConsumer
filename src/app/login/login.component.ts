import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { CerberusApiService } from '../services/cerberus-api.service'

@Component({
  //selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dataForm = this.formBuilder.group({
    name : '',
    pass : ''
  })

  constructor(private cerberusApiService: CerberusApiService, private formBuilder: FormBuilder )
  { }

  onSubmit() : void {
    console.log('Your Data submitted '+ this.dataForm.get("name").value +", "+ this.dataForm.get("pass").value )
    this.cerberusApiService.loginClient(this.dataForm.get("name").value, this.dataForm.get("pass").value);
    this.dataForm.reset();
  }

}
