import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LoginPageComponent } from "./login-page/login-page.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AdminLayoutComponent } from "./shared/component/admin-layout/admin-layout.component";
import { AuthService } from "./shared/services/auth.service";
import { OrdersComponent } from "./orders/orders.component";
import { AuthGuard } from "./shared/services/auth.guard";

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'create', component: CreateProductComponent, canActivate: [AuthGuard] },
      { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
      { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard] },
      { path: 'product/:id/edit', component: EditProductComponent, canActivate: [AuthGuard] }
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

  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})

export class AdminModule { }
