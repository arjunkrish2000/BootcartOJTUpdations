import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { ProductmasterModule } from './productmaster/productmaster.module';
import { CookieService } from 'ngx-cookie-service';
import { ErrorInterceptor } from './helpers/interceptors/errorInterceptor';
import { JwtInterceptor } from './helpers/interceptors/jwtInterceptor';
import { AuthGuard } from './helpers/authGuard';
import { UploadComponent } from './upload/upload.component';



@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    CustomerModule,
    AdminModule,
    ProductmasterModule,
    RouterModule.forRoot([
      {
        path: '', loadChildren: () => import('./public/public-routing.module').then(m => m.PublicRoutingModule)
      },
      {
        path: 'auth', loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
      },
      {
        path: 'productmaster', loadChildren: () => import('./productmaster/productmaster-routing.module').then(m => m.ProductmasterRoutingModule), canActivate: [AuthGuard]
      },
      {
        path: 'customer', loadChildren: () => import('./customer/customer-routing.module').then(m => m.CustomerRoutingModule), canActivate: [AuthGuard]
      },
      {
        path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule), canActivate: [AuthGuard]
      },
    ]),
  ],
  providers: [CookieService, [
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true 
    },
    { 
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    }
  ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
