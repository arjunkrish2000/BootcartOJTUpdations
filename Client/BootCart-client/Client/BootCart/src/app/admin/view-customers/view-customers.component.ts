import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent {
  users:any
	constructor(private viewService:AdminService) { }

	ngOnInit() {
    this.viewService.GetCustomers()
      .subscribe(response => {
        this.users = response;
        console.log(response);
      });
}
}
