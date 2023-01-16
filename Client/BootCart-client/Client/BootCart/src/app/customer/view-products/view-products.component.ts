import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
  products:any
	constructor(private customerService:CustomerService) { }

  addToCart(pid:any){

    this.customerService.AddToCart(pid).subscribe({
      next:(responce)=>{
        console.log(responce);

      }
  });
  }

	ngOnInit() {
    this.customerService.ViewProducts()
      .subscribe(response => {
        this.products = response;
        console.log(response);
      });

  
}

}
