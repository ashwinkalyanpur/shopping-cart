import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingRecipe } from '../shopping-list/shopping-recipe';
import { CartDataService } from '../shopping-list/cartdata.services';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public counter : number = 0; 
  items;
  @Output() recipeWasSelected = new EventEmitter<ShoppingRecipe>();
  constructor(private cartDataService: CartDataService) { }

  ngOnInit() {
    this.items = this.cartDataService.getItems();
  }

  increment(){this.counter += 1;}
  decrement(){if(this.counter >1){this.counter -= 1;}}

  onRecipeSelected(items: ShoppingRecipe){
    this.recipeWasSelected.emit(items);
  }
}
