import { Component, OnInit } from '@angular/core';
import { CerberusApiService } from './services/cerberus-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  products;
  categories;
  product;

  constructor ( private cerberusApiService: CerberusApiService){

  }

  ngOnInit(){ //Al inicio se cargan los productos y las categorias;
    this.getCategories();
    this.getProducts();
  }

  private getProducts (){
    this.cerberusApiService.getProduct()
      .subscribe(
        res => {
          this.products = res
          console.log(this.products)
        },
        err => console.log(err)
    );
  }

  private getCategories(){
    this.cerberusApiService.getCategories()
    .subscribe(
      res => {
        this.categories = res;
        console.log(this.categories);
      },
      err => console.log(err)
    )
  }

  private getProductById(id : number){
    this.cerberusApiService.getProductById(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
