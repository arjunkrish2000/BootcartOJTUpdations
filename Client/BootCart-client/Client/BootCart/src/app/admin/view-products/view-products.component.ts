import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
 

   product:any
    constructor(private viewService:AdminService) { }
  
    ngOnInit() {
      this.viewService.GetProducts()
        .subscribe(response => {
          this.product = response;
          console.log(response);
        });
  }
  
  
}
