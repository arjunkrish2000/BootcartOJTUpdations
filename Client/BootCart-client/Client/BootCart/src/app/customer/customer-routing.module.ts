import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewBagComponent } from './view-bag/view-bag.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path: '', component: CustomerLayoutComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'wishlist', component: WishlistComponent},
    {path: 'order-history', component: OrderHistoryComponent},
    {path: 'view-bag', component: ViewBagComponent},
    {path: 'view-products', component: ViewProductsComponent},
    {path: 'invoice', component: InvoiceComponent},
    {path: 'profile', component: ProfileComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
