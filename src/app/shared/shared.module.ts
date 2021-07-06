import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HoverPhoneDirective } from "./directives/hover-phone.directive";

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ]
  ,
  providers: []

})

export class SharedModule { }
