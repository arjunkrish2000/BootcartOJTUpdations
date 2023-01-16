import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-productmaster-navbar',
  templateUrl: './productmaster-navbar.component.html',
  styleUrls: ['./productmaster-navbar.component.css']
})
export class ProductmasterNavbarComponent {
  constructor(private router:Router) {
    
  }
	checkLogout(){

          localStorage.removeItem('token');
					this.router.navigate(["/"]);
					}

}
