import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PublicLayoutComponent } from './public-layout.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerModule } from '../customer/customer.module';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    PublicLayoutComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class PublicModule { }
