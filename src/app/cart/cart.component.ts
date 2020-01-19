import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingRecipe } from '../shopping-list/shopping-recipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<ShoppingRecipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(items: ShoppingRecipe){
    this.recipeWasSelected.emit(items);
  }
}
