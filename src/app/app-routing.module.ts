import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart-item/cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";


const routes: Routes = [];

@NgModule({
  exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                canActivate: [PopulatedCartRouteGuard],
                component: CartComponent,
                path: "cart-item"
            },
            {
                component: ShoppingListComponent,
                path: "**"
            }])
    ]
})
export class AppRoutingModule { }
