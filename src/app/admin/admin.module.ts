import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CreateProductComponent } from "./create-product/create-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AdminLayoutComponent } from "./shared/component/admin-layout/admin-layout.component";

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'create', component: CreateProductComponent },
      { path: 'products-list', component: ProductListComponent },
      { path: 'product/:id/edit', component: EditProductComponent }
    ]
  }
]

@NgModule({

  declarations: [
    AdminLayoutComponent,
    CreateProductComponent,
    ProductListComponent,
    EditProductComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class AdminModule { }
