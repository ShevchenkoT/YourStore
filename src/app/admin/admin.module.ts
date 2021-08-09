import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminLayoutComponent } from './shared/component/admin-layout/admin-layout.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuard } from './shared/services/auth.guard';
import { InvoiceComponent } from './shared/component/invoice/invoice.component';
import { RefModalRemoveDirective } from './shared/component/refModalRemove.directive';
import { RemoveModalComponent } from './shared/component/remove-modal/remove-modal.component';
import { AlertComponent } from './shared/component/alert/alert.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'create', component: CreateProductComponent, canActivate: [AuthGuard] },
      { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard] },
      { path: 'product/:id/edit', component: EditProductComponent, canActivate: [AuthGuard] },
      { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
      { path: 'invoice/:id', component: InvoiceComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'product-list' }
    ]
  }
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreateProductComponent,
    ProductListComponent,
    EditProductComponent,
    LoginPageComponent,
    OrdersComponent,
    InvoiceComponent,
    AlertComponent,
    RefModalRemoveDirective,
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    MatProgressBarModule
  ],
  entryComponents: [
    RemoveModalComponent
  ],
  providers: [
    AuthGuard
  ]
})

export class AdminModule { }
