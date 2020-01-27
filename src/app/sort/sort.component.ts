import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart-services';
import { Product } from "../models/product.model";
import { Observable } from 'rxjs';



@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  // isAscendic = true
  // public products: Product;

  constructor() { }

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
}
