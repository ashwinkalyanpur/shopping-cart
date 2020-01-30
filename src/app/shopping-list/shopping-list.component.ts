import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductsDataService } from '../services/productdata.services';
import { ShoppingCartService } from '../services/shopping-cart-services';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public names: Observable<Product[]>;
  public products: Observable<Product[]>;

  public constructor(private productsService: ProductsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  // public removeProductFromCart(product: Product): void {
  //   this.shoppingCartService.addItem(product, -1);
  // }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.productId === product.id));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
    
  }

  public ngOnInit(): void {
    this.products = this.productsService.all();
   
  }
}
