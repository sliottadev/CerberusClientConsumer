import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { CerberusApiService } from '../../cerberusApiServices/cerberus-api.service'

@Component({
  //selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  dataForm = this.formBuilder.group({
    userName : ['', Validators.required],
    mail : ['', Validators.required, Validators.email],
    pass : ['', Validators.required, Validators.minLength(8)],
    repass : ['', Validators.required, Validators.minLength(8)]
  })

  constructor( private cerberusApiService: CerberusApiService, private formBuilder: FormBuilder)
  { }

  onSubmit() : void {
    console.warn('Your Data submitted ',this.dataForm);
    this.cerberusApiService.clientRegister(this.dataForm);
    this.dataForm.reset();
  }

}
