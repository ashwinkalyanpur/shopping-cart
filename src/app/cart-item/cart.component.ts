import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from "../models/product.model";
import { TotalCartItem } from "../models/totalCartItem";
import { ItemModel } from '../models/item.model';

import { ProductsDataService } from "../services/productdata.services";
import { ShoppingCartService } from "../services/shopping-cart-services";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { ShoppingRecipe } from '../services/shopping-recipe';

interface ICartItemWithProduct extends ItemModel {
  product: Product;
  totalCost: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-cart",
  templateUrl: "./cart.component.html"
})
export class CartComponent implements OnInit, OnDestroy {
  public cart: Observable<TotalCartItem>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;

  private products: Product[];
  private cartSubscription: Subscription;

  public constructor(private productsService: ProductsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }


  public ngOnInit(): void {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.products = products;
        this.cartItems = cart.items
                           .map((item) => {
                              const product = this.products.find((p) => p.id === item.productId);
                              return {
                                ...item,
                                product,
                                totalCost: product.Price * item.quantity };
                           });
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
