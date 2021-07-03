import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
})

export class SharedModule { }
