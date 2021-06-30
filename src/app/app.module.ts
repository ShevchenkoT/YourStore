import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HoverPhoneDirective } from './shared/directives/hover-phone.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterChecksPipe } from './shared/pipes/filter-checks.pipe';
import { FilterPhonesPipe } from './shared/pipes/filter-phones.pipe';

import { WishListComponent } from './wish-list/wish-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule, } from './shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginPageComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    WishListComponent,
    ErrorPageComponent,

    FilterPhonesPipe,
    FilterChecksPipe,
    HoverPhoneDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
