import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart-services';
import { Product } from "../models/product.model";
import { Observable } from 'rxjs';
import { OrderPipe } from 'ngx-order-pipe';



@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  order: string = 'info.Price';
  reverse: boolean = false;
  // isAscendic = true
  // public products: Product;
  sortedCollection: any[];
  collection: any[] = [];

  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.collection, 'info.Price');
    console.log(this.sortedCollection);
  }

  ngOnInit() {
  }
  // send(){
  //   this.isAscendic?this.ascendic():this.descendic()
  // }

//  ascendic(){
//    this.isAscendic = false;
//     this.products = this.products.sort((n1,n2) => {
//    if (n1 < n2) {
//        return 1;
//    }
//    if (n1 > n2) {
//        return -1;
//    }
//    return 0;
// });
//  }

//  descendic(){
//    this.isAscendic = true
//  this.products = this.products.sort((n1,n2) => {
//    if (n1 > n2) {
//        return 1;
//    }
//    if (n1 < n2) {
//        return -1;
//    }
//    return 0;
// });
//  }
  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
