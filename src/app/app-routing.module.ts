import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'card', component: CardComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
