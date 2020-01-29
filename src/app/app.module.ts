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
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { ComponentLoaderService } from './component-loader.service';
import { DatacontainerDirective } from './modal-dialog/datacontainer.directive';
import { ModalDirective } from './modal.directive';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    SortComponent,
    FilterComponent,
    ShoppingListComponent,
    HeaderComponent,
    DatacontainerDirective,
    ModalDirective,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    Ng5SliderModule,
    HttpModule,
    OrderModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'', component: ShoppingListComponent },
      { path: 'cart-item', component: CartComponent }
    ])
  ],
  providers: [
    CartDataService,
    ProductsDataService,
    LocalStorageServie,
    PopulatedCartRouteGuard,
    ComponentLoaderService,
    { provide: StorageDataService, useClass: LocalStorageServie },
    {
      deps: [StorageDataService, ProductsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ],
  entryComponents: [
    SortComponent,
    FilterComponent,
    ModalDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
