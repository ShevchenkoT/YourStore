import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [

]

@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class AdminModule { }
