import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HoverPhoneDirective } from "./directives/hover-phone.directive";
import { FilterChecksPipe } from "./pipes/filter-checks.pipe";
import { FilterPhonesPipe } from "./pipes/filter-phones.pipe";

@NgModule({
  declarations: [
    HoverPhoneDirective,
    FilterPhonesPipe,
    FilterChecksPipe,
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
  ],
  providers: []

})

export class SharedModule { }
