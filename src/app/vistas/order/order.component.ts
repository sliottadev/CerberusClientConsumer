import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  renderReady = false;

  constructor(
    private cerberusApiService: CerberusApiService,
    ) {
  }

  ngOnInit(): void {
    this.getCategories().subscribe(
      succ => {
        console.log(succ);
        this.categories = succ;
        this.getProducts().subscribe(
          succe => {
            console.log(succe);
            this.products = succe;
            this.renderReady = true;
          },
          erro => console.log(erro)
        )
      },
      err => console.log("Error Categories")
    );
  }

  private getProducts () : Observable<any>{
    return this.cerberusApiService.getProduct();
  }

  private getCategories() : Observable<any>{
    return this.cerberusApiService.getCategories();
  }

  private getProductById(id : number){
    this.cerberusApiService.getProductById(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
