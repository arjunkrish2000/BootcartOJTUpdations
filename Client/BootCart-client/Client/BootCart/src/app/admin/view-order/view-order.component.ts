import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent {
  orders:any
	constructor(private viewService:AdminService) { }

	ngOnInit() {
    this.viewService.GetCustomers()
      .subscribe(response => {
        this.orders = response;
        console.log(response);
      });
}
}
