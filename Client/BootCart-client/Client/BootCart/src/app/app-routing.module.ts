import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/authGuard';

const routes: Routes = [
  
    {
      path: '', loadChildren: () => import('./public/public-routing.module').then(m => m.PublicRoutingModule)
    },
    {
      path: 'auth', loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },
    {
      path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule), canActivate: [AuthGuard]
    },
    {
      path: 'customer', loadChildren: () => import('./customer/customer-routing.module').then(m => m.CustomerRoutingModule), canActivate: [AuthGuard]
    },
    {
      path: 'productmaster', loadChildren: () => import('./productmaster/productmaster-routing.module').then(m => m.ProductmasterRoutingModule), canActivate: [AuthGuard]
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
