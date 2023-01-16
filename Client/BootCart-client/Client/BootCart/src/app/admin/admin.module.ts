import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { ViewProductMastersComponent } from './view-product-masters/view-product-masters.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewOrderComponent } from './view-order/view-order.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AdminLayoutComponent,
    ViewCustomersComponent,
    ViewProductMastersComponent,
    ViewProductsComponent,
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
