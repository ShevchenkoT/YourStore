import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HoverPhoneDirective } from "./directives/hover-phone.directive";
import { FilterChecksPipe } from "./pipes/filter-checks.pipe";
import { FilterPhonesPipe } from "./pipes/filter-phones.pipe";
import { PriceFilterPipe } from "./pipes/price-filter.pipe";
import { SearchProductPipe } from "./pipes/search-product.pipe";
import { SortByDatePipe } from "./pipes/sort-by-date.pipe";

@NgModule({
  declarations: [
    HoverPhoneDirective,
    FilterPhonesPipe,
    FilterChecksPipe,
    SortByDatePipe,
    SearchProductPipe,
    PriceFilterPipe,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HoverPhoneDirective,
    FilterPhonesPipe,
    FilterChecksPipe,
    SortByDatePipe,
    SearchProductPipe,
    PriceFilterPipe,
  ],
  providers: []

})

export class SharedModule { }
