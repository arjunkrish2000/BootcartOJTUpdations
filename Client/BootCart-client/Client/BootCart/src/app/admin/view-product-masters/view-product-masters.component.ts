import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-product-masters',
  templateUrl: './view-product-masters.component.html',
  styleUrls: ['./view-product-masters.component.css']
})
export class ViewProductMastersComponent {
  productMaster:any
	constructor(private viewService:AdminService) { }

	ngOnInit() {
    this.viewService.GetProductMasters()
      .subscribe(response => {
        this.productMaster = response;
        console.log(this.productMaster);
      });
}
}
