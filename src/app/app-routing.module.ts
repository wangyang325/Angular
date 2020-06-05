import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanDeactivate, RouterModule, Routes} from '@angular/router';
import {DetailsPageComponent} from './details-page/details-page.component';
import {AppComponent} from './app.component';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';
import {Product1Component} from './product1/product1.component';
import {Product2Component} from './product2/product2.component';
import {LoginGuard} from './guard/LoginGuard';
import {UnSaveGuard} from './guard/UnSaveGuard';
import {ProductGuard} from './guard/ProductGuard';


const routes: Routes = [
  // Sub router
  {path: 'view1', component: View1Component,
    children: [{path: 'details', component: DetailsPageComponent}]
  },
  // outlet router
  {path: 'product1', component: Product1Component, outlet: 'product', canDeactivate: [UnSaveGuard]},
  // Guard
  {path: 'product2', component: Product2Component, outlet: 'product', canActivate: [LoginGuard], resolve: {product: ProductGuard}},
  {path: 'view2/:id', component: View2Component},
  {path: 'index', component: AppComponent},
  // // Redirect
  // {path: '**', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [LoginGuard, UnSaveGuard, ProductGuard]
})
export class AppRoutingModule { }
