import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../Auth/auth.service';
import { SessionService } from '../../session/session.service';
import { OrderComponent } from '../order/order.component';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dataForm = this.formBuilder.group({
    name : '',
    pass : ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  )
  {
  }

  onSubmit() : void {

    this.authService.login(this.dataForm.get("name").value, this.dataForm.get("pass").value);

    if (this.sessionService.getUserSessionStoraged() == this.dataForm.get("name").value){
      console.log("Login Exitoso");
      this.router.navigate(["/order"], { queryParams: {"user": this.dataForm.get("name").value } });
    } else {
      console.log("Login error");
    }

    this.dataForm.reset();
  }

}
