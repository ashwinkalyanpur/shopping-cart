import { Component, OnInit } from '@angular/core';
import { ShoppingRecipe } from './shopping-recipe';
import { CartDataService } from './cartdata.services';

// import list from './_item/list.json';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public counter : number = 1;
  ItemData: ShoppingRecipe[] = [];
  // title = 'json-file-read-angular';

  // public itemList:{
  //   name: string,
  //   price: string,
  //   discount: string,
  //   category: string,
  //   img_url: string
  // }[] = list;

  constructor(private _cartDataService: CartDataService) { }

  ngOnInit() {
    this.ItemData = [
      {"id":9090,"Name":"Item1","Price":200,"Discount":10,"Category":"fiction","img_url":"http://lorempixel.com/500/600/technics/"},
      {"id":9091,"Name":"Item2","Price":250,"Discount":15,"Category":"literature","img_url":"http://lorempixel.com/500/600/technics/"},
      {"id":9092,"Name":"Item3","Price":320,"Discount":5,"Category":"literature","img_url":"http://lorempixel.com/500/600/technics/"},
      {"id":9093,"Name":"Item4","Price":290,"Discount":0,"Category":"thriller","img_url":"http://lorempixel.com/500/600/technics/"},
      {"id":9094,"Name":"Item1","Price":500,"Discount":25,"Category":"thriller","img_url":"http://lorempixel.com/500/600/technics/"},
      {"id":9095,"Name":"Item2","Price":150,"Discount":5,"Category":"literature","img_url":"http://lorempixel.com/500/600/technics/"},
      {"id":9096,"Name":"Item3","Price":700,"Discount":22,"Category":"literature","img_url":"http://lorempixel.com/500/600/technics/"},
      {"id":9097,"Name":"Item4","Price":350,"Discount":18,"Category":"fiction","img_url":"http://lorempixel.com/500/600/technics/"}
    ]
    this.ItemData = this.ItemData.sort((low, high) => low.Price - high.Price);

  }
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.ItemData = this.ItemData.sort((low, high) => low.Price - high.Price);
          break;
        }

      case "High":
        {
          this.ItemData = this.ItemData.sort((low, high) => high.Price - low.Price);
          break;
        }

      case "Discount":
        {
          this.ItemData = this.ItemData.sort(function (low, high) {
            if (low.Discount < high.Discount) {
              return -1;
            }
            else if (low.Discount > high.Discount) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.ItemData = this.ItemData.sort((low, high) => low.Price - high.Price);
        break;
      }

    }
    return this.ItemData;
  }

  sendRecord(product) {  
    this._cartDataService.editCount(this.counter);
    this._cartDataService.addToCart(product);
  }
}
