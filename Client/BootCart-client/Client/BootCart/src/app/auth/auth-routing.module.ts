import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginComponent } from './login/login.component';
import { ProductMasterRegistrationComponent } from './product-master-registration/product-master-registration.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children:[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'product-master-registration', component: ProductMasterRegistrationComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
