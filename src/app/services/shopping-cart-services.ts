import { Injectable } from "@angular/core";
import { StorageDataService } from './storedata.services';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { ItemModel } from '../models/item.model';
import { Product } from "../models/product.model";
import { TotalCartItem } from '../models/totalCartItem';
import { ProductsDataService } from './productdata.services';


const CART_KEY = "cart";

@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<TotalCartItem>;
  private subscribers: Array<Observer<TotalCartItem>> = new Array<Observer<TotalCartItem>>();
  private products: Product[];

  public constructor(private StorageDataService: StorageDataService,
                         private productService: ProductsDataService) {
    this.storage = this.StorageDataService.get();
    this.productService.all().subscribe((products) => this.products = products);

    this.subscriptionObservable = new Observable<TotalCartItem>((observer: Observer<TotalCartItem>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  public get(): Observable<TotalCartItem> {
    return this.subscriptionObservable;
  }

  public addItem(product: Product, quantity: number): void {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === product.id);
    if (item === undefined) {
      item = new ItemModel();
      item.productId = product.id;
      cart.items.push(item);
    }

    item.quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);
    

    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new TotalCartItem();
    this.save(newCart);
    this.dispatch(newCart);
  }

  private calculateCart(cart: TotalCartItem): void {
    cart.itemsTotal = cart.items
                          .map((item) => item.quantity * this.products.find((p) => p.id === item.productId).Price)
                          .reduce((previous, current) => previous + current, 0);
    cart.grossTotal = cart.itemsTotal
  }

  private retrieve(): TotalCartItem {
    const cart = new TotalCartItem();
    const storedCart = this.storage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  private save(cart: TotalCartItem): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: TotalCartItem): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
            // we want all subscribers to get the update even if one errors.
          }
        });
  }
}