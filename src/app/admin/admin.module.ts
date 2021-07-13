import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LoginPageComponent } from "./login-page/login-page.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AdminLayoutComponent } from "./shared/component/admin-layout/admin-layout.component";
import { OrdersComponent } from "./orders/orders.component";
import { AuthGuard } from "./shared/services/auth.guard";
import { ScrollingModule } from '@angular/cdk/scrolling'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InvoiceComponent } from "./print-order/invoice/invoice.component";

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'create', component: CreateProductComponent, canActivate: [AuthGuard] },
      { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard] },
      { path: 'product/:id/edit', component: EditProductComponent, canActivate: [AuthGuard] },
      {
        path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], children: [

        ]
      },
      { path: 'invoice/:id', component: InvoiceComponent }
    ]
  }
]

@NgModule({

  declarations: [
    AdminLayoutComponent,
    CreateProductComponent,
    ProductListComponent,
    EditProductComponent,
    LoginPageComponent,
    OrdersComponent,
    InvoiceComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    MatProgressBarModule
  ],
  providers: [

    AuthGuard
  ]
})

export class AdminModule { }
