import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {

  constructor(private router:Router) {}
	checkLogout(){

          localStorage.removeItem('token');
					this.router.navigate(["/"]);
					}
}
			