import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session/session.service';
import { CerberusApiService } from '../../cerberusApiServices/cerberus-api.service';

@Component({
  //selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products;
  categories;
  product;

  constructor(
    private cerberusApiService: CerberusApiService,
    ) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  private async getProducts (){
    (await this.cerberusApiService.getProduct())
      .subscribe(
        res => {
          this.products = res
          console.log(this.products)
        },
        err => console.log(err)
    );
  }

  private async getCategories(){
    (await this.cerberusApiService.getCategories())
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
