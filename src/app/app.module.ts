import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng5SliderModule } from 'ng5-slider';
import { CartDataService } from './shopping-list/cartdata.services';

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
    Ng5SliderModule
  ],
  providers: [CartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
