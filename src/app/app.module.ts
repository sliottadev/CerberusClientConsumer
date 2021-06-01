import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : 'login', component : LoginComponent},
      { path : 'register', component : RegisterComponent},
      { path : 'order', component : OrderComponent},
      { path : '', redirectTo : 'login', pathMatch : 'full'},
      { path : '**', component : LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [LoginComponent, RegisterComponent, AppComponent]
})
export class AppModule { }
