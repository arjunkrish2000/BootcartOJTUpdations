import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductmasterRoutingModule } from './productmaster-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductmasterLayoutComponent } from './productmaster-layout.component';
import { ProductmasterNavbarComponent } from './productmaster-navbar/productmaster-navbar.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service/public-api';
import { AddProductSpecificationComponent } from './add-product-specification/add-product-specification.component';
import { PublicModule } from '../public/public.module';
import { UploadComponent } from '../upload/upload.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductmasterLayoutComponent,
    ProductmasterNavbarComponent,
    AddProductComponent,
    AddProductSpecificationComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProductmasterRoutingModule,
    RouterModule,
    FormsModule,
    PublicModule
  ]
})
export class ProductmasterModule { }
