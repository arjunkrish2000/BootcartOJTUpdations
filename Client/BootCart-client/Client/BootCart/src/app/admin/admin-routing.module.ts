import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { HomeComponent } from './home/home.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewProductMastersComponent } from './view-product-masters/view-product-masters.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'view-customers', component: ViewCustomersComponent},
    {path: 'view-product-masters', component: ViewProductMastersComponent},
    {path: 'view-products', component: ViewProductsComponent},
    {path: 'view-order', component: ViewOrderComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
