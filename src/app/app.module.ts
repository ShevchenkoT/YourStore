import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsComponent } from './products/products.component';
import { HoverPhoneDirective } from './directives/hover-phone.directive';
import { FormsModule } from '@angular/forms';
import { FilterChecksPipe } from './pipes/filter-checks.pipe';
import { FilterPhonesPipe } from './pipes/filter-phones.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsComponent,
    HoverPhoneDirective,
    FilterChecksPipe,
    FilterPhonesPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
