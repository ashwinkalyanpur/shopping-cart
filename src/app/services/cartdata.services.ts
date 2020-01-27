import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingRecipe } from './shopping-recipe';
import { from } from 'rxjs';

@Injectable()
export class CartDataService {
  items: ShoppingRecipe[] = [];

  private Count = new BehaviorSubject<number>(0);
  cast = this.Count.asObservable();
  currentCount: number = 0;

  constructor() { }

  editCount(newCount: number){
    this.currentCount += newCount; 
    this.Count.next(this.currentCount);
  }
  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
}