import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HoverPhoneDirective } from './shared/directives/hover-phone.directive';

import { WishListComponent } from './wish-list/wish-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule, } from './shared/shared.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { FilterChecksPipe } from './shared/pipes/filter-checks.pipe';
import { FilterPhonesPipe } from './shared/pipes/filter-phones.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    WishListComponent,
    ErrorPageComponent,
    FilterPhonesPipe,
    FilterChecksPipe,
    //HoverPhoneDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
