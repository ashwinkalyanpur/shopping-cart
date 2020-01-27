import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart-item/cart.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng5SliderModule } from 'ng5-slider';
import { CartDataService } from './services/cartdata.services';
import { ShoppingCartService } from './services/shopping-cart-services';
import { ProductsDataService } from './services/productdata.services';
import { LocalStorageServie, StorageDataService } from './services/storedata.services';
import { PopulatedCartRouteGuard } from './route-gaurds/populated-cart.route-gaurd';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    SortComponent,
    FilterComponent,
    ShoppingListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    Ng5SliderModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    CartDataService,
    ProductsDataService,
    LocalStorageServie,
    PopulatedCartRouteGuard,
    { provide: StorageDataService, useClass: LocalStorageServie },
    {
      deps: [StorageDataService, ProductsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
