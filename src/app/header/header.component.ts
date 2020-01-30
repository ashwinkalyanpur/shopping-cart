import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Product } from "../models/product.model";
import { TotalCartItem } from "../models/totalCartItem";
import { ProductsDataService } from "../services/productdata.services";
import { ShoppingCartService } from "../services/shopping-cart-services";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public products: Observable<Product[]>;
  public cart: Observable<TotalCartItem>;
  public itemCount: number;

  private cartSubscription: Subscription;

  public constructor(private productsService: ProductsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
    this.products = this.productsService.all();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
