import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { WishListComponent } from './wish-list/wish-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule, } from './shared/shared.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchProductPipe } from './shared/pipes/search-product.pipe';
import { PriceFilterPipe } from './shared/pipes/price-filter.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    WishListComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
