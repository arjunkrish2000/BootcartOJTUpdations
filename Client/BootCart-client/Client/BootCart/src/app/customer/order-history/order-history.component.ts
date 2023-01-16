import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  orders:any
	constructor(private customerService:CustomerService) { }

	ngOnInit() {
    this.customerService.ViewOrderHistory()
      .subscribe(response => {
        this.orders = response;
        console.log(response);
      });
}
}
