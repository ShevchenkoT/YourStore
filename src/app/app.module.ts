import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HoverPhoneDirective } from './directives/hover-phone.directive';
import { FormsModule } from '@angular/forms';
import { FilterChecksPipe } from './pipes/filter-checks.pipe';
import { FilterPhonesPipe } from './pipes/filter-phones.pipe';

import { WishListComponent } from './wish-list/wish-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HoverPhoneDirective,
    FilterChecksPipe,
    FilterPhonesPipe,
    WishListComponent,
    ProductDetailComponent,
    ErrorPageComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
