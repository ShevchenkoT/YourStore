import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

const routes2: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'wish-list', component: WishListComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'error', component: ErrorPageComponent },
      //{ path: '**', redirectTo: '/error' },
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes2)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
